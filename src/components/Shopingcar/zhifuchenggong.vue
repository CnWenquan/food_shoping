<template>
	<div class="zhifuchenggong">
		<img src="../../assets/images/img/tijiaochenggong.png" alt="aa"/>
		<p>支付成功</p>
		<a href="javascript:;">查看订单</a>
		<a href="#/">返回首页</a>
		<p>订单编号： 20150901144912ah4941 </p>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	methods:{
		
	}
}
</script>

<style>
	.zhifuchenggong{
		width: 1280px;
		margin: auto;
		text-align: center;
	}
	.zhifuchenggong>img{
		margin-top: 80px;
	}
	.zhifuchenggong>p:nth-of-type(1){
		display: block;
		font-size: 30px;
		color: #f08200;
		margin-top: 38px;
		margin-bottom: 62px;
	}
	.zhifuchenggong>a{
		display: inline-block;
		text-decoration: none;
		width: 170px;
		height: 45px;
		line-height: 45px;
		color: #fff;
		border-radius: 5px;
		font-size: 18px;
	}
	.zhifuchenggong>a:nth-of-type(1){
		background: #f08200;
		margin-right: 38px;
	}
	.zhifuchenggong>a:nth-of-type(2){
		background: #498e3d;
	}
	.zhifuchenggong>p:nth-of-type(2){
		margin-top: 60px;
		margin-bottom: 100px;
		font-size: 18px;
		color: #666;
	}
	
	.lianxi{
		width: 200px;
		height: 350px;
		border: 1px solid #ccc;
	}
</style>