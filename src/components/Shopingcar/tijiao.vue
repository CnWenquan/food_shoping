<template>
	<div class="dingdantijiao">
		<img src="../../assets/images/img/tijiaochenggong.png" alt="" />
		<p>订单已提交，请于24小时内完成支付<span>（逾期订单将被取消）</span></p>
		<p><img src="../../assets/images/ico/location.png" alt=""/>
		送货至:{{dizhi.name}}&nbsp;{{dizhi.sheng}}&nbsp;{{dizhi.shi}}&nbsp;{{dizhi.xian}}&nbsp;{{dizhi.adress}}&nbsp;电话:{{dizhi.tel}}
		</p>
		<p>应付金额:<span>{{yingfujine}}</span>(在线支付) <span>订单编号:155135135</span></p>
		<p>支付平台</p> 
		<div class="zhifufangshi">
			<span class="landian xianlandian" @click="landian1"><img v-if="showlandian1" src="../../assets/images/ico/landiandian.png" alt="aa"/></span>
			<span><img src="../../assets/images/ico/zhifubao.png" alt="aa"/></span>
			<span class="landian" @click="landian2"><img v-if="showlandian2" src="../../assets/images/ico/landiandian.png" alt="aa"/></span>
			<span><img src="../../assets/images/ico/weixinzhifu.png" alt="aa"/></span>
			<span class="landian" @click="landian3"><img v-if="showlandian3" src="../../assets/images/ico/landiandian.png" alt="aa"/></span>
			<span><img src="../../assets/images/ico/yinglian.png" alt="aa"/>银联支付</span>
			<span class="landian" @click="landian4"><img v-if="showlandian4" src="../../assets/images/ico/landiandian.png" alt="aa"/></span>
			<span><img src="../../assets/images/ico/yuezhifu.png" alt="aa"/>余额支付(¥500)</span>
		</div>
		<div class="zhifubaosaoma">
			<span>使用电脑支付</span>
			<span>使用支付宝钱包扫一扫付款</span>
			<span>或</span>
			<span></span>
			<button @click="lijizhifu">立即支付</button>
			<img src="../../assets/images/ico/erweima3.png" alt="aa"/>
			<img src="../../assets/images/img/zhifubaotv.png" alt="aa"/>
			<img src="../../assets/images/img/tvlibain.png" alt="aa"/>
		</div>
		<div class="weixinsaoma">
			<span>使用微信扫一扫支付</span>
			<img src="../../assets/images/img/weixiner.png" alt="aa"/>
			<img src="../../assets/images/ico/shaoyishao.png" alt="aa"/>
			<img src="../../assets/images/img/weixinnei.png" alt="aa"/>
		</div>
		<div class="tijiao_cover" @click="quxiaozhifu">
		</div>
		<div class="cover_nei animated bounce">
			<p>使用平台支付</p>
			<p>请您在新打开的网上银行页面进行支付，支付完成前请不要关闭该窗口</p>
			<router-link tag="div" to="/Index/chakan">
				<p>已经完成支付</p>
				<p>查看订单详情</p>
			</router-link>
			<div>
				<p>支付失败</p>
				<p>更换支付方式</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dizhi:{name:'小科',sheng:'河南省',shi:'许昌市',xian:'禹州市',adress:'迎宾东路长生巷',tel:'18530800374'},
			yingfujine:165.88,
			showlandian1:true,
			showlandian2:false,
			showlandian3:false,
			showlandian4:false,
		}
	},
	mounted(){
		this.locachange();
		this.yingfujine = localStorage.zongjia;
	},
	methods:{
		landian1:function(){
			this.showlandian1 = true;
			this.showlandian2 = false;
			this.showlandian3 = false;
			this.showlandian4 = false;
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","");
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","landian");
			$('.zhifufangshi span:nth-of-type(1)').attr("class","landian xianlandian");
		},
		landian2:function(){
			this.showlandian1 = false;
			this.showlandian2 = true;
			this.showlandian3 = false;
			this.showlandian4 = false;
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","");
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","landian");
			$('.zhifufangshi span:nth-of-type(3)').attr("class","landian xianlandian");
		},
		landian3:function(){
			this.showlandian1 = false;
			this.showlandian2 = false;
			this.showlandian3 = true;
			this.showlandian4 = false;
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","");
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","landian");
			$('.zhifufangshi span:nth-of-type(5)').attr("class","landian xianlandian");
		},
		landian4:function(){
			this.showlandian1 = false;
			this.showlandian2 = false;
			this.showlandian3 = false;
			this.showlandian4 = true;
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","");
			$('.zhifufangshi span:nth-of-type(2n+1)').attr("class","landian");
			$('.zhifufangshi span:nth-of-type(7)').attr("class","landian xianlandian");
		},
		lijizhifu:function(){
			$('.tijiao_cover').css("display","block");
			$('.cover_nei').css("display","block");
		},
		quxiaozhifu:function(){
			$('.tijiao_cover').css("display","none");
			$('.cover_nei').css("display","none");
		},
		chakan:function(){
			location.href = 'http://localhost:8080/#/chakan';
		},
		//改变顶部导航颜色
			locachange:function(){
				for(var i = 0;i < 4;i++){
					$('.maincar_head a').eq(i).css("color","#333333");
				}
				if(location.hash == "#/Index/maincar"){
					$('.maincar_head a').eq(3).css("color","#EC6A17");
				}else if(location.hash == "#/Index/dingdan"){
					$('.maincar_head a').eq(2).css("color","#EC6A17");
				}else{
					$('.maincar_head a').eq(1).css("color","#EC6A17");
				}
			},
	}
	}
</script>

