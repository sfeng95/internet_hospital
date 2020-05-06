<template>
	<div class="shouye">
		<div class="banner">
			<nut-swiper direction="horizontal" :loop="true" :paginationVisible="true">
				<div class="nut-swiper-slide">
					<img src="../../assets/images/banner.png" alt="" width="100%">
				</div>
				<div class="nut-swiper-slide">
					<img src="../../assets/images/banner.png" alt="" width="100%">
				</div>
			</nut-swiper>
		</div>
		<div class="content">
			<search />
			<div class="mainMenu">
				<router-link to="xzks" tag="div">
					<img src="@/assets/icons/急速问诊.png" alt="" height="90px" />
				</router-link>
				<router-link to="xzks" tag="div">
					<img src="@/assets/icons/预约问诊.png" alt="" height="90px" />
				</router-link>
				<router-link to="" tag="div">
					<img src="@/assets/icons/在线续方.png" alt="" height="90px" />
				</router-link>
			</div>
			<router-link to="dz" tag="div" style="margin-bottom: 20px;">
				<img src="@/assets/images/dz.png" alt="" width="100%" />
			</router-link>
			<h5>
				<span>热门科室</span>
			</h5>
			<div class="dept">
				<ul>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/erbiyanhouke.png" alt=""></span>
						<p>耳鼻喉科</p>
					</router-link>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/guke.png" alt=""></span>
						<p>骨科</p>
					</router-link>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/fuchanke.png" alt=""></span>
						<p>妇产科</p>
					</router-link>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/zhongliuke.png" alt=""></span>
						<p>肿瘤科</p>
					</router-link>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/xinnaoxueguan.png" alt=""></span>
						<p>心脑血管</p>
					</router-link>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/neike.png" alt=""></span>
						<p>内科</p>
					</router-link>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/chuanranke.png" alt=""></span>
						<p>传染科</p>
					</router-link>
					<router-link to="" tag="li">
						<span><img src="@/assets/icons/dept/gengduo.png" alt=""></span>
						<p>更多科室</p>
					</router-link>
				</ul>
			</div>
			<h5>
				<span>推荐专家</span>
			</h5>
			<div class="expert">
				<doctor-card v-for="item of 4" class="four" headportrait="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=935827652,73061658&fm=26&gp=0.jpg" name="张泽" level="医师" introduce="临床擅长于中医内科诸病治疗，有很强的临床" />
			</div>
			<h5>
				<span>健康科普</span>
			</h5>
			<div>
				<news-list-card class="newsItem" img="http://img1.imgtn.bdimg.com/it/u=1107046983,2466429220&fm=26&gp=0.jpg" title="空腹能不能吃汤圆？无糖汤圆不无糖汤圆不无糖汤圆不无糖汤圆不“胖人”吗？" content="据说怀孕的时候不能乱吃药，否则会对据说怀孕的时候不能乱吃药，否则会对"
				 date="2020-04-11" v-for="item in list" />
			</div>
		</div>
	</div>
</template>
<script>
	import search from "../../components/search.vue";
	import doctorCard from "../../components/医生卡片.vue";
	import newsListCard from "../../components/新闻列表卡片.vue";
	export default {
		components: {
			search,
			doctorCard,
			newsListCard
		},
		data() {
			return {
				listPage:1,
				listNum:10,
				list:new Array(0),
				isLoad:true
			}
		},
		mounted() {
			this.$emit('monitor', 'index')
			window.addEventListener('scroll', this.scrollLoadMore) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
		},
		methods: {
			scrollLoadMore() {
				const that = this
				const scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
				const clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
				const scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
				if (scr + clientHeight + 10 >= scrHeight) {
					if(that.isLoad){
						that.isLoad = false
						setTimeout(res=>{
							that.list = new Array(that.listPage * that.listNum)
							that.listPage++
							that.isLoad = true
						},200)
					}
				}
			},
		},
	};
</script>
<style scoped>
	/deep/.nut-swiper-pagination {
		transform: translateY(-55px);
	}

	/deep/.swiper-pagination-bullet {
		opacity: .5 !important;
		height: 5px !important;
		width: 5px !important;
	}

	/deep/.swiper-pagination-bullet.active {
		background: #fff !important;
		opacity: .8 !important;
		width: 20px !important;
		border-radius: 50px;
	}
</style>
<style lang="scss" scoped>
	.banner {
		height: 155px;
	}

	.content {
		z-index: 9;
		position: relative;
		padding: 20px 15px;
		background: #fff;
		border-radius: 20px 20px 0 0;

		.mainMenu {
			margin-top: 25px;
			margin-bottom: 20px;
			display: flex;
			justify-content: space-around;
		}

		h5 {
			display: flex;

			span {
				font-size: 16px;
				position: relative;
				margin-left: 9px;
			}

			;

			span:before {
				position: absolute;
				top: 6px;
				left: -9px;
				z-index: -1;
				content: '';
				display: block;
				height: 11px;
				width: 15px;
				background: #b8c3fb;
				border-radius: 3px;
			}
		}

		.expert {
			display: flex;
			flex-wrap: wrap;
			padding-top: 20px;

			.four {
				width: calc((100vw - 45px) / 2);
				margin-bottom: 15px;
			}

			.four:nth-of-type(2n) {
				margin-left: 15px;
			}
		}

		.dept {
			padding: 15px 0;

			ul {
				display: flex;
				flex-wrap: wrap;

				li {
					width: 25%;
					font-size: 13px;
					text-align: center;
					padding: 10px;
					box-sizing: border-box;

					img {
						height: 40px;
					}
				}
			}
		}

		.newsItem {
			border-bottom: 1px solid rgba(0, 0, 0, .05);
		}
	}
</style>
