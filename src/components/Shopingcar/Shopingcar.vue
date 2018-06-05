<template>
	<div>
		<div class="g_maincar">
			<div class="maincar_head">
				<a href="#/" class="a-logo"><img src="/static/icon/mingtang.png" alt="" class="logo"/></a>
				<a href="javascript:;" class="ll">订单提交成功</a>
				<img src="../../assets/images/ico/l_right.png" alt="" />
				<a href="javascript:;" class="ll">确认订单信息</a>
				<img src="../../assets/images/ico/l_right.png" alt="" />
				<a href="javascript:;" class="ll">我的购物车</a>
			</div>
		<!-- fadeInLeft flip lightSpeedIn -->
		</div>
		<router-view class="animated fadeInLeft"></router-view>
	</div>


</template>

<script>
	import Maincar from '@/components/Shopingcar/maincar.vue'
	import Dingdan from '@/components/Shopingcar/dingdan.vue'
	import Tijiao from '@/components/Shopingcar/tijiao.vue'
	export default {
		name: 'Shopingcar',
		data() {
			return {
			}
		},
		components: {Maincar,Dingdan,Tijiao}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	ul{
		list-style: none;
	}
	img{
		vertical-align: top;
	}
	.g_maincar {
		width: 100%;
		background: #fff;
		border-bottom: 1px solid #e4e4e4;
	}

	.maincar_head {
		width: 1280px;
		height: 130px;
		margin: auto;
	}



	.ll{
		text-decoration: none;
		float: right;
		font-size: 18px;
		margin-top: 60px;
		color: #333333;
	}
	.maincar_head a:nth-of-type(4){
		color: #EC6A17;
	}
	.maincar_head>img:nth-of-type(1) {
		float: right;
		width: 10px;
		height: 17px;
		margin-top: 65px;
		margin-left: 40px;
		margin-right: 40px;
	}

	.maincar_head>img:nth-of-type(2) {
		float: right;
		width: 10px;
		height: 17px;
		margin-top: 65px;
		margin-left: 40px;
		margin-right: 40px;
	}
	.roucolor{
		color: #f08200;
	}
	.a-logo{
		display: inline-block;
		margin-top: 25px;
	}
  .maincar_head .a-logo img{
    width: 290px;
  }
</style>
