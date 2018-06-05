<template>
	<div>
		<div class="h-head">
			<div class="header">
				<div class="hea-l">
					<p>所在城市 : <span @click="address()" id="dizhi">北京朝阳区</span></p>
					<img src="../../static/icon/xiaoshanjiao.png" />
				</div>
				<ul class="hea-r">
					<li class="hea-li1">
						<p>您好，<span class="user-name"></span> <span @click="exit()">退出</span></p>
					</li>
					<li class="user-hide">
						<router-link to="/enter">登录</router-link>
					</li>
					<li class="user-hide">
						<router-link to="/register">注册</router-link>
					</li>
					<li>
						<router-link to="/aa/order">我的订单</router-link>
					</li>
					<li>
						<router-link to="/aa/wdxx">我的消息</router-link>
					</li>
					<li>
						<router-link to="">我是商家</router-link>
					</li>
					<li class="tel">
						<img src="../../static/icon/dianhua.png" />
						<p>0374-8288998</p>
					</li>
				</ul>
			</div>
		</div>

		<div class="adr-cover">
			<div class="bg0">
				<p>请选择您的收获地址:</p>

				<form action="/index/city" id="form-biao">
					<div class="content">
						<select name="province_id" id="sheng">
							<option value="0">请选择</option>
						</select>
						<span>省</span>
						<select name="city_id" id="shi">
							<option value="0">请选择</option>
						</select>
						<span>市</span>
						<select name="area_id" id="xian">
							<option value="0">请选择</option>
						</select>
						<span>区县</span>
					</div>
					<div class="submit">
						<input type="button" value="确定" @click="sure()">
					</div>
				</form>

				<!-- 定位成功显示的框 -->
				<p id="dw">定位成功</p>
			</div>
		</div>

	</div>
</template>

<script>
	import addBox from "../../static/js/adress"
	export default {
		name: "myHeader",
    data(){
		  return{
        isLogin: false,
        loginName:'',
      }
    },
		methods: {
			address: function() {
				$(".adr-cover").fadeIn("normal")
				$(document.body).addClass("forbid");
			},
			sure:function(){
				var str = $("#shi option:selected").text() + $("#xian option:selected").text();
				$("#dw").fadeIn('normal',function(){
					$(".adr-cover").fadeOut("normal");
					$("#dizhi").html(str);
					$(this).css("display","none");
					$(document.body).removeClass("forbid");
				});
			},
			bb:function(){
				var sheng = document.getElementById('sheng');
				var shi = document.getElementById('shi');
				var xian = document.getElementById('xian');
				var provinceList = addBox.module;

				function shengFun() {
					var l = provinceList.length;
					var shtml = '';
					for(var i = 0; i < l; i++) {
						shtml += '<option value=' + i + '>' + provinceList[i].name + '</option>';
					}
					sheng.innerHTML = shtml;
					cityFun(0);
				}

				function cityFun(n) {
					var city = provinceList[n].cityList;
					var l = city.length;
					var shtml = '';
					for(var i = 0; i < l; i++) {
						shtml += '<option value=' + i + '>' + city[i].name + '</option>';
					}
					shi.innerHTML = shtml;
					xianFun(n, 0);
				}

				function xianFun(n, m) {
					var city = provinceList[n].cityList[m].areaList;
					var l = city.length;
					var shtml = '';
					for(var i = 0; i < l; i++) {
						shtml += '<option>' + city[i] + '</option>';
					}
					xian.innerHTML = shtml;
				}

				//设置默认
				shengFun();

				//点击效果
				sheng.onchange = function() {
					var n = this.selectedIndex;
					cityFun(n);
					shi.onchange = function() {
						var m = this.selectedIndex;
						xianFun(n, m);
					};
				};
			},
			exit :function(){
				$(".user-hide").show();
				$(".hea-li1").hide();
				window.isLogin = false;
			}

		},
		mounted () {
			this.bb();
			if (localStorage.name != null || localStorage.name != undefined) {
        this.$notify({
          title: "提示",
          message: "登录成功",
          type: "success"
        })
        $(".user-name").text(localStorage.name);
        $(".hea-li1").show();
        $(".user-hide").hide();
        window.isLogin = true;
      } else {
        $(".hea-li1").hide();
        $(".user-hide").show();
      }
			/*if ($(".user-name").text()!="") {
				$(".user-hide").hide();
			}else{
				$(".user-hide").show();
			}*/

		}

	}
</script>

<style>
	.forbid{
		height: 100%;
		overflow: hidden;
	}

	.h-head {
		background: #eee;
	}

	.header {
		width: 1280px;
		height: 36px;
		margin: auto;
		color: #666;
		font-size: 14px;
	}

	.hea-l {
		float: left;
		height: 36px;
		line-height: 36px;
	}

	.hea-l>p {
		float: left;
		padding-right: 5px;
	}

	.hea-l>img {
		width: 9px;
		vertical-align: middle;
	}

	ul,
	li {
		list-style-type: none;
	}

	.hea-r {
		float: right;
		height: 100%;
	}

	.hea-r>li {
		height: 100%;
		float: left;
	}

	.hea-r a {
		display: inline-block;
		text-decoration: none;
		color: #666;
		font-size: 14px;
		padding: 0 10px;
		border-right: solid 1px #999;
		margin-top: 8px;
	}

	.hea-r img {
		width: 16px;
		height: 16px;
	}

	.tel {
		padding-left: 10px;
	}

	.tel>* {
		float: left;
	}

	.tel>img {
		margin-top: 9px;
		margin-right: 5px;
	}

	.tel>p {
		padding-top: 8px;
		font-weight: bolder;
	}
	.hea-li1{
		display: none;
	}
	.hea-li1>p{
		padding-top: 8px;
		cursor: pointer;
	}
	.hea-li1>p>span:nth-child(1){
		color: #3D8E43;
	}

	/*三级联动*/

	.adr-cover {
		position: absolute;
		top: 0;
		/*left: 0;*/
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: none;
		z-index: 100;
	}

	.bg0 {
		width: 600px;
		height: 240px;
		padding: 60px 50px;
		background: url(../../static/img/bg0.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
	}

	.bg0>p {
		color: #3D8E43;
		font-size: 18px;
	}
	#form-biao{
		margin-top: 60px;
	}
	.content>*{
		/*display: flex;
		justify-content: flex-start;*/
		margin-right: 10px;
	}
	.content>select{
		width: 140px;
		height: 34px;
	}
	.submit{
		margin-top: 60px;
		text-align: center;
	}
	.submit>input{
		width: 150px;
		height: 34px;
		background: #F78328;
		color: #fff;
		font-size: 18px;
		border: none;
		border-radius: 5px;
	}
	#dw{
		width: 150px;
		height: 60px;
		background: rgba(0,0,0,0.5);
		line-height: 60px;
		text-align: center;
		color: #fff;
		border-radius: 30px;
		font-size: 25px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		display: none;
	}
</style>
