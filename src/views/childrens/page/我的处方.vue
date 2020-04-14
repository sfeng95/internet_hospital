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
					<router-link to="">
						<button>查看详情</button>
					</router-link>
				</li>
				<li class="购药">
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
	padding:15px 10px;
	background-color:#fff;
	margin-bottom: 12px;
	border-radius: 5px;
}
li{
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}
li:last-of-type{
	margin: 0;
}
.user{
	font-size: 14px;
	color:#353535;
}
li>span{
	font-size: 11px;
	color:#5a5a5a;
}
.ddkcf{
	color:#ff2400;
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
	padding-top: 15px;
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
	height: 23px;
	background: #5a75f6;
	border-radius: 12px;
	color: #fff;
	font-size: 11px;
	border:none;
}
</style>
