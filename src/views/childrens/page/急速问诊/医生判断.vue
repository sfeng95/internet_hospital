<template>
	<div class="yspd">
		<step :stepIndex="3"></step>
		<div class="content">
			<p class="tag">根据国家互联网诊疗相关规定，请仔细阅读
				<router-link to="">
					《互联网诊疗风险告知及知情同意书》
				</router-link>
				，如非复诊，我们仅提供医疗咨询服务，如继续咨询表明您已知悉相关规则与风险并同意相关条款。</p>
			<div :class="item.user?'me':'other'" v-for="item in msgs">
				<div class="head_img">
					<img :src="item.avatar" alt="" width="100%">
				</div>
				<div class="msg">
					{{item.msg}}
				</div>
			</div>
		</div>
		
		<div class="operat">
			<div class="input_box">
				<input type="text" v-model="input_content">
				<button @click="usersend(input_content)">发送</button>
			</div>
		</div>
	</div>
</template>
<script>
	import step from '@/components/step.vue'
	export default {
		components:{
			step
		},
		data() {
			return {
				is_other: false,
				input_content: '',
				msgs: [
					// {
					// 	user: 0,
					// 	avatar: '',
					// 	user_name: '',
					// 	msg: '我是其他人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人',
					// 	type: 1, // 1文字 2语音 3图片 4文件 ,
					// 	time: '',
					// },
					// {
					// 	user: 1,
					// 	avatar: this.$store.state.Info.headshot,
					// 	user_name: this.$store.state.Info.user_name,
					// 	msg: '我是自己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己己',
					// 	type: 2,
					// 	time: '',
					// }
				],
				input: '',
				selectBtn: [],
			}
		},
		methods: {
			send(user_name, msg, type) {
				this.msgs.push({
					user: 0,
					avatar: '',
					user_name: user_name,
					msg: msg,
					type: type || 1, // 1文字 2语音 3图片 4文件 ,
					time: '',
				})
				this.$nextTick(() => {
					var container = this.$el.querySelector('.content')
					container.scrollTop = container.scrollHeight
				})
				this.input_content = ''
			},
			usersend(msg, type) {
				if (this.is_other) {
					switch (this.info_step) {
						case 4:
							this.infoBox.patient.name = msg
							setTimeout(()=>{
								this.info_step++
							},500)
							break;
						case 5:
							this.infoBox.patient.sex = msg
							break;
					}
				}
				this.msgs.push({
					user: 1,
					avatar: this.$store.state.Info.headshot,
					user_name: this.$store.state.Info.user_name,
					msg: msg,
					type: type || 1, // 1文字 2语音 3图片 4文件 ,
					time: '',
				})
				this.$nextTick(() => {
					var container = this.$el.querySelector('.content')
					container.scrollTop = container.scrollHeight
				})
				this.input_content = ''
			},
			back() {
				this.$router.push({
					path: "/index"
				});
			},
			switchPicker(param) {
				this[`${param}`] = !this[`${param}`];
			},
			setChooseValue(param) {
				this.infoBox.patient.age = param[3]
				this.usersend(param[3])
			},
		}
	};
</script>
<style lang="scss" scoped>
	.yspd{
		height: 100%;
		display:flex;
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
				word-wrap:break-word;
				word-break:break-all;
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
