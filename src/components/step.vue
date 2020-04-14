<template>
	<div class="step">
		<span :class="{active:stepIndex>index}" v-for="(item,index) in step">
			{{item}}
		</span>
	</div>
</template>

<script>
	export default {
		props:{
			stepIndex:{
				default:1,
			},
		},
		data(){
			return {
				
				step: [
					'导诊接待',
					'匹配医生',
					'医生判断',
					'购药送药',
				],
			}
		}
	}
</script>

<style scoped>
	.step {
		background: #fff;
		display: flex;
		justify-content: center;
		padding: 15px 0;
		border-bottom: 1px solid #efefef;
	}
	
	.step>span {
		padding-right: 10px;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #5a5a5a;
		white-space: nowrap;
	}
	
	.step>span:before {
		margin-right: 10px;
		content: '';
		display: block;
		height: 7px;
		width: 7px;
		border: 1px solid #7a7a7a;
		border-left: 0;
		border-top: 0;
		transform: rotateZ(-45deg);
	}
	
	.step>span:last-child {
		padding: 0;
	}
	
	.step>span:first-child:before {
		content: none;
	}
	
	.step>span.active {
		color: #5a75f6;
	}
	
	.step>span.active:before {
		border-color: #5a75f6;
	}
</style>
