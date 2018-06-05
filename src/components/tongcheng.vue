<template>
	<div>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="/static/images/dalunbo3.jpg" /></div>
				<div class="swiper-slide"><img src="/static/images/dalunbo2.jpg" /></div>
        <div class="swiper-slide"><img src="/static/images/dalunbo1.jpg" /></div>
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo1.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo2.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo3.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo4.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo5.png" alt=""/></div>-->
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<!-- 热卖 新品 -->
		<div class="rm-xp">
      <a href="#/404"><img src="/static/images/ca_2.jpg" /></a>
      <a href="#/404"><img src="/static/images/ca_3.jpg" /></a>
      <a href="#/404"><img src="/static/images/ca_5.jpg" /></a>
      <a href="#/404"><img src="/static/images/ca_6.jpg" /></a>
			<!--<a href="javascript:void(0)"><img src="../../static/img/remai1.png" alt=""/></a>-->
			<!--<a href="javascript:void(0)"><img src="../../static/img/xinpin1.png" alt=""/></a>-->
			<!--<a href="javascript:void(0)"><img src="../../static/img/remai2.png" alt=""/></a>-->
			<!--<a href="javascript:void(0)"><img src="../../static/img/xinpin2.png" alt=""/></a>-->
		</div>

		<!-- 分类导航 -->
		<div class="fl-dh">
			<span>分类 : </span>
			<a href="javascript:void(0)" :class="{ahover:item.bool}" @click="aa(index)" v-for="(item,index) in fenlei">{{item.name}}</a>
		</div>
		<!--  -->
		<div class="btn-div">
			<button>评分最高</button>
			<select name="">
				<option value="">价格</option>
				<option value="">人气</option>
				<option value="">美女</option>
				<option value="">旅游</option>
			</select>
			<button>销量</button>
		</div>

		<!-- 商品 -->
		<ul class="shop-ul">
			<li v-for="item in shopp">
				<div class="shop-div1"><a href="javascript:void(0)"><img :src="item.src" alt=""/></a></div>
				<p class="shop-p1">{{item.name}}</p>
				<div class="shop-div2">
					<img src="../../static/icon/xingxing1.png" alt="" />
					<img src="../../static/icon/xingxing1.png" alt="" />
					<img src="../../static/icon/xingxing1.png" alt="" />
					<img src="../../static/icon/xingxing1.png" alt="" />
					<img src="../../static/icon/xingxing2.png" alt="" />
					<p>￥{{item.price}}/人</p>
				</div>
				<p class="shop-p2">{{item.adress}}</p>
			</li>
		</ul>

		<v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
	</div>
</template>

