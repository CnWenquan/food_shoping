<template>
	<div class="aa">
		<img src="../assets/images/ico/404.png" alt=""/><br />
		<img src="../assets/images/ico/juzi.png" alt=""/>
		<img src="../assets/images/ico/bucunzai.png" alt=""/>
		<p>您要查看的网址可能已被删除、名称已被更改、或者暂时不可用</p>
		<a href="javascript:history.back(-1)">返回上一页面</a>
		<a href="#/">返回网页首页</a>
	</div>
</template>

<script>
	export default {
		name: "myError",
		data(){
			return {
				
			}
		},
		mounted(){
			$(".ck-hed").hide();
			$(".ck-Fot").hide();
		}
}
</script>

<style>
.aa{
	width: 100%;
	background: #fff;
	position: relative;
	text-align: center;
	padding-bottom: 100px;
}
.aa>img:nth-of-type(1){
	margin-top: 250px;
}
.aa>img:nth-of-type(2){
	position: absolute;
	right: 0;
	left: 0;
	margin: auto;
	top: 250px;
}
.aa>img:nth-of-type(3){
	margin-top: 70px;
	margin-bottom: 60px;
}
.aa>p{
	font-size: 24px;
	color: #666666;
	margin-bottom: 95px;
}
.aa>a:nth-of-type(1){
	display: inline-block;
	width: 170px;
	height: 45px;
	background: #f08200;
	line-height: 45px;
	text-decoration: none;
	color: #FFFFFF;
	margin-right: 100px;
	border-radius: 5px;
}
.aa>a:nth-of-type(2){
	display: inline-block;
	width: 170px;
	height: 45px;
	background: #498e3d;
	line-height: 45px;
	text-decoration: none;
	color: #FFFFFF;
	border-radius: 5px;
}
</style>