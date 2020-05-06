<template>
	<div class="jswz">
		
		<nut-navbar @on-click-back="$common.back" :rightShow="false">导医助手</nut-navbar>
		<router-view></router-view>
	</div>
</template>
<script>
	
	export default{

	}
</script>
<style space>
	.jswz {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.nut-navbar {
		width: 100%;
		height: 44px;
	}
</style>
