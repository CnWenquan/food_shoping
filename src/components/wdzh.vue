<template>
	<div class="l_div1">
		    <div class="l_div2">
		      	<div class="l_dd1">
		      		<img src="../images/img/l23.png" alt="" />
		      	</div>
		      	<p>您好,<span class="g-name">136****2356</span></p>
		      	<div class="l_dd2">
		      		<p class="l_pp1">当前积分</p>
		      		<p class="l_pp2">124</p>
		      	</div>
		      	<div class="l_dd3">
		      		<p class="l_pp1">我的钱包</p>
		      		<p class="l_pp2">¥1220.0</p>
		      	</div>
		      	<div class="l_dd4">
		      		<a href="">
		      			<p class="l_pp3">充值有礼>></p>
		      		</a>
		      		<a href="">
		      			<p class="l_pp2"><router-link to="/aa/czdh">充值卡兑换>></router-link></p>
		      		</a>
		      	</div>
		    </div>
		    <a href="www.baidu.com">
		    	    <div class="l_div3">
		    	        <div class="l_div4">
		    	    	        <div class="l_div5">
		    	    	     	    <p class="l_p4">新人福利享不停</p>
		    	    	     	    <p class="l_p5">充值有好礼</p>
		    	    	        </div>
		    	        </div>
		        </div>
		    </a>		    
		    
		</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted (){
  	$(".g-name").text(localStorage.name);
  },
  methods :{
  	
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.l_div1{
	width: 1083px;
	float: right;
}
.l_div2{
	width: 100%;
	height: 219px;
	border: 1px solid #E7E7E7;
	background: #F3FFF3;
	display: flex;
	align-items: center;
	position: relative;
}
.l_dd1,.l_dd2,.l_dd3,.l_dd4{
	position: absolute;
}
.l_dd1{
	width: 167px;
	height: 167px;
	border-radius: 50%;
	overflow: hidden;
	left: 30px;
}
.l_dd1>img{
	width: 100%;
	height: 100%;
}
.l_div2>p{
	position: absolute;
	left: 220px;
	font-size:18px;
	color: #666666;
	
}
.l_div2>p>span{
	color: #F05F3E;
}
.l_dd2,.l_dd3,.l_dd4{
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.l_dd2{
	width: 80px;
	left: 600px;
}
.l_dd3{
	width: 80px;
	left: 745px;
}
.l_dd4{
	width: 120px;
	left: 900px;
}
.l_div3{
	width: 100%;
	height: 384px;
	border: 1px solid #D3D3D3;
	margin-top: 20px;
	background: url(../images/img/l_bg10.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
}
.l_div4{
	width: 517px;
	height: 214px;
	padding: 10px;
	background:url(../images/img/1.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
.l_div5{
	width: 100%;
	height: 100%;
	background: url(../images/img/2.png) no-repeat;
	background-size: 100% 100%;
}
.active{
	color: #419046;
}
.l_p1{
	box-sizing: border-box;
	display: inline-block;
	width: 100%;
	height: 54px;
	line-height: 54px;
	padding-left: 20px;
	text-align: left;
}
.l_p4{
	width: 100%;
	height: 110px;
	line-height: 110px;
	font-size: 48px;
	color: #FFFFFF;
}
.l_p5{
	width:420px;
	height: 70px;
	line-height: 70px;
	font-size: 36px;
	color: #FFFFFF;
	border-top: 1px solid #FFFFFF;
	border-bottom: 1px solid #FFFFFF;
	margin: auto;
}
.l_pp1{
	font-size: 18px;
	color: #252525;
}
.l_pp2>a{
	font-size: 18px;
	color: #F78327;
}
.l_pp3{
	font-size: 18px;
	color: #3E9444;
}
a{
	text-decoration: none;
}
</style>
