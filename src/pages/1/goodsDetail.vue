<template>
	<div class="s-goodsDetail">

		<div class="s-goods">

		<!--<div id="s-location">-->
			<!--<p>您当前的位置:</p>-->
			<!--<p>首页&nbsp;&nbsp;></p>-->
			<!--<p>全部商品&nbsp;&nbsp;></p>-->
			<!--<p>苹果&nbsp;&nbsp;></p>-->
			<!--<p>阿克沙&nbsp;&nbsp;</p>-->
		<!--</div>-->

		<div id="s-details" v-for="item in shopDetail">
			<!--放大镜部分-->
			<div class="s-wrapper">
			<div id="s-small">
				<img :src="item.src" id="sImg"/>
				<div class="s-cover"></div>
			</div>
			<div class="s-big">
				<img :src="item.src" id="bImg"/>
			</div>
			<div class="s-nav">
				<div class="s-left" @click="left($event)">
					<img src="../../images/icon/l_left.png" alt="" />
				</div>
				<div class="s-change">
					<div class="s-move">
				<img :src="item.src" alt="" @click="change($event)"/>
				<img :src="item.src" alt="" @click="change($event)"/>
				<img :src="item.src" alt="" @click="change($event)"/>
				<img :src="item.src" alt="" @click="change($event)"/>
				<img :src="item.src" alt="" @click="change($event)"/>
					</div>
				</div>
				<div class="s-right"  @click="right($event)">
					<img src="../../images/icon/l_right.png" alt="" />
				</div>
			</div>
			<!--倒计时-->
				<!--<div class="s-cover-time">-->
					<!--<p>距离开始还剩 <span>{{oDay}}天</span>-->
					<!--<span>{{oHour}}</span><strong>:</strong>-->
					<!--<span>{{oMin}}</span><strong>:</strong>-->
					<!--<span>{{oSec}}</span></p>-->
				<!--</div>-->
		</div>
			<!--商品介绍部分-->
			<div id="s-goods-intro">
				<div class="s-goods-name">
					<h3>	{{item.name}}</h3>
					<div id="s-label">
						<span @mouseenter="changeColor($event)" @mouseleave="changeColor1($event)">全国</span>
						<!--<span @mouseenter="changeColor($event)" @mouseleave="changeColor1($event)">礼拜五</span>-->
						<span @mouseenter="changeColor($event)" @mouseleave="changeColor1($event)">次日达</span>
						<span @mouseenter="changeColor($event)" @mouseleave="changeColor1($event)">自营</span>
					</div>
				</div>
				<ul class="s-goods-intro">
					<li>
						<img src="../../images/img/l23.png" alt="" />
						<p>资深买家</p>

					</li>
					<li>
					<p>{{item.name}}  美味又实惠</p>
					</li>
				</ul>
				<ul class="s-goods-choose" id="s-goods-choose">
					<li>
						<span>现价&nbsp;:&nbsp;¥{{item.xPrice}}</span><span>原价:&nbsp;&nbsp;¥&nbsp;{{item.yPrice}}</span>
					</li>
					<li class="s-li1 lf-li1">
						请选择规格<span>500g</span>
						<span>1000g</span>
						<span>2000g</span>
					</li>
					<li class="s-li1 lf-li2">
						请选择规格<span>500g</span>
						<span>1000g</span>
					</li>
					<li>数量&nbsp;: <p><span @click="jian($event)">-</span><input type="text" name="" id="s-num" value="1" v-model="num"/><span @click="add($event)">+</span>&nbsp;&nbsp;件</p>
					<p class="s-jump" @click="addCar()"><router-link to="">加入购物车</router-link></p>
					<p class="s-jump"><router-link to="/Index/dingdan">立即购买</router-link></p></li>
					<li>
						<p>
							<img src="../../images/icon/xingxing2.png" alt="" @click="liang($event)"/>
							<span>收藏此商品</span>
						</p>

						<!--分享页面-->

						<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
			<!--覆盖层加入购物车-->
			<div class="s-addCar">
				<div class="">
					<p><img src="../../images/icon/duigou.png" alt="" />已成功加入购物车</p>
					<p><span>继续购物</span><span>查看购物车</span></p>
				</div>
			</div>
	</div>
</template>

<script>
	import contNav from "../../components/index"
