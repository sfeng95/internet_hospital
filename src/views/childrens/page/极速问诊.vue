<template>
	<div class="jswz">
		<zqtys></zqtys>
		<nut-navbar @on-click-back="$common.back" :rightShow="false">导医助手</nut-navbar>
		<router-view></router-view>
	</div>
</template>
<script>
	import zqtys from '@/components/知情同意书.vue'
	export default{
		components:{
			zqtys
		},

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
