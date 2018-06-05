<template>
	<div class="grzx box">
		<ul class="l_ul1">
		    <li>
		    	    <p class="l_p2">个人中心</p>
		    </li>
		    <li>
		    	    <p class="l_p2">交易管理&nbsp;&nbsp;&nbsp;></p>
		       	<p class="l_p3" @click="aa($event)"><router-link to="/aa/wdzh">我的账户</router-link></p>
		      	<p class="l_p3" @click="aa($event)"><router-link to="/aa/order">我的订单</router-link></p>
		     	<p class="l_p3" @click="aa($event)"><router-link to="/aa/Mypoints">我的积分</router-link></p>
		     	<p class="l_p3" @click="aa($event)"><router-link to="/aa/IntegralOrder">积分订单</router-link></p>
		     	<p class="l_p3" @click="aa($event)"><router-link to="/aa/wdqb">我的钱包</router-link></p>
		    </li>
		    <li>
		    	    <p class="l_p2">会员资料&nbsp;&nbsp;&nbsp;></p>
		       	<p class="l_p3" @click="aa($event)"><router-link to="/aa/grzl">个人资料</router-link></p>
		      	<p class="l_p3" @click="aa($event)"><router-link to="/aa/dzgl">地址管理</router-link></p>
		     	<p class="l_p3" @click="aa($event)"><router-link to="/aa/wdsc">我的收藏</router-link></p>
		     	<p class="l_p3" @click="aa($event)"><router-link to="/aa/zjll">最近浏览</router-link></p>
		     	<p class="l_p3" @click="aa($event)"><router-link to="/aa/xgmm">修改密码</router-link></p>
		    </li>
		    <li>
		    	    <p class="l_p2">站内信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></p>
		       	<p class="l_p3" @click="aa($event)"><router-link to="/aa/wdxx">我的消息</router-link></p>
		      	<p class="l_p3" @click="aa($event)"><router-link to="/aa/yjfk">意见反馈</router-link></p>
		    </li>
		</ul>
		<router-view/>		
	</div>
</template>
<script>
export default {
  methods:{
  	aa:function($event){  		
  		$('.l_p3 a').css('color','#A7A7A7');
  		$($event.target).css('color','#419046');    				
  	}
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
p{
	text-align: center;
}	
.grzx{
	width: 1280px;
	background: #fff;
	margin: 40px auto;
}
.box::after{
    content:"";
    display:block;
    height:0;
    visibility:hidden;
    clear:both;
}
.l_ul1{
	list-style: none;
	width: 168px;
	height: 625px;
	border: 1px solid #EDEDED;
	float: left;
}
.l_ul1 li{
	width: 100%;
}
.l_ul1 p{
	width: 100%;
	padding-left: 20px;
	text-align: left;
	box-sizing: border-box;
}
.l_ul1 p a{
	width: 100%;
	text-decoration: none;
}
.l_p2{
	height: 55px;
	line-height: 55px;
    font-size: 18px;
}
.l_p3 a{
	height: 34px;
	line-height: 34px;
    font-size: 16px;
    cursor: pointer;
    color: #A7A7A7;
}	
.l_p3:hover a{
	color: #419046;
	text-decoration: underline;
}
.l_ul1 li:first-child{
	height: 55px;
	line-height: 55px;
	border-bottom: 1px solid #EDEDED;
}

</style>