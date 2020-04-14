<template>
	<div class="doctorInfo">
		<div class="头像">
			<img src="" alt="" width="100%">
		</div>
		<div>
			<div class="Infotop">
				<div>
					<div class="zhiwei">
						<h4>xx医生</h4><span>副主任医师</span>
					</div>
					<p>24小时内交流不限次数</p>
				</div>
				<div>
					<button><i></i>咨询</button>
				</div>
			</div>
			<div class="Infobottom">
				<p class="gl">接诊率:<span>99%</span>好评率:<span>99%</span>问诊量:<span>123123</span></p>
				<p class="good_at">擅长爱神的箭卡号就是等哈就是大家看见肯定会阿贾克斯电话卡后就开始电话卡就</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.doctorInfo {
		background: #fff;
		display: flex;
		padding: 20px 15px;
		border-bottom: 1px solid #efefef;

		.头像 {
			background: #DADADA;
			height: 40px;
			width: 40px;
			border-radius: 50%;
			flex-shrink: 0;
			margin-right: 15px;
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
				font-size: 10px;
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
