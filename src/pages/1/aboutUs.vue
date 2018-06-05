<template>
	<div id="s-cont">
		<div class="s-location">
			<p>您当前的位置:</p>
		<ul class="s-return">
			<router-link to="" tag="li">首页&nbsp;&nbsp;&nbsp;></router-link>
			<router-link to="" tag="li">礼拜五商城&nbsp;&nbsp;&nbsp;></router-link>
			<router-link to="" tag="li" class="active">新用户注册</router-link>
		</ul>
		</div>
		<!--下边部分-->
		<div class="s-contBottom">
			<!--左边部分-->
			<div class="s-bottom-left">
				<p>礼拜五商城</p>
				<div v-for="(item,n) in msg" id="s-list">
					<p>{{item.title}}&nbsp;></p>
					<ul v-for="(items,m) in item.titleList">
					<li><a href="javascript:void(0)"  v-bind:class="{ active1: items.isClick}" @click="change(items)">{{items.title1}}</a></li>
					<li><a href="javascript:void(0)" v-bind:class="{ active1: items.isClick}" @click="change(items)">{{items.title2}}</a></li>
					<li><a href="javascript:void(0)"v-bind:class="{ active1: items.isClick}" @click="change(items)">{{items.title3}}</a></li>
					<li><a href="javascript:void(0)"v-bind:class="{ active1: items.isClick}" @click="change(items)">{{items.title4}}</a></li>
				</ul>	
				</div>
			</div>
			<!--右边部分-->
			<div class="s-bottom-right">
				<p>关于我们</p>
				<ul class="s-bottom-text">
					<li><h3>新用户注册</h3></li>
					<li><p><span>分类:&nbsp;&nbsp;关于礼拜五</span><span>日期:&nbsp;&nbsp;2015年9月21日</span></p></li>
					<li><p>
				我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。
					</p></li>
					<li><img src="../../images/img/l_bg2.png" alt="" /></li>
					<li><p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p></li>
					<li><img src="../../images/img/l_bg3.png" alt="" /></li>
					<li><p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p></li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'aboutUs',
		data () {
    return {
     	msg:[{title:"关于礼拜五",titleList:[{title1:"新用户注册",isClick:false},{title2:"在线下单",isClick:false},{title3:"支付方式",isClick:false}]},{title:"配送说明",titleList:[{title1:"运费说明",isClick:false},{title2:"配送方式",isClick:false},{title3:"发票说明",isClick:false}]},{title:"售后服务",titleList:[{title1:"退换货原则",isClick:false},{title2:"服务保障承诺",isClick:false},{title3:"验货与签收",isClick:false},{title4:"发票说明",isClick:false}]},{title:"加盟礼拜五",titleList:[{title1:"加盟条款",isClick:false},{title2:"公司简介",isClick:false},{title3:"服务协议",isClick:false}]}],
    
    }
  },
  methods: {
  	change:function(hou,m,n){
  		$("#s-list a").removeClass("active1");
	hou.isClick =!hou.isClick;
  	},
  }
	}
	
</script>

<style scoped="scoped">
	*{
		padding: 0;
		margin: 0;
	}
	ul{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	#s-cont{
		padding-top: 20px;
		margin: auto;
		width: 1280px;
	}
	.s-location{
		background: #F4F4F4;
		height: 50px;
		width: 1280px;
		line-height: 50px;
		color: #888888;
		display: flex;
		margin: auto;
		padding-left: 20px;
	}
	.s-location ul{
		display: flex;
	}
	.s-location ul li{
		margin-left: 15px;
	}
	.active{
		color: #68A26A;
	}
	.s-contBottom{
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.s-bottom-left{
		width: 170px;
		border: 1px solid #EDEDED;
		height: 680px;
	}
	.s-bottom-left>p{
		font-size: 16px;
		color:  #838383;
		height: 60px;
		padding-left: 20px;
		line-height: 60px;
		border-bottom: 1px solid #EDEDED;
		margin-bottom: 20px;
	}
	.s-bottom-left a{
		color: #B0B0B0;
		font-size: 14px;
		line-height: 35px;
	}
	.s-bottom-left>div{
	padding-left: 20px;
	}
	.s-bottom-left>div>p{
		color: #8E8E8E;
	}
	/*.s-bottom-left li a:hover{
		color: #42B983;
		text-decoration: underline;
	}*/
#s-list	.active1{
		color: #42B983;
		text-decoration: underline;
	}
	.s-bottom-right{
		width: 1085px;
		border:1px solid #EDEDED;
		margin-bottom: 40px;
	}
	.s-bottom-right>p{
		border-bottom: 1px solid #EDEDED;
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		padding-left: 20px;
		color: #3E3E3E;
	}
	.s-bottom-right ul{
		padding: 40px 35px 35px 30px;
	}
	.s-bottom-right ul h3{
		font-size:24px;
		text-align: center;
		color: #45934A;
		font-weight: 400;
	}
	.s-bottom-right ul li:nth-child(2) p{
		text-align: center;
		width: 350px;
		display: flex;
		justify-content: space-between;
		margin: auto;
		height: 60px;
		line-height: 60px;
	}
	.s-bottom-right ul li:nth-child(2) span{
		color: #AAAAAA;
		font-size: 14px;
	}
	.s-bottom-right ul li:nth-child(n+2) p{
		color:#7C7C7C;
		font-size: 14px;
		line-height: 30px;
	}
</style>