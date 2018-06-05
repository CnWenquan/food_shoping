<template>
<div class="bdsj">
    <p class="bdsj_p1">绑定手机</p>
    <ul class="bd_ul1">
		<li class="bd_li2">
			<input type="text" placeholder="请输入手机号"/>
		</li>
		<li class="bd_li2">
			<input type="text" placeholder="请输入密码(6-20位号码字符)"/>
		</li>
		<li class="bd_li2">
			<input type="text" placeholder="请再次输入密码确认"/>
		</li>
		<li class="bd_li3">
			<input type="text" placeholder="验证码"/>
			<div></div>
			<p>看不清换一张</p>
		</li>
		<li class="bd_li7">
			<input type="text" placeholder="手机验证码"/>
			<p>获取验证码</p>
		</li>
		<li class="bd_li5">
			<button @click="bd_btn1()">点击绑定</button>
		</li>
	</ul>
	<div class="bdsj_div1">
		<img src="../images/icon/check1.png" alt="" />
		<p>恭喜您绑定成功</p>
	</div>
</div>
</template>
<script>
export default {
mounted(){
	$('.bdsj_div1').hide();
},
methods:{
	bd_btn1:function(){
		$('.bdsj_div1').show();
		var timer;
		timer = setInterval(function(){
			$('.bdsj_div1').hide();
			clearInterval(timer);
		},1500);
	}
}
}	
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
.bdsj_div1{
	width: 454px;
	height: 184px;
	background: #D9D9D9;
	border-radius: 20px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 220px;
	right: 90px;
}
.bdsj_div1>img{
	width: 42px;
	height: 42px;
	margin-right: 20px;
}
.bdsj_div1>p{
	font-size: 24px;
	color: #F5882C;
}
.bdsj{
	width: 1086px;
	border: 1px solid #E7E7E7;
	min-height: 625px;
	float: right;
	position: relative;
}
.bdsj_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #323333;
	text-align: left;
	border-bottom: 1px solid #E7E7E7;
}
.bdsj>ul{
	list-style: none;
	width: calc(100% - 80px);
	padding: 40px;
	height: 485px;
}
.bdsj>ul>li{
	width: 100%;
}
.bd_li2{
	height: 44px;
	margin-bottom: 30px;
	text-align: left;
}
.bd_li5{
	height: 50px;
	text-align: left;
}
.bd_ul1>.bd_li7{
	width: 287px;
	padding-left: 20px;
	height: 44px;
	background: #F9F9F9;
	border: 1px solid #D3D3D3;
	margin-bottom: 40px;
	text-align: left;
	position: relative;
}
.bd_li7>input{
	width: 160px;
	height: 44px;
	line-height: 44px;
	font-size: 16px;
	color: #333333;
	background: #F9F9F9;
	outline: none;
	border: none;
}
.bd_li7>p{
	display: inline-block;
	width: 100px;
	height: 32px;
	text-align: center;
	line-height: 32px;
	font-size: 14px;
	color: #A8A8A8;
	background: #E8E8E8;
	position: absolute;
	top: 6px;
	right: 5px;
	cursor: pointer;
}
.bd_li5>button{
	width: 150px;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
	background: #F78327;
	font-size: 20px;
	color: #FFFFFF;
	outline: none;
	border: none;
	cursor: pointer;
}
.bd_li2>input{
	width: 287px;
	padding-left: 20px;
	height: 44px;
	line-height: 44px;
	font-size: 16px;
	color: #333333;
	background: #F9F9F9;
	border: 1px solid #D3D3D3;
	outline: none;
}
.bd_li3{
	height: 44px;
	margin-bottom: 30px;
	display: flex;
	align-items: center;
}
.bd_li3>input{
	width: 93px;
	padding-left: 20px;
	height: 44px;
	line-height: 44px;
	font-size: 16px;
	color: #333333;
	background: #F9F9F9;
	border: 1px solid #D3D3D3;
	outline: none;
	margin-right: 20px;
}
/*验证码*/
.bd_li3>div{
	background: pink;
	width: 79px;
	height: 34px;
}
.bd_li3>p{
	display: inline-block;
	font-size: 14px;
	color: #F78855;
	cursor: pointer;
	margin-left: 10px;
}
</style>