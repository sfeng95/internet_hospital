<template>
	<div class="就诊人管理">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">我的消息</nut-navbar>
		<div class="content">
			<p>2019-07-19</p>
			<div>
				<span class="imgBox">
					<img src="@/assets/icons/xx.png" alt="" width="100%">
				</span>
				<div class="info">
					<h4>
						订单提醒
					</h4>
					<p>就诊医生：张小龙</p>
					<p>就诊时间：2020-03-04</p>
				</div>
			</div>
			<p>2019-07-19</p>
			<div>
				<span class="imgBox">
					<img src="@/assets/icons/xx.png" alt="" width="100%">
				</span>
				<div class="info">
					<h4>
						订单提醒
					</h4>
					<p>您的药品订单超时未支付，订单已取消</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		// name: 'SurePay'
		data(){
			return{
				list:[]
			}
		},
		created(){
			this.$post('/users/patient/findPatientList').then(res=>{
				console.info(res)
			})
		}
	}
</script>

<style lang="scss" scoped>
.就诊人管理{
	
	.content>div{
		background: #fff;
		margin: 10px 15px;
		padding: 20px 15px;
		border-radius: 10px;
		overflow: hidden;
		display:flex;
		justify-content: space-between;
		*{
			flex-shrink: 0;
		}
		.imgBox{
			height: 35px;
			width: 35px;
			display: block;
			overflow: hidden;
			border-radius: 50%;
			margin-right: 10px;
		}
		.info{
			width:100%;
			flex-shrink: 2;
			h4{
				font-size: 14px;
				font-weight: normal;
				span{
					margin-right: 10px;
				}
			}
			p{
				font-size: 12px;
				margin-top: 3px;
				opacity: .8;
			}
		}
	}
	.content>p{
		font-size: 13px;
		margin: 15px;
		text-align: center;
		opacity: .6;
	}
	.add{
		padding: 10px 15px !important;
		justify-content: flex-start !important;
		font-size: 14px;
		i{
			display: inline-block;
			border: 1px solid rgba(0,0,0,.5);
			height: 20px;
			width: 20px;
			line-height: 20px;
			text-align: center;
			font-size: 20px;
			border-radius: 50%;
			opacity: .3;
			margin-right: 10px;
		}
	}
}
</style>
