<template>
	<div class="doctorInfo">
		<div class="头像">
			<img :src="headImage" alt="" width="100%">
		</div>
		<div style="width: 100%;">
			<div class="Infotop">
				<div>
					<div class="zhiwei">
						<h4>{{realName}}</h4><span>{{qualifications}}</span>
					</div>
				</div>
				<div v-if="showButton">
					<router-link tag="button" :to="link" ><i></i>坐诊中</router-link>
				</div>
			</div>
			<div class="Infobottom" v-if="showInfo">
				<p class="gl">接诊率:<span>99%</span>好评率:<span>99%</span>问诊量:<span>123123</span></p>
				<p class="good_at">{{introduce}}</p>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			headImage:{
				type:String,
				default:''
			},
			showButton:{
				type:Boolean,
				default:true
			},
			showInfo:{
				type:Boolean,
				default:true
			},
			realName:{
				type:String
			},
			qualifications:{
				type:String
			},
			introduce:{
				type:String
			},
			link:{
				default:''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.doctorInfo {
		background: #fff;
		display: flex;
		padding:20px;
		border-bottom: 1px solid #efefef;

		.头像 {
			background: #DADADA;
			height: 40px;
			width: 40px;
			border-radius: 50%;
			flex-shrink: 0;
			margin-right: 15px;
			overflow: hidden;
		}

		.Infotop {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.zhiwei {
				display: flex;
				align-items: flex-end;
				h4 {
					font-size: 15px;
					font-weight: normal;
					color: #0e0e0e;
					margin-right: 5px;
				}
				span {
					font-size: 12px;
					font-weight: normal;
					color: #323232;
				}
			}

			p {
				font-size: 12px;
				font-weight: normal;
				color: #0e0e0e;
			}

			button {
				background-color: #ffffff;
				border-radius: 13px;
				border: solid 1px #5a75f6;
				padding: 5px 15px;
				border-radius: 50px;
				display: flex;
				align-items: center;
				font-size: 12px;
				color: #5a75f6;
				
				i {
					display: block;
					width: 6px;
					height: 6px;
					background-color: #18bd3b;
					border-radius: 50%;
					margin-right: 5px;
				}
			}
		}
		.Infobottom{
			.gl{
				font-size: 11px;
				font-weight: normal;
				color: #959595;
				padding: 5px 0;
				span{
					font-size: 10px;
					font-weight: normal;
					letter-spacing: 0px;
					color: #237efd;
					padding: 0px 3px;
				};
			}
			.good_at{
				font-size: 12px;
				letter-spacing: 0px;
				color: #7c7c7c;
			}
		}
	}
</style>
