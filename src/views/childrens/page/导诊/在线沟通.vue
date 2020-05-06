<template>
	<div class="yspd">
		<nut-navbar :rightShow="false" :leftShow="false">在线沟通</nut-navbar>
		<!-- <step :stepIndex="3"></step> -->
		<div class="daojishi">
			<span>
				本次问诊剩余时间:{{djs}}
			</span>
			<span>
				{{isTalk?'医生不在线':'医生已上线'}}
				<button></button>
			</span>
		</div>
		<div class="content">
			<p class="tag">根据国家互联网诊疗相关规定，请仔细阅读
				<router-link to="">
					《互联网诊疗风险告知及知情同意书》
				</router-link>
				，如非复诊，我们仅提供医疗咨询服务，如继续咨询表明您已知悉相关规则与风险并同意相关条款。</p>

			<template v-for="item in msgs">
				<p class="tag" v-if="item.Qtips==1">根据国家互联网诊疗相关规定，请仔细阅读
					<router-link to="">
						《互联网诊疗风险告知及知情同意书》
					</router-link>
					，如非复诊，我们仅提供医疗咨询服务，如继续咨询表明您已知悉相关规则与风险并同意相关条款。
				</p>
				<div v-else :class="item.sendType===1?'other':'me'">
					<div class="head_img">
						<img :src="item.avatar" alt="" width="100%">
					</div>
					<div class="msg" v-if="item.type===1">
						{{item.content}}
					</div>
					<div class="msg" v-else-if="item.type===2">
						<img :src="item.content" alt="" width="100%">
					</div>
				</div>

			</template>
		</div>

		<div class="operat">
			<div class="input_box">
				<input type="text" v-model="input_content" :readonly="isTalk" :placeholder="isTalk?'医生正在接诊其他患者':''">
				<button @click="usersend()" :readonly="isTalk">发送</button>
			</div>
		</div>

	</div>
</template>
<script>
	import step from '@/components/step.vue'
	export default {
		components: {
			step
		},
		data() {
			return {
				is_other: false,
				input_content: '',
				msgs: [
					// {
					// 	"Qtips": 1, // 前端标识作为判断系统消息的标识
					// 	"sendType": 2, //标识区分患者和医生 (1是医生,2是患者)
					// 	"content": "医生已接入,可以开始对话了"
					// },
				],
				input: '',
				selectBtn: [],
				websock: null,
				dsq: null,
				djs: 0,
				isTalk: true
			}
		},
		watch: {
			djs() {
				if (this.djs == 0) {
					clearInterval(this.dsq)
					this.$dialog({
						title: "系统提示",
						content: "您的对话时间已不足,是否续费",
						customClass: 'alert'
					});
				}
			}
		},
		methods: {
			usersend(type) {
				if (this.input_content.length <= 0) {
					this.$toast.text('请输入你想发送的内容')
					return
				}
				this.websock.send(JSON.stringify({
					"groupId": 'D' + this.$store.state.Public.id, //医生id
					"sendId": 'P' + this.$store.state.Patients.id, //发送者ID
					"sendType": 2, //标识区分患者和医生 (1是医生,2是患者)
					"receiveId": 'D' + this.$store.state.Public.id, //接受者ID
					"receiveType": 1, //标识区分患者和医生 (1是医生,2是患者)
					"type": type || 1, //用于定义发送的消息类型
					"content": this.input_content
				}));
				this.input_content = ''
			},
		},
		mounted() {
			const that = this
			// this.websock = new WebSocket("ws://122.112.206.233:9528/Websocket/P" + this.$store.state.Patients.id)
			this.websock = new WebSocket("ws://192.168.199.215/Websocket/P" + this.$store.state.Patients.id)
			this.websock.onopen = () => {
				// Web Socket 已连接上，使用 send() 方法发送数据
				this.websock.send(JSON.stringify({
					"groupId": 'D' + this.$store.state.Public.id, //医生id
					"sendId": 'P' + this.$store.state.Patients.id, //发送者ID
					"sendType": 2, //标识区分患者和医生 (1是医生,2是患者)
					"receiveId": 'D' + this.$store.state.Public.id, //接受者ID
					"receiveType": 1, //标识区分患者和医生
					"type": 'join', //用于定义发送的消息类型
					"content": "初次链接排队"
				}));
				console.info("数据已发送...");
			};

			this.websock.onmessage = evt => {
				let data = JSON.parse(evt.data)
				switch (data.type) {
					case 1:
					case 2:
						that.msgs.push(data)
						break;
					case 'error':
						this.$toast.text(data.content)
						break;
					case 'startTalk':
					case 'chatAccept':
					case 'return':
						if (JSON.parse(data.content).startTalk) {
							this.isTalk = false
						}
						//毫秒时间戳13位
						let startTime = JSON.parse(data.content).startTime / 1000
						let endTime = JSON.parse(data.content).endTime / 1000
						this.dsq = setInterval(() => {
							startTime += 1
							this.djs = endTime - startTime
						}, 1000)
						break;
					case 'permissionError':

						break;
					case 'chatDenied':
						this.$dialog({
							title: "系统提示",
							content: "医生正在接诊其他患者,请等待!<br/>(此段时间不会计算为就诊时间)",
							customClass: 'alert',
							noCancelBtn: true,
							onOkBtn(event) { //确定按钮点击事件
								this.close(); //关闭对话框
							},
						});
						break;
					default:
						break;
				}
				this.$nextTick(() => {
					var container = this.$el.querySelector('.content')
					container.scrollTop = container.scrollHeight
				})
			};

			this.websock.error = evt => {
				let error = evt.data;
				console.info("通信发生错误...");
			};

			this.websock.onclose = () => {
				// 关闭 websocket
				console.info("连接已关闭...");
			};
		},
		destroyed() {
			clearInterval(this.dsq)
		}
	};
