<template>
	<div class="新闻列表">
		<div class="info">
			<div>
				<h6 class="title"><span><img src="@/assets/icons/hot.png" alt="" v-if="sign"></span>{{title}}</h6>
				<p class="content">{{content}}</p>
				<p class="date">{{date}}</p>
			</div>
			<div class="imgBox"><img :src="img" alt="" width="100%"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			"sign": Boolean,
			"img": String,
			"title": String,
			"content": String,
			"date": String,
		},
	
	}
</script>

<style lang="scss" scoped>
	.新闻列表 {
		padding:15px 0;
		border-radius: 5px;
		box-sizing: border-box;

		.info {
			display: flex;

			.imgBox {
				overflow: hidden;
				flex-shrink: 0;
				width: 110px;
				height: 80px;
				background: #2D2D2D;
				border-radius: 10px;
				margin-left: 5px;
			}

			h6 {
				font-size: 14px;
				font-weight: normal;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			p {
				font-size: 13px;
				color: #8e8e8e;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				line-clamp: 1;
				-webkit-box-orient: vertical;
				margin-top: 5px;
			}
		}

	}
</style>
