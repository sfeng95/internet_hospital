<template>
	<div class="wdwz">
		<nut-navbar :rightShow="false" @on-click-back="$common.back" class="header">我的问诊</nut-navbar>
		<div class="tabMenu">
			<span @click="()=>{
				switchMenu()
				showDate = true
				
			}">
				{{selectedDate.text}}
			</span>
			<span @click="()=>{
				switchMenu()
				showPatient = true
			}">
				{{selectedPatient.text}}
			</span>
		</div>
		<nut-menu :isVisible="showDate" :list="Date_Time" type="simple" @close="switchMenu" @choose="chooseMenu"></nut-menu>
		<nut-menu :isVisible="showPatient" :list="patientList" type="simple" @close="switchMenu" @choose="chooseMenu2"></nut-menu>
		<div class="content">
			<div class="wzItem" v-for="item in list">
				<div class="pInfo">
					<div>
						<span class="img_box"></span>
						<h5>{{item.doctorName}}</h5>
					</div>
					<!-- "挂号订单状态：0.未支付的 1.已支付(待确认) 2.已支付（待就诊） 3.已支付(进行中) 4.已支付(已完成)5.已支付(已退款)", -->
					<span v-if="orderStatus==0" class="state" style="color:red;">待支付</span>
					<span v-else-if="orderStatus==1 || orderStatus==2" class="state" style="color: #3399FF;">待进行</span>
					<span v-else-if="orderStatus==3" class="state" style="color:#5A75F6;">进行中</span>
					<span v-else-if="orderStatus==4" class="state">已完成</span>
					<span v-else-if="orderStatus==5" class="state">已取消</span>
				</div>
				<p>{{item.illnessDescription}}</p>
				<div class="type">
					<div class="time">
						<span>
							{{item.createdTime}}
						</span>
						<span>
							极速图文
						</span>
					</div>
					<div>
						<router-link tag="button" to="">立即支付</router-link>
					</div>
				</div>

				<div class="more" v-if="orderStatus==4 || orderStatus==5">
					<div>
						<svg class="icon" style="width: 1.5em; height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;"
						 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2642">
							<path d="M 426.667 213.333 h 170.667 v 42.6667 h -170.667 Z M 213.333 298.667 h 597.333 v 42.6667 H 213.333 Z M 725.333 810.667 H 298.667 V 384 H 256 v 469.333 h 512 V 384 h -42.6667 Z"
							 p-id="2643"></path>
							<path d="M 426.667 469.333 h 42.6667 v 256 h -42.6667 Z M 554.667 469.333 h 42.6667 v 256 h -42.6667 Z" p-id="2644"></path>
						</svg>
					</div>
					<div>
						<router-link tag="button" to="">查看用药</router-link>
						<router-link tag="button" to="" v-if="item.hasComments == 0">评价</router-link>
						<router-link tag="button" to="">复诊</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				orderStatus: 3,
				showDate: false,
				showPatient: false,
				selectedDate: null,
				selectedPatient: null,
				Date_Time: [{
						id: 1,
						text: '最近7天',
						selected: true,
						value:new Date(new Date().getTime() - 3600*24*7)
					},
					{
						id: 2,
						text: '最近1个月',
						selected: false,
						value:new Date(new Date().getTime() - 3600*24*30)
					},
					{
						id: 3,
						text: '最近3个月',
						selected: false,
						value:new Date(new Date().getTime() - 3600*24*30*3)
					},
				],
				patientList:[
				// 必须在这里添加一个默认值不然会报错
					{
						id: 1,
						text: '默认',
						selected: true
					},
				]
			}
		},
		computed: {
			Info() {
				return this.$store.state.Info;
			}
		},
		created() {
			this.selectedDate = this.Date_Time[0]
			this.$get('/users/patient/findPatientList').then(res => {
				let arr = []
				for (let i in res.data) {
					if(i == 0){
						arr.push({
							id: res.data[i].id,
							text: res.data[i].realName,
							selected: true
						})
					}else{
						arr.push({
							id: res.data[i].id,
							text: res.data[i].realName,
							selected: false
						})
					}
				}
				this.selectedPatient = arr[0]
				this.patientList = arr
				
				this.$post('/users/patRegistered/pageFind', {
					"hospId": sessionStorage.getItem('hospid'),
					"orderStatus": this.orderStatus, //"挂号订单状态：0.未支付的 1.已支付(待确认) 2.已支付（待就诊） 3.已支付(进行中) 4.已支付(已完成)5.已支付(已退款)",
					"pageSize": 50,
					"patientId": arr[0].id,
					"startTime":this.timeFormat(this.selectedDate.value)
					
				}).then(res => {
					this.list = res.data.records
				})
			})
		},
		methods: {
			chooseMenu(item, index) {
				this.switchMenu();
				this.Date_Time.map((value, key) => value.selected = false);
				this.$set(this.Date_Time[index], 'selected', true);
				this.selectedDate = item
			},
			chooseMenu2(item, index) {
				this.switchMenu();
				this.Date_Time.map((value, key) => value.selected = false);
				this.$set(this.Date_Time[index], 'selected', true);
				this.selectedPatient = item
			},
			switchMenu() {
				this.showDate = false
				this.showPatient = false
			},
			add0(m){return m<10?'0'+m:m },
			//时间戳转化成时间格式
			timeFormat(timestamp){
			  //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
				var time = new Date(timestamp);
				var year = time.getFullYear();
				var month = time.getMonth()+1;
				var date = time.getDate();
				var hours = time.getHours();
				var minutes = time.getMinutes();
				var seconds = time.getSeconds();
				return year+'-'+this.add0(month)+'-'+this.add0(date)+' '+this.add0(hours)+':'+this.add0(minutes)+':'+this.add0(seconds);
			}
		}
	}
</script>

<style scoped>
	/deep/.menu-simple svg {
		display: none !important;
	}
	/deep/.menu-simple ul {
		min-height:auto !important;
	}
</style>
<style lang="scss" scoped>
	.wdwz {
		.header {
			z-index: 9999;
		}
		.tabMenu {
			z-index: 9999;
			position: relative;
			display: flex;
			justify-content: space-around;
			background: #fff;
			span {
				text-align: center;
				width: 100%;
				padding: 15px 0;
			}

			;

			span:last-child {
				border-right: none;
			}

			;
		}
	}

	.wzItem {
		padding: 15px;
		background: #fff;
		margin: 10px 15px;

		.pInfo {
			display: flex;
			justify-content: space-between;
			align-items: center;

			div {
				display: flex;
				align-items: center;
			}

			.img_box {
				border-radius: 50%;
				overflow: hidden;
				display: block;
				background: #DADADA;
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}

			h5 {
				font-weight: normal;
			}
		}

		.state {
			font-size: 12px;
		}

		p {
			margin: 10px 0;
		}

		.type {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;

			.time {
				font-size: 12px;
				opacity: .5;
			}
		}

		.more {
			border-top: 1px solid #EFEFEF;
			padding-top: 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		button {
			padding: 1px 5px;
			margin-left: 10px;
			font-size: 12px;
			border-radius: 3px;
			background: #fff;
			border: 1px solid #848484;
		}
	}
</style>
