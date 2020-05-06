<template>
	<div class="wz">
		<nut-picker :is-visible="isVisible" :list-data="listData" @close="switchPicker('isVisible')" @confirm="setPatient">
		</nut-picker>
		<nut-navbar @on-click-back="$common.back" :rightShow="false">{{type==1?'极速问诊':'预约问诊'}}</nut-navbar>
		<div class="bg xzjzr" @click="()=>{isVisible = true}">
			<div>
				{{patient.value }}，{{patient.sex}}，{{patient.age}}岁
			</div>
			<div>
				<i class="right"></i>
			</div>
		</div>
		<div class="bg">
			<div>本次咨询目的</div>
			<div class="type">
				<button v-for="(item,index) in mudi" :class="{'active':mudiIndex==index}" @click="mudiIndex = index">{{item}}</button>
			</div>
		</div>
		<div class="bg xzjzr">
			<div>
				就诊记录
			</div>
			<div style="display: flex;font-size: 13px;color:#7c7c7c;">
				请选择需要复诊的就诊记录
				<i class="right"></i>
			</div>
		</div>
		<div class="bg">
			<div>病情描述</div>
			<textarea v-model="description" placeholder="详细描写您的病情症状，曾经做过的检查，用药情况，目前病情加重还是缓解，想要获得医生什么帮助"></textarea>
			<router-link tag="div" to="" class="daoru">历史问诊病情导入</router-link>
		</div>
		<div class="bg">
			<div>病情照片</div>
			<textarea placeholder="拍照上传检查检验单，药品处方，患处照片，如果资料不在手边，可以下单后上传，仅医生可见"></textarea>
			<div class="imgList">
				<div class="list">
					<div class="itemBox" v-for="(item,index) in imgList">
						<em @click="delImg(index)">×</em>
						<div class="imgBox">
							<img @click="showImg(item.src)" :src="item.src" alt="" width="100%">
						</div>
					</div>
				</div>
				<nut-imagepicker :width="80" :height="80" :margin="10" :max="5" :imgList.sync="imgList">
				</nut-imagepicker>
			</div>
		</div>
		<div class="payBox">
			<p>实际支付<span>￥15.00</span></p>
			<button @click="submit()">
				立即支付
			</button>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				type:this.$route.query.type,
				patient:{
					id:'',
					value:'',
					age:'',
					sex:'',
				},
				listData: [],
				isVisible: false,
				mudi: ['首诊', '复诊', '咨询', '拿药'],
				mudiIndex: 0,
				description: '',
				imgList: [{
					"id": 0.5349245413969212,
					"src": "http://img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
				}, {
					"id": 0.5349245413969212,
					"src": "http://img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
				}]
			};
		},
		created() {
			
			this.$get('/users/patient/findPatientList').then(res => {
				let arr = []
				for(let i in res.data){
					arr.push({
						id:res.data[i].id,
						value:res.data[i].realName,
						age:res.data[i].age,
						sex:res.data[i].sexName
					})
				}
				this.listData.push(arr)
				this.patient.id = res.data[0].id
				this.patient.value = res.data[0].realName
				this.patient.age = res.data[0].age
				this.patient.sex = res.data[0].sexName
			})
		},
		methods: {
			delImg(index) {
				this.imgList.splice(index, 1)
			},
			showImg(url) {
				this.$dialog({
					type: "image", //设置弹窗类型为”图片弹窗“
					imgSrc: url, //图片Url
				});
			},
			submit() {
				const that = this
				this.$post('/users/patRegisteredNotPay/add', {
					"doctorId":this.$route.query.id,
					"illnessDescription": this.description,
					"illnessImages": "http://img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg",
					"patientId": this.patient.id,
					"purpose": this.mudiIndex+1,
					"registeredType":this.$store.state.Public.type,
					"relevOrg": 1,
				}).then(res=>{
					if(res.code == 200){
						that.$store.commit('Patients/SET_STATE',that.patient)
						that.$store.commit("Public/SET_STATE", {
							type: that.$route.query.type,
							id: that.$route.query.id
						});
						that.$get('/users/patRegisteredNotPay/payByOrderNo', {
							orderNo:res.data
						}).then(res2=>{
							if(res2.data){
								that.$router.replace({name:'ghcg',query:{
									order:res.data
								}})
							}
						})
					}
				})
			},
			setPatient(chooseData) {
				this.patient.id = chooseData[0].id 
				this.patient.value = chooseData[0].value 
				this.patient.age = chooseData[0].age 
				this.patient.sex = chooseData[0].sex 
			},
			switchPicker(param) {
				this[`${param}`] = !this[`${param}`];
			},
		},

	}
</script>
<style lang="scss" scoped>
	.wz {
		padding-bottom: 50px;
	}

	.payBox {
		display: flex;
		position: fixed;
		height: 60px;
		bottom: 0px;
		background: #fff;
		width: 100%;
		justify-content: space-between;

		p {
			margin-left: 20px;
			display: flex;
			align-items: center;
			font-size: 13px;

			span {
				color: #F20000;
				font-size: 18px;
			}
		}

		button {
			border: none;
			width: 181px;
			height: 100%;
			font-size: 17px;
			color: #fff;
			background-color: #5a75f6;
		}
	}

	/deep/.nut-imagepicker .img-item {
		display: none;
	}

	.imgList,
	.list {
		display: flex;
		flex-wrap: wrap;
	}

	.itemBox {
		.imgBox {
			height: 80px;
			width: 80px;
			box-sizing: border-box;
			border: 1px dashed red;
			border-radius: 5px;
			overflow: hidden;
		}

		position:relative;

		em {
			position: absolute;
			right: 0;
			font-size: 20px;
			display: block;
			height: 25px;
			width: 25px;
			background: rgba(0, 0, 0, .7);
			color: #fff;
			text-align: center;
			line-height: 25px;
			transform: translate(-10px, -10px);
			border-radius: 50%;
		}
	}

	.imgBox,
	/deep/.add-icon {
		border-color: #5A5A5A !important;

		i {
			color: #5A5A5A !important;
		}

		margin: 0 15px 15px 0;
	}

	.bg {
		padding: 20px;
		background: #fff;
		margin-bottom: 10px;

		button {
			color: #5e5e5e;
			border: 1px solid #EFEFEF;
			font-size: 13px;
			border-radius: 50px;
			margin-right: 10px;
			padding: 6px 18px;
			background: #fff;
		}

		button.active {
			color: #5A75F6;
			border-color: #5A75F6;
		}
	}

	.right {
		display: block;
		width: 10px;
		height: 10px;
		border-bottom: 1px solid #333333;
		transform: rotateZ(-45deg);
		border-right: 1px solid #333333;
	}

	.xzjzr {
		border-top: 1px solid rgba(0, 0, 0, .05);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.type {
		margin-top: 20px;

		button {
			font-size: 12px;
		}
	}

	textarea {
		outline: none;
		width: 100%;
		height: 50px;
		border: none;
		margin-top: 10px;
		font-size: 13px;
	}

	.daoru {
		font-size: 14px;
		text-align: right;
	}
</style>
