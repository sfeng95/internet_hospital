<template>
	<div class="基本信息">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">确认支付</nut-navbar>
		<div>
			<p>请您在15分钟内完成支付,超时订单将自动取消</p>
			<label>
				<h5>支付信息</h5>
				<span>陈小小</span>
			</label>
			<label>
				<h5>支付类型</h5>
				<span>预约问诊</span>
			</label>
			<label>
				<h5>支付费用</h5>
				<span class="price">￥15.00</span>
			</label>
			<button>确认支付</button>
		</div>
	</div>
</template>
<script>
	export default {

	};
</script>
<style lang="scss" scoped>
	.基本信息 {
		p{
			text-align: center;
			padding: 20px 0;
			color: #5A75F6;
			font-weight: 100;
			background: #F1F3F8;
			font-size: 14px;
		}
		label {
			display: flex;
			justify-content: space-between;
			padding: 15px;
			border-bottom: 1px solid rgba(0, 0, 0, .05);

			h5 {
				font-weight: normal;
				color: #5A5A5A;
			}

			h5,
			span {
				font-size: 14px;
			}

			.price {
				color: red
			}
		}

		button {
			font-size:16px;
			border-radius: 50px;
			background: #5A75F6;
			border: none;
			color: rgba(255,255,255,.7);
			width:80%;
			margin:0 10%;
			padding: 10px;
			margin-top: 100px;
		}
	}
</style>
