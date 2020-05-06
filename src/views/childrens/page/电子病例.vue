<template>
	<div class="就诊人管理">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">电子病例</nut-navbar>
		<div class="content">
			
			<div v-for="item in list">
				<div class="infoTop">
					<div class="info">
						<h4>
							<span>{{item.patientName}}</span>
							<span>{{item.departmentName}}</span>
						</h4>
						<p>就诊医生：{{item.doctorName}}</p>
						<p>诊断结果：{{item.preliminaryDiagnosis}}</p>
					</div>
					<span class="time">
						{{item.createdTime}} {{item.registeredType==1?'极速问诊':'预约问诊'}}
					</span>
				</div>
				<div class="infoBottom">
					<svg class="icon" style="width: 1.5em; height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;"
					 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2642">
						<path d="M 426.667 213.333 h 170.667 v 42.6667 h -170.667 Z M 213.333 298.667 h 597.333 v 42.6667 H 213.333 Z M 725.333 810.667 H 298.667 V 384 H 256 v 469.333 h 512 V 384 h -42.6667 Z"
						 p-id="2643"></path>
						<path d="M 426.667 469.333 h 42.6667 v 256 h -42.6667 Z M 554.667 469.333 h 42.6667 v 256 h -42.6667 Z" p-id="2644"></path>
					</svg>
					<button>查看详情</button>
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
			this.$post('/users/patCaseHistory/pageList',{}).then(res=>{
				this.list = res.data.records
			})
		}
	}
</script>

<style lang="scss" scoped>
.就诊人管理{
	.infoTop{
		display: flex;  
		width: 100%;
		justify-content: space-between;
	}
	.time{
		font-size: 12px;
		opacity: .5;
	}
	.infoBottom{
		padding-top:10px;
		margin-top: 10px;
		border-top: 1px solid rgba(0,0,0,.05);
		display: flex;
		justify-content: space-between;
		button{
			font-size: 12px;
			padding: 1px 8px;
			border-radius: 3px;
			background: #5A75F6;
			color: #fff;
			border: none;
		}
	}
	.content>div{
		background: #fff;
		margin: 10px 15px;
		padding: 20px 15px;
		border-radius: 5px;
		overflow: hidden;
		display:flex;
		flex-direction: column;
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
				opacity: .8;
				margin-top: 10px;
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
