<template>
	<div id="app">
		<transition name="slide-left">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	export default {
		name: "App",
		created() {
			const that = this
			that.$post('/hospital/user/information', {
					token: localStorage.getItem('token')
				})
				.then(function(res) {
					if (res.code) {
						that.$store.commit("Info/SET_STATE", {
							headshot: that.$api + res.info.headshot,
							user_name: res.info.user_name,
							age: res.info.age,
							id_card: res.info.id_card
						});
					} else {
						that.$toast.text(res.msg)
					}
				})
				.catch(function(res) {
					that.$toast.text('请求失败，请检查网络！')
				})
			//在页面加载时读取sessionStorage里的状态信息
			if (sessionStorage.getItem("store")) {
				this.$store.replaceState(
					Object.assign({},
						this.$store.state,
						JSON.parse(sessionStorage.getItem("store"))
					)
				);
			}
			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload", () => {
				sessionStorage.setItem("store", JSON.stringify(this.$store.state));
			});
		}
	};
</script>
<style scoped>
	#app {
		height: 100vh;
		width: 100vw;
		background-color: #f5f5f5;
		font-family: "Helvetica Neue", Helvetica, sans-serif;
	}

	/deep/.nut-tabbar {
		height: 55px;
		margin: 0;
	}

	/deep/.nav-title {
		font-weight: 500;
	}

	/deep/.nut-menu-panel .selected {
		color: #3399FF !important;
	}

	.slide-left-enter-active,
	.slide-left-leave-active {
		position: fixed;
		top: 0;
		width: 100%;
		transition: all 0.3s;
		background: #f5f5f5;
		height: 100vh;
		width: 100vw;
	}

	.slide-left-enter-active {
		z-index: 99;
	}

	.slide-left-leave-active {
		z-index: 1;
	}

	.slide-left-enter,
	.slide-left-leave-to {
		transform: translateX(100vw);
	}

	.slide-left-leave,
	.slide-left-enter-to {
		transform: translateX(0);
	}
</style>
