<template>
	<div class="ck-Fot">
		<!--<router-view></router-view>-->

		<!-- 底部nav -->
		<div class="fot-nav">
			<ul class="fot-ul fot-ul1">
				<li v-for="item in data">
					<router-link :to="item.url">
						<img :src="item.src" alt=""/>
						<h3>{{item.txt}}</h3>
					</router-link>
				</li>
			</ul>
		</div>

		<!-- 底部2 -->
		<div class="fot-nav fot-nav2">
			<ul class="fot-ul fot-ul2">
				<li class="ul2-li1">
					<img src="../../static/icon/mingtang.png" class="logo"/>
					<div class="li1-div1">
						<p class="fz-eig">服务时间 : 08 : -22 : 00</p>
						<div>
							<img src="../../static/icon/dianhua.png"/>
							<p>0374-8288998</p>
						</div>
					</div>
				</li>
				<li>
					<img src="../../static/icon/erweima1.png"/>
					<p class="fz-six">名堂官方微信</p>
				</li>
				<li>
					<img src="../../static/icon/erweima2.png"/>
					<p class="fz-six">名堂APP</p>
				</li>
				<li class="ul2-li">
					<p class="fz-six2">关于名堂</p>
					<router-link to="/aboutUs" tag="p">新用户注册</router-link>
					<p>在线下单</p>
					<p>支付方式</p>
				</li>
				<li class="ul2-li">
					<p class="fz-six2">配送说明</p>
					<p>运费说明</p>
					<p>配送方式</p>
					<p>发票说明</p>
				</li>
				<li class="ul2-li">
					<p class="fz-six2">售后服务</p>
					<p>退换货说明</p>
					<p>服务保障承诺</p>
					<p>验货与签收</p>
				</li>
				<li class="ul2-li">
					<p class="fz-six2">加盟名堂</p>
					<p>加盟条款</p>
					<p>公司简介</p>
					<p>服务协议</p>
				</li>
			</ul>
		</div>

		<!-- 底部3 -->
		<div class="fot-div3">
			<p>版权所有 © 名堂  保留所有权利 | 沪ICP备12042163</p>
			<p>名堂  纵享品质</p>
		</div>

	</div>
</template>

<script>
	export default{
		name:"footer",
		data () {
			return{
				data:[
					{url:"/yxbz",src:"../../static/icon/baozhang.png",txt:"优鲜保障"},
					{url:"/userCtrl",src:"../../static/icon/jiankong.png",txt:"全程监控"},
					{url:"",src:"../../static/icon/jingxuan.png",txt:"名堂特惠"},
					{url:"",src:"../../static/icon/zhigong.png",txt:"基地直供"},
					{url:"",src:"../../static/icon/zunshi.png",txt:"准时送达"}
				]
			}
		}

	}
</script>

<style scoped>
	.fot-nav{
		/*margin-top: 20px;*/
		border-top: 1px solid #dddddd;
		border-bottom: 1px solid #dddddd;
	}
	.fot-nav2{
		border-top: none;
	}
	.fot-ul{
		width: 1280px;
		margin: auto;
		padding-top: 22px;
		padding-bottom: 22px;
		display: flex;
	}
	.fot-ul1{
		justify-content: flex-start;
	}
	.fot-ul2{
		justify-content: space-around;
	}
	.fot-ul1>li{
		flex: 1;
		text-align: center;
		cursor: pointer;
		border-right: 1px solid #dddddd;
		cursor: pointer;
	}
	.fot-ul1>li:nth-child(5){
		border-right: none;
	}
	.fot-ul1 a{
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.fot-ul1 a>h3{
		font-size: 24px;
		color: #333333;
		font-family: inherit;
	}
	.fot-ul1 img{
		margin-right: 20px;
		width: 44px;
	}
	.ul2-li1{
		width: 370px;
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
	}
	.ul2-li1>img{
		width: 290px;
    height: 91px;
	}
	.fz-eig{
		font-size: 18px;
	}
	.li1-div1{
		width: 100%;
	}
	.li1-div1>p{
		float: left;
	}
	.li1-div1>div{
		float: right;
	}
	.li1-div1>div>*{
		float: left;
	}
	.li1-div1>div>img{
		margin-top: 5px;
		margin-right: 5px;
	}
	.li1-div1>div>p{
		color: #f08200;
		font-size: 18px;
		font-weight: bolder;
	}
	.fz-six{
		font-size: 16px;
		color: #666666;
		text-align: center;
		padding-top: 10px;
	}
	.ul2-li>p{
		color: #999999;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
	}
	.ul2-li .fz-six2{
		color: #333333;
		font-size: 16px;
		height: 60px;
		line-height: 60px;
	}
	.fot-div3{
		padding: 20px 0;
	}
	.fot-div3>p{
		font-size: 14px;
		color: #666;
		text-align: center;
		height: 25px;
		line-height: 25px;
	}
	.fot-div3>p:nth-child(2){
		color: #f08200;
	}
</style>
