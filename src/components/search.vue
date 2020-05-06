<template>
	<div class="sc">
		<img class="s" src="../assets/icons/search.png" />
		<input :placeholder="placeholder" />
	</div>
</template>
<script>
	export default {
		props:{
			placeholder:{
				type:String,
				default:'搜索症状、医生、科室'
			}
		}
	};
</script>
<style lang="scss" scoped>
	.sc {
		display: flex;
		width: 100%;
		height: 40px;
		align-items: center;
		justify-content: space-between;
		background-color: #ebecf0;
		border-radius: 50px;
		box-sizing: border-box;
		padding: 0 20px;

		img {
			width: 15px;
			height: 15px;
			margin-right: 10px;
		}

		input {
			background: transparent;
			border: none;
			width: 100%;
		}
	}
</style>