</script>
<style lang="scss" scoped>
	.daojishi{
		background:#fff;
		font-size: 13px;
		padding:10px 15px;
		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
		span{
			opacity: .6;
		}
	}
	.yspd {
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.zjwz {
		height: 94px;
		overflow: hidden;
	}

	p,
	h3,
	img,
	div,
	ul {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.content {
		height: 100%;
		overflow-y: auto;
		padding: 0 15px;

		div {
			margin-bottom: 10px;
			display: flex;

			.head_img {
				height: 40px;
				width: 40px;
				background: #333333;
				border-radius: 50%;
				overflow: hidden;
			}

			.msg {
				padding: 10px 15px;
				margin: 0 10px;
				margin-top: 10px;
				max-width: 70%;
				font-size: 15px;
				color: #353535;
				word-wrap: break-word;
				word-break: break-all;
			}
		}

		.other {
			.msg {
				border-radius: 0 15px 15px 15px;
				background-color: #ffffff;
			}
		}

		.me {
			flex-direction: row-reverse;

			.msg {
				border-radius: 15px 0 15px 15px;
				color: #fff;
				background-color: #5a75f6;
			}
		}
	}

	.content .tag {
		background-color: #eaeaea;
		border-radius: 5px;
		font-size: 10px;
		margin: 10px 0;
		padding: 10px;
		color: #8b8a8a;

		a {
			color: #5a75f6;
		}
	}

	.operat {
		background: #fff;
		padding: 10px 15px;

		.input_box {
			display: flex;
			flex-wrap: nowrap;

			input {
				width: 100%;
				height: 39px;
				background-color: #f7f7f9;
				border-radius: 20px;
				border: none;
				padding: 0 15px;
			}

			button {
				flex-shrink: 0;
				padding: 0 15px;
				background-color: #ffffff;
				border-radius: 20px;
				border: solid 1px #e1e1e1;
				font-size: 15px;
				color: #5a5a5a;
				margin-left: 10px;
			}
		}
	}

	.operat>div {
		display: flex;
		flex-wrap: wrap;

		.tags {
			margin: 5px;
			display: block;
			font-size: 13px;
			padding: 6px 15px;
			background-color: #f7f7f9;
			border-radius: 35px;
			flex-shrink: 0;
		}

		.tags:active {
			transform: scale(.9);
			box-shadow: 0 0 5px rgba(0, 0, 0, .1) inset;
		}
	}
</style>
