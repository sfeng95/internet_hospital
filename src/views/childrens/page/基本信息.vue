<template>
	<div class="基本信息">
		<nut-navbar @on-click-back="this.$common.back" :leftShow="true" :rightShow="true">
			<a slot="more-icon" @click="over">完成</a>基本信息
		</nut-navbar>
		<!-- <label for class="right margin_m">
			<span>设置头像</span>
			<div>
				<span class="head">
					<nut-imagepicker class="select" @imgMsg="imgMsg(imgList1)" :imgList="imgList1"></nut-imagepicker>
					<img :src="Info.headshot" width="100%" alt />
				</span>
			</div>
		</label> -->
		<label for>
			<span>姓名/昵称</span>
			<div>
				<input type="text" placeholder="1-10个字" v-model="user_name" />
			</div>
		</label>
		<label for>
			<span>身份证号码</span>
			<div>
				<input type="text" placeholder="请输入您的身份证号码" v-model="id_card" />
			</div>
		</label>
		<label for>
			<span>性别</span>
			<div id="sex" @click="isVisible = true">{{ sex || "请选择性别" }}</div>
		</label>
		<!-- <label for>
			<span>手机号码</span>
			<div>
				<span class="phone">{{Info.telephone}}</span>
			</div>
		</label> -->

		<nut-picker :is-visible="isVisible" :list-data="listData" @close="switchPicker('isVisible')" @confirm="setValue"></nut-picker>
	</div>
</template>
<script>
	import Axios from "axios";
	export default {
		data() {
			return {
				isVisible: false,
				listData: [
					["女", "男"]
				],
				sexIndex: '',
				user_name: '',
				id_card: '',
				sex: '',
			};
		},
		computed: {
			Info() {
				return this.$store.state.Info
			}
		},
		methods: {
			switchPicker(param) {
				this[`${param}`] = !this[`${param}`];
			},
			setValue(chooseData) {
				this.sex = chooseData[0];
				if (chooseData[0] == "男") {
					this.sexIndex = 1;
				} else {
					this.sexIndex = 0;
				}
			},
			over() {
				const store = this.$store.state.Info;
				if (
					// store.Avatar == "" ||
					this.user_name == "" ||
					this.id_card == "" ||
					this.sex == ""
				) {
					this.$toast.text("请全部填写完成之后提交");
					return
				}
				const that = this;
				that.$post("/users/patient/updateInfo", {
						// headshot: res.url,
						id: store.id,
						realName: this.user_name,
						idCard: this.id_card,
						sex: this.sexIndex,
						// mobile: this.telephone
					})
					.then(function(res) {
						if (res.code == 200) {
							that.$get('/users/patient/findInfo', {
								'myToken': localStorage.getItem('token')
							}).then(function(res) {
								sessionStorage.setItem('isInfo',true)
								that.$store.commit("Info/SET_STATE", res.data);
								that.$router.push({
									name: "index"
								});
							})
						} else {
							that.$toast.text(res.msg);
						}
					})

			}
		}
	};
</script>
<style lang="scss" scoped>
	.select {
		position: absolute;
		opacity: 0;
	}

	/deep/.nav-right {
		color: #86b0ed;
	}

	/deep/.nut-actionsheet-panel {
		border-radius: 25px 25px 0 0;
		overflow: hidden;
	}

	/deep/.nut-picker {
		display: flex;
		flex-direction: column-reverse;
	}

	/deep/.nut-picker-control {
		display: flex;
		justify-content: space-between;
		padding: 0 50px;
		transform: translateY(-10px);
		border: none;
	}

	/deep/.nut-picker-cancel-btn,
	/deep/.nut-picker-confirm-btn {
		width: 140px;
		height: 36px;
		background-color: #5a75f6;
		border-radius: 8px;
		color: #fff;
	}

	/deep/.nut-picker-confirm-btn {
		background-color: transparent;
		font-size: 17px;
		color: #bababa;
	}

	.nut-navbar {
		border-bottom: 1px solid #f3f3f3;
	}

	#sex {
		text-align: right;
		height: 14px;
		width: 100px;
		font-size: 12px;
		color: #757575;
	}

	input {
		outline: none;
		border: none;
		color: #757575;
		text-align: right;
	}

	label {
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 18px;
		border-bottom: 1px solid rgba(227, 227, 227, 0.5);

		span {
			font-family: HiraginoSansGB-W3;
			font-size: 14px;
			font-weight: normal;
			font-stretch: normal;
			line-height: 12px;
			letter-spacing: 0px;
			color: #353535;
		}

		.head {
			position: relative;
			overflow: hidden;
			display: block;
			width: 43px;
			height: 43px;
			background-color: #ededed;
			border-radius: 50%;
		}

		div {

			input,
			span {
				font-size: 12px;
			}
		}
	}

	// label:first-of-type {
	// 	padding: 10px 18px;
	// 	padding-right: 38px;
	// }

	.margin_m {
		margin-bottom: 10px;
	}

	.right::after {
		position: absolute;
		right: 18px;
		content: "";
		display: block;
		width: 10px;
		height: 10px;
		border-radius: 2px;
		border: 2px solid #636363;
		border-bottom: 0;
		border-left: 0;
		transform: rotateZ(45deg);
	}
</style>
