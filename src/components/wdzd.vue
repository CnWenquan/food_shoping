<template>
  <div class="wdzd">
  	<p class="wdzd_p1">我的账单</p>
  	<div class="wdzd_div1">
  		<ul class="wdzd_ul1">
  			<li class="wdzd_li1">
  				<p class="wdzd_p2">操作</p>
  				<p class="wdzd_p3">充值金额</p>
  				<p class="wdzd_p4">账户余额</p>
  				<p class="wdzd_p5">时间</p>
  			</li>
  			<li class="wdzd_li2" v-for="int in cz">
  				<p class="wdzd_p6">{{int.czozuo}}</p>
  				<p class="wdzd_p7">{{int.jine}}</p>
  				<p class="wdzd_p8">{{int.yue}}</p>
  				<p class="wdzd_p9">{{int.t}}</p>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     cz:[{czozuo:'充值',jine:'+￥1000.00元 ',yue:'+￥3443.03元 ',t:'2015-04-15 17:21:21'},{czozuo:'消费',jine:'-￥1000.00元 ',yue:'+￥3443.03元 ',t:'2015-04-15 17:21:21'},{czozuo:'充值',jine:'+￥1000.00元 ',yue:'+￥3443.03元 ',t:'2015-04-15 17:21:21'},{czozuo:'消费',jine:'-￥1000.00元 ',yue:'+￥3443.03元 ',t:'2015-04-15 17:21:21'},{czozuo:'充值',jine:'+￥1000.00元 ',yue:'+￥3443.03元 ',t:'2015-04-15 17:21:21'},{czozuo:'消费',jine:'-￥1000.00元 ',yue:'+￥3443.03元 ',t:'2015-04-15 17:21:21'},{czozuo:'充值',jine:'+￥1000.00元 ',yue:'+￥3443.03元 ',t:'2015-04-15 17:21:21'}]
    }
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.wdzd{
	width: 1086px;
	min-height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.wdzd_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	border-bottom: 1px solid #E7E7E7;
	text-align: left;
	font-size: 18px;
	color: #2A2A2A;
}
ul{
	list-style: none;
}
.wdzd_div1{
	width: calc(100% - 40px);
	padding: 20px;	
}
.wdzd_ul1{
	width: 100%;
	border: 1px solid #E9E9E9;
}
.wdzd_ul1>li{
	width: 100%;
	position: relative;
}
.wdzd_li1{
	height: 46px;
	background: #F2F2F2;
}
.wdzd_li1>p{
	position: absolute;
	height: 46px;
	line-height: 46px;
	font-size: 16px;
	color: #2A2A2A;
	top: 0;
}
.wdzd_p2{
	left: 95px;
}
.wdzd_p3{
	left: 345px;
}
.wdzd_p4{
	left: 630px;
}
.wdzd_p5{
	left: 910px;
}
.wdzd_li2{
	height: 55px;
	border-bottom: 1px solid #E9E9E9;
}
.wdzd_li2>p{
	position: absolute;
	height: 55px;
	line-height: 55px;
	font-size: 14px;
	color: #666666;
	top: 0;
}
.wdzd_p6{
	left: 100px;
}
.wdzd_p7{
	left: 330px;
}
.wdzd_p8{
	left: 620px;
	color: #F88B2E;
}
.wdzd_p9{
	left: 860px;
}
</style>
