<template>
	<div class="ghcg">
		<nut-navbar @on-click-back="back" :rightShow="false">挂号信息</nut-navbar>
		<div class="header">
			<img src="../../../assets/images/ghcg.png" />
			<p>支付成功</p>
		</div>
		<router-link tag="div" :to="{name:'yspd'}" class="button" replace>
			<span>完成</span>
		</router-link>
	</div>
</template>
<script>
	export default {
		created(){
			this.$get('/wx/callback/registered',{
				"orderNo":this.$route.query.order
			}).then(res=>{
				console.info(res)
			})
		},
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	};
</script>
<style lang="scss" scoped>
	.nut-navbar {
		height: 44px;

		/deep/h3 {
			font-size: 17px;
			font-weight: 500;
		}
	}

	.header {
		background-color: white;
		text-align: center;
		padding-bottom: 25px;

		span {
			font-size: 12px;
			color: #99a2cd;
			line-height: 50px;
		}

		p {
			font-size: 18px;
			color: #5a75f6;
			margin-top: 13px;
		}

		img {
			margin-top: 32px;
		}
	}

	.title {
		height: 87px;
		margin-top: 7px;
		background-color: white;
		display: flex;
		align-items: center;
		padding: 0 15px 0 15px;

		img {
			height: 49px;
			width: 49px;
			border-radius: 49px;
		}
	}

	.right {
		margin-left: 12px;

		p:nth-child(1) {
			font-size: 15px;
			color: #353535;
			text-align: left;

			span:nth-child(2) {
				margin-left: 8px;
				font-size: 12px;
				color: #999999;
			}
		}

		p:nth-child(2) {
			font-size: 12px;
			color: #5a5a5a;

			span:nth-child(2) {
				margin-left: 9px;
			}
		}
	}

	.content2 {
		margin-top: 7px;

		.c1:nth-child(2) {
			span {
				margin-left: 41px;
				color: #ff2400;
			}
		}
	}

	.c1 {
		color: black;
		height: 50px;
		background-color: white;
		padding: 0 15px;
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #5a5a5a;
		border-bottom: 1px solid #f7f7f7;

		span {
			margin-left: 28px;
		}
	}

	.button {
		margin-top: 30px;
		display: flex;
		justify-content: space-around;

		span:nth-child(2) {
			background-color: #5a75f6;
		}

		span {
			background-color: #24b1f8;
			height: 37px;
			border-radius: 20px;
			width: 40%;
			text-align: center;
			line-height: 37px;
			color: white;
		}
	}
</style>
