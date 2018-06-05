<template>
	<div class="sdmm">
		<p class="xg_p1">设定密码</p>
		<div class="xg_div1">
			<ul class="xg_ul1">
				<li class="xg_li1">
					<input type="text" value="15035675376" class="in1 in3" />
				</li>
				<li class="xg_li1">
					<input type="text" placeholder="请输入密码(6-20位号码字符)" class="in1 in3"/>
				</li>
				<li class="xg_li1">
					<input type="text" placeholder="请再次输入密码确认" class="in1 in3"/>
				</li>
				<li class="xg_li1 l_li">
					<input type="text" placeholder="验证码" class="in1 in4"/>
					<div class="xg_li_d"></div>
					<p class="yzm">看不清换一张</p>
				</li>
				<li class="xg_li2">
					<input type="text" placeholder="手机验证码" class="in2"/>
					<button class="xg_btn1">获取验证码</button>
				</li>
				<li class="xg_li3">
					<button class="xg_btn2" @click="queding()">确定</button>
				</li>
			</ul>
			<div class="sd_div2">
				<img src="../images/icon/check1.png" alt="" />
				<p>恭喜您设定成功 </p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  mounted(){
  	$('.sd_div2').hide();
  },
  methods:{
  	queding:function(){
  		$('.sd_div2').show();
  		var timer;
  	timer = setInterval(function(){
  		$('.sd_div2').hide();
  		clearTimeout(timer);
  	},2000);
  	}
  }
}

</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.sdmm{
	width: 1086px;
	border: 1px solid #E7E7E7;
	float: right;
}
.xg_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	border-bottom: 1px solid #E7E7E7;
	font-size: 18px;
	color: #323333;
	text-align: left;
}
.xg_div1{
	width: calc(100% - 80px);	
	height: 485px;
	padding: 40px;
	position: relative;
}
.sd_div2{
	position: absolute;
	width: 454px;
	height: 184px;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 150px;
	right: 100px;
	background: #D9D9D9;
	border-radius: 20px;
}
.sd_div2>img{
	width: 42px;
	height: 42px;
	margin-right: 20px;	
}
.sd_div2>p{
	font-size: 24px;
	color: #F78327;
}
ul{
	list-style: none;
}
.xg_ul1{
	width: 100%;
}
.xg_li1,.xg_li3{
	width: 100%;
	height: 45px;
	margin-bottom: 30px;
	text-align: left;
}
.xg_li3{
	height: 50px;
}
.xg_li2{
	width: 307px;
	height: 45px;
	margin-bottom: 30px;
	background: #F9F9F9;
	border: 1px solid  #D3D3D3;
	text-align: left;
}
button{
	outline: none;
	border: none;
	cursor: pointer;
}
.xg_btn1{
	width: 100px;
	height: 32px;
	line-height: 32px;
	background: #3D8E43;
	font-size: 14px;
	color: #FFFFFF;
}
.in1{
	height: 44px;
	line-height: 44px;
	background: #F9F9F9;
	font-size: 16px;
	color: #333333;
	border: 1px solid  #D3D3D3;
	padding-left: 20px;
	outline: none;
}
.in2{
	height: 44px;
	line-height: 44px;
	background: #F9F9F9;
	font-size: 16px;
	color: #333333;
	border: none;
	padding-left: 15px;
	outline: none;
	margin-right: 10px;
}
.in3{
	width: 292px;
}
.in4{
	width: 93px;
	padding: 0 15px;
	margin-right: 20px;
}
.xg_btn2{
	width: 150px;
	height: 50px;
	line-height: 50px;
	font-size: 18px;
	color: #FFFFFF;
	background: #F78327;
	border-radius: 5px;
}
.l_li{
	display: flex;
	align-items: center;
}
/*验证码*/
.xg_li_d{
	width: 79px;
	height: 34px;
	background: pink;
}
.yzm{
	height: 44px;
	line-height: 44px;
	font-size: 14px;
	color: #4C9B50;
	margin-left: 10px;
	cursor: pointer;
}
</style>
