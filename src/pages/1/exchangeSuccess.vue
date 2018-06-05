<template>
	<div id="s-pay">
		<!--头部-->
		<header id="s-header">
			<div>
				<a href="#/"><img src="../../images/icon/logo.png" alt="" /></a>
			</div>
		</header>
			<!--支付页面-->
			<div class="s-pay">
				<ul>
					<li><img src="../../images/icon/s-success.png" alt="" /></li>
					<li><p>支付成功</p></li>
					<li><router-link tag="p" to="/aa/order">查看订单</router-link><router-link tag="p" to="/">返回首页</router-link></li>
					<li><p>订单编号： 20150901144912ah4941 </p></li>
				</ul>
			</div>
	</div>
</template>

<script>
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	img{
		vertical-align: top;
	}
	ul{
		list-style: none;
	}
	a{
		text-align: center;
	}
	body,html{
		width: 100%;
	}
	#s-pay{
		width: 100%;
	}
	#s-header{
		height: 130px;
		width: 100%;
		border-bottom: 1px solid #DADADA;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	#s-header>div{
		width: 1280px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.s-pay{
		width: 1280px;
		margin: auto;
		text-align: center;
		height: 640px;
	}
	.s-pay ul{
		padding-top: 150px;
	}
	.s-pay img{
		height: 80px;
	}
	.s-pay ul li:first-child{
		margin-bottom: 40px;
	}
	.s-pay ul li:nth-child(2) p{
		font-size: 30px;
		color: #F88D2F;
		margin-bottom: 65px;
	}
	.s-pay ul li:nth-child(3){
		width: 380px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		margin-bottom: 60px;
	}
	.s-pay ul li:nth-child(3) p{
		width: 170px;
		height: 45px;
		border-radius: 5px;
		color: #FFFFFF;
		font-size: 18px;
		text-align: center;
		line-height: 45px;
		cursor: pointer;
	}
	.s-pay ul li:nth-child(3) p:nth-child(1){
		background: #F78327;
	}
	.s-pay ul li:nth-child(3) p:nth-child(2){
		background: #3D8E43;
	}
	.s-pay ul li:nth-child(4) p{
		color: #8C8C8C;
		font-size: 18px;
	}
</style>