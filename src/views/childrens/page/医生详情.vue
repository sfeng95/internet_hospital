<template>
	<div class="ysxq">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">医生介绍</nut-navbar>
		<div>
			<div class="header">
				<div class="left">
					<div class="img_box">
						<img :src="info.headImage"/>
					</div>
					<div>
						<p>
							<span>{{info.realName}}</span>
							<span>{{info.title}}</span>
						</p>
						<p>{{info.deptName}}</p>
					</div>
				</div>
				<div style="display: flex;margin-right: 15px;">
					<div class="weizan">
						<img src="@/assets/icons/dianzan.png" />
						123
					</div>
				</div>
			</div>
			<div class="擅长 box">
				<div>
					<span><img src="@/assets/icons/擅长.png" alt="" width="22px"></span>
					<p :class="{'hide':is_show}"><span>擅长: </span>{{info.goodAt || '该医生暂无擅长'}}</p>
				</div>
				<div>
					<span><img src="@/assets/icons/简介.png" alt="" width="22px"></span>
					<p :class="{'hide':is_show}"><span>简介: </span>{{info.introduce || '该医生暂无简介'}}</p>
				</div>
				<p>
					<svg @click="is_show=!is_show" class="icon" :class="{'ro':!is_show}" style="width: 100%; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;color:#ABABAB;"
					 viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1474">
						<path d="M513.575051 794.526607a43.328357 43.328357 0 0 1-30.944698-12.997785L13.604685 303.399647a43.350032 43.350032 0 0 1 61.89662-60.711719L513.575051 689.265505l438.080971-446.584802a43.350032 43.350032 0 0 1 61.889395 60.711719L544.519749 781.528822a43.357257 43.357257 0 0 1-30.944698 12.997785z"
						 fill="#231815" p-id="1475"></path>
					</svg>
				</p>
			</div>
			<div class="box mainButton">
				<div>
					<div style="flex-direction: row;align-items: center;">
						<span>
							<img src="@/assets/icons/jswz1.png" alt="" width="60px">
						</span>
						<div>
							<h5>极速问诊</h5>
							<p>￥15.00/24小时</p>
						</div>
					</div>
					<router-link :to="{name:'wz',query:{id:doctor_id,type:1}}" tag="button">去问诊<svg class="icon" style="width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;color: #fff;"
						 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2157">
							<path d="M604.7488 513.659733l-196.292267 196.9024a36.872533 36.872533 0 0 0-1.041066 50.978134 33.8048 33.8048 0 0 0 48.810666 1.019733l218.2144-218.478933c16.648533-16.669867 16.64-43.677867-0.0256-60.330667L455.466667 264.917333a33.493333 33.493333 0 0 0-48.349867 1.041067 36.5312 36.5312 0 0 0 1.041067 50.496l196.590933 197.201067z"
							 p-id="2158"></path>
						</svg></router-link>
				</div>
				<div>
					<div style="flex-direction: row;align-items: center;">
						<span>
							<img src="@/assets/icons/yywz1.png" alt="" width="60px">
						</span>
						<div>
							<h5>预约问诊</h5>
							<p>￥15.00/24小时</p>
						</div>
					</div>
					<button @click="switchActionSheet">去问诊<svg class="icon" style="width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;color: #fff;"
						 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2157">
							<path d="M604.7488 513.659733l-196.292267 196.9024a36.872533 36.872533 0 0 0-1.041066 50.978134 33.8048 33.8048 0 0 0 48.810666 1.019733l218.2144-218.478933c16.648533-16.669867 16.64-43.677867-0.0256-60.330667L455.466667 264.917333a33.493333 33.493333 0 0 0-48.349867 1.041067 36.5312 36.5312 0 0 0 1.041067 50.496l196.590933 197.201067z"
							 p-id="2158"></path>
						</svg></button>
				</div>
			</div>
			<nut-actionsheet :is-visible="showMenu" @close="switchActionSheet">
				<div slot="custom" class="custom-wrap">
					<div class="box mainButton paibanBox">
						<h5>您可以预约两周内医生的在线问诊</h5>
						<div class="paiban">
							<table border="1">
								<tr>
									<th></th>
									<th v-for="i in 3">
										<p>04-22</p>
										<p>今天</p>
									</th>
								</tr>
								<tr>
									<td>上</br>午</td>
									<td @click="showSD=true">
										<p>可预约</p>
										<p>余4</p>
									</td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>下</br>午</td>
									<td @click="showSD=true">
										<p>可预约</p>
										<p>余4</p>
									</td>
									<td></td>
									<td @click="showSD=true">
										<p>可预约</p>
										<p>余4</p>
									</td>
								</tr>
								<tr>
									<td>晚</br>上</td>
									<td></td>
									<td @click="showSD=true">
										<p>可预约</p>
										<p>余4</p>
									</td>
									<td></td>
								</tr>
							</table>
						</div>
					</div>
					<div class="ghsd" v-show="showSD">
						<p v-for="i of 5">
							<router-link :to="{name:'wz',query:{id:doctor_id,type:2}}" tag="span">时段:10:00-10:30</router-link>
						</p>
					</div>
				</div>
			</nut-actionsheet>
			<div class="tips">
				<p>服务说明</p>
				<p>1.医生确认预约后,我们会在第一时间通知您和医生,请您保持手机畅通</p>
				<p>2.一次图文问诊咨询服务时间为24小时,在24小时内随时和医生沟通</p>
				<p>3.医生利用空闲时间为您解答,可能无法准时准时在线。若超出预约时间30分钟,您可以联系客服申请退款</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				doctor_id: this.$route.query.id,
				is_up: 0,
				is_show: true,
				showMenu: false,
				showSD:false,
				info:null
			};
		},
		created(){
			this.$get('/users/doctUser/patientFindDoctor',{
				doctorId:this.doctor_id,
				hospId:sessionStorage.getItem('hospid')
			}).then(res=>{
				this.info = res.data
			})
		},
		methods: {
			switchActionSheet() {
				this.showMenu = !this.showMenu;
			}
		}
	};
