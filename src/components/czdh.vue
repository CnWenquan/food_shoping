<template>
  <div class="czdh">
  	<div class="czdh_div1">
  	    <p class="czdh_p1">充值卡兑换</p>
  	    <router-link to="/aa/wdzd">查看账单</router-link>
  	</div>
  	<div class="czdh_div2">
  		<input type="text" placeholder="请输入充值卡兑换码进行充值"/>
  		<button>充值</button>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.czdh{
	width: 1086px;
	min-height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.czdh_div1{
	width:100%;
	height: 59px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
}
.czdh_p1{
	display: inline-block;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #2D2D2D;
	position: absolute;
	left: 20px;
}
.czdh_div1>a{
	position: absolute;
	width: 90px;
	height: 30px;
	line-height: 30px;
	font-size: 15px;
	color: #FFFFFF;
	right: 20px;
	top: 14.5px;
	background: #3D8E43;
	border-radius: 5px;
	text-decoration: none;
	text-align: center;
}
.czdh_div2{
	width: calc(100% - 60px);
	height: 400px;
	padding: 50px 30px;
	position: relative;
}
.czdh_div2>input{
	position: absolute;
	width: 455px;
	height: 53px;
	line-height: 53px;
	padding-left: 20px;
	background: #FFFFFF;
	font-size: 18px;
	color: #333333;
	border: 1px solid #F4F4F4;
	top: 50px;
	left: 30px;
	outline: none;
}

.czdh_div2>button{
	width: 150px;
	height: 50px;
	line-height: 50px;
	background: #F78327;
	font-size: 18px;
	color: #FFFFFF;
	position: absolute;
	top: 205px;
	left: 30px;
	border: none;
	outline: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
