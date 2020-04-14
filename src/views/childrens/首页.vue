<template>
	<div class="shouye">
		<search />
		<nut-swiper :paginationVisible="true" direction="horizontal" :swiperData="dataImgItem" :loop="true" ref="demo1">
			<div v-for="(item, index) in dataImgItem" :key="index" class="nut-swiper-slide">
				<div class="首页轮播">
					<!-- <img :src="item.imgSrc" alt /> -->
					<img src="@/assets/images/banner1.jpg" alt="">
				</div>
			</div>
		</nut-swiper>
		<div class="content1">
			<div class="c1">
				<div class="c11">
					<img src="@/assets/icons/index_menu.png" />
					<h3>智能导诊</h3>
					<p>快速找到对症专家</p>
				</div>
				<router-link tag="div" :to="'/yygh'" class="c11">
					<img src="@/assets/icons/index_menu (2).png" />
					<h3>预约挂号</h3>
					<p>预约看病免排队</p>
				</router-link>
				<router-link tag="div" :to="'/jswz'" class="c11">
					<img src="@/assets/icons/index_menu (3).png" />
					<h3>极速问诊</h3>
					<p>三甲专家在线免等待</p>
				</router-link>
			</div>
			<div class="c2">
				<img src="@/assets/images/zyd.png" />
				<img src="@/assets/images/mydpj.png" />
			</div>
		</div>
		<div class="content2">
			<h4><img src="@/assets/icons/jkkp.png" height="16px" />健康科普</h4>
			<ul>
				<router-link tag="li" :to="'/jkkp'" v-for="(item, index) in newList" :key="index">
					<h5>{{ item.title }}</h5>
					<div class="content">
						<span>{{ item.description }}</span>
						<img v-if="item.news_img != null" :src="$api + item.news_img" />
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	import search from "../../components/搜索框.vue";
	export default {
		components: {
			search
		},
		data() {
			return {
				dataImgItem: [],
				newList: []
			};
		},
		created() {
			const that = this
			this.$post(
				'/hospital/news/list'
			).then(function(res){
				if (res.code) {
					that.newList = res.data.data;
				}
			})
		},
		mounted() {
			this.$emit('monitor', 'index')
			setTimeout(() => {
				this.dataImgItem = [{
						// imgSrc: '../../src/assets/images/banner1.jpg'
					},
				];
			}, 300);
		},
		methods: {}
	};
</script>
<style lang="scss" scoped>
	/deep/.nut-swiper {
		height: 195px;
	}

	.首页轮播 {
		width: 100%;
		height: 100%;
		padding: 6px 12px 24px 12px;
		box-sizing: border-box;
		background-color: white;
		img {
			box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
		}
	}

	.首页轮播 img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	.ut-swiper-slide-selected {
		width: 20px;
	}

	/deep/.nut-swiper-pagination>.swiper-pagination-bullet {
		height: 5px;
		width: 5px;
	}

	/deep/.nut-swiper-pagination>.active {
		border-radius: 10px;
		width: 15px;
	}

	/deep/.nut-swiper-pagination {
		position: relative;
		top: -24px;
	}

	/deep/.nut-swiper horizontal {
		background-color: white;
	}

	.content1 {
		margin-top: 11px;
		background-color: white;
		padding: 17px 12px 23px 12px;
	}

	.c1 {
		display: flex;
		justify-content: space-between;
		text-align: center;

		p {
			font-size: 11px;
			color: rgba(153, 153, 153, 1);
		}

		h3 {
			font-size: 18px;
			color: rgba(38, 38, 38, 1);
			font-weight: 300;
		}

		img {
			height: 58px;
		}
	}

	.c2 {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;

		img {
			width: 48%;
			height: 100%;
		}
	}

	.content2 {
		background-color: white;
		margin-top: 7px;
		padding: 17px 12px 0 12px;
	}

	.content2 {
		padding: 10px;
		background: #fff;
		margin-top: 10px;
		box-sizing: border-box;
	}

	.content2 h4 {
		display: flex;
		align-items: center;
		font-size: 15px;
		font-weight: normal;
		font-stretch: normal;
	}

	.content2 h4 img {
		margin-right: 5px;
	}

	.content2 h5 {
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		color: rgba(53, 53, 53, 1);
	}

	.content2 ul {
		margin: 0;
	}

	.content2 ul li {
		padding: 10px 0;
		border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
	}

	.content {
		display: flex;
		align-content: center;
		justify-content: space-between;
	}

	.content img {
		width: 30%;
		height: 100%;
	}

	.content span {
		display: flex;
		/* align-items: center; */
		font-size: 13px;
		margin-right: 10px;
		font-weight: normal;
		font-stretch: normal;
		color: rgba(124, 124, 124, 1);
	}
</style>
