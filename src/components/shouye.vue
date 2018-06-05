<template>
	<div>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="/static/images/dalunbo1.jpg" /></div>
				<div class="swiper-slide"><img src="/static/images/dalunbo2.jpg" /></div>
				<div class="swiper-slide"><img src="/static/images/dalunbo3.jpg" /></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>

		<!-- 热卖 新品 -->
		<div class="rm-xp">
			<a href="#/404"><img src="/static/images/ca_2.jpg" /></a>
			<a href="#/404"><img src="/static/images/ca_3.jpg" /></a>
			<a href="#/404"><img src="/static/images/ca_5.jpg" /></a>
			<a href="#/404"><img src="/static/images/ca_6.jpg" /></a>
		</div>

		<!-- 礼拜5 -->
		<!--<div class="friday">-->
			<!--<div class="fri-l fri-div">-->
				<!--<img src="../../static/icon/naozhong.png" />-->
				<!--<h3>特色</h3>-->
			<!--</div>-->
			<!--<div class="fri-r fri-div">-->
				<!--<h5>距离开始</h5>-->
				<!--<p> <span>{{theTime.days}}</span> &nbsp;<span>{{theTime.hours}}</span> : <span>{{theTime.minutes}}</span> : <span>{{theTime.seconds}}</span> </p>-->
				<!--<a href="javascript:void(0)">更多></a>-->
			<!--</div>-->
		<!--</div>-->
		<!-- 礼拜五商品 -->
		<!--<ul class="fri-ul">-->
			<!--<li v-for="(item,index) in shop1" @click="shopDetails(item,index)">-->
				<!--<div class="fri-li-div"><img :src="item.src" alt="" /></div>-->
				<!--<p class="fri-p1">{{item.aName}}</p>-->
				<!--<p class="fri-p2"><span>{{item.aJs}}</span></p>-->
				<!--<p class="fri-p3">礼拜五价 : <span>￥{{item.xPrice}}</span></p>-->
			<!--</li>-->
		<!--</ul>-->
		<!--<ul class="fri-dots">-->
			<!--<li class="dots-active"></li>-->
			<!--<li></li>-->
			<!--<li></li>-->
			<!--<li></li>-->
		<!--</ul>-->

		<!-- 各种商品 -->
		<div class="shopping" v-for="(item,index) in shopping">
			<div class="friday">
				<div class="fri-l fri-div">
					<img :src="item.src" />
					<h3>{{item.name}}</h3>
					<!--<span>{{item.js}}</span>-->
				</div>
				<!--<div class="fri-r fri-div">-->
					<!--<a href="javascript:void(0)">更多></a>-->
				<!--</div>-->
			</div>

			<ul class="fri-ul">
				<li v-for="(he,index1) in item.aa" class="fri-li">
					<div class="fri-li-div" @click="shopDetail(index,index1)"><img class="flyimg" :src="he.src" alt="" /></div>
					<p class="fri-p1 ck-p1">{{he.aName}}</p>
					<p class="ck-p2">{{he.aJs}}</p>
					<div class="fri-div2">
						<p><span class="li-pri">￥{{he.xPrice}}</span><span>￥{{he.yPrice}}</span></p>
						<img class="shop-cart" src="../../static/icon/gouwuche.png" alt="" @click="addCar(index,index1)" />
					</div>
				</li>
			</ul>
		</div>

		<add-cover></add-cover>
	</div>
</template>

