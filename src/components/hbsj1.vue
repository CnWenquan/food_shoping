<template>
<div class="hbsj1">
    <p class="hbsj1_p1">换绑手机</p>
    <ul class="hb_ul1">
		<li class="hb_li1">
			<p class="hb_p1">1.验证原手机号</p>
			<p class="hb_p2">2.验证新手机号</p>
			<p class="hb_p3">3.换绑成功</p>
		</li>
		<li class="hb_li2">
			<input type="text" placeholder="输入原手机号" class="inp1"/>
		</li>
		<li class="hb_li3">
			<input type="text" placeholder="验证码" class="inp2"/>
			<canvas id="canvas" width="120" height="40"></canvas>
			<p id="changeImg">看不清换一张</p>
		</li>
		<li class="hb_li4">
			<input type="text" placeholder="输入密码验证身份" class="inp3"/>
		</li>
		<li class="hb_li5">
			<button @click="hb_btn1()">提交验证</button>
		</li>
	</ul>
	<ul class="hb_ul2">
		<li class="hb_li1">
			<p class="hb_p4">1.验证原手机号</p>
			<p class="hb_p5">2.验证新手机号</p>
			<p class="hb_p6">3.换绑成功</p>
		</li>
		<li class="hb_li2">
			<input type="text" placeholder="输入新手机号" class="inpt1"/>
		</li>
		<li class="hb_li3">
			<input type="text" placeholder="验证码" class="inpt2"/>
			<canvas id="canvas1" width="120" height="40"></canvas>
			<p id="changeImg1">看不清换一张</p>
		</li>
		<li class="hb_li7">
			<input type="text" placeholder="手机验证码" class="inpt3"/>
			<p @click="gainYanZheng()" class="pppp">获取验证码</p>
		</li>
		<li class="hb_li5">
			<button @click="hb_btn2()">提交验证</button>
		</li>
	</ul>
	<ul class="hb_ul3">
		<li class="hb_li1">
			<p class="hb_p7">1.验证原手机号</p>
			<p class="hb_p8">2.验证新手机号</p>
			<p class="hb_p9">3.换绑成功</p>
		</li>
		<li class="hb_li6">
			<img src="../images/icon/check1.png" alt="" />
			<p>恭喜您成功修改</p>
		</li>
	</ul>
