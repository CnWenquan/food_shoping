<template>
	<div class="s-exchange">
		<!--头部-->
		<header class="s-header">
			<div>
				<img src="../../images/icon/logo.png" alt="" />
			<span>确认兑换信息</span>
			</div>
			
		</header>
		<!--管理地址-->
		<div class="s-user-msg">
			<div class="s-title">
				<p>收货人信息</p>
				<p>使用新地址</p>
			</div>
			<ul class="s-detail">
				<li v-for="(item,index) in msg">
					<img src="../../images/icon/s-choosed.png" alt="" class="s-morenAddress"/>
					<span>{{item.name}}</span><span>{{item.shi}}</span>
					<span>{{item.qu}}</span>
					<span>{{item.address}}</span>
					<span>{{item.tel}}</span>
					<span class="s-moren">默认地址</span>
					<span class="s-set" @click="set($event,index)">设为默认地址</span>
					<span>修改</span><span @click="delet(index)" class="s-delet1">删除</span>
				</li>
			</ul>
			<!--展开收起-->
			<div class="s-show">
				<p @click="zhankai()">
					展开其他地址<img src="../../images/icon/2_bottom.png" alt="" />
				</p>
				<p @click="shouqi()">收起地址<img src="../../images/icon/2_top.png" alt="" /></p>
			</div>
		</div>
		<!--商品信息-->
		<div class="s-goods-msg1">
			<p>商品信息</p>
			<div class="s-goods-header">
				<strong>商品名称</strong>
				<strong>规格</strong>
				<strong>数量</strong>
				<strong>金额</strong>
			</div>
			<ul class="s-goods-sure" v-for="(items,index) in goods">
				<li>
					<img v-bind:src="items.img" alt="" />
					<span>{{items.name}}</span>
				</li>
				<li>
					<span>{{items.size}}</span>
				</li>
				<li>
					<p>
						<span @click="jian($event,index)">-</span><input type="text" v-model="items.num"/><span @click="add(index)">+</span>
					</p>
				</li>
				<li><p>{{items.sum}}积分</p></li>
				<li class="s-remind animated zoomIn" @click="hide($event)"><strong>请至少选择一件商品</strong></li>
			</ul>
			<!--添加订单备注-->
			<div class="s-addRemark">
				<p>添加订单备注</p>
				<p><input type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息"/></p>
			</div>
			<!--结算-->
			<div class="s-accounts">
				<p>应付积分: <span class="s-count">0积分</span></p>
				<p><router-link to="/exchangeSuccess" tap="p">确认兑换</router-link></p>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"/changeMsg",
		data () {
			return {
				msg : [{name:"但小兵",shi:"北京市",qu:"昌平区",address:"天通苑明天第一城4号楼101",tel:"固定电话010-21541589"},{name:"但小兵",shi:"北京市",qu:"昌平区",address:"天通苑明天第一城4号楼101",tel:"手机15032203560"},{name:"但小兵",shi:"北京市",qu:"昌平区",address:"天通苑明天第一城4号楼101",tel:"手机15032203561"},{name:"但小兵",shi:"北京市",qu:"昌平区",address:"天通苑明天第一城4号楼101",tel:"手机15032203562"}],
				goods : [{img:require("../../images/img/l17.png"),name:"云南蒙自石榴8个装",size:"8个装",num:1,sum:60},{img:require("../../images/img/l17.png"),name:"云南蒙自石榴8个装",size:"8个装",num:1,sum:60},{img:require("../../images/img/l17.png"),name:"福建琯溪白心蜜柚(大果)2个装",size:"8个装",num:1,sum:60}],
			}
		},
		props:['value'],
		methods :{
			set :function (aa,index){
				$(".s-moren").css("display","none");
				$(".s-set").css("display","block");
				$(".s-morenAddress").eq(0).attr("src",require("../../images/icon/s-choose.png"));
				$(".s-set").eq(0).css("display","none");
				$(".s-moren").eq(0).css("display","block");
				this.msg.unshift(this.msg[index]);
				this.msg.splice(index+1,1);
				
			},
			delet :function (index){
				
				this.msg.splice(index,1);
			},
			zhankai :function (){
				$(".s-detail li:nth-child(n+2)").slideDown("slow");
			},
			shouqi :function (){
				$(".s-detail li:nth-child(n+2)").slideUp("slow");
			},
			add :function (index){
				this.goods[index].num++
				var count = 0;
				for (var i=0;i<this.goods.length;i++) {
					count += this.goods[i].num *this.goods[i].sum;
					
				}
				$(".s-count").text(count+"积分");
			},
			jian :function (aa,index){
				this.goods[index].num--;
				if (this.goods[index].num<0) {
					this.goods[index].num=0;
					$(aa.target).parents(".s-goods-sure").find(".s-remind").show();
				}
				var count = 0;
				for (var i=0;i<this.goods.length;i++) {
					count -= this.goods[i].num *this.goods[i].sum;
					
				}
				$(".s-count").text(count+"积分");
			},
			hide :function (aa){
				$(aa.target).hide();
			},
			account :function (){
				
			}
		}
	}
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
	.s-header{
		height: 130px;
		display: flex;
		justify-content: center;
		width: 100%;
		border-bottom: 1px solid #DADADA;
	}
	.s-header>div{
		width: 1280px;
		display: flex;
		align-items: center;
	}
	.s-header>div span{
		font-size: 20px;
		color: #7F7F7F;
		display: inline-block;
		margin-left: 60px;
		padding:5px 60px;
		border-left: 1px solid #DADADA;
	}
	.s-user-msg{
		width: 1280px;
		margin: auto;
	}
	.s-title{
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.s-title p:first-child{
		color: #7C7C7C;
		font-size: 18px;
	}
	.s-title p:last-child{
		background: #F78327;
		border-radius: 5px;
		width: 90px;
		height: 30px;
		color: #FFFFFF;
		line-height: 30px;
		text-align: center;
	}
	.s-detail li{
		height: 40px;
		background: #F3FFF3;
		display: flex;
		align-items: center;
		padding-left: 15px;
		position: relative;
	}
	.s-detail li:nth-child(n+2){
		margin-top: 10px;
	}
	.s-detail li span{
		display: inline-block;
		margin-left: 10px;
		color: #848684;
		font-size: 14px;
	}
	.s-detail li span:nth-of-type(1){
		margin-left: 20px;
	}
	.s-detail li span:nth-of-type(6){
		color: #ACAFAC;
	}
	.s-detail li span:nth-of-type(7){
		color: #F79B40;
		position: absolute;
		right: 130px;
		line-height: 40px;
	}
	.s-detail li span:nth-of-type(n+8){
		margin-left: 30px;
		display: inline-block;
		color: #69A96B;
		position: absolute;
		line-height: 40px;
	}
	.s-detail li span:nth-of-type(8){
		right: 70px;
	}
	.s-detail li span:nth-of-type(9){
		right: 20px;
	}
.s-detail .s-moren{
		display: none;
	}
	.s-show {
		display: flex;
		height: 60px;
		align-items: center;
		border-bottom: 1px solid #F6F6F6;
	}
	.s-show p{
		color: #4C9650;
		font-size: 16px;
		display: flex;
		align-items: center;
	}
	.s-show p img{
		margin: 0 20px 0px 10px;
	}
	.s-goods-msg1{
		width: 1280px;
		margin: auto;
	}
	.s-detail li:first-child .s-delet1{
		display: none;
	}
	.s-goods-msg1 p{
		height: 60px;
		color: #9F9F9F;
		line-height: 60px;
	}
	.s-goods-header{
		background: #F2F2F2;
		display: flex;
		align-items: center;
		height: 50px;
		justify-content: space-between;
		padding: 0 100px 0 60px;
	}
	.s-goods-header strong{
		color: #525252;
		font-weight: 400;
	}
	.s-goods-sure{
		display: flex;
		align-items: center;
		height: 120px;
		border-bottom: 1px solid #E9E9E9;
		padding: 0 100px 0 60px;
		position: relative;
	}
	.s-goods-sure li:nth-child(1){
		width: 300px;
	}
	.s-goods-sure li:nth-child(1) span{
		line-height: 80px;
		color: #7E7E7E;
	}
	.s-goods-sure li:nth-child(2) {
		width: 150px;
		margin-left:80px;
		color: #A9A9A9;
	}
	.s-goods-sure li:nth-child(3){
		margin-left: 170px;
	}
	.s-goods-sure li:nth-child(3) p{
		width: 100px;
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	.s-goods-sure li:nth-child(3) input{
		width: 50px;
		height:26px;
		text-align: center;
		font-size: 20px;
		color: #808080;
	}
	.s-goods-sure li:nth-child(3) span{
		height: 30px;
		display: inline-block;
		line-height: 30px;
		font-size: 30px;
		background: #F2F2F2;
		border: 1px solid #E1E1E1;
		width: 30px;
		box-sizing: border-box;
		text-align: center;
	}
	.s-goods-sure li:nth-child(4){
		margin-left: 270px;
	}
	.s-goods-sure li:nth-child(4) p{
		color:#FF5F62;
	}
	.s-addRemark{
		margin-top: 30px;
		border-top:1px solid  #F4F4F4;
		border-bottom:1px solid  #F4F4F4;
		height: 120px;
	}
	.s-addRemark p:first-child{
		color: #7C7C7C;
	}
	.s-addRemark input{
		width: 630px;
		height: 30px;
		color: #CCCCCC;
		font-size: 14px;
		outline: none;
	}
	.s-accounts{
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		height: 190px;
	}
	.s-accounts p:first-child{
		height: 100px;
		line-height: 100px;
		color: #777777;
	}
	.s-accounts p:first-child span{
		font-size: 20px;
		color: #FF575C;
	}
	.s-accounts p:last-child{
		height: 50px;
		width: 150px;
		background: #F78327;
		color: #FFFFFF;
		font-size: 20px;
		text-align: center;
		line-height: 50px;
		border-radius: 10px;
	}
	.s-accounts p:last-child a{
		text-decoration: none;
		color: #FFFFFF;
	}
	.s-remind{
		background: rgba(0,0,0,0.5);
		width: 150px;
		height: 60px;
		position: absolute;
		color: red;
		line-height: 60px;
		right: 390px;
		top: 25px;
		display: none;
	}
</style>