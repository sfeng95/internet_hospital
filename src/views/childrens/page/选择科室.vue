<template>
	<div class="yyghks">
		<zqtys></zqtys>
		<nut-navbar @on-click-back="$common.back" :rightShow="false">选择科室</nut-navbar>
		<div class="content">
			<!-- <div class="searchBox">
				<search placeholder="搜索科室"/>
			</div> -->
			<div class="main">
				<div id="title">
					<ul>
						<li :class="index == select_index ? 'selected' : ''" v-for="(item, index) in department" @click="change(index,item.deptType)"
						 :key="index">{{ item.deptType }}</li>
					</ul>
				</div>
				<div id="content">
					<ul>
						<router-link tag="a" :to="{name:'xzys',params:{id:i.hospDeptId}}" v-for="(i, index) in secondary_department" :key="index">
							<li>{{ i.deptName }}</li>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import zqtys from '@/components/知情同意书.vue'
	import search from '@/components/search.vue'
	export default {
		components: {
			search,
			zqtys
		},
		data() {
			return {
				select_index: 0,
				deptType: '',
				department: [],
				secondary_department: [],
			};
		},
		created() {
			const that = this;
			this.$get('/users/hospDept/findByHospital', {
				hospitalId:sessionStorage.getItem('hospid')
			}).then(res => {
				this.department = res.data
				this.deptType = res.data[0].deptType
				this.getChildDept()
			})
		},

		methods: {
			change(index, name) {
				this.select_index = index;
				this.deptType = name
				this.getChildDept()
			},
			getChildDept() {
				this.$get('/users/hospDept/findByParentId', {
					hospId:sessionStorage.getItem('hospid'),
					deptType: this.deptType
				}).then(res => {
					this.secondary_department = res.data
				})
			}
		}
	};
</script>
<style lang="scss" scoped>
	.searchBox {
		padding: 5px 20px;
	}

	.yyghks {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.nut-navbar {
		height: 44px;

		/deep/h3 {
			font-size: 17px;
			font-weight: 500;
		}
	}

	.address {
		font-size: 14px;
		padding-right: 10px;
		flex-shrink: 0;
	}

	.filter {
		height: 40px;
		display: flex;
		margin-top: 10px;
		background: #fff;
	}

	.filter>div {
		width: 50%;
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		border-bottom: 1px solid #eeeeee;
	}

	.filter>div:first-child {
		border-right: 1px solid #eeeeee;
	}

	.filter>div>i {
		height: 10px;
		width: 10px;
		border: 5px solid transparent;
		border-top-color: #b3b3b3;
		transform: translateY(2px);
		margin-left: 5px;
	}

	.hospital_list {
		display: flex;
		align-items: center;
		padding: 22px 15px;
		background-color: white;
		margin-top: 2px;
	}

	.hospital_img {
		width: 80px;
		height: 66px;
		border-radius: 3px;
		flex-shrink: 0;
		margin-right: 10px;
		margin-left: 3px;
	}

	.hospital_img img {
		width: 100%;
		height: 100%;
	}

	.hospital_info {
		width: 100%;
	}

	.hospital_info h4 {
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		color: #353535;
	}

	.hospital_info p {
		display: flex;
		margin-top: 3px;
		font-size: 12px;
		position: relative;
		color: #a8a4a4;
	}

	.yyzy {
		margin-right: 2px;
		font-size: 12px;
	}

	.level {
		display: flex;
		padding: 1px 5px;
		font-size: 10px;
		padding-top: 2px;
		background-color: #15d187;
		border-radius: 3px;
		color: #fff;
	}

	.tags {
		margin-right: 3px;
		font-size: 10px;
		padding: 0 10px;
		border: solid 1px #cfcfcf;
		border-radius: 14px;
	}

	.hospital_address {
		position: absolute;
		right: 0;
	}

	.mui-table-view {
		margin-top: 0px !important;
	}

	.home {
		display: flex;
		justify-content: space-between;
		padding-top: 8px;
	}

	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	ul,
	li {
		list-style: none;
		padding: 0;
		font-size: 12px;
	}

	#title {
		background: #f1f1f1;
	}

	#content {
		background: #fff;
	}

	.main {
		display: flex;
		margin-top: 1px;
	}

	#title {
		width: 29%;
		justify-content: center;
	}

	#content {
		width: 70%;
	}

	#title,
	#content {
		display: flex;
		overflow-y: auto;
		height: 100%;
		box-sizing: border-box;
	}

	ul {
		width: 100%;
		margin: 0;
	}

	.main {
		height: 100%;
	}

	.main li {
		padding: 10px 0;
	}

	#title li {
		text-align: left;
		padding-left: 18px;
	}

	#title li.selected {
		background: #fff;
	}

	#content {
		display: flex;
		flex-direction: column;
	}

	#content ul {
		flex-shrink: 0;
		height: 100%;
	}

	#content {
		display: flex;
		flex-direction: column;
	}

	#content ul {
		height: 100%;
		flex-shrink: 0;
	}

	#content li {
		padding-left: 35px;
	}

	#content a {
		color: #333333;
	}

	.search {
		border-top: 7px solid #f7f7f7;
		display: flex;
		background-color: white;
		padding: 15px 10px 16px 10px;
		align-items: center;
		justify-content: space-between;

		span {
			font-size: 14px;
		}

		img {
			width: 13px;
			height: 13px;
			position: absolute;
			left: 35px;
		}

		input {
			margin-left: 9px;
			height: 29px;
			background-color: #ebecf0;
			border-radius: 15px;
			border: none;
			width: 100%;
			box-sizing: border-box;
			padding-left: 40px;
		}
	}
</style>
