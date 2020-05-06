<template>
	<div class="yygh">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">选择医生</nut-navbar>
		<router-link :to="{name:'ysxq',query:{id:item.id}}" v-for="item in list">
			<doctorCard :headImage="item.headImage" :realName="item.realName" :qualifications='item.title' :introduce="item.introduce" :link="{name:'wz',query:{id:item.id,type:1}}">
				<p class="pBox"><span class="price">￥{{item.price}}</span>/ 30分钟</p>
			</doctorCard>
		</router-link>
	</div>
</template>
<script>
	import doctorCard from '@/components/doctorInfo.vue'	
	export default {
		components: {
			doctorCard
		},
		data() {
			return {
				list:''
			};
		},
		created(){
			this.$get('/users/doctUser/findByHospDeptId',{
				hospId:sessionStorage.getItem('hospid'),
				deptId:this.$route.params.id
			}).then(res=>{
				console.info(res)
				if(res.code == 200){
					this.list = res.data
				}
			})
		},
		methods:{
			
		}
	};
</script>
<style lang="scss" scoped>
.pBox{
	color:#7C7C7C;
	font-size: 13px;
	.price{
		color:red;
		font-size:15px;
		margin-right: 5px;
		border: none;
	}
}
</style>