</div>
</template>
<script>
export default {
mounted(){
	$('.hb_ul1').show();
	$('.hb_ul2').hide();
	$('.hb_ul3').hide();
	this.yanzheng();
	this.yanzheng1();
},
methods:{
	hb_btn1:function(){
		var reg = /^1(3|5|7|8)\d{9}$/;
  		var reg1 = /^[a-zA-Z0-9]{6,20}$/;
  		if(!reg.test($('.inp1').val())){
  			alert('请输入合法用户名');
  		}else if($('.inp2').val()==''){
  			alert('请输入验证码');
  		}else if(!reg1.test($('.inp3').val())){
  			alert('密码错误');
  		}else{
  			$('.hb_ul2').show();
	        $('.hb_ul1').hide();
	        $('.hb_ul3').hide();
  		}		
	},
	hb_btn2:function(){
		var reg = /^1(3|5|7|8)\d{9}$/;
  		if(!reg.test($('.inpt1').val())){
  			alert('请输入合法用户名');
  		}else if($('.inpt2').val()==''){
  			alert('请输入验证码');
  		}else if($('.inpt3').val()==''){
  			alert('请输入手机验证码');
  		}else{
  			$('.hb_ul3').show();
	        $('.hb_ul1').hide();
	        $('.hb_ul2').hide();
  		}		
	},
    //验证码
    yanzheng: function() {
				function randomNum(min, max) {
					return Math.floor(Math.random() * (max - min) + min);
				}
				/**生成一个随机色**/
				function randomColor(min, max) {
					var r = randomNum(min, max);
					var g = randomNum(min, max);
					var b = randomNum(min, max);
					return "rgb(" + r + "," + g + "," + b + ")";
				}
				drawPic();
				document.getElementById("changeImg").onclick = function(e) {
					e.preventDefault();
					drawPic();
				}
				/**绘制验证码图片**/
				function drawPic() {
					var canvas = document.getElementById("canvas");
					var width = canvas.width;
					var height = canvas.height;
					var ctx = canvas.getContext('2d');
					ctx.textBaseline = 'bottom';
					
					/**绘制背景色**/
					ctx.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
					ctx.fillRect(0, 0, width, height);
					/**绘制文字**/
					var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
					for(var i = 0; i < 4; i++) {
						var txt = str[randomNum(0, str.length)];
						ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
						ctx.font = randomNum(15, 40) + 'px SimHei'; //随机生成字体大小
						var x = 10 + i * 25;
						var y = randomNum(25, 45);
						var deg = randomNum(-45, 45);
						//修改坐标原点和旋转角度
						ctx.translate(x, y);
						ctx.rotate(deg * Math.PI / 180);
						ctx.fillText(txt, 0, 0);
						//恢复坐标原点和旋转角度
						ctx.rotate(-deg * Math.PI / 180);
						ctx.translate(-x, -y);
					}
					/**绘制干扰线**/
					for(var i = 0; i < 8; i++) {
						ctx.strokeStyle = randomColor(40, 180);
						ctx.beginPath();
						ctx.moveTo(randomNum(0, width), randomNum(0, height));
						ctx.lineTo(randomNum(0, width), randomNum(0, height));
						ctx.stroke();
					}
					/**绘制干扰点**/
					for(var i = 0; i < 100; i++) {
						ctx.fillStyle = randomColor(0, 255);
						ctx.beginPath();
						ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
						ctx.fill();
					}
				}
			}, 
	yanzheng1: function() {				
		function randomNum(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		}
		/**生成一个随机色**/
		function randomColor(min, max) {
			var r = randomNum(min, max);
			var g = randomNum(min, max);
			var b = randomNum(min, max);
			return "rgb(" + r + "," + g + "," + b + ")";
		}
		drawPic();
		document.getElementById("changeImg1").onclick = function(e) {
			e.preventDefault();
			drawPic();
		}
		/**绘制验证码图片**/
		                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 	   function drawPic() {
		    var canvas1 = document.getElementById("canvas1");
            var width = canvas1.width;
		    var height = canvas1.height;
		    var ctx1 = canvas1.getContext('2d');
		    ctx1.textBaseline = 'bottom';
		    
		    /**绘制背景色**/
		    ctx1.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
		    ctx1.fillRect(0, 0, width, height);
		    /**绘制文字**/
		    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
		    for(var i = 0; i < 4; i++) {
			    var txt = str[randomNum(0, str.length)];
			    ctx1.fillStyle = randomColor(50, 160); //随机生成字体颜色
			    ctx1.font = randomNum(15, 40) + 'px SimHei'; //随机生成字体大小
			    var x = 10 + i * 25;
			    var y = randomNum(25, 45);
			    var deg = randomNum(-45, 45);
			    //修改坐标原点和旋转角度
			    ctx1.translate(x, y);
			    ctx1.rotate(deg * Math.PI / 180);
			    ctx1.fillText(txt, 0, 0);
			    //恢复坐标原点和旋转角度
			    ctx1.rotate(-deg * Math.PI / 180);
			    ctx1.translate(-x, -y);
		    };
		    /**绘制干扰线**/
		    for(var i = 0; i < 8; i++) {
			    ctx1.strokeStyle = randomColor(40, 180);
			    ctx1.beginPath();
			    ctx1.moveTo(randomNum(0, width), randomNum(0, height));
			    ctx1.lineTo(randomNum(0, width), randomNum(0, height));
			    ctx1.stroke();
		    };
		    /**绘制干扰点**/
		    for(var i = 0; i < 100; i++) {
			    ctx1.fillStyle = randomColor(0, 255);
			    ctx1.beginPath();
			    ctx1.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
			    ctx1.fill();
		    }
	    }
	},
    //手机验证码
    gainYanZheng :function(aa){
	    this.isClick = true;
		clearInterval(timer);
		var time = 60;
		var timer = setInterval(gain,1000);
		function gain(){
			time--;
			$(".pppp").text(time+"秒").css("background","orange");
			if (time<1) {
			    time=0;
			    clearInterval(timer);
			}
	    }
	},		
}
}
	
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
.hbsj1{
	width: 1086px;
	border: 1px solid #E7E7E7;
	min-height: 625px;
	float: right;
}
.hbsj1_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #323333;
	text-align: left;
	border-bottom: 1px solid #E7E7E7;
}
.hbsj1>ul{
	list-style: none;
	width: calc(100% - 80px);
	padding: 40px;
	height: 485px;
}
.hbsj1>ul>li{
	width: 100%;
}
/*hb_ul1*/
.hb_li1{
	height: 45px;
	position: relative;
	margin-bottom: 40px;
}
.hb_li1>p{
	display: inline-block;
	position: absolute;
	height: 45px;
	line-height: 45px;
	font-size: 18px;
	top: 0;
	background-size: 100% 100%;
}
.hb_p1{
	left: 0;
	color: #FFFFFF;
	width: 236px;
	background: url(../images/icon/yanzheng1.png) no-repeat;
}
.hb_p2{
	left: 227px;
	color: #333333;
	width: 247px;
	background: url(../images/icon/yanzheng2.png) no-repeat;
}
.hb_p3{
	left: 466px;
	color: #333333;
	width: 248px;
	background: url(../images/icon/yanzheng3.png) no-repeat;
}
.hb_li2{
	height: 44px;
	margin-bottom: 30px;
	text-align: left;
}
.hb_li4{
	height: 44px;
	margin-bottom: 40px;
	text-align: left;
}
.hb_li5{
	height: 50px;
	text-align: left;
}
.hb_ul2>.hb_li7{
	width: 287px;
	padding-left: 20px;
	height: 44px;
	background: #F9F9F9;
	border: 1px solid #D3D3D3;
	margin-bottom: 40px;
	text-align: left;
	position: relative;
}
.hb_li7>input{
	width: 160px;
	height: 44px;
	line-height: 44px;
	font-size: 16px;
	color: #333333;
	background: #F9F9F9;
	outline: none;
	border: none;
}
.hb_li7>p{
	display: inline-block;
	width: 100px;
	height: 32px;
	text-align: center;
	line-height: 32px;
	font-size: 14px;
	color: #FFFFFF;
	background: #3D8E43;
	position: absolute;
	top: 6px;
	right: 5px;
	cursor: pointer;
}
.hb_li5>button{
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
.hb_li2>input,.hb_li4>input{
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
.hb_li3{
	height: 44px;
	margin-bottom: 30px;
	display: flex;
	align-items: center;
}
.hb_li3>input{
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
.hb_li3>div{
	background: pink;
	width: 79px;
	height: 34px;
}
.hb_li3>p{
	display: inline-block;
	font-size: 14px;
	color: #F78855;
	cursor: pointer;
	margin-left: 10px;
}
.hb_p4{
	left: 0;
	color: #333333;
	width: 236px;
	background: url(../images/icon/yanzheng.png) no-repeat;
}
.hb_p5{
	left: 227px;
	color: #FFFFFF;
	width: 247px;
	background: url(../images/icon/yanzheng4.png) no-repeat;
}
.hb_p6{
	left: 466px;
	color: #333333;
	width: 248px;
	background: url(../images/icon/yanzheng3.png) no-repeat;
}
.hb_p7{
	left: 0;
	color: #333333;
	width: 236px;
	background: url(../images/icon/yanzheng.png) no-repeat;
}
.hb_p8{
	left: 227px;
	color: #333333;
	width: 247px;
	background: url(../images/icon/yanzheng2.png) no-repeat;
}
.hb_p9{
	left: 466px;
	color: #FFFFFF;
	width: 248px;
	background: url(../images/icon/yanzheng5.png) no-repeat;
}
/*hb_ul3*/
.hb_li6{
	width: 100%;
	height: 480px;
	position: relative;
}
.hb_li6>img{
	position: absolute;
	width: 42px;
	height: 42px;
	top: 207px;
	left: 260px;
}
.hb_li6>p{
	display: inline-block;
	font-size: 24px;
	color: #F46B2B;
	position: absolute;
	top: 215px;
	left: 322px;
}
#changeImg{
	height: 44px;
	line-height: 44px;
	font-size: 14px;
	color: #4C9B50;
	margin-left: 10px;
	cursor: pointer;
}
#changeImg1{
	height: 44px;
	line-height: 44px;
	font-size: 14px;
	color: #4C9B50;
	margin-left: 10px;
	cursor: pointer;
}


</style>