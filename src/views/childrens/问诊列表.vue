<template>
	<div class="wdwz">
		<nut-navbar :leftShow="false" :rightShow="false">问诊</nut-navbar>
		<div class="content">
			<doctorinfo realName="医生姓名" qualifications="职位" introduce="1231231123" :showInfo="false" :showButton="false" v-for="i of 30">
				<p class="Dinfo">
					<span>xx县医院</span><i></i>
					<span>xx科</span><i></i>
					<span>患者-xxx</span>
				</p>
				<p class="info">
					<span>[系统消息] 我觉得不行</span>
					<span class="time">04-22 09:00:00</span>
				</p>
			</doctorinfo>
		</div>
	</div>
</template>

<script>
	import doctorinfo from '@/components/doctorInfo.vue'
	export default {
		components:{
			doctorinfo
		},
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
			this.$emit('monitor', 'wzlb')
		},
		methods: {
			
		}
	}
</script>

</style>
<style lang="scss" scoped>
.wdwz{
	display: flex;
	flex-direction: column;
	height: 100%;
	.content{
		height:100%;
		overflow-y: auto;
		.Dinfo{
			padding: 5px 0;
			font-size: 13px;
			display: flex;
			align-items: center;
			opacity: .8;
			span{
				margin-right: 10px;
			}
			i{
				display: inline-block;
				width: 1px;
				background: rgba(0,0,0,.5);
				height: 12px;
				margin-right: 10px;
			}
		}
		.info{
			color: #848484;
			font-size: 14px;
			display: flex;
			align-items:flex-end;
			justify-content: space-between;
			.time{
				font-size: 12px;
			}
		}
	}
}
</style>
