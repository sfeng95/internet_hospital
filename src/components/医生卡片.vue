<template>
	<div class="新闻列表">
		<div class="info">
			<div class="imgBox"><img :src="headportrait" alt="" width="100%"></div>
			<div>
				<h6>{{name}}</h6>
				<p>{{level}}</p>
			</div>
		</div>
		<p class="introduce">{{introduce}}</p>
	</div>
</template>

<script>
	export default{
		props:{
			"headportrait":String,
			"name":String,
			"level":String,
			"introduce":String,
		},
	}
</script>

<style lang="scss" scoped>
	.新闻列表 {
		padding: 10px;
		background: #f4f5f7;
		border-radius: 5px;
		box-sizing: border-box;

		.info {
			display: flex;
			align-items: center;
			.imgBox {
				overflow: hidden;
				width: 35px;
				height: 35px;
				background: #2D2D2D;
				border-radius: 50%;
				margin-right: 5px;
			}

			h6 {
				font-size: 14px;
				font-weight: normal;
			}

			p {
				font-size: 13px;
				color: #8e8e8e;
			}
		}

		.introduce {
			padding-top: 10px;
			color: #858688;
			font-size: 13px;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
</style>