<script>
	import swiper from '../../static/js/swiper.min.js'
	import addCover from './add-shopCar'

	export default {
    components: {
      addCover
    },
    data() {
      return {
//				tit:"",
//				src1:"",
//				ming:"",
//				price:"",
        deadline: 'Nov 18, 2017 00:00:00', //这里设置日期倒计时间
        days: 'HI',
        hours: 'TH',
        minutes: 'ER',
        seconds: 'E!',
        expired: false,
        shop1: [{
          src: "/static/images/aa.jpg",
          aName: "牛蒡巧克力酥",
          xPrice: "25.00",
          "yPrice": "35",
          aJs: "258g/盒"
          },
          {
            src: "/static/images/bb.jpg",
            aName: "杭州特产手工糕点",
            xPrice: "26.00",
            "yPrice": "35",
            aJs: "3块/盒"
          },
          {
            src: "/static/images/dd.jpg",
            aName: "山东特产喜卷软煎饼",
            xPrice: "20.00",
            "yPrice": "35",
            aJs: "310g/卷"
          },
          {
            src: "/static/images/cc.jpg",
            aName: "兴盛德黑芝麻片",
            xPrice: "56.00",
            "yPrice": "66",
            aJs: "350g/罐"
          }
        ],
        shopping:[],
//        shopping: [{name:'香味糕点',src:'/static/icon/niunai1.png',aa:[{aName:'桂林特产 板栗糕',src:'/static/images/banligao.jpg',aJs:'160g*4/盒',xPrice:'20',yPrice:'35'},{aName:'葡韵 澳门特产 凤凰卷',src:'/static/images/fenghuangjuan.jpg',aJs:'6个/盒',xPrice:'25',yPrice:'40'},{aName:'上海特产 屋里香 玫瑰酥',src:'/static/images/meiguisu.jpg',aJs:'280g/盒',xPrice:'59',yPrice:'69'},{aName:'鲜乳酪面包',src:'/static/images/rulao.jpg',aJs:'800g/盒',xPrice:'45.90',yPrice:'46.90'}]}]
      };
    },
    mounted() {
      $(".fri-dots li").each(function(i){
        $(".fri-dots li").eq(i).click(function(){
          $(".fri-dots li").removeClass("dots-active");
          $(".fri-ul li").removeClass("df");
          $(this).addClass("dots-active");
          $(".fri-ul li").eq(i).addClass("df");
        })
      });

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

      this.getThing();

    },
		methods: {
      getThing(){ // 获取商品数据
        $.getJSON('/static/json/goods.json').then(function(data){
          // this.$axios.get('/api/thing').then(function(data){
        console.log(data)
          this.shopping = data;
          this.$nextTick(function(){
            //飞入购物车
            var offset = $('.cartBox').offset();
            $('.shop-cart').click(function(event) {
              var img = $(this).parent().parent().find('.flyimg').attr('src');
              var flyImg = $('<img class="u-flyer" id="z-index" src="' + img + '">');
              console.log(event.pageX, event.pageY);
              flyImg.fly({
                start: {
                  left: event.clientX - 150,
                  top: event.clientY - 250,
                },
                end: {
                  left: offset.left + 50,
                  top: offset.top,
                  width: 0,
                  height: 0
                }
              });
            });
          })
        }.bind(this));
      },
			addCar: function(index,index1) {
				$(".add").fadeIn("normal");
				localStorage.tit = this.shopping[index].name;
				localStorage.src1 = this.shopping[index].aa[index1].src;
				localStorage.ming = this.shopping[index].aa[index1].aName;
				localStorage.price = this.shopping[index].aa[index1].xPrice;

			},
			shopDetail:function(index,index1){
				localStorage.tit1 = this.shopping[index].name;
				localStorage.src2 = this.shopping[index].aa[index1].src;
				localStorage.ming1 = this.shopping[index].aa[index1].aName;
				localStorage.xprice1 = this.shopping[index].aa[index1].xPrice;
				localStorage.yprice1 = this.shopping[index].aa[index1].yPrice;
				localStorage.size1 = "500g";
				localStorage.num1 = 1;
				location.href = "#/goodsDetail";
			},
			shopDetails:function(index,index1){
				localStorage.tit1 = index.name;
				localStorage.src2 = index.src;
				localStorage.ming1 = index.aName;
				localStorage.xprice1 = index.xPrice;
				localStorage.yprice1 = index.yPrice;
				localStorage.size1 = "500g";
				localStorage.num1 = 1;
				location.href = "#/goodsDetail";
			}
		},
		computed: {
			theTime() {
				var ctx = this,
					countDownDate = new Date(ctx.deadline).getTime();

				// Countdown loop
				var x = setInterval(function() {

					// Difference between the 2 dates
					var countDownDate = new Date(ctx.deadline).getTime(),
						now = new Date().getTime(),
						diff = countDownDate - now,

						// Time conversion to days, hours, minutes and seconds
						tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
						thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
						tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
						tseconds = Math.floor((diff % (1000 * 60)) / 1000);

					// Keep 2 digits
					ctx.days = tdays + "天";
					ctx.hours = (thours < 10) ? '0' + thours : thours;
					ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
					ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

					// Check for time expiration
					if(diff < 0) {
						clearInterval(x);
						ctx.expired = true;
					}
				}, 1000);
				// Return data
				return {
					days: ctx.days,
					hours: ctx.hours,
					minutes: ctx.minutes,
					seconds: ctx.seconds
				}
			}
		}

	}
