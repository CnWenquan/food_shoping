<template>
	<div class="s-register">
		<!--头部-->
		<header class="s-header">
			<div>
				<a href="#/"><img src="../../images/icon/logo.png" alt="" /></a>
				<span>会员登录</span>
			</div>
		</header>
		<!--注册框-->
		<div class="s-zhuce">
			
			<div class="s-zhuce-wrapper">
				<div class="s-choose-style">
					<p>登录</p>
					<router-link to="/enter" tag="p">账号密码登录<img src="../../images/icon/icon.png" alt="" /></router-link>
				</div>
				<ul class="s-import">
					<li>
						<p><input type="text" placeholder="请输入手机号" @blur="foucs($event)"/>
							<img src="../../images/icon/check .png" alt="" /></p>
						<p><img src="../../images/icon/warning.png" alt="" />
							<span>手机号码不正确请重新输入</span>
						</p>
					</li>
					<li id="s-yanzheng">
						<p><input type="text" name="" id="" value="" placeholder="验证码" @blur="yanZ($event)"/>
						<canvas id="canvas" width="80" height="40"></canvas>
						<a href="#" id="changeImg">看不清，换一张</a></p>
						<p><img src="../../images/icon/warning.png" alt="" />
							<span>验证码不正确请重新输入</span></p>
					</li>
					<li id="s-phone">
						<input type="text" placeholder="手机验证码" />
							<button class="gain" @click="gainYanZheng()" :disabled="isClick">获取验证码</button>
					</li>
					<li class="s-autologin">
						<input type="checkbox" name="autologin" id="checkbox" value="1"/><label for="checkbox">自动登录</label>
						<router-link to="/forgetPass" tag="span">忘记密码?</router-link>
					</li>
					
					<li class="s-click">
						<router-link @click="isNull()" to="/home" tag="span">登录</router-link><router-link to="/enter" tag="span">会员注册</router-link>
					</li>
					<li class="s-hint">
						<span>提示：未注册用户将直接注册成为礼拜五用户 </span>
					</li>
					<li class="s-use-style">
						<span></span>
						<span>用合作网站登录</span>
						<span></span>
					</li>
					<li class="s-three">
						<img src="../../images/icon/wq.png" alt="" />
					</li>
				</ul>
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isClick :false
			}
		},
		methods: {
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
					var font = "";
					var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
					for(var i = 0; i < 4; i++) {
						var txt = str[randomNum(0, str.length)];
						ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
						ctx.font = randomNum(15, 20) + 'px SimHei'; //随机生成字体大小
						var x = 10 + i * 15;
						var y = randomNum(25, 30);
						var deg = randomNum(0, 45);
						//修改坐标原点和旋转角度
						ctx.translate(x, y);
						ctx.rotate(deg * Math.PI / 180);
						ctx.fillText(txt, 0, 0);
						//恢复坐标原点和旋转角度
						ctx.rotate(-deg * Math.PI / 180);
						ctx.translate(-x, -y);
						font += txt;
					}
					localStorage.font = font;
					/**绘制干扰线**/
					for(var i = 0; i < 3; i++) {
						ctx.strokeStyle = randomColor(40, 180);
						ctx.beginPath();
						ctx.moveTo(randomNum(0, width), randomNum(0, height));
						ctx.lineTo(randomNum(0, width), randomNum(0, height));
						ctx.stroke();
					}
					/**绘制干扰点**/
					for(var i = 0; i < 20; i++) {
						ctx.fillStyle = randomColor(0, 255);
						ctx.beginPath();
						ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
						ctx.fill();
					}
				}
			},
			//	获得焦点验证上一个是否为空
			isNull :function(){
				var a=0;
				for (var i=0;i<$(".s-import input").length;i++){
					if ($(".s-import input").eq(i).val()=="") {
						a++;
					}
				}
				if (a>0) {
					alert("请补充完整信息");
				}
			},
			//监听input框事件
			//手机号验证
			foucs :function(aa){
				var reg = /^1(3|5|7|8)\d{9}$/;
				if (reg.test($(aa.target).val())) {
					$(aa.target).next().css("opacity","1");
					$(aa.target).parent().next().css("opacity","0");
				} else{
					$(aa.target).parent().next().css("opacity","1");
				};
				
			},
			//密码验证
			pass :function(aa){
				var reg = /^[a-zA-Z0-9]{6,20}$/;
				if (reg.test($(aa.target).val())) {
					$(aa.target).next().css("opacity","1");
					$(aa.target).parent().next().css("opacity","0");
				} else{
					$(aa.target).parent().next().css("opacity","1");
				};
			},
			//确认密码验证
			surePass :function(aa){
				if($(aa.target).val()==$(".s-import input").eq(1).val()){
					$(aa.target).next().css("opacity","1");
					$(aa.target).parent().next().css("opacity","0");
				}else{
					$(aa.target).parent().next().css("opacity","1");
					
				}
			},
			//验证码确认
			yanZ :function(aa){
				if($(aa.target).val()==localStorage.font){
					$(aa.target).parent().next().css("opacity","0");
					
				}else{
					$(aa.target).parent().next().css("opacity","1");
				}
			},
			//获取手机验证码
			gainYanZheng :function(aa){
				this.isClick = true;
				clearInterval(timer);
				var time = 60;
				var timer = setInterval(gain,1000);
				function gain(){
					time--;
					$(".gain").text(time+"秒").css("background","orange");
					if (time<1) {
						time=0;
						clearInterval(timer);
						$(".gain").text("点击重新获取");
					}
				}
			},
			//确认协议
			sureDeal :function(){
				if($(".s-agree img").attr("src")==require("../../images/icon/s-disagree.png")){
					$(".s-agree img").attr("src",require("../../images/icon/s-agree.png"));
				}else{
					$(".s-agree img").attr("src",require("../../images/icon/s-disagree.png"));
				}
			}
			
		},
		mounted() {
			this.yanzheng();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
		}
	}
