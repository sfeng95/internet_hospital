<template>
	<div class="dzjd">
		<step :stepIndex="1"></step>
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
		
		<div class="operat" v-show="showOperat">
			<div class="input_box" v-show="info_step == 4 || info_step == 6">
				<input type="text" v-model="input_content">
				<button @click="usersend(input_content)">发送</button>
			</div>
			<div class="选择部位" v-if="info_step==1">
				<span v-for="item in selectBtn" class="tags" @click="infoNext(1,item)">
					{{item.name}}
				</span>
			</div>
			<div class="选择问题" v-else-if="info_step==2">
				<span v-for="item in selectBtn" class="tags" @click="infoNext(2,item)">
					{{item.name}}
				</span>
			</div>
			<div class="选择就诊人" v-else-if="info_step==3">
				<span v-for="item in selectBtn" class="tags" @click="infoNext(3,item)">
					{{item.name}}
				</span>
				<span class="tags" @click="infoNext(3,{name:'其他'})">
					其他
				</span>
			</div>
			<div class="选择性别" v-else-if="info_step==5">
				<span v-for="item in selectBtn" class="tags" @click="infoNext(5,item)">
					{{item.name}}
				</span>
			</div>
			<nut-datepicker :is-visible="showDate" title="" type="date" startDate="1991-11-10" endDate="2019-10-05" @close="switchPicker('showDate')"
			 @choose="setChooseValue">
			</nut-datepicker>
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
				showOperat:false,
				showDate: false,
				info_step: 0,
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
				infoBox: {
					position: '',
					problem: '',
					patient: {
						id: '',
						name: '',
						age: '',
						sex: '',
					},
				}
			}
		},
		mounted() {
			this.info_step = 1
		},
		watch: {
			info_step() {
				this.showOperat = true
				switch (this.info_step) {
					case 1:
						this.send('智能导诊机器人', '您好，我是您的导诊医生，我将根据您描述为您安排合适的医生。请选择你要咨询的部位？')
						this.selectBtn = [{
								id: 1,
								name: '头部'
							},
							{
								id: 2,
								name: '手臂'
							},
							{
								id: 3,
								name: '胸部'
							},
							{
								id: 4,
								name: '腹部'
							},
							{
								id: 5,
								name: '腿部'
							},
							{
								id: 6,
								name: '脚部'
							},
						]
						break;
					case 2:
						this.send('智能导诊机器人', '请问你想咨询什么问题')
						this.selectBtn = [{
								id: 1,
								name: '问题'
							},
							{
								id: 2,
								name: '问题2'
							},
						]
						break;
					case 3:
						this.send('智能导诊机器人', '请问你要为谁咨询?')
						this.selectBtn = [{
								id: 1,
								name: 'cyy',
								age: '20',
								birthday: '2000-08-31',
							},
							{
								id: 2,
								name: 'cyy2',
								age: '22',
								birthday: '1998-09-31',
							},
						]
						break;
					case 4:
						if (!this.is_other) {
							return
						}
						this.send('智能导诊机器人', '请输入患者姓名')
						break;
					case 5:
						if (!this.is_other) {
							return
						}
						this.send('智能导诊机器人', '请选择患者性别')
						this.selectBtn = [{
								id: 1,
								name: '男',
							},
							{
								id: 2,
								name: '女',
							},
						]
						break;
					case 6:
						if (!this.is_other) {
							return
						}
						this.send('智能导诊机器人', '请选择出生日期')
						this.showDate = true
						break;
				}
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
			infoNext(index, val) {
				this.showOperat = false
				switch (index) {
					case 1:
						this.infoBox.position = val
						this.usersend(val.name)
						break;
					case 2:
						this.infoBox.problem = val
						this.usersend(val.name)
						break;
					case 3:
						this.usersend(val.name)
						if (val.name == "其他") {
							this.is_other = true
						} else {
							this.infoBox.problem = val
						}
						break;
					case 5:
						this.infoBox.patient.sex = val.id
						this.usersend(val.name)
						break;
					case 6:
						break;
				}
				setTimeout(()=>{
					this.info_step++
				},500)
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
	.dzjd{
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
