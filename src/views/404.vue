<template>
	<div class="包裹">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">404</nut-navbar>
		<div class="bg">
			<img src="@/assets/images/404.png" alt="" width="90%">
			<p>404</p>
			<span>找不到你想访问的页面</span>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.包裹{
		display: flex;
		flex-direction: column;
		height: 100%;
		.bg{
			padding-top: 100px;
			text-align: center;
			font-size:70px;
			height:100%;
			background: #F6FBFF;
			p{
				color: rgba(0,0,0,.1);
			}
			span{
				font-size: 20px;
				color: rgba(0,0,0,.2);
			}
		}
	}
</style>
