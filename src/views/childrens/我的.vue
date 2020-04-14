<template>
	<div class="包裹">
		<nut-navbar :leftShow="false" :rightShow="false">个人中心</nut-navbar>
		<router-link :to="{ name: 'jbxx' }">
			<div class="头部">
				<div class="head_box">
					<div class="box_img">
						<img :src="Info.headshot" width="100%" alt="" />
					</div>
					<div class="box_info">
						<p>{{ Info.user_name }}</p>
						<span>{{ Info.age }}岁</span>
					</div>
				</div>
				<div class="认证">
					{{ Info.id_card != '' ? '已认证' : '未认证' }}<span>></span>
				</div>
			</div>
		</router-link>

		<div class="主内容">
			<div class="write 主菜单">
				<router-link to="">
					<div>
						<img src="../../assets/images/wdwz.png" alt="" />
						我的问诊
					</div>
				</router-link>
				<router-link :to="{name:'wdcf'}">
					<div>
						<img src="../../assets/images/wdcf.png" alt="" />
						我的处方
					</div>
				</router-link>
				<router-link to="">
					<div>
						<img src="../../assets/images/ypdd.png" alt="" />
						药品订单
					</div>
				</router-link>
			</div>

			<div class="write">
				<div class="未支付">
					<div><span>极速问诊</span><span>待支付</span></div>
					<p>胃抽筋，胃痛胃酸胃不舒服</p>
				</div>
			</div>

			<div class="write 副菜单">
				<h5>常用功能</h5>
				<div>
					<router-link to="">
						<div>
							<img src="../../assets/icons/wdgh.png" alt="" />
							我的挂号
						</div>
					</router-link>
					<router-link to="">
						<div>
							<img src="../../assets/icons/jzrgl.png" alt="" />
							就诊人管理
						</div>
					</router-link>
					<router-link to="">
						<div>
							<img src="../../assets/icons/dzgl.png" alt="" />
							地址管理
						</div>
					</router-link>
					<router-link to="">
						<div>
							<img src="../../assets/icons/wdxx.png" alt="" />
							我的信息
						</div>
					</router-link>
					<router-link to="">
						<div @click="exit">
							<img src="../../assets/icons/tcdl.png" alt="" />
							退出登录
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},

		computed: {
			Info() {
				return this.$store.state.Info;
			}
		},
		mounted() {
			this.$emit('monitor', 'mine')
		},
		methods: {
			exit() {
				this.$router.push('index')
				localStorage.removeItem('token');
			}
		}
		// console.info(this.$route.params.id);
	}
</script>

</style>
<style lang="scss" scoped>
	.主内容 {
		padding: 13px;

		.write {
			margin-bottom: 13px;
			background: #fff;
			// padding: 15px;
			box-sizing: border-box;
			border-radius: 5px;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

			img {
				width: 65px;
				height: 65px;
			}

			.未支付 {
				padding: 15px;

				div {
					display: flex;
					justify-content: space-between;

					span:first-of-type {
						width: 56px;
						font-family: HiraginoSansGB-W3;
						font-size: 14px;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0px;
						color: #353535;
					}

					span:last-of-type {
						font-family: HiraginoSansGB-W3;
						font-size: 12px;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0px;
						color: #ff2400;
					}
				}

				p {
					font-family: HiraginoSansGB-W3;
					font-size: 12px;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0px;
					color: #999999;
					margin-top: 20px;
				}
			}
		}

		.主菜单 {
			padding: 15px;
			display: flex;
			justify-content: space-between;

			div {
				padding: 0 10px;
				display: flex;
				flex-direction: column;
				align-items: center;

				font-family: HiraginoSansGB-W3;
				font-size: 14px;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0px;
				color: #353535;
			}
		}

		.副菜单 {
			h5 {
				font-family: HiraginoSansGB-W3;
				font-size: 14px;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0px;
				color: #353535;
				padding: 13px 15px;
				border-bottom: 1px solid #f3f3f3;
			}

			div {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				width: 100%;
				padding: 10px 0;

				a {
					width: 25%;

					div {
						display: flex;
						flex-direction: column;
						align-items: center;
						font-family: HiraginoSansGB-W3;
						font-size: 12px;
						font-weight: normal;
						font-stretch: normal;
						letter-spacing: 0px;
						color: #868686;

						img {
							width: 20px;
							height: 22px;
							margin-bottom: 10px;
						}
					}
				}
			}
		}
	}

	.包裹 {
		height: 100%;
		width: 100%;
		background-image: url('../../assets/images/personal_center_bj.png');
		background-position-y: -40px;
		background-size: contain;
		background-repeat: no-repeat;

		.nut-navbar {
			background-color: transparent;
			color: #fff;
		}
	}

	.头部 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 18px;

		.head_box {
			display: flex;
			align-items: center;
			align-content: center;

			.box_img {
				width: 56px;
				height: 56px;
				background: red;
				overflow: hidden;
				border-radius: 50%;
			}

			.box_info {
				color: #fff;
				margin-left: 10px;

				p {
					width: 69px;
					font-family: HiraginoSansGB-W3;
					font-size: 18px;
					font-weight: normal;
					font-stretch: normal;
					color: #ffffff;
				}

				span {
					margin-top: 5px;
					justify-content: center;
					display: flex;
					align-items: center;
					font-size: 11px;
					width: 46px;
					height: 18px;
					background-color: #0020a4;
					border-radius: 9px;
					opacity: 0.7;
				}
			}
		}

		.认证 {
			text-align: center;
			color: #fff;
			width: 59px;
			height: 18px;
			background-color: #0020a4;
			border-radius: 9px;
			opacity: 0.7;
			justify-content: center;
			line-height: 18px;
			font-size: 11px;

			span {
				padding-left: 3px;
				font-family: '黑体';
			}
		}
	}
</style>
