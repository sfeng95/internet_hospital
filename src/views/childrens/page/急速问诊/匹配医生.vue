<template>
	<div class="ppyy">
		<step :stepIndex="2"></step>
		<div class="content">
			<div>
				<div class="title">我们为您推荐</div>
				<doctor-info></doctor-info>
			</div>
			<div>
				<div class="title">您还可以选择</div>
				<doctor-info></doctor-info>
			</div>
		</div>
	</div>
</template>
<script>
	import step from '@/components/step.vue'
	import doctorInfo from '@/components/doctorInfo'
	export default {
		components:{
			step,
			doctorInfo
		},
		data(){
			
		}
	};
</script>
<style lang="scss" scoped>
.ppyy{
	.content>div{
		margin-bottom: 10px;
	}
	.title{
		font-size: 16px;
		font-weight: normal;
		color: #000000;
		display: flex;
		align-items: center;
		padding:10px 15px;
		background: #fff;
	}
	.title:before{
		content:'';
		display: block;
		width: 3px;
		height: 16px;
		background-color: #5a75f6;
		border-radius: 1px;
		margin-right: 5px;
	}
}
</style>
