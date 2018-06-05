<template>
	<div>
		<div :class="{cont:scrollBol}">
			<div class="cont-nav">
				<!-- logo -->
				<a href="#/"><img src="/static/icon/mingtang.png" class="logo" /></a>
				<!-- 搜索框 -->
				<div class="sousuo">
					<div class="ss-div">
						<input type="text" placeholder="请输入关键字进行搜索" class="ss-ipt"/>
						<router-link :to="Turl"><img src="../../static/icon/fangdajing.png" alt="" @click="sousuo()" /></router-link>
					</div>
					<p>热门：<router-link :to="item.url" v-for="item in remen"><span>{{item.name}}</span></router-link> </p>
				</div>
				<!-- 个人中心 -->
				<router-link tag="div" class="nav-r" to="/aa/wdzh">
					<img src="../../static/icon/gerenzhongxin.png"/>
					<p>个人中心</p>
				</router-link>
				<!-- 购物车 -->
				<router-link tag="div" class="nav-r cartBox" to="/Index/maincar">
					<img src="../../static/icon/gouwuche1.png"/>
					<p>购物车</p>
					<div class="gw">
						<span id="gw-num">0</span>
					</div>

				</router-link>
			</div>
		</div>


		<div class="div-a">
			<div class="div-nav">
				<!--<div class="all-fl" @mouseenter="show()" @mouseleave="hide()">-->
					<!--<router-link to="">全部分类</router-link>-->
					<!--<img src="../../static/icon/bottom.png"/>-->
					<!--<ul class="sec-ul" v-if="bol">-->
						<!--<li v-for="item in section">-->
							<!--<router-link :to="item.url">-->
								<!--<img :src="item.src" alt=""/>-->
								<!--<span>{{item.sec}}</span>-->
								<!--<div class="son" ><p v-for="bb in item.aa">{{bb}}</p></div>-->
							<!--</router-link>-->
						<!--</li>-->
					<!--</ul>-->
				<!--</div>-->
				<ul id="ul-nav">
					<li :class="{active:item.bool}" @click="active(index)" v-for="(item,index) in nav">
						<router-link :to="item.to">{{item.name}}</router-link>
					</li>
				</ul>
			</div>
		</div>

		<transition name="bounce">
			<router-view></router-view>
		</transition>
	</div>

</template>

<script>
	import addCover from './add-shopCar'

	export default {
		name: 'contentNav',
		components:{
			addCover
		},
		data () {
			return{
        href: window.location.href,
				gwnum:0,
				bol:false,
				scrollBol:false,
				remen:[{name:"三文鱼",url:"/kong"},{name:"蔬菜",url:"/kong"},{name:"人参果",url:"/kong"}],
				Turl:"",
				shopArr:["苹果","梨","香蕉","西瓜","可乐","雪碧","水果"],
				section:[
					{url:"/imgShow",src:"../../static/icon/shuiguo.png",sec:"新鲜水果",aa:["时令水果","进口水果","沙拉拼盘"]},
					{url:"/imgShow1",src:"../../static/icon/haixian.png",sec:"生猛海鲜",aa:["海鲜礼盒","生猛海鲜","鱼、虾","蟹、贝"]},
					{url:"",src:"../../static/icon/rou.png",sec:"肉类家禽",aa:["牛肉","羊肉","鸡鸭肉","淡水鱼"]},
					{url:"",src:"../../static/icon/niunai.png",sec:"蛋奶素食",aa:["单品","奶制品","沙拉拼盘"]},
					{url:"",src:"../../static/icon/sucai.png",sec:"田园蔬菜",aa:["绿叶菜","茄果类","根茎类","菌菇类","葱姜蒜椒","有机蔬菜","蔬菜沙拉","蔬菜礼篮"]},
					{url:"",src:"../../static/icon/lingshi.png",sec:"零食酒水",aa:["饮料","啤酒","白酒","葡萄酒","咖啡"]},
					{url:"",src:"../../static/icon/liangyou.png",sec:"粮油杂货",aa:["优选米面","优选杂粮","粮油调味","其他食材"]},
					{url:"",src:"../../static/icon/lihe.png",sec:"礼品卡券",aa:["打折卡","会员卡","积分卡"]},
					{url:"",src:"../../static/icon/jiaju.png",sec:"家具用品",aa:["沙发","茶几"]}
				],
				nav:[
					{name:"食品区",bool:false,to:"/shouye"},{name:"交易中心",bool:false,to:"/tongcheng"},
					{name:"食品资讯",bool:false,to:"/libaiwu"},{name:"展会和政策",bool:false,to:"/shopFenlei"},
					{name:"关于我们",bool:false,to:"/yxbz"},{name:"留言反馈",bool:false,to:"/leave"}
				]
			}
		},
    mounted () {

      window.addEventListener("scroll",this.handleScroll);

      // 获取购物车数据库的长度
      this.$axios.get('/api/cc').then(function(data){
        var kfg = data.data.length;
        $("#gw-num").text(kfg);
      });
    },
		methods:{
			show:function(){
				this.bol = true;
			},
			hide:function(){
				this.bol = false;
			},
			active: function(index){
				$("#ul-nav>li>a").css("color","#323333");
				for(var i = 0;i < this.nav.length;i++){
					this.nav[i].bool = false;
				}
				this.nav[index].bool = !this.nav[index].bool;
				$("#ul-nav>li").eq(index).find("a").css("color","#fff");
			},
			handleScroll (){   // 监听头部搜索框
				var scrollTop = $(document).scrollTop();
				if (scrollTop > 130) {
					this.scrollBol = true;
				} else{
					this.scrollBol = false;
				}
			},
			sousuo:function(){
				var aa = 0;
				for(var i = 0;i < this.shopArr.length;i++){
					if ($(".ss-ipt").val() == this.shopArr[i]) {
						aa++;
					}
				}
				if (aa == 0) {
					this.Turl = '/kong';
				} else{
					this.Turl = '/sResult';
				}
			}
		},
    watch:{
      href: function(val,oldval) {
        console.log(val);
        console.log(oldval);
      },
      deep:true
    }
	}

