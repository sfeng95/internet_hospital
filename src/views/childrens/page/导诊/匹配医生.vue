<template>
	<div class="ppyy">
		<step :stepIndex="2"></step>
		<div class="content">
			<div>
				<div class="title">我们为您推荐</div>
				<template v-for="item in doctorList">
					<doctor-info 
						:realName="item.realName"
						:age="item.age"
						:qualifications="item.qualifications"
						:mobile="item.mobile"
						:introduce="item.introduce"
						:idCard="item.idCard"
						:headImage="item.headImage"
						:sex="item.sex"
						:sexName="item.sexName"
					>
					<div class="wenzhen">
						<router-link :to="{name:'wz',query:{id:item.id,type:1}}" tag="div" class="wenzen_item">
							<div>
								<img src="@/assets/icons/jswz.png" alt="" width="40px">
							</div>
							<div>
								<h5>极速问诊</h5>
								<p class="price">￥15.00</p>
							</div>
						</router-link>
						<router-link :to="{name:'ysxq',query:{id:item.id}}" tag="div" class="wenzen_item">
							<div>
								<img src="@/assets/icons/yywz.png" alt="" width="40px">
							</div>
							<div>
								<h5>预约问诊</h5>
								<p class="price">￥15.00</p>
							</div>
						</router-link>
					</div>
					</doctor-info>
				</template>
			</div>
			<!-- <div>
				<div class="title">您还可以选择</div>
				<doctor-info></doctor-info>
			</div> -->
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
			return {
				doctorList:[]
			}
		},
		mounted() {
			this.$post('/users/doctUser/findDoctor/byLeadDiagnosis',
				{
					current: 1,
					dictItemId:this.$route.query.dictItemId,
					hospitalId:sessionStorage.getItem('hospid'),
					pageSize: 1000,
					patientId: this.$route.query.patientId,
					symptomId: this.$route.query.symptomId
				}
			).then(res=>{
				if(res.code == 200){
					this.doctorList = res.data.records
				}
			})
		},
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
.wenzhen{
	border-top: 1px solid rgba(0,0,0,.1);
	margin-top: 10px;
	padding-top: 10px;
	display: flex;
	.wenzen_item{
		display: flex;
		align-items: center;
		margin-right: 20px;
		div:last-of-type{
			margin-left: 5px;
		}
		h5{
			font-size: 14px;
			font-weight: normal;
		}
		.price{
			font-size: 12px;
			color:#f80000;
		}
	}
}
</style>
