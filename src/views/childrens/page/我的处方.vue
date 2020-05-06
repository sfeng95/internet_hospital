<template>
	<div id="我的处方">
		<nut-navbar 
		    @on-click-back="$common.back" 
		    :leftShow="true" 
		    :rightShow="false"
		>我的处方</nut-navbar>
		
		<div class="list">
			<ul class="item" v-for="item of 30">
				<li>
					<div class="user">
						<div class="user_img">
							<img src="" alt="">
						</div>
						张强
					</div>
					<span class="ddkcf">
						等待开处方
					</span>
				</li>
				<li>
					<p>患者:<span>陈某某</span></p>
				</li>
				<li>
					<p>诊断:<span>皮炎,皮炎皮炎皮炎皮炎皮炎皮炎皮炎</span></p>
				</li>
				<li class="购药">
					<span>
						2020-1-1 20：00：00
					</span>
					<router-link to="">
						<button>线上购药</button>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			
		}
	}
}
</script>

<style type="scss" scoped>
.我的处方{
	display: flex;
	flex-direction: column;
	height: 100%;
}
.list{
	padding: 12px;
	height: 40%;
	overflow-y: scroll;
	box-sizing: border-box;
}
.item{
	background-color:#fff;
	margin-bottom: 12px;
	border-radius: 5px;
	overflow: hidden;
}
li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding:15px 10px;
}
li:first-of-type{
	background: #5A75F6;
}
li:last-of-type{
	margin: 0;
}
.user{
	display: flex;
	align-items: center;
	font-size: 14px;
	color:#fff;
}
li>span{
	font-size: 12px;
	color:#5a5a5a;
}
.ddkcf{
	color:#fff;
}
li>p{
	font-size: 12px;
	color: #5a5a5a;
}
p>span{
	color: #999;
}
li button{
	width: 57px;
	height: 20px;
	background-color: #ffffff;
	border-radius: 5px;
	border: solid 1px #dbdbdb;
	font-size: 11px;
	color:#949494;
}
.购药{
	overflow: hidden;
	position: relative;
}
.购药:after{
	content:'';
	top:0;
	left: -10px;
	display: block;
	width: 120%;
	height: 1px;
	background: #f3f3f3;
	position: absolute;
}
.购药 button{
	width: 70px;
	height: 25px;
	background: #5a75f6;
	border-radius: 12px;
	color: #fff;
	font-size: 12px;
	border:none;
}
</style>
