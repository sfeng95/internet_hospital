<template>
	<div class="就诊人管理">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">就诊人管理</nut-navbar>
		<div class="content">
			<div v-for="item in list">
				<span class="imgBox">
					<img src="" alt="">
				</span>
				<div class="info">
					<h4>
						<span>{{item.realName}}</span>
						<span>{{item.sexName}}</span>
						<span>{{item.age}}岁</span>
					</h4>
					<p>证件号码：{{item.idCard}}</p>
				</div>
				<svg class="icon" style="width: 1.5em; height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;"
				 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2642">
					<path d="M 426.667 213.333 h 170.667 v 42.6667 h -170.667 Z M 213.333 298.667 h 597.333 v 42.6667 H 213.333 Z M 725.333 810.667 H 298.667 V 384 H 256 v 469.333 h 512 V 384 h -42.6667 Z"
					 p-id="2643"></path>
					<path d="M 426.667 469.333 h 42.6667 v 256 h -42.6667 Z M 554.667 469.333 h 42.6667 v 256 h -42.6667 Z" p-id="2644"></path>
				</svg>
			</div>
			
			<router-link to="/tjjzr" class="add" tag="div">
				<i>+</i>
				新增就诊人
			</router-link>
			<p>您可累积添加5位就诊人，还可添加3位就诊人</p>
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
			this.$get('/users/patient/findPatientList').then(res=>{
				console.info(res)
				this.list = res.data
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
		align-items: center;
		justify-content: space-between;
		*{
			flex-shrink: 0;
		}
		.imgBox{
			height: 50px;
			width: 50px;
			background:#DADADA;
			display: block;
			overflow: hidden;
			border-radius: 50%;
			margin-right: 10px;
		}
		.info{
			width:100%;
			flex-shrink: 2;
			h4{
				font-weight: normal;
				span{
					margin-right: 10px;
				}
			}
			p{
				font-size: 14px;
				margin-top: 3px;
			}
		}
	}
	.content>p{
		color: #626CA5;
		font-size: 13px;
		margin: 15px;
	}
	.add{
		padding: 12px 15px !important;
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