</script>

<style scoped>
	/*  飞入购物车 */
	#z-index{display: block;width: 100px;height: 100px;border-radius: 50px;position: fixed;z-index: 103;}
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

	.friday {
		width: 1280px;
		height: 100px;
		margin: auto;
		border-bottom: 1px solid #498E3D;
		background: #ebffe8;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.fri-div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.fri-l {
		padding-left: 30px;
	}

	.fri-r {
		padding-right: 30px;
	}

	.fri-l>h3 {
		font-size: 30px;
		color: #498e3d;
		margin-left: 20px;
	}

	.fri-l>span {
		color: #999999;
		font-size: 24px;
		margin-left: 20px;
		align-self: flex-end;
	}

	.fri-r>* {
		margin-right: 20px;
	}

	.fri-r>h5 {
		font-size: 24px;
		color: #498e3d;
	}

	.fri-r>p {
		color: #f08200;
		font-size: 20px;
		display: flex;
		align-items: center;
	}

	.fri-r span {
		display: inline-block;
		width: 60px;
		height: 41px;
		border-radius: 5px;
		background: #f08200;
		color: #fff;
		text-align: center;
		line-height: 41px;
		margin: 0 6px;
	}

	.fri-r>a {
		text-decoration: none;
		color: #666666;
		font-size: 18px;
	}

	.fri-ul {
		width: 1280px;
		margin: auto;
		padding: 20px 0;
		display: flex;
		justify-content: space-between;
		transform-style: preserve-3d;
	}

	.fri-ul>li {
		width: 305px;
		height: 433px;
		background: #f8f6f7;
		box-sizing: border-box;
	}

	.fri-li-div {
		width: 100%;
		height: 312px;
		position: relative;
    overflow: hidden;
	}

	.fri-li-div>img {
		width: 100%;
    height: auto;
		/*position: absolute;*/
		/*top: 0;*/
		/*left: 0;*/
		/*right: 0;*/
		/*bottom: 0;*/
		/*margin: auto;*/
	}

	.fri-ul p {
		padding: 0 20px;
		text-align: center;
		font-size: 18px;
	}

	.fri-p1 {
		color: #333333;
		/*height: 30px;*/
		line-height: 30px;
	}

	.fri-p2 {
		color: #666666;
		height: 25px;
		line-height: 25px;
	}

	.fri-p3 {
		color: #f08200;
	}

	.fri-p3>span {
		font-size: 24px;
		color: #ff5757;
		height: 40px;
		line-height: 40px;
	}

	.fri-dots {
		width: 112px;
		height: 90px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.fri-dots>li {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #b0b0b0;
		cursor: pointer;
	}

	.fri-dots>li.dots-active {
		background: #498e3d;
		transform: scale(1.5);
	}

	.fri-ul>li.fri-li {
		background: #fff;
		border: 1px solid #ccc;
	}

	.fri-li>p.ck-p1 {
		text-align: left;
	}

	.fri-li>p.ck-p2 {
		color: #666666;
		font-size: 14px;
		text-align: left;
		height: 40px;
		line-height: 40px;
	}

	.fri-div2 {
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.fri-div2>p {
		padding: 0;
	}

	.fri-div2>p>span.li-pri {
		font-size: 24px;
		color: #ff5757;
		margin-right: 20px;
		text-decoration: none;
	}

	.fri-div2>p>span:nth-child(2) {
		font-size: 18px;
		color: #666666;
		text-decoration: line-through;
	}

	.fri-ul>li:hover {
		border: 1px solid #498e3d;
		animation: hover 1s forwards;
	}
	.fri-ul>li.df{
		border: 1px solid #498e3d;
		animation: hover 1s forwards;
	}

	@keyframes hover {
		from {}
		to {
			transform: translate3d(0, -5px, 2px);
			box-shadow: 0 0 20px 5px #999;
		}
	}
</style>
