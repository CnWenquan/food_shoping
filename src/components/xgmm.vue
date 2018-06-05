<template>
	<div class="xgmm">
		<p class="xg_p1">修改密码</p>
		<div class="xg_div1">
			<ul class="xg_ul1">
				<li class="xg_li1">
					<input type="text" value="15035675376" class="in1 in3  iin1" />
				</li>
				<li class="xg_li1">
					<input type="password" placeholder="请输入密码(6-20位号码字符)" class="in1 in3  iin2"/>
				</li>
				<li class="xg_li1">
					<input type="password" placeholder="请再次输入密码确认" class="in1 in3 iin3"/>
				</li>
				<li class="xg_li1 l_li">
					<input type="text" placeholder="验证码" class="in1 in4 iin4"/>
					<canvas id="canvas" width="120" height="40"></canvas>
				    <a href="#" id="changeImg">看不清换一张</a>
				</li>
				<li class="xg_li2">
					<input type="text" placeholder="手机验证码" class="in2  iin5"/>
					<button class="xg_btn1" @click="gainYanZheng()">获取验证码</button>
				</li>
				<li class="xg_li3">
					<button class="xg_btn2" @click="tijiao()">提交修改</button>
				</li>
			</ul>
			<div class="xg_div2">
				<img src="../images/icon/check1.png" alt="" />
				<p>恭喜您修改成功 </p>
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
  	$('.xg_div2').hide();
  	this.yanzheng();
  },
  methods:{
  	tijiao:function(){
  		var reg = /^1(3|5|7|8)\d{9}$/;
  		var reg1 = /^[a-zA-Z0-9]{6,20}$/;
  		if(!reg.test($('.iin1').val())){
  			alert('请输入合法用户名');
  		}else if(!reg1.test($('.iin2').val())){
  			alert('密码错误');
  		}else if($('.iin3').val()!=$('.iin2').val()){
  			alert('密码错误');
  		}else if($('.iin4').val()==''){
  			alert('请输入验证码');
  		}else if($('.iin5').val()==''){
  			alert('请输入手机验证码');
  		}else{
  			$('.xg_div2').show();
  		    var timer;
  	        timer = setInterval(function(){
  		    $('.xg_div2').hide();
  		        clearTimeout(timer);
  	        },2000);
  		}	
  	},
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
	gainYanZheng :function(aa){
	    this.isClick = true;
		clearInterval(timer);
		var time = 60;
		var timer = setInterval(gain,1000);
		function gain(){
			time--;
			$(".xg_btn1").text(time+"秒").css("background","orange");
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
.xgmm{
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
.xg_div2{
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
.xg_div2>img{
	width: 42px;
	height: 42px;
	margin-right: 20px;	
}
.xg_div2>p{
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
#changeImg{
	height: 44px;
	line-height: 44px;
	font-size: 14px;
	color: #4C9B50;
	margin-left: 10px;
	cursor: pointer;
}
</style>
