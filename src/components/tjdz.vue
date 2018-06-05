<template>
	<div class="tjdz">
        	<p class="tjdz_p1">添加新地址</p>
        	<ul class="shouhuomsg">
		<li>
					<span>*&nbsp;</span>收货人姓名&nbsp;: <input type="text" id="ming"/>
				</li>
		<li>
			&nbsp;&nbsp;&nbsp;
			<span>*&nbsp;</span>所在地区&nbsp;:&nbsp;
					<select id="sheng1">
						<option>请选择市</option>
					</select>
					<select id="shi1">
						<option>请选择市</option>
					</select>
					<select id="xian1">
						<option>请选择县</option>
					</select>
		</li>
		<li>
			&nbsp;&nbsp;&nbsp;
			<span>*</span>
			详细地址&nbsp;: 
			<input type="text" id="dzhi"/>
		</li>
		<li>
			&nbsp;&nbsp;&nbsp;
			<span>*</span>
			联系电话&nbsp;: 
			<input type="text" id="phone1"/>
			或固定电话: 
			<input type="text" id="phone2"/>- 
			<input type="text" id="phone3"/>
		</li>
		<li>
			<span class="querenbtn" @click="baocun()">保存</span>
		</li>
	</ul>
	<div class="alret">恭喜您,保存成功!</div>    
	</div>
	
</template>
<script>
	import addBox from "../../static/js/adress"	
	
export default {	
	mounted(){
		$('.alret').hide();
		this.adress();
	},
	methods:{
		adress: function() {
				var sheng = document.getElementById('sheng1');
				var shi = document.getElementById('shi1');
				var xian = document.getElementById('xian1');
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
		baocun:function(){
			var name = $('#ming').val();
			var sheng = $('#sheng1 option:selected').text();
			var shi = $('#shi1 option:selected').text();
			var xian = $('#xian1 option:selected').text();
			var adres = $('#dzhi').val();
			var tel1 = $('#phone1').val();
			var tel2 = $('#phone2').val();
			var tel3 = $('#phone3').val();
			this.$axios.get('/api/tjdz?name='+name+'&sheng='+sheng+'&shi='+shi+'&xian='+xian+'&adres='+adres+'&tel1='+tel1+'&tel2='+tel2+'&tel3='+tel3).then(function(data){
                  console.log(data.data);   
	        }.bind(this));
	        $('.alret').show();
		    var timer;
		    timer=setInterval(function(){
		    	    $('.alret').hide();
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
.tjdz{
	width: 1086px;
	border: 1px solid #E7E7E7;
	float: right;
	position: relative;
}
.tjdz_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #333434;
	text-align: left;
	border-bottom: 1px solid #E7E7E7;
}

/**/

.shouhuomsg{
	list-style: none;
	width: calc(100% - 40px);
	padding: 20px 20px;
	height: 525px;
}
.shouhuomsg li{
	text-align: left;
}
.shouhuomsg li:nth-child(1)>span,
	.shouhuomsg li:nth-child(2)>span,
	.shouhuomsg li:nth-child(3)>span,
	.shouhuomsg li:nth-child(4)>span {
		color: #ec6a17;
	}
	
	.querenbtn {
		display: inline-block;
		width: 150px;
		height: 50px;
		background: #F78327;
		border-radius: 5px;
		color: #fff;
		text-align: center;
		line-height: 50px;
		font-size: 20px;
		margin-left: 125px;
		cursor: pointer;
	}
	
	.shouhuomsg>li {
		font-size: 18px;
		color: #333;
		padding-top: 20px;
	}
	
	.shouhuomsg>li input {
		height: 35px;
		margin: 0 5px;
		padding-left: 5px;
	}
	
	.shouhuomsg>li:nth-child(1) input {
		width: 330px;
	}
	
	.shouhuomsg>li:nth-child(3) input {
		width: 460px;
	}
	
	.shouhuomsg>li:nth-child(4) input:nth-of-type(1) {
		width: 152px;
	}
	
	.shouhuomsg>li:nth-child(4) input:nth-of-type(2) {
		width: 49px;
	}
	
	.shouhuomsg>li:nth-child(4) input:nth-of-type(3) {
		width: 125px;
	}
	select{
		width: 140px;
		height: 35px;
		line-height: 35px;
		background: #FFFFFF;
		border: 1px solid #DEDEDE;
		margin-right: 15px;
		font-size: 14px;
	}
    .alret{
    	    width: 250px;
    	    height: 150px;
    	    font-size: 24px;
    	    color: #FFFFFF;
    	    background: #999999;
    	    border-radius: 20px;
    	    display: flex;
    	    justify-content: center;
    	    align-items: center;
    	    position: absolute;
    	    left: 418px;
    	    bottom: 50px;
    }
</style>