</script>

<style scoped="scoped">
	* {
		padding: 0;
		margin: 0;
		/*-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;*/
	}
	
	img {
		vertical-align: top;
	}
	input{
		outline: none;
	}
	ul {
		list-style: none;
	}
	
	a {
		text-align: center;
	}
	
	.s-header {
		height: 130px;
		display: flex;
		justify-content: center;
		width: 100%;
		border-bottom: 1px solid #DADADA;
	}
	
	.s-header>div {
		width: 1280px;
		display: flex;
		align-items: center;
	}
	
	.s-header>div span {
		font-size: 20px;
		color: #7F7F7F;
		display: inline-block;
		margin-left: 60px;
		padding: 5px 60px;
		border-left: 1px solid #DADADA;
	}
	
	.s-zhuce {
		background: url(../../images/img/banner1.png) no-repeat;
		background-size: 100% 100%;
		height: 500px;
		position: relative;
	}
	
	.s-zhuce-wrapper {
		width: 390px;
		height: 100%;
		background: #FFFFFF;
		position: absolute;
		left: 1210px;
	}
	
	.s-import {
		height: 100%;
		padding: 15px 40px;
	}
	
	.s-import li {
		width: 310px;
	}
	
	.s-import li p {
		width: 310px;
	}
	
	.s-import li p:first-child {
		height: 44px;
		border: 1px solid #DEDEDE;
		background: #F9F9F9;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 14px;
	}
	
	.s-import li p:first-child input {
		height: 100%;
		border: none;
		background: #F9F9F9;
		padding-left: 15px;
		font-size: 16px;
		width: 260px;
	}
	
	.s-import li p:last-child {
		height: 30px;
		display: flex;
		align-items: center;
	}
	
	.s-import li p:last-child span {
		color: #E8434F;
		font-size: 15px;
		display: inline-block;
		margin-left: 5px;
	}
	#s-yanzheng p:first-child{
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #FFFFFF;
		border: none;
	}
	#s-yanzheng input{
		height: 44px;
		width: 80px;
		border: 1px solid #DEDEDE;
		background: #F5F5F5;
		font-size: 16px;
		padding-left: 15px;
	}
	#s-yanzheng a{
		text-decoration: none;
		color: #F78327;
		font-size: 14px;
	}
	#s-phone{
		width: 310px;
		height: 44px;
		border: 1px solid #DEDEDE;
		background: #F9F9F9;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	#s-phone input{
		height: 100%;
		border: none;
		background: #F9F9F9;
		padding-left: 15px;
		font-size: 16px;
		width: 130px;
	}
	#s-phone button{
		width: 100px;
		height: 30px;
		background: #3D8E43;
		text-align: center;
		line-height: 30px;
		display: inline-block;
		margin-right: 5px;
		border: none;
		outline: none;
		color: #FFFFFF;
	}
	.s-agree{
		height: 50px;
		display: flex;
		align-items: center;
	}
	.s-agree span{
		color: #838383;
		display: inline-block;
		margin-left: 10px;
	}
	.s-click{
		height: 45px;
		display: flex;
		justify-content: space-between;
	}
	.s-click span{
		width: 135px;
		height: 100%;
		border-radius: 5px;
		color: #FFFFFF;
		font-size: 18px;
		line-height: 45px;
		text-align: center;
	}
	.s-click span:first-child{
		background: #F78327;
	}
	.s-click span:last-child{
		background: #3D8E43;
	}
	.s-import li p:last-child,.s-import li p:first-child img{
		opacity: 0;
	}
	.s-choose-style{
		display: flex;
		height: 40px;
		justify-content: space-between;
		padding: 15px 40px 0 40px;
		align-items: center;
	}
	.s-choose-style p:first-child{
		font-size: 24px;
		color: #666666;
		line-height: 40px;
	}
	.s-choose-style p:last-child{
		color: #64A467;
		font-size: 16px;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.s-choose-style p:last-child img{
		margin-left: 5px;
	}
	#checkbox{
		width: 15px;
		height: 15px;
	}
	.s-autologin label{
		font-size: 14px;
		color: #797979;
	}
	.s-autologin span{
		display: inline-block;
		margin-left:170px;
		color: #F8963B;
		font-size: 14px;
		cursor: pointer;
	}
	.s-autologin{
		margin-bottom: 20px;
	}
	.s-hint span{
		color: #999999;
		font-size: 14px;
		line-height: 40px;
	}
	.s-hint{
		height: 40px;
	}
	.s-use-style{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.s-use-style span:nth-child(1),.s-use-style span:nth-child(3){
		border-top: 2px dashed #DEDEDE;
		width: 90px;
		display: inline-block;
	}
	.s-use-style span:nth-child(2){
		color: #666666;
		font-size: 16px;
	}
	.s-three{
		margin-top: 8px;
		text-align: center;
	}
</style>