//	import share from "../../../static/js/share.js"
	export default{
		components:{
			contNav
		},
		created:function(){
			this.ck();
		},
		mounted() {
//			var smallBox = document.querySelector('#s-small');
//			var bigBox = document.querySelector('.s-big');
//			var move = document.querySelector('.s-cover');
//			var img = document.querySelector('#bImg');
//			new Enlarge(smallBox , bigBox ,move ,img);
			this.fangda();
			this.countDown();
			setInterval(this.countDown,1000);
			this.changeBack();
			this.tanchu();


		},
		data (){
			return {
				num:1,
				oDay:"",
				oHour:"",
				oMin:"",
				oSec:"",
				shopDetail:[]
			}
		},
		props:['value'],
		methods:{
			change : function(aa){
				$("#sImg").attr("src",$(aa.target).attr("src"));
				$("#bImg").attr("src",$(aa.target).attr("src"));
				console.log($(aa.target).attr("src"));
				$(".s-move img").removeClass("active2");
				$(aa.target).addClass("active2");
			},
			ck:function(){
				var obj = {};
				obj.src = localStorage.src2;
				obj.name = localStorage.ming1;
				obj.xPrice = localStorage.xprice1;
				obj.yPrice = localStorage.yprice1;
				this.shopDetail.push(obj);


			},
			left : function(aa){
        $(".s-move").animate({
          left:"89px"
        },300);
			},
			right : function(aa){
        $(".s-move").animate({
          left:"-89px"
        },300);
			},
			add: function(ev){
				this.num++;
			},
			jian: function(aa){
				this.num--;
				if(this.num<0){
					this.num=0;
					$(aa.target).css("color","#CCCCCC");
				}
			},
			liang :function(aa){
				if($(aa.target).attr("src")==require("../../images/icon/xingxing1.png")){
					$(aa.target).attr("src",require("../../images/icon/xingxing2.png"));
					$(aa.target).parent().find("span").text("商品已取消收藏");
				}else{
					$(aa.target).parent().find("span").text("商品已收藏");
					$(aa.target).attr("src",require("../../images/icon/xingxing1.png"));
				}
			},
			enter :function(aa){
				$(".s-valuation-title p").removeClass("xuanzhong");
				$(aa.target).addClass("xuanzhong");
				$(".s-overflow").removeClass("out");
				$(".s-overflow").addClass("enter");
			},
			out :function(aa){
				$(".s-valuation-title p").removeClass("xuanzhong");
				$(aa.target).addClass("xuanzhong");
				$(".s-overflow").removeClass("enter");
				$(".s-overflow").addClass("out");
			},
			countDown : function(){
				var a1 = new Date();
				var a2 = new Date(2017,10,16,12,0,0);
				var oData = a2 - a1;
				var sec = Math.floor(oData / 1000);
				var Sec = sec % 60;
				var min = Math.floor(sec / 60);
				var Min = min % 60;
				var hour = Math.floor(min / 60);
				var Hour = hour % 24;
				var day = Math.floor(hour / 24);
				var Day = day % 30;
				this.oDay = Day;
				this.oHour = Hour;
				this.oMin = Min;
				this.oSec = Sec;

			},
			changeColor :function(aa){
				$(aa.target).addClass("changeColor");
			},
			changeColor1 :function(aa){
				$(aa.target).removeClass("changeColor");
			},
			changeBack :function (){
				$(".lf-li1 span").click(function(aa){
					$(".lf-li1 span").removeClass("background");
					$(aa.target).addClass("background");
				});
				$(".lf-li2 span").click(function(aa){
					$(".lf-li2 span").removeClass("background");
					$(aa.target).addClass("background");
				});
			},
			//放大镜逻辑
			fangda :function(){
				$("#s-small").mouseenter(function(ev){
					ev = ev||event;
					$(".s-cover").css("display","block");
					$(".s-big").css("display","block");
					$("#s-small").mousemove(function(ev){
						ev = ev|| event;
						console.log($(this).get(0).clientLeft);
						var nLeft = ev.pageX+$(this).scrollLeft() -$(this).offset().left-$(this).get(0).clientLeft-($(".s-cover").innerWidth()/2);
						var nTop = ev.pageY+$(this).scrollTop() -$(this).offset().top-$(this).get(0).clientTop-($(".s-cover").innerHeight()/2);
						if(nLeft<=0){
							nLeft = 0;
						}
						var maxX=$(this).width()-$(".s-cover").width();
						(nLeft>=maxX)&&(nLeft=maxX);
						if(nTop<=0){
							nTop = 0;
						}
						var maxY = $(this).height()-$(".s-cover").height();
						(nTop>=maxY)&&(nTop=maxY);
						$(".s-cover").css("left",nLeft+"px").css("top",nTop+"px");
						$("#bImg").css("left",(nLeft*-600/maxX)+"px").css("top",(nTop*-600/maxY)+"px")
					})
					$("#s-small").mouseleave(function(ev){
						ev = ev|| event;
						$(".s-cover").css("display","none");
					$(".s-big").css("display","none");
						$(this).unbind("mouseup mousemove");
					})

				});
			},
			//弹出框逻辑
			tanchu :function(){
				$(".s-addCar>div p:last-child span").click(function(){
					$(".s-addCar").hide();
				})
			},
			//添加购物车
			addCar :function(){

				var tit = localStorage.tit1;
				var src1 = localStorage.src2;
				var ming = localStorage.ming1;
				var price = localStorage.xprice1;
				this.$axios.get('/api/add?shop='+ tit +'&src='+ src1  +'&name='+ ming +'&size=6&total=0&zongtotal=0&showImgs=false&showImg=false&price='+ price + '&num=' + this.num).then(function(data){
          this.$notify({
            title: "提示",
            message: "添加购物车成功",
            type: "success"
          })
					console.log(data.data);
				}.bind(this));


				// $(".s-addCar").show();
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		padding: 0;
		margin: 0;
	}
	img{
		vertical-align: top;
	}
	.s-goods{
		margin-top: 20px;
		width: 1280px;
		margin: auto;
	}
	.s-goodsDetail{
		position: relative;
		margin-top: 20px;
	}
	a{
		text-decoration: none;
	}
	ul{
		list-style: none;
	}
	input{
		outline: none;
	}
	.s-jump a{
		color: #FFFFFF;
	}
	#s-location{
		height: 60px;
		background: #F1F1F1;
		width: 100%;
		display: flex;
		align-items: center;
	}
	#s-location p{
		padding-left: 20px;
		font-size: 14px;
		color: #666666;
		margin-right: 20px;
		cursor:pointer;
	}
	#s-details{
		padding-top: 20px;
		display: flex;
	}
	.s-wrapper{
		width: 500px;
		height: 630px;
		position: relative;
		font-size: 0;
	}
	.s-small{
		position: relative;

	}
	.s-cover{
		position: absolute;
		width:200px;
		height: 200px;
		background: lightskyblue;
		opacity: 0.5;
		top: 0;
		left: 0;
		cursor: move;
		display: none;
	}
	#s-small img{
		width: 500px;
		height: 500px;
	}
	.s-big{
		width: 500px;
		height: 500px;
		position: absolute;
		right: -500px;
		top: 0;
		overflow: hidden;
		display: none;
	}
	.s-big img{
		width: 1250px;
		height: 1250px;
		position: absolute;
	}
	.s-nav{
		display: flex;
		align-items: center;
		position: relative;
		width: 500px;
		height: 90px;
	}
	.s-change{
		width:500px;
		position: relative;
		height: 90px;
		overflow: hidden;
		margin-top: 20px;
	}
	.s-move{
		position: absolute;
		width: 600px;
		height: 90px;
		left: 40px;
	}
	.s-move img{
		height: 90px;
		width: 90px;
		margin-right: 20px;
		box-sizing: border-box;
	}
	.s-left{
		position: absolute;
		left:0px;
		top: 30px;
		z-index: 100;
	}
	.s-right{
		position: absolute;
		top: 30px;
		right:0px;
	}
	.active2{
		border: 5px solid #E0812E;
	}
	#s-goods-intro{
		padding-left:40px;
		width: 740px;
	}
	#s-goods-intro h3{
		font-size: 24px;
		height: 50px;
		color: #333333;
		font-weight: 400;
		line-height: 50px;
	}
	#s-label{
		height: 60px;
		display: flex;
		align-items: center;
	}
	#s-label span{
		line-height: 60px;
		padding: 0 20px 0 20px;
		color: #FFFFFF;
		background: #3D8E43;
		height: 25px;
		display: inline-block;
		line-height: 25px;
		margin-left: 20px;
	}