<script>
	import swiper from '../../static/js/swiper.min.js'
	import pagination from './fenye2'

	export default {
		data () {
			return {
				fenlei:[{bool:false,name:"全部"},{bool:false,name:"蔬菜"},{bool:false,name:"水果"},{bool:false,name:"糕点"},],
				shopp:[
          {
            src: "/static/images/aa.jpg",
            name: "牛蒡巧克力酥",
            price: "25.00",
            size: "258g/盒"
          },
          {
            src: "/static/images/bb.jpg",
            name: "杭州特产手工糕点",
            price: "26.00",
            size: "3块/盒"
          },
          {
            src: "/static/images/dd.jpg",
            name: "山东特产喜卷软煎饼",
            price: "20.00",
            size: "310g/卷"
          },
          {
            src: "/static/images/cc.jpg",
            name: "兴盛德黑芝麻片",
            price: "56.00",
            size: "350g/罐"
          },
					{src:"../../static/img/l26.png",name:"阳澄湖大闸蟹",price:"62",adress:"浙江省台州市温岭市人民西路2号"},
					{src:"../../static/img/l27.png",name:"阳澄湖大闸蟹",price:"62",adress:"浙江省台州市温岭市人民西路2号"},
					{src:"../../static/img/l28.png",name:"阳澄湖大闸蟹",price:"62",adress:"浙江省台州市温岭市人民西路2号"},
					{src:"../../static/img/l29.png",name:"阳澄湖大闸蟹",price:"62",adress:"浙江省台州市温岭市人民西路2号"},
					{src:"/static/images/banligao.jpg",name:"桂林特产 板栗糕",price:"20",adress:"浙江省台州市温岭市人民西路2号"},
					{src:"/static/images/fenghuangjuan.jpg",name:"葡韵 澳门特产 凤凰卷",price:"25",adress:"浙江省台州市温岭市人民西路2号"},
					{src:"/static/images/meiguisu.jpg",name:"上海特产 屋里香 玫瑰酥",price:"59",adress:"浙江省台州市温岭市人民西路2号"},
					{src:"/static/images/rulao.jpg",name:"鲜乳酪面包",price:"45.90",adress:"浙江省台州市温岭市人民西路2号"}
				],
				total: 150,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1,   // 当前的页数
			}
		},
		methods:{
			aa:function(index){
//				$(".fl-dh a").css("color","#666666");
				for(var i = 0;i < this.fenlei.length;i++){
					this.fenlei[i].bool = false;
				}
				this.fenlei[index].bool = !this.fenlei[index].bool;
			},
			pagechange:function(currentPage){
		        this.shopp.sort(function(){ return 0.5 - Math.random() })
		        // ajax请求, 向后台发送 currentPage, 来获取对应的数据

		    }
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,
        touchAngle: 10,
        loop: true,
        effect : 'fade',
        autoplayDisableOnInteraction: false,
        extButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
			});
		},
		components:{
			'v-pagination': pagination
		}
	}
</script>

<style scoped>
	.swiper-container {
		width: 100%;
		height: 500px;
	}

	.rm-xp {
		width: 1280px;
		margin: auto;
		padding: 20px 0;
		display: flex;
		justify-content: space-between;
	}

	.rm-xp>a {
		display: inline-block;
	}

  .rm-xp>a>img{
    width: 305px;
  }

	.fl-dh{
		width: 1280px;
		margin: auto;
		padding-bottom: 15px;
		border-bottom: 1px solid #ccc;
		color: #666666;
	}
	.fl-dh>a{
		color: #666666;
		text-decoration: none;
		margin-left: 20px;
		padding: 5px 10px;
	}
	.fl-dh>a:hover{
		background: #498e3d;
		color: #fff;
	}
	.fl-dh>a.ahover{
		background: #498e3d;
		color: #fff;
	}
	.btn-div{
		width: 1280px;
		padding: 20px 0;
		margin: auto;
		overflow: hidden;
	}
	.btn-div>*{
		float: right;
		margin-left: 40px;
		font-size: 16px;
	}
	.btn-div>button{
		height: 26px;
		padding: 0 15px;
		background: #fff;
		border: 1px solid #ccc;
	}
	.btn-div>select{
		height: 26px;
		border: 1px solid #498e3d;
		color: #498e3d;
	}
	/*商品区*/
	.shop-ul{
		width: 1280px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
		transform-style: preserve-3d;
	}
	.shop-ul>li{
		width: 305px;
		height: 299px;
		background: #f8f6f7;
		box-sizing: border-box;
		margin-bottom: 20px;
	}
	.shop-ul>li:hover{
		border: 1px solid #498e3d;
		animation: hover 1s forwards;
	}
	.shop-div1{
		width: 100%;
		height: 169px;
    overflow: hidden;
	}
	.shop-div1>a{
		display: inline-block;
	}
	.shop-div1 img{
		width: 100%;
		height: auto;
	}
	.shop-p1{
		color: #333333;
		font-size: 24px;
		text-align: center;
		height: 50px;
		line-height: 50px;
		padding-top: 10px;
	}
	.shop-div2{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.shop-div2>img{
		margin-right: 5px;
	}
	.shop-div2>p{
		color: #ec6a17;
		font-size: 18px;
	}
	.shop-p2{
		color: #666666;
		font-size: 16px;
		text-align: center;
		padding-top: 10px;
	}


	@keyframes hover {
		from {}
		to {
			transform: translate3d(0, -5px, 2px);
			box-shadow: 0 0 20px 5px #999;
		}
	}
</style>
