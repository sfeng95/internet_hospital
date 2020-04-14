<template>
	<div class="知情同意书" v-if="show">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">知情同意书</nut-navbar>
		<div class="content">
			<h5>
				尊敬的患者朋友：
			</h5>
			<p>欢迎您来互联网医院就诊，感谢您对我们的信任。为加强医患双方的理解和信任，建立起良好的协作关系，取得最佳的诊疗效果，院方要求线上医护人员、每位患者及家属都要遵守基本的社会道德规范，维护正常的医患关系，互相监督，共同履行如下条款：</p>
			<p>1.线上医护人员保证恪守职业道德，维护患者的知情权、隐私权，耐心解答疑问，做好与患者之间的沟通，决不推诿、刁难、敷衍患者。线上医生基于临床诊断要求、国家互联网医院管理办法要求、以及规范化诊疗要求，需通过信息化平台调取患者本人既往病例、诊断、用药信息等数据。
			</p>
			<p>2.线上医生保证发扬良好的医德医风，严格执行各项技术操作规范、病历书写规范，保证工作质量。
			</p>
			<p>3.线上医生不得超出执业范围、执业诊疗科目，不开与病情不符的药品和虚假证明。儿科医生和产科医生只对在实体医院就诊后3天以内的复诊患者进行互联网诊疗。其他科室对在对在实体医院就诊后30天以内的复诊患者进行互联网诊疗。如患者出现跨科室挂号行为，医生有权拒绝提供诊疗服务。互联网复诊病种为：
				孕产保健：
			</p>
			<p>（1）孕前和产前遗传咨询
			</p>
			<p>（2）孕期营养
			</p>
			<p>（3）绿色管理的孕产妇产前检查三天内复诊及复诊预约，包括对实体医院检验报告单和超声报告单的判读，开具进一步检验检查单和处方，提出指导和意见，确定实体医院复诊时间
				妇科、妇女保健：
				儿童保健：
				中医科：
			</p>
			<p>4.线上医生拒绝回复的问题，包括但不限于如下情况：
			</p>
			<p>（1）非健康类问题，如社会意识形态问题等；
			</p>
			<p>（2）医疗司法举证或询证问题；
			</p>
			<p>（3）胎儿性别鉴定问题；
			</p>
			<p>（4）未按提问要求提问，如提问时未指定医生，却要求具体医生回复；
			</p>
			<p>（5）有危害他人/自己的问题；
			</p>
			<p>（6）追问医生个人信息的问题；
			</p>
			<p>（7）故意挑逗、侮辱医生的提问。
			</p>
			<p>5.线上就诊时患者个人信息登记完整且保证真实，否则承担由此引发的不良后果。
			</p>
			<p>6.线上就诊时您应如实向问诊医生提供您的健康状况，如您曾患疾病的诊疗过程、过敏史等详细情况，并如实陈述病情，积极配合医生完成治疗。
			</p>
			<p>7.6岁以下儿童只有在监护人和社区卫生中心医生一起在场的情况下方能获得互联网用药处方。为了保证您的用药质量和用药安全，必须使用本院指定的医药公司配送的药品。服药过程中若出现不良反应，及时联系就诊医生，请勿随意停药或加减用量，谨遵医嘱。
			</p>
			<p>8.互联网诊疗发生的诊疗检验类费用如需退款，需到实体医院的门诊部处理退费。患者选择药品配送到指定地点服务时，非质量原因不予退换。患者自主选择到药店取药时，如患者在医生开具处方及药品订单生成之日起72小时内未取药可退款同时此次诊疗处方失效，不可再次使用。退款需要在患者自主选择的实体药店领取。故在支付前请确认需求，以免退款带来不便。
				阅读完以上内容，如若没有异议，请认真遵守，感谢您对我院各项工作的理解和配合，衷心祝您早日康复！
			</p>
				<button @click="close()">我已阅读并同意</button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show:false
			}
		},
		created(){
			if(sessionStorage.getItem('zhiqingtongyishu')!='true'){
				this.show=true
			}else{
				this.show=false
			}
		},
		methods:{
			close(){
				this.show=false
				sessionStorage.setItem('zhiqingtongyishu',true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.知情同意书{
		position: fixed;
		width: 100%;
		background:#f5f5f5;
		z-index: 995;
		height: 100%;
		display:flex;
		flex-direction: column;
		.content{
			height: 100%;
			overflow-y: auto;
		}
	}
	h5,
	p {
		padding: 0 15px;
	}

	h5 {
		font-size: 15px;
		font-weight: normal;
		line-height: 34px;
		letter-spacing: 0px;
		color: #353535;
	}

	p {
		text-indent: 2em;
		font-size: 12px;
		font-weight: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #828282;
	}
	
	button{
		margin:50px auto 20px auto;
		display: block;
		width: 90%;
		height: 45px;
		background-color: #5a75f6;
		border-radius: 23px;
		font-size: 15px;
		font-weight: normal;
		letter-spacing: 0px;
		color: #ffffff;
		border: none;
	}
	
</style>