#s-label .changeColor{
		background: #F78327;
	}

	.s-goods-name{
		border-bottom: 1px solid #EDEDED;
		height: 110px;
	}
	.s-goods-intro{
		display: flex;
		height: 180px;
		border-bottom: 1px solid #EDEDED;
	}
	.s-goods-intro li:first-child{
		width: 120px;
		text-align: center;
	}
	.s-goods-intro li:first-child img{
		margin-top: 24px;
	}
	.s-goods-intro li:first-child p{
		background: #FFE440;
		width: 120px;
		border-radius: 20px;
		font-size: 16px;
		height: 30px;
		line-height: 30px;
		color: #333333;
		margin-top: 10px;
	}
	.s-goods-intro li:last-child{
		padding-left: 30px;
		padding-top: 40px;
	}
	.s-goods-intro li:last-child p{
		color: #656565;
		line-height: 30px;
		font-size: 16px;
	}
	.s-goods-choose li:first-child{
		height: 60px;
	}
	.s-goods-choose li:first-child span:nth-of-type(1){
		font-size: 30px;
		color: #FF575C;
		line-height: 60px;
		display: inline-block;
		margin-right: 35px;
	}
	.s-goods-choose li:first-child span:nth-of-type(2){
		font-size: 16px;
		color: #666666;
		text-decoration: line-through;
	}
	.s-goods-choose li:nth-child(2),.s-goods-choose li:nth-child(3){
		font-size: 18px;
		color: #797979;
	}
	.s-goods-choose li:nth-child(2) span,.s-goods-choose li:nth-child(3) span{
		width: 80px;
		height: 30px;
		display: inline-block;
		border: 1px solid #D4D4D4;
		text-align: center;
		line-height: 30px;
		margin-left: 20px;
	}