</script>
<style lang="scss" scoped>
	
	.tips>p {
		line-height: 28px;
		font-size: 12px;
		padding: 0 20px;
		opacity: .5;
	}



	.paiban {
		overflow-x: scroll;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
	}

	table {
		font-size: 12px;
		border-collapse: collapse;
		border: 1px solid rgba(0, 0, 0, .05);
		margin-left: 5px;

		tr {
			th {
				min-width: 40px;
				font-size: 12px;
				font-weight: normal;
				padding: 3px 0;

				p:last-of-type {
					font-size: 9px;
				}
			}

			td {
				text-align: center;
				font-size: 12px;
				background: #9DA9DF;
				color: #fff;
				padding: 3px 5px;
			}

			th:first-of-type {
				width: 20px;
				min-width: auto !important;
			}

			td:first-of-type {
				width: 21px;
				box-sizing: border-box;
				position: absolute;
				background: #fff;
				color: #000;
				transform: translateX(-21px) translateY(-1px);
			}

			td:empty {
				background: transparent;
			}
		}
	}

	.就诊日期 {
		position: fixed;
		width: 100%;
		padding: 20px 15px;
		text-align: left;
		background: #fff;

		h5 {
			font-family: HiraginoSansGB-W3;
			font-size: 14px;
			font-weight: normal;
			color: #353535;
		}

		p {
			font-family: HiraginoSansGB-W3;
			font-size: 12px;
			font-weight: normal;
			color: #999999;
		}
	}

	.号源 {
		padding-top: 75px;
		padding-bottom: 20px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		height: 100%;
		overflow-y: scroll;

		a {
			width: 163px;
			background-color: #f2f2f2;
			border-radius: 17px;
			margin: 7px 5px;
			font-size: 12px;
			color: #aeaeae;

			span {
				padding: 10px;
				box-sizing: border-box;
				display: block;
				height: 100%;
				width: 100%;
			}
		}

		a.active {
			background-color: #5a75f6;
			color: #fff;
		}
	}

	/deep/.nut-dialog-box {
		display: flex;
		align-items: flex-end !important;
	}

	/deep/.nut-dialog {
		width: 100%;
		border-radius: 0;
	}

	/deep/.nut-dialog-body,
	/deep/.nut-dialog-content {
		padding: 0;
	}

	/deep/.nut-dialog-footer {
		height: auto;
	}

	/deep/.back-icon {
		filter: drop-shadow(300px 0 0 #fff);
		transform: translateX(-300px);
	}

	.ysxq {
		background: url("../../../assets/images/xzyysj_bg.png") 0 -22px;
		background-repeat: no-repeat;
		background-size: contain;
		height: 100%;
		overflow-y: auto;
	}

	.nut-navbar {
		height: 44px;
		background-color: transparent;
		color: white;

		/deep/h3 {
			font-size: 17px;
			font-weight: 500;
		}
	}

	.left {
		padding-left: 15px;
		display: flex;
		align-items: center;

		div {
			margin-left: 9px;
		}

		p {
			font-size: 12px;
			color: white;
		}

		span:nth-child(1) {
			font-size: 15px;
		}

		span:nth-child(2) {
			margin-left: 10px;
		}

		.img_box {
			height: 52px;
			width: 52px;
			overflow: hidden;
			border-radius: 50%;
			background: #848484;

			img {
				width: 100%;
			}
		}
	}

	.weizan {
		height: 20px;
		line-height: 20px;
		border-radius: 20px;
		background: #fff;
		font-size: 12px;
		color: #5a75f6;
		margin-right: 5px;
		padding: 0 10px;

		img {
			height: 11px;
			filter: drop-shadow(0 0 1px #5a75f6);
			// transform: translateX(400px);
		}
	}

	.header {
		padding-top: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.box {
		margin: 10px 20px;
		padding: 15px;
		background: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, .1);
		overflow: hidden;
		border-radius: 5px;
	}

	.擅长 {
		min-height: 100px;
		font-size: 13px;

		div {
			display: flex;
			margin-bottom: 10px;

			span {
				margin-right: 10px;
			}

			p {
				margin-bottom: 5px;
				color: #7A7A7A;

				span {
					margin: 0;
					color: #000;
				}
			}

			p.hide {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}

		div {
			display: flex;
			margin-bottom: 10px;
		}

	}

	.mainButton>div {
		border-bottom: 1px solid rgba(0, 0, 0, .05);
		padding: 10px 15px;
	}

	.mainButton {
		padding: 0;

		div {
			display: flex;
			align-items: center;
			justify-content: space-between;

			span {
				margin-right: 5px;

				img {
					display: block;
				}
			}

			div {
				flex-direction: column;
				align-items: flex-start;
				justify-self: flex-start;

				h5 {
					font-weight: normal;
					font-size: 16px;
				}

				p {
					color: #7A7A7A;
					font-size: 14px;
				}
			}

			button {
				background-image: linear-gradient(to right, #59c2f6, #2daeee);
				color: #fff;
				padding: 5px 10px;
				border: none;
				border-radius: 50px;
				font-size: 12px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.ro {
		transform: rotateZ(180deg);
	}

	.paibanBox {
		margin: 0;
		padding-bottom: 30px !important;
		position: relative;
	}

	.paiban::-webkit-scrollbar {
		height: 0 !important
	}

	.paibanBox h5 {
		padding: 15px;
		font-weight: normal;
		opacity: .7;
		font-size: 13px;
	}
	.ghsd{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20px;
		padding-bottom: 15px;
		p{
			width: 40%;
			display: flex;
			justify-content: center;
			font-size: 14px;
			background: #fff;
			padding: 5px 15px;
			margin-top:10px;
			border-radius: 50px;
		}
	}
</style>