<style>
	span.xianlandian{
		border: 1px solid #287cca;
	}
	.dingdantijiao{
		width: 1280px;
		margin: auto;
	}
	.dingdantijiao>img{
		margin-left: 612px;
		margin-top: 80px;
	}
	.dingdantijiao>p:nth-of-type(1){
		display: block;
		font-size: 24px;
		color: #666;
		text-align: center;
		margin-top: 56px;
		margin-bottom: 80px;
	}
	.dingdantijiao>p:nth-of-type(1)>span{
		color: #f08200;
	}
	.dingdantijiao>p:nth-of-type(2){
		display: block;
		line-height: 36px;
		border: 1px solid #ccc;
		background: #f4fff2;
		font-size: 14px;
		color: #666;
	}
	.dingdantijiao>p:nth-of-type(2) img{
		vertical-align: top;
		padding-top: 6px;
		padding-left: 10px;
		margin-right: 8px;
	}
	.dingdantijiao>p:nth-of-type(3){
		display: block;
		font-size: 18px;
		color: #666;
		margin-top: 40px;
		margin-bottom: 20px;
	}
	.dingdantijiao>p:nth-of-type(3)>span:nth-of-type(1){
		font-size: 24px;
		color: #d20a11;
		margin:0 12px;
	}
	.dingdantijiao>p:nth-of-type(3)>span:nth-of-type(2){
		font-size: 14px;
		color: #666;
		float: right;
		margin-bottom: -10px;
	}
	.dingdantijiao>p:nth-of-type(4){
		display: block;
		line-height: 60px;
		font-size: 18px;
		color: #666;
		border-bottom: 1px solid #ccc; 
	}
	.zhifufangshi{
		padding: 40px 0;
	}
	.landian{
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #ccc;
		border-radius: 50%;
		vertical-align: top;
		margin-top: 12px;
	}
	.zhifufangshi>span:nth-child(2n){
		display: inline-block;
		border: 1px solid #ccc;
		height: 38px;
		line-height: 38px;
		padding: 0 10px;
		font-size: 16px;
		margin-left: 10px;
		margin-right: 36px;
	}
	.zhifufangshi>span:nth-child(2n)>img{
		vertical-align: top;
		margin-top: 5px;
	}
	.zhifufangshi>span:nth-of-type(2n+1){
		position: relative;
	}
	.zhifufangshi>span:nth-of-type(2n+1)>img{
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.zhifubaosaoma,.weixinsaoma{
		width: 100%;
		height: 397px;
		border: 1px solid #ccc; 
		margin-bottom: 40px;
		font-size: 18px;
		color: #595959;
		position: relative;
	}
	.zhifubaosaoma>span:nth-of-type(1){
		display: inline-block;
		position: absolute;
		top: 63px;
		left: 333px;
	}
	.zhifubaosaoma>span:nth-of-type(2){
		position: absolute;
		display: inline-block;
		top: 63px;
		left: 770px;
	}
	.zhifubaosaoma>span:nth-of-type(3){
		position: absolute;
		display: inline-block;
		top: 182px;
		left: 612px;
	}
	.zhifubaosaoma>span:nth-of-type(4){
		position: absolute;
		display: inline-block;
		width: 130px;
		height: 50px;
		background: #fff;
		left: 310px;
		top: 140px;
		z-index: 2;
	}
	.zhifubaosaoma>img:nth-of-type(2){
		position: absolute;
		left: 298px;
		top: 118px;
	}
	.zhifubaosaoma>img:nth-of-type(3){
		position: absolute;
		left: 320px;
		top: 150px;
		z-index: 3;
	}
	.zhifubaosaoma>button{
		position: absolute;
		left: 297px;
		top: 287px;
		border:none;
		width: 170px;
		height: 45px;
		background: #f08200;
		border-radius: 5px;
		color: #FFFFFF;
		font-size: 18px;
	}
	.zhifubaosaoma>img:nth-of-type(1){
		position: absolute;
		left: 769px;
		top: 118px;
	}
	.weixinsaoma>span{
		position: absolute;
		left: 802px;
		top: 60px;
	}
	.weixinsaoma>img:nth-of-type(2){
		position: absolute;
		left: 226px;
		top: 38px;
	}
	.weixinsaoma>img:nth-of-type(1){
		position: absolute;
		left: 770px;
		top: 120px;
	}
	.weixinsaoma>img:nth-of-type(3){
		position: absolute;
		left: 855px;
		top: 208px;
	}
	.tijiao_cover{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.5);
		z-index: 4;
		display: none;
	}
	.cover_nei{
		width: 656px;
		height: 440px;
		border: 5px solid #e2e2e2;
		background: #FFFFFF;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
		z-index: 5;
		display: none;
	}
	.cover_nei>p:nth-of-type(1){
		font-size: 30px;
		color: #f08200;
		margin-top: 99px;
		margin-bottom: 55px;
		text-align: center;
	}
	.cover_nei>p:nth-of-type(2){
		font-size: 18px;
		color: #666;
		margin-bottom: 55px;
		text-align: center;
	}
	.cover_nei>div:nth-of-type(1){
		display: inline-block;
		width: 170px;
		height: 72px;
		background: #f08200;
		border-radius: 5px;
		color: #FFFFFF;
		margin-left: 124px;
	}
	.cover_nei>div:nth-of-type(2){
		display: inline-block;
		width: 170px;
		height: 72px;
		background: #498e3d;
		border-radius: 5px;
		color: #fff;
		margin-left: 60px;
	}
	.cover_nei>div>p:nth-child(1){
		font-size: 18px;
		text-align: center;
		margin-top: 15px;
	}
	.cover_nei>div>p:nth-child(2){
		font-size: 14px;
		text-align: center;
	}
</style>