#s-goods-choose	.background{
		background: #F3FFF3;
		border: 1px solid #3D9243;
	}
	.s-goods-choose li:nth-child(3){
		margin-top: 20px;
	}
	.s-goods-choose li:nth-child(4){
		 margin-top: 30px;
		 display: flex;
		 	font-size: 18px;
		 	color: #666666;
		 	align-items: center;
	}
	.s-goods-choose li:nth-child(4) p:first-child{
		font-size: 18px;
		margin-left: 15px;
		height: 35px;
		width: 205px;
		display: flex;
		line-height: 35px;
		color: #666666;
	}
	.s-goods-choose li:nth-child(4) p:first-child span{
		background: #F2F2F2;
		border:1px solid #D3D3D3;
		display: block;
		height: 35px;
		width: 35px;
		box-sizing: border-box;
		text-align: center;
		font-size: 30px;
		line-height: 35px;
	}
	.s-goods-choose li:nth-child(4) p:first-child input{
		width: 70px;
		text-align: center;
		font-size: 18px;
	}
	.s-goods-choose li:nth-child(4) p:nth-child(n+2){
		height: 50px;
		width: 150px;
		background: #F78327;
		color: #FFFFFF;
		font-size: 20px;
		line-height: 50px;
		text-align: center;
		border-radius: 5px;
		font-weight: 300;
	}
	.s-goods-choose li:nth-child(4) p:nth-child(3){
		margin-left: 20px;
	}
	.s-goods-choose li:nth-child(4) p:nth-child(2){
		background: #FFAF5B;
	}
	.s-goods-choose li:nth-child(5){
		display: flex;
		margin-top: 60px;
	}
	.s-goods-choose li:nth-child(5) p{
		color: #333333;
		font-size: 16px;
	}
	.s-goods-choose li:nth-child(5) p:first-child{
		margin-right: 40px;
	}
	.s-goods-choose li:nth-child(5) p:first-child img{
		margin-right: 10px;
	}
	.s-goods-choose li:nth-child(5) p:last-child img{
		margin-right: 10px;
	}
	.s-goods-valuation{
		width: 1280px;
		border: 1px solid #F1F1F1;
	}
	.s-valuation-title{
		background: #F4F4F4;
		height: 50px;
		display: flex;
	}
	.s-valuation-title p{
		color: #737373;
		font-size: 18px;
		width: 120px;
		height: 100%;
		box-sizing: border-box;
		line-height: 50px;
		text-align: center;
	}
