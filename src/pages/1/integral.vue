<template>
	<div>
		<!--<cont-nav></cont-nav>-->
	
		<div class="s-goods">
		
		<div id="s-location">
			<p>您当前的位置:</p>
			<p>首页&nbsp;&nbsp;></p>
			<p>全部商品&nbsp;&nbsp;></p>
			<p>苹果&nbsp;&nbsp;></p>
			<p>阿克沙&nbsp;&nbsp;</p>
		</div>
		<div id="s-details" v-for="item in mhh">
			<!--放大镜部分-->
			<div class="s-wrapper">
			<div id="s-small">
				<img v-bind:src="item.img" id="sImg"/>
				<div class="s-cover"></div>
			</div>
			<div class="s-big">
				<img v-bind:src="item.img" id="bImg"/>
			</div>
			<div class="s-nav">
				<div class="s-left" @click="left($event)">
					<img src="../../images/icon/l_left.png" alt="" />
				</div>
				<div class="s-change">
					<div class="s-move">
				<img v-bind:src="item.img" alt="" @click="change($event)"/>
				<img v-bind:src="item.img" alt="" @click="change($event)"/>
				<img v-bind:src="item.img" alt="" @click="change($event)"/>
				<img v-bind:src="item.img" alt="" @click="change($event)"/>
				<img v-bind:src="item.img" alt="" @click="change($event)"/>
					</div>
				</div>
				<div class="s-right"  @click="right($event)">
					<img src="../../images/icon/l_right.png" alt="" />
				</div>
			</div>
		</div>
			<!--商品介绍部分-->
			<div id="s-goods-intro">
				<div class="s-goods-name">
					<h3>	{{item.name}}</h3>
				</div>
				<ul class="s-goods-intro">
					<li>
						<img src="../../images/img/l23.png" alt="" />
						<p>资深买家</p>
							
					</li>
					<li>	
					<p>雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口。雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口。</p>
					</li>
				</ul>
				<ul class="s-goods-choose">
					<li>
						<span>{{item.score}}积分</span><span>价值:&nbsp;&nbsp;¥&nbsp;20.0</span>
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
					<p class="s-jump"><a href="javascript:" @click="jumpa">立即兑换</a></p></li>
					<li>
						<p>
							<img src="../../images/icon/xingxing2.png" alt="" @click="liang($event)"/><img src="../../images/icon/xingxing2.png" alt="" @click="liang($event)"/>
							<span>收藏此商品</span>
						</p>
						<p>分享到: <img src="../../images/icon/share4.png" alt="" />
						<img src="../../images/icon/share1.png" alt="" />
						<img src="../../images/icon/share2.png" alt="" />
						<img src="../../images/icon/share5.png" alt="" />
						<img src="../../images/icon/share3.png" alt="" /></p>
						
						
						
						<!--<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>-->
						
						
						
						
					</li>
				</ul>
			</div>
		</div>
			<!--商品详情与评价-->
			<div class="s-goods-valuation">
				<!--商品详情部分-->
				<div class="s-valuation-title">
					<p  @click="out($event)" class="xuanzhong">商品详情</p>
					<p  @click="enter($event)">商品评价</p>
				</div>
				<!--内容部分-->
				<div class="s-valuation-cont">
					<div class="s-overflow">
						<!--商品详情-->
					<div class="s-goods-x">
						<!--第一列-->
						<ul>
							<li>
								男士短衬衫
							</li>
							<li>明水礼盒十分优秀，是送朋友，送亲人的不二选择</li>
							<li>什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。</li>
							<li>完成交易，如有剩余库存，从新上架产品</li>
							<li>
								<img src="../../images/img/sirendingzhi.png" alt="" />
							</li>
						</ul>
						<!--第二列-->
						<ul>
							<li>
								男士短衬衫
							</li>
							<li>明水礼盒十分优秀，是送朋友，送亲人的不二选择</li>
							<li>什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。</li>
							<li>完成交易，如有剩余库存，从新上架产品</li>
							<li>
								<img src="../../images/img/sirendingzhi.png" alt="" />
							</li>
						</ul>
					</div>
					<!--商品评价-->
					<div class="s-goods-say">
						<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p><img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing3.png" alt="" />
							
									<span>2016-08-12</span>
									<span>20:45:01</span>
								
								</p>
								<p>帮同事买的,很不错,性价比很高</p>
								<p>
								<img src="../../images/img/touxiang2.png" alt="" />
								<img src="../../images/img/touxiang2.png" alt="" />
								<img src="../../images/img/touxiang2.png" alt="" />
								<img src="../../images/img/touxiang2.png" alt="" />
								</p>
								
							</li>
							
							
						</ul>
						<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p><img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing3.png" alt="" />
							
									<span>2016-08-12</span>
									<span>20:45:01</span>
								
								</p>
								<p>帮同事买的,很不错,性价比很高</p>	
							</li>	
						</ul>
	<!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-->
		<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p><img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing3.png" alt="" />
							
									<span>2016-08-12</span>
									<span>20:45:01</span>
								
								</p>
								<p>帮同事买的,很不错,性价比很高</p>
								<p>
								<img src="../../images/img/touxiang2.png" alt="" />
								<img src="../../images/img/touxiang2.png" alt="" />
								<img src="../../images/img/touxiang2.png" alt="" />
								<img src="../../images/img/touxiang2.png" alt="" />
								</p>
								
							</li>
							
							
						</ul>
						<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p><img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing3.png" alt="" />
							
									<span>2016-08-12</span>
									<span>20:45:01</span>
								
								</p>
								<p>帮同事买的,很不错,性价比很高</p>	
							</li>	
						</ul>
					</div>
					</div>
				</div>
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
		created :function(){
			this.receive();
		},
		mounted() {
			this.fangda();
			this.changeBack();
		},
		data (){
			return {
				num:1,
//				mhh:[{img:"../../../static/img/l9.png",name:"新疆哈密瓜1500g",score:50,price:28.08}],
				mhh:[]
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
			left : function(aa){
				$(".s-move").animate({
					left:"-89px"
				},2000);
			},
			right : function(aa){
				$(".s-move").animate({
					left:"89px"
				},2000);
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
			//选择规格
			changeBack :function (){
				$(".lf-li1 span").click(function(aa){
					console.log("关于该湖广会馆");
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
				console.log("哈哈滑竿");
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
			//放大镜结束
			//获取前边页面传过来的数据
			receive :function(){
				this.mhh=[JSON.parse(localStorage.mhh)];
			},
			//往下个页面传数据
			jumpa :function(){
				this.mhh[0].num=$("#s-num").val();
				this.mhh[0].size=$(".lf-li1 .background").text();
				this.$axios.get('/api/integral?img='+this.mhh[0].img+'&name='+this.mhh[0].name+'&score='+this.mhh[0].score+'&num='+this.mhh[0].num+'&size='+this.mhh[0].size).then(function(data){
						console.log(data.data);
			}.bind(this));	
//				localStorage.data=JSON.stringify(this.mhh);
				location.href="#/exchange"
				console.log(this.mhh);
			}
		}
	}
</script>
 
<style>
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
	a{
		text-decoration: none;
	}
	ul{
		list-style: none;
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
	#bImg{
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
		border-bottom: 1px solid #EDEDED; 
		height: 60px;
		color: #333333;
		font-weight: 400;
		line-height: 60px;
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
		height: 100px;
	}
	.s-goods-choose li:first-child span:nth-of-type(1){
		font-size: 30px;
		color: #FF575C;
		line-height: 100px;
		display: inline-block;
		margin-right: 35px;
	}
	.s-goods-choose li:first-child span:nth-of-type(2){
		font-size: 16px;
		color: #666666;
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
	.s-goods-choose li:nth-child(2) span.active,.s-goods-choose li:nth-child(3) span.active{
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
	.s-goods-choose li:nth-child(4) p:last-child{
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
	.s-goods-choose	.background{
		background: #72DB67;
		border: 1px solid #3D9243;
	}
</style>


