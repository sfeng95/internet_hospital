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
		},
		mounted() {
			sessionStorage.setItem("hospid",1);
			const that = this
			if(localStorage.getItem('token')!=null){
				this.$get('/users/patient/findInfo',
					{
						'myToken':localStorage.getItem('token')
					}
				)
				.then(function(res) {
					if(res.data.realName == null || res.data.idCard == null || res.data.sex == null){
						sessionStorage.setItem('isInfo',false)
					}else{
						sessionStorage.setItem('isInfo',true)
						that.$store.commit("Info/SET_STATE",res.data);
					}
				})
			}
		}
	};
</script>
<style scoped>
	#app {
		height: 100vh;
		width: 100vw;
		background-color: #f1f1f1;
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
		transition: all .2s;
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
	.slide-left-leave-to 
	{
		transform: translateX(100vw);
	}

	.slide-left-leave,
	.slide-left-enter-to 
	{
		transform: translateX(0);
	}
	
	/* .fade-enter-active,
	.fade-leave-active {
		position: fixed;
		top: 0;
		transition: all 7s;
		background: #f5f5f5;
		height: 100vh;
		width: 100vw;
	}
	
	.fade-enter-active {
		z-index: 99;
	}
	
	.fade-leave-active {
		z-index: 1;
	}
	
	.fade-enter,
	.fade-eave-to {
		transform: translateY(100vh);
	}
	
	.fade-leave,
	.fade-enter-to {
		transform: translateY(0);
	} */

	
</style>