.s-valuation-title	.xuanzhong{
		color: #74AC75;
		border-top: 2px solid #A0C6A0;
		background: #FFFFFF;
	}
	.s-goods-x{
		padding-left: 40px;

	}
	.s-goods-x ul{
		height: 460px;
		margin-top: 40px;
	}
	.s-goods-x ul li:first-child{
		color:#F47535;
		font-size: 20px;
		height: 40px;
	}
	.s-goods-x ul li:nth-child(n+1){
		color: #666666;
		line-height: 40px;
		height: 40px;
	}
	.s-goods-x ul li:last-child img{
		margin-top: 30px;
	}
	.s-goods-say{
		padding-left: 42px;
	}
	.s-goods-say ul{
		padding-left: 42px;
		margin-top: 40px;
		display: flex;
		height: 160px;
		border-bottom: 1px solid #F6F6F6;
	}
	.s-goods-say ul li:first-child p{
		font-size: 14px;
		color: #595959;
		margin-top: 10px;
	}
	.s-goods-say ul li:last-child{
		padding-left: 20px;
	}
	.s-goods-say ul li:last-child p:first-child{
		height: 40px;
		position: relative;
		width: 1080px;
	}
	.s-goods-say ul li:last-child p:first-child span{
		position: absolute;
		right: 0;
		color: #C0C0C0;
		font-size: 14px;
	}
	.s-goods-say ul li:last-child p:first-child span:first-of-type{
		right: 80px;
	}
	.s-goods-say ul li:last-child p:first-child img{
		margin-top: 10px;
	}
	.s-goods-say ul li:last-child p:nth-child(2){
		font-size: 16px;
		color: #585858;
		margin-bottom: 10px;
	}
	.s-overflow{
		width: 200%;
		display: flex;
		position: relative;
	}
	.s-goods-valuation{
		width: 100%;
		overflow: hidden;
	}
	.enter{
		animation: move 1000ms forwards ease-in-out;
	}
	.out{
		animation: move1 1000ms forwards ease-in-out;
	}
	@keyframes move{
		from{
			transform: translateX(0);
		}
		to{
			transform: translateX(-50%);
		}
	}
	@keyframes move1{
		from{
			transform: translateX(-50%);
		}
		to{
			transform: translateX(0);
		}
	}
	.bdsharebuttonbox{
		width: 200px;
	}
	.s-cover-time{
		position: absolute;
		width: 450px;
		left: 25px;
		height: 60px;
		background: #FFFFFF;
		opacity: 0.6;
		top: 0;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		text-align: center;
		z-index: 100;
	}
	.s-cover-time p{
		width: 450px;
		height: 60px;
		font-size:20px;
	}
	.s-cover-time p span{
		color: #FFFFFF;
		background: #FF575C;
		border-radius:5px;
		height: 30px;
		width: 45px;
		display: inline-block;
		margin-top: 18px;
		font-size: 20px;
		line-height: 30px;
	}
	.s-cover-time p strong{
		text-align: center;
		color: #FF575C;
		display: inline-block;
		width: 20px;
	}
	.s-addCar{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		top: 0;
		left: 0;
		z-index:101;
		display: none;
	}
	.s-addCar>div{
		width: 660px;
		height: 320px;
		background: #FFFFFF;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		border: 2px solid #E2E2E2;
		text-align: center;
	}
	.s-addCar>div p{
		display: flex;
		align-items: center;
	}
	.s-addCar>div p:first-child{
		width: 250px;
		margin: auto;
		justify-content: space-between;
		display: flex;
		align-items: center;
		padding-top: 85px;
		font-size: 24px;
		color: #6D6D6D;
	}
	.s-addCar>div p:last-child{
		width: 380px;
		height: 50px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		padding-top: 60px;
	}
	.s-addCar>div p:last-child span{
		width: 170px;
		height: 50px;
		border-radius: 5px;
		color: #FFFFFF;
		display: inline-block;
		line-height: 50px;
		text-align: center;
		color: 18px;
		cursor: pointer;
	}
	.s-addCar>div p:last-child span:first-child{
		background: #F58227;
	}
	.s-addCar>div p:last-child span:last-child{
		background: #3D8E43;
	}
</style>