</script>

<style>
	/*  飞入购物车 */
	#z-index{display: block;width: 100px;height: 100px;border-radius: 50px;position: fixed;z-index: 9999;}
	.bounce-enter-active {
	  animation: bounceInUp 0.5s;
	}
	.bounce-leave-active {
	  animation: fadeOut 0.05s;
	}


	.cont{
		width: 100%;
		background: #fff;
		position: fixed;
		top: 0;
		border: 1px solid #ccc;
		z-index: 101;
	}
	.cont-nav{
		width: 1280px;
		height: 110px;
		background: #fff;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.cont-nav>a{
		display: inline-block;
	}

  .logo{
    width: 290px;
  }

	.sousuo{
		margin-top: 26px;
	}
	.sousuo>p>a>span{
		margin: 0 10px;
		color: #666666;
	}
	.ss-div{
		width: 494px;
		height: 36px;
		padding: 2px;
		margin-bottom: 5px;
		background: #f08200;
	}
	.ss-div>input{
		padding-left: 10px;
		width: 440px;
		height: 32px;
		margin-right: 5px;
		outline: none;
	}
	.ss-div>input::-webkit-input-placeholder {
		color: #999999;
		font-size: 14px;
	}
	.ss-div img{
		vertical-align: middle;
	}

	.nav-r{
		width: 125px;
		height: 40px;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		background: #f8f8f6;
		border: 1px solid #ccc;
		cursor: pointer;
	}
	.nav-r>img{
		margin-right: 10px;
	}
	.gw{
		background: url(../../static/icon/rec-bubble.png) no-repeat;
		background-size: 100% 100%;
		width: 22px;
		height: 22px;
		position: absolute;
		top: -12px;
		left: 40px;
	}
	#gw-num{
		position: absolute;
		text-align: center;
		color: #fff;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
	}
	.sec-div{
		position: relative;
	}
	.div-a{
		border-bottom: 1px solid #ccc;
	}
	.div-nav{
		margin-top: 20px;
		width: 1280px;
		height: 50px;
		margin: auto;
	}
	.all-fl{
		float: left;
		width: 151px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.all-fl>a{
		text-decoration: none;
		color: #323333;
		font-size: 18px;
		margin-right: 10px;
	}

	#ul-nav{
		float: left;
		overflow: hidden;
	}
	#ul-nav>li{
		float: left;
		width: 151px;
		height: 50px;
		position: relative;
	}
	#ul-nav>li>a{
		display: inline-block;
		width: 100%;
		text-decoration: none;
		color: #323333;
		font-size: 18px;
		text-align: center;
		margin-top: 15px;
		border-left: 1px solid #e8e8e8;
	}
	#ul-nav>li>img{
		position: absolute;
		right: 20px;
		top: 22px;
	}
	#ul-nav>li:hover{
		background: #f08200;
	}
	#ul-nav>li:hover a{
		color: #fff !important;
	}

	.sec-ul{
		position: absolute;
		width: 150px;
		top: 51px;
		z-index: 2;
    background: rgba(255,255,250,0.5);
    /*opacity: 0.7;*/
	}
	.sec-ul>li{
		width: 100%;
		height: 55px;
		border-bottom: 1px solid #ccc;
		cursor: pointer;
		/*background: #fff;*/
		overflow: hidden;
	}
	.sec-ul>li>a{
		margin-top: 16px;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sec-ul>li:hover{
		background: rgba(255,255,255,0.8);
	}
	.sec-ul>li:hover div.son{
		display: block;
	}
	.sec-ul span{
		color: #333;
		font-size: 16px;
		margin-left: 10px;
	}
	.son{
		width: 460px;
		height: 504px;
		background: rgba(255,255,255,0.8);
		position: absolute;
		top: 0px;
		right: -460px;
		display: none;
	}
	.son>p{
		margin: 20px 0 10px 30px;
		color: #000;
		font-size: 18px;
	}
	.active{
		background: #f08200;
		color: #fff;
	}

</style>
