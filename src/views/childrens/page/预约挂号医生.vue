<template>
	<div class="xzys">
		<nut-navbar @on-click-back="$common.back" :rightShow="false">选择医生</nut-navbar>
		<div class="时间条">
			<div>
				<p @click="change(0)" :class="select_index === 0 ? 'selected' : ''">
					<span>不限</span>
					<br />
					<span>日期</span>
				</p>
				<p v-for="(item, index) in schedule" :key="index" @click="change(index + 1, item.timestamp)" :class="select_index === index + 1 ? 'selected' : ''">
					<span>{{ item.date }}</span>
					<br />
					<span>{{ item.week }}</span>
				</p>
			</div>
		</div>
		<div class="content">
			<div class="content1">
				<p>专家筛选</p>
				<nut-icon type="down"></nut-icon>
				<search />
			</div>
			<div class="content2">
				<ul>
					<router-link tag="li" :to="{
						  name: 'ysxq',
						  params: {
							id: item.id
						  }
						}"
					 v-for="(item, index) in doctor_list" :key="index">
						<div class="img_box">
							<img :src="$api + item.thumb" />
						</div>
						<div class="right">
							<div class="top">
								<p>
									<span>{{ item.name }}</span>
									<span>专家</span>
								</p>
								<p>重庆医科大学附属儿童医院</p>
							</div>
							<div class="down">
								<p>
									擅长：高血压、冠心病、心血管疾病、胸闷、糖尿病、感冒、胸闷、心悸、高血脂
								</p>
								<!-- <div class="yuyue">
                  <span>09.15</span>
                  <span>上午</span>
                  <span>专家门诊</span>
                  <span>19元</span>
                  <router-link tag="span"
                               :to="'/ghxx'">预约(余15)</router-link>
                </div> -->
							</div>
						</div>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import search from "../../../components/search.vue";
	export default {
		components: {
			search: search
		},
		data() {
			return {
				schedule: [],
				Date: new Date(),
				select_index: 0,
				doctor_list: ""
			};
		},

		created() {
			//更改this指向
			const that = this;

			for (let a = 0; a < 7; a++) {
				let sj = new Date(that.Date.getTime() + 3600 * 24 * 1000 * a);
				const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
				that.schedule.push({
					//getDay() 得到今天星期几 但是：0-6
					week: week[sj.getDay()],
					date: `${sj.getMonth() + 1}-${sj.getDate()}`,
					//前端的时间戳为毫秒时间戳 后端为秒的时间戳 所以我们传给后端数据时 需要除以1000
					timestamp: Math.floor(sj.getTime() / 1000)
				});
			}
			that.loading = that.$toast.loading("加载中...");
			that.$axios
				.post(that.$api + "/hospital/specialist/list", {
					institution_id: 2
				})
				.then(function(res) {
					console.log(res);
					if (res.data.code) {
						that.doctor_list = res.data.doctor;
						that.loading.hide();
					}
				})
				.catch(function(res) {
					// 请求失败处理
					console.log(res);
					that.$toast.text("请求失败，请检查网络！");
					that.loading.hide();
				});
		},
		methods: {
			change(index, timestamp) {
				const that = this;
				that.select_index = index;
				that.loading = that.$toast.loading("加载中...");
				that.$axios
					.post(this.$api + "/hospital/specialist/list", {
						time: timestamp,
						institution_id: 2
					})
					.then(function(res) {
						console.log(res);
						if (res.data.code) {
							that.doctor_list = res.data.doctor;
							that.loading.hide();
						}
					})
					.catch(function(res) {
						// 请求失败处理
						console.log(res);
						that.$toast.text("请求失败，请检查网络！");
						that.loading.hide();
					});
			}
		}
	};
</script>
<style lang="scss" scoped>
	.nut-navbar {
		height: 44px;

		/deep/h3 {
			font-size: 17px;
			font-weight: 500;
		}
	}

	ul,
	li {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.时间条 {
		background: #fff;
		overflow-x: scroll;

		margin-bottom: 7px;

		div {
			display: flex;

			p {
				display: flex;
				padding: 7px 5px;
				text-align: center;
				font-size: 14px;
				display: block;
				flex-shrink: 0;
				margin: 0 10px;

				span:nth-child(3) {
					font-size: 10px;
				}
			}

			p:first-of-type {
				span {
					line-height: 10px;
					font-size: 14px;
				}
			}

			p.selected {
				border-bottom: 1.5px solid #5a75f6;
				color: #5a75f6;
			}
		}
	}

	.content {
		margin-top: 7px;
	}

	.content1 {
		display: flex;
		align-items: center;
		padding: 10px 15px 10px 15px;
		background-color: white;

		.nut-icon {
			height: 7px;
			width: 11px;
			padding-left: 5px;
		}

		p {
			flex-shrink: 0;
			font-size: 14px;
			padding-left: 1px;
		}

		/deep/.s {
			left: 110px;
		}
	}

	.content2 {
		padding: 1px 0px 0 15px;
		background-color: white;
	}

	.content2 ul {
		border-bottom: 1px solid #ebebeb;
	}

	.content2 ul li {
		display: flex;
		padding: 15px 0 16px 0;

		.right {
			margin-left: 10px;
			width: 100%;

			.top {
				border-bottom: 1px solid #e3e3e3;

				p:nth-child(2) {
					font-size: 11px;
					color: #767676;
					margin-top: 7px;
					margin-bottom: 10px;
				}

				p {
					font-size: 14px;

					span:nth-child(2) {
						font-size: 9px;
						color: #ffffff;
						background-color: #bbc6fb;
						border-radius: 9px;
						padding: 2px 5px;
						margin-left: 4px;
					}
				}
			}

			.down {
				padding-right: 15px;

				p {
					font-size: 11px;
					color: #9b9b9b;
					margin-top: 10px;
					margin-bottom: 15px;
				}

				.yuyue {
					width: 100%;
					background-color: #f4f4f4;
					border-radius: 12px;
					display: flex;
					justify-content: space-between;
					padding-left: 15px;
					box-sizing: border-box;

					span {
						line-height: 28px;
						font-size: 12px;
						color: #5a5a5a;
					}

					span:last-child {
						background-color: #5a75f6;
						border-radius: 0 12px 12px 0;
						padding-right: 15px;
						padding-left: 15px;
						color: white;
					}

					span:nth-child(2) {
						position: relative;
						right: 10px;
					}
				}
			}
		}

		.img_box {
			height: 48px;
			width: 48px;
			border-radius: 50%;
			overflow: hidden;
			flex-shrink: 0;

			img {
				width: 100%;
			}
		}
	}
</style>
