<template>
	<div class="包裹">
		<router-view class="内容" @monitor='change' />
		<div class="tabber">
			<router-link to="/index" tag="div" class="tab_item" :class="{'active':tab_index == 0}" replace>
				<div>
					<img src="@/assets/icons/tabbar/index.png" alt="">
				</div>
				<p>首页</p>
			</router-link>
			<router-link to="/wzlb" tag="div" class="tab_item" :class="{'active':tab_index == 1}" replace>
				<div>
					<img src="../assets/icons/tabbar/zxkf.png" alt="">
				</div>
				<p>我的</p>
			</router-link>
			<router-link to="/mine" tag="div" class="tab_item" :class="{'active':tab_index == 2}" replace>
				<div>
					<img src="@/assets/icons/tabbar/mine.png" alt="">
				</div>
				<p>我的</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab_index: 0,
			};
		},
		created() {
			const that = this
			console.info(123)
			if (localStorage.getItem('token') != null) {
				this.$get('/users/patient/findInfo', {
						'myToken': localStorage.getItem('token')
					})
					.then(function(res) {
						if (res.data.realName == null || res.data.idCard == null || res.data.sex == null) {
							sessionStorage.setItem('isInfo', false)
						} else {
							sessionStorage.setItem('isInfo', true)
							that.$store.commit("Info/SET_STATE", res.data);
						}
					})
			}
		},
		methods: {
			change(data) {
				switch (data) {
					case 'index':
						this.tab_index = 0
						break;
					case 'wzlb':
						this.tab_index = 1
						break;
					case 'mine':
						this.tab_index = 2
						break;
					default:
						break;
				}
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.包裹 {
		width: 100%;
		height: 100%;

		.内容 {
			overflow-y: auto;
			box-sizing: border-box;
			padding-bottom: 50px;
		}

		.tabber {
			height: 50px;
			display: flex;
			position: fixed;
			background: #fff;
			bottom: 0;
			width: 100%;
			z-index: 99;
			justify-content: space-between;

			.tab_item {
				height: 100%;
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				img {
					width: 25px;
				}

				p {
					font-size: 12px;
					color: #a1a1a1;
				}
			}

			.tab_item.active {
				img {
					filter: drop-shadow(2000px 0 0 #5A75F6);
					transform: translateX(-2000px);
				}

				p {
					font-weight: bold;
					color: #5A75F6;
				}
			}
		}
	}
</style>
