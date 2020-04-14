<template>
	<div class="login">
		<nut-navbar :rightShow="false" @on-click-back="$router.push('/index')">
			<a slot="back-icon">
				<font size="6">×</font>
			</a>登录
		</nut-navbar>

		<div class="mui-content">
			<div class="header">
				<h2>验证码登录</h2>
				<p>验证即登录，未注册将自动创建账号</p>
				<label class="input">
					<span>+86</span>
					<input type="number" name="telephone" placeholder="请输入手机号" v-model="phone" />
					<a @click="sendMsg" v-show="time > 60">获取验证码</a>
					<a v-show="time <= 60">{{ time }}秒后重新发送</a>
				</label>
				<label class="input">
					<input type="number" name="telephone" placeholder="请输入验证码" v-model="code" />
				</label>
				<p class="agreement">
					登录代表同意
					<a href>城银互联网医院服务协议</a>
				</p>
				<div class="dl" @click="login">
					<span>登录</span>
				</div>
			</div>
			<div class="wechat">
				<p>
					<span>快速登录</span>
				</p>
				<div style="filter: grayscale(1)">
					<img src="../../../assets/icons/weixin.png" width="40px" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				phone: "",
				code: "",
				time: 61,
				dsq: null
			};
		},
		methods: {
			sendMsg() {
				const that = this;
				const phone_ = /^(13[0-9]|14[5|7]|15[0-9]|16[0-9]|17[0-9]|18[0-9])\d{8}$/;

				if (that.phone == "" || that.phone == null) {
					that.$toast.text("手机号不能为空");
					return;
				}
				if (!phone_.test(that.phone)) {
					that.$toast.text("手机号格式错误");
					return;
				}
				this.$post(
					'/hospital/send/message', {
						phone: that.phone,
						type: 1
					}
				).then(function(res) {
					if (res.code) {
						that.$toast.text("验证码发送成功");
						that.time--;
						that.dsq = setInterval(() => {
							that.time--;
							if (that.time <= 0) {
								clearInterval(that.dsq);
								that.dsq = null;
								that.time = 61;
							}
						}, 1000);
					}
				})
			},
			login() {
				const that = this;
				if (that.phone == "" || that.phone == null) {
					that.$toast.text("手机号不能为空");
					return;
				}
				if (that.code == "" || that.code == null) {
					that.$toast.text("验证码不能为空");
					return;
				}

				this.$post("/hospital/login", {
						telephone: that.phone,
						code: that.code,
						password: ""
					})
					.then(function(res) {
						console.log(res);
						if (res.code) {
							localStorage.setItem("token", res.token);
							that.$store.commit("Info/SET_STATE", {
								telephone: that.phone
							});
							that.$post("/hospital/user/check", {
									token: res.token
								})
								.then(function(res) {
									console.log(res);
									if (res.code) {
										localStorage.setItem("is_new", res.is_new);
										localStorage.setItem("is_patient", res.is_patient);
									}
								})
								.catch(function(res) {
									console.log(res);
								});
							that.$router.push({
								name: "mine"
							});
						}
					})
					.catch(function(res) {
						// 请求失败处理
						console.log(res);
					});
			}
		}
	};
</script>
<style lang="scss" scoped>
	.login {
		height: 100%;
	}

	.nut-navbar {
		height: 44px;

		/deep/h3 {
			font-size: 17px;
			font-weight: 500;
		}
	}

	h2 {
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		color: #353535;
	}

	.mui-content {
		background: #fff;
		height: calc(100% - 44px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.mui-content>div {
		padding: 30px;
	}

	.input {
		display: flex;
		font-size: 14px;
		color: #7b7b7b;
		align-items: center;
		padding: 17px 0;
		border-bottom: 1px solid #eeeeee;
	}

	.input:first-of-type {
		margin-top: 25px;
	}

	.input>span {
		flex-shrink: 0;
		border-right: 1px solid #ececec;
		line-height: 14px;
		padding-right: 10px;
	}

	.input>input {
		width: 100%;
		margin: 0;
		border: none;
		font-size: 14px;
	}

	.input>a {
		flex-shrink: 0;
	}

	.agreement {
		padding: 34px 0;
		color: #5a5a5a;
		font-size: 13px;

		a {
			color: #5a75f6;
		}
	}

	.wechat {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		bottom: 0px;
		padding: 0 30px 30px 30px;
		box-sizing: border-box;

		img {
			margin-top: 10px;
		}
	}

	.wechat p {
		font-size: 12px;
		width: 100%;
		text-align: center;
		position: relative;
	}

	.wechat p span {
		background: #fff;
		position: relative;
		z-index: 2;
		padding: 0 10px;
	}

	.wechat p:after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background: #eee;
		position: absolute;
		top: 10px;
		z-index: 0;
	}

	header {
		box-shadow: none !important;
	}

	.mui-icon-closeempty {
		font-size: 35px !important;
		padding-top: 5px !important;
	}

	.input {
		input:nth-child(2) {
			padding-left: 11px;
		}
	}

	.header {
		p {
			color: #5a5a5a;
		}

		h2 {
			padding-bottom: 11px;
		}
	}

	.dl {
		width: 100%;
		height: 37px;
		background-color: #5a75f6;
		text-align: center;
		line-height: 37px;
		border-radius: 20px;
		color: white;

		span {}
	}

	.input {
		a:nth-child(3) {
			color: #5a75f6;
			padding-left: 20px;
		}
	}
</style>
