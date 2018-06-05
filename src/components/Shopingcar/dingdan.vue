<template>
	<div class="querendingdan">
		<div class="dingdan_top">
			<h2>收货人信息</h2>
			<!-- 第一次设置地址 -->
			<ul class="shouhuomsg">
				<li><span>*</span>收货人姓名&nbsp;: <input type="text" placeholder="可以收货人姓名" /></li>
				<li>&nbsp;&nbsp;&nbsp;<span>*</span>所在地区&nbsp;:&nbsp;
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
				<li>&nbsp;&nbsp;&nbsp;<span>*</span>详细地址&nbsp;: <input type="text" placeholder="用于接收货物的详细地址" /></li>
				<li>&nbsp;&nbsp;&nbsp;<span>*</span>联系电话&nbsp;: <input type="text" placeholder="推荐使用手机号" />或固定电话: <input type="text" placeholder="区号" />- <input type="text" placeholder="电话号码" /></li>
				<li><span class="querenbtn" @click="querendizhi">确认并设为默认地址</span></li>
			</ul>
		</div>
		<!-- 地址管理 -->
		<div class="dingdan_cover">
			<p>收货人信息</p>
			<span @click="addnew">使用新地址</span>
			<ul class="dizhiguanli">
				<li v-for='(item,index) in person'><span class="xxspan"><img v-if="item.showDian" src="../../assets/images/ico/dizhiyuandian.png" alt=""/></span>{{item.name}}&nbsp;{{item.sheng}}&nbsp;{{item.shi}}&nbsp;{{item.xian}}&nbsp;{{item.adress}}&nbsp;{{item.tel}}&nbsp;<span @click="deldizhi(index)">删除</span><span @click="xiugai(index)">修改</span><em v-if="item.showMoren">默认地址</em><span v-else="" @click="shezhimor(index)">设置为默认地址</span></li>
			</ul>
			<div class="zhanshou">
				<span @click="expend">展开其他地址 <img src="../../assets/images/ico/2_bottom.png" alt=""/></span>
				<span @click="packup">收起地址 <img src="../../assets/images/ico/2_top.png" alt=""/></span>
			</div>
		</div>
		<!-- 弹出的地址 -->
		<div class="addadress">
			<div class="addadress_cover" @click="undoadd"></div>
			<div class="addadress_main animated rubberBand">
				<p>添加地址</p>
				<ul class="shouhuomsg tan_ul">
					<li><span>*</span>收货人姓名&nbsp;: <input type="text" placeholder="可以收货人姓名" /></li>
					<li>&nbsp;&nbsp;&nbsp;<span>*</span>所在地区&nbsp;:&nbsp;
						<select id="sheng2">
							<option>请选择市</option>
						</select>
						<select id="shi2">
							<option>请选择市</option>
						</select>
						<select id="xian2">
							<option>请选择县</option>
						</select>
					</li>
					<li>&nbsp;&nbsp;&nbsp;<span>*</span>详细地址&nbsp;: <input type="text" placeholder="用于接收货物的详细地址" /></li>
					<li>&nbsp;&nbsp;&nbsp;<span>*</span>联系电话&nbsp;: <input type="text" placeholder="推荐使用手机号" />或固定电话: <input type="text" placeholder="区号" />- <input type="text" placeholder="电话号码" /></li>
					<li><span class="shezhichangyong"><img src="../../assets/images/ico/dizhiyuandian.png" alt="aa"/></span><span>设置为常用地址</span></li>
				</ul>
				<span class="adress_back" @click="adress_back">返回</span><span class="adress_save" @click="adress_save">保存</span>
			</div>
		</div>
		<!-- 商品 -->
		<div class="shangpinmsg1">
			<p>商品信息</p>
			<ul v-for="(item,index) in dingdan" class="maincar_ul1">
				<li>
					<p>{{item.shop}}</p>
					<p>规格</p>
					<p>单价</p>
					<p>数量</p>
					<p>金额</p>
				</li>
				<li v-for="(items,index1) in item.aa" id="maincar_shangpin1">
					<p><img v-bind:src="items.src" alt="" /><span>{{items.name}}</span></p>
					<p>{{items.size}}</p>
					<p>¥{{items.price}}</p>
					<p>
						<span @click="sub1(index,index1)">-</span>
						<input type="text" v-model="items.num" />
						<span @click="add1(index,index1)">+</span>
					</p>
					<p>¥{{items.total}}</p>
				</li>
				<li class="shangpinjine1"><span>¥{{item.zongtotal_yunfei}}</span><span>商家合计</span><span>¥{{item.zongtotal}}</span><span>商品金额</span><span>¥5.0</span><span>运费</span></li>
			</ul>
		</div>
		<div class="fapiaoxinxi">
			<!--<p>开票信息</p>-->
			<!--<span @click="syDe1" :class="{syDian:syImg1}"><img v-if="syImg1" src="../../assets/images/ico/xuanzesb.png" alt=""/></span>-->
			<!--<span>不需要</span>-->
			<!--<span @click="syDe2" :class="{syDian:syImg2}"><img v-if="syImg2" src="../../assets/images/ico/xuanzesb.png" alt=""/></span>-->
			<!--<span>个人</span>-->
			<!--<span @click="syDe3" :class="{syDian:syImg3}"><img v-if="syImg3" src="../../assets/images/ico/xuanzesb.png" alt=""/></span>-->
			<!--<span>单位</span>-->
			<!--<p>发票抬头&nbsp;:&nbsp; <input type="text" />&nbsp;&nbsp;<span>*</span>请填写后认真核对发票信息</p>-->
			<!--<p>添加订单备注</p>-->
			<!--<input type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息"/>-->
			<!--<div class="fapiaoxinxi2">
				<ul v-for="(item,index) in dingdan" class="maincar_ul1">
				<li>
					<p>{{item.shop}}</p>
					<p>规格</p>
					<p>单价</p>
					<p>数量</p>
					<p>金额</p>
				</li>
				<li v-for="(items,index1) in item.aa" id="maincar_shangpin1">
					<p><img v-bind:src="items.src" alt="" /><span>{{items.name}}</span></p>
					<p>{{items.size}}</p>
					<p>¥{{items.price}}</p>
					<p>
						<span>-</span>
						<input type="text" v-model="items.num" />
						<span>+</span>
					</p>
					<p>¥{{items.total}}</p>
				</li>
				<li class="shangpinjine1"><span>¥{{item.zongtotal_yunfei}}</span><span>商家合计</span><span>¥{{item.zongtotal}}</span><span>商品金额</span><span>¥5.0</span><span>运费</span></li>
			</ul>
			</div>
			<p>开票信息</p>
			<span><img v-if="syImg1" src="../../assets/images/ico/xuanzesb.png" alt=""/></span>
			<span>不需要</span>
			<span></span>
			<span>个人</span>
			<span></span>
			<span>单位</span>
			<p>发票抬头&nbsp;:&nbsp; <input type="text" />&nbsp;&nbsp;<span>*</span>请填写后认真核对发票信息</p>
			<p>添加订单备注</p>
			<input type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息"/>-->
			<div class="peisongtime">
				<p>次日达·名堂专享 </p>
				<p>选择送达时间：&nbsp;&nbsp;&nbsp;2016年9月18日{{time}}</p>
				<span @click="changetime"><img src="../../assets/images/ico/xiugai.png" alt=""/>&nbsp;&nbsp;&nbsp;点击修改</span>
				<div class="songdashijian animated swing">
					<span v-for="(time,index) in times" @click="addtime(index)">{{time.times1}}</span>
					<button @click="quxiaobtn">取消</button>
					<button @click="quedingbtn">确定</button>
				</div>
			</div>
			<div class="dingdandibu">
				<p class="shifujine">实付金额: <span>¥{{dingdan[0].zongtotal_yunfei}}</span></p><br />
			<p class="huodejifen">订单完成后可获得积分:&nbsp;&nbsp;&nbsp;&nbsp; <span>300积分</span></p><br />
			<a href="#/Index/tijiao" class="tijiaodingdan" @click="dingdanTijiao">提交订单</a>
			</div>
		</div>
	</div>
</template>

<script>
	import addBox from '../../../static/js/adress'
	export default {
		data() {
			return {
				syImg1:true,
				syImg2:false,
				syImg3:false,
				person: [],
				dingdan: [{}],
//         dingdan:[{showImgs:true,shop:'甜品',zongtotal:'230',zongtotal_yunfei:'235',aa:[{showImg:true,src:'/static/images/banligao.jpg',size:'160*4/盒',price:'20',num:'4',total:'80'},{showImg:true,src:'/static/images/fenghuangjuan.jpg',size:'6个/盒',price:'25',num:'6',total:'150'}]}],
				time:'12:00~3:00',
				times:[
					{times1:'10:00~13:00'},{times1:'11:00~14:00'},{times1:'12:00~15:00'},{times1:'13:00~16:00'},{times1:'14:00~17:00'},{times1:'15:00~18:00'},{times1:'16:00~19:00'},{times1:'17:00~20:00'},{times1:'18:00~21:00'},{times1:'19:00~22:00'}
				]
			}
		},
		mounted() {
			this.locachange();
			this.adress();
			this.adress2();
			var we = [];
			var edg = [];
		  this.$axios.get('/api/cc').then(function(data){
		    console.log(data);
        we = data.data;
        for(var i = 0;i < we.length;i++){
          we[i].aa = [];
        }
        for(var i = 0;i < we.length;i++){
          if(we[i].name != localStorage.qdBuy){
            we.splice(i,1);
          }
  //				for(var j = 0;j < we.length - i;j++){
  //					if(we[j].shop == we[j + 1].shop){
  //						we.splice(j + 1,1);
  //					}
  //				}
        }
        this.$axios.get('/api/cc').then(function(data){
            for(var i = 0;i < data.data.length;i++){
            edg[i] = data.data[i];
            edg[i].total = edg[i].num * edg[i].price;
            }
            for(var i = 0;i < edg.length;i++){
              for(var j = 0;j < we.length;j++){
                if(edg[i].shop == we[j].shop&&edg[i].name == localStorage.qdBuy)
                we[j].aa.push(edg[i]);
              }
            }
            //计算
            this.dingdan = we;
            this.dingdan[0].zongtotal = parseFloat(this.dingdan[0].zongtotal) + parseFloat(this.dingdan[0].aa[0].total);
            this.dingdan[0].zongtotal_yunfei = this.dingdan[0].zongtotal + 5;
          }.bind(this));
      }.bind(this));
		},
		methods: {
			querendizhi: function() {
				$('.dingdan_top').css("display", "none");
				$('.dingdan_cover').css("display", "block");
				this.person.push({
					name: $('.shouhuomsg li:nth-of-type(1) input').val(),
					sheng: $('.shouhuomsg li:nth-of-type(2) option:selected').eq(0).text(),
					shi: $('.shouhuomsg li:nth-of-type(2) option:selected').eq(1).text(),
					xian: $('.shouhuomsg li:nth-of-type(2) option:selected').eq(2).text(),
					adress: $('.shouhuomsg li:nth-of-type(3) input').val(),
					tel: $('.shouhuomsg li:nth-of-type(4) input').val(),
					showDian: true
				});
			},
			deldizhi: function(index) {
				this.person.splice(index, 1);
			},
			//添加新地址
			addnew: function() {
				$('.tan_ul li:nth-of-type(1) input').val("");
				$('.shouhuomsg li:nth-of-type(2) option:selected').eq(0).text("");
				$('.shouhuomsg li:nth-of-type(2) option:selected').eq(1).text("");
				$('.shouhuomsg li:nth-of-type(2) option:selected').eq(2).text("");
				$('.tan_ul li:nth-of-type(3) input').val("");
				$('.tan_ul li:nth-of-type(4) input').val("");
				$('.addadress').css("display", 'block');
				$('.addadress_main').animate({
					top: '0px'
				}, 500);
			},
			//取消编辑
			undoadd: function() {
				$('.addadress').css("display", 'none');
				$('.addadress_main').css("top", "-1400px");
			},
			//弹出框点击
			adress_back: function() {
				$('.addadress').css("display", 'none');
			},
			//改变顶部导航颜色
			locachange:function(){
				for(var i = 0;i < 4;i++){
					$('.maincar_head a').eq(i).css("color","#333333");
				}
				if(location.hash == "#/Index/maincar"){
					$('.maincar_head a').eq(3).css("color","#EC6A17");
				}else if(location.hash == "#/Index/dingdan"){
					$('.maincar_head a').eq(2).css("color","#EC6A17");
				}else{
					$('.maincar_head a').eq(1).css("color","#EC6A17");
				}
			},
			adress_save: function() {
				$('.addadress').css("display", 'none');
				this.person.push({
					name: $('.tan_ul li:nth-of-type(1) input').val(),
					sheng: $('.shouhuomsg li:nth-of-type(2) option:selected').eq(0).text(),
					shi: $('.tan_ul li:nth-of-type(2) option:selected').eq(1).text(),
					xian: $('.tan_ul li:nth-of-type(2) option:selected').eq(2).text(),
					adress: $('.tan_ul li:nth-of-type(3) input').val(),
					tel: $('.tan_ul li:nth-of-type(4) input').val(),
					showDian: false
				});
				$('.tan_ul li:nth-of-type(1) input').val("");
				$('.shouhuomsg li:nth-of-type(2) option:selected').eq(0).text("");
				$('.shouhuomsg li:nth-of-type(2) option:selected').eq(1).text("");
				$('.shouhuomsg li:nth-of-type(2) option:selected').eq(2).text("");
				$('.tan_ul li:nth-of-type(3) input').val("");
				$('.tan_ul li:nth-of-type(4) input').val("");
			},
			//展开收起
			expend: function() {
				$('.dizhiguanli li:nth-child(n+2)').slideDown('normal');
			},
			packup: function() {
				$('.dizhiguanli li:nth-child(n+2)').slideUp('normal');
			},
			//设置默认
			shezhimor:function(index){
				for(var i = 0;i < this.person.length;i++){
					this.person[i].showMoren = false;
					this.person[i].showDian = false;
				}
				this.person[index].showMoren = true;
				this.person[index].showDian = true;
				this.person.unshift(this.person[index]);
				this.person.splice(index+1,1);

			},
			//修改
			xiugai:function(index){
				$('.addadress').css("display", 'block');
				$('.addadress_main').animate({
					top: '0px'
				}, 500);
				$('.tan_ul li:nth-of-type(1) input').val(this.person[index].name);
				$("#sheng2 option[value='北京']").removeAttr("selected");
				$("#sheng2 option[value='"+this.person[index].sheng+"']").attr("selected","selected");
$("#shi2 option[value='市辖区']").removeAttr("selected");
				$("#shi2 option[value='"+this.person[index].shi+"']").attr("selected","selected");
				$("#xian2 option[value='东城区']").removeAttr("selected");
				$("#xian2 option[value='"+this.person[index].xian+"']").attr("selected","selected");
				$('.tan_ul li:nth-of-type(3) input').val(this.person[index].adress);
				$('.tan_ul li:nth-of-type(4) input:nth-of-type(1)').val(this.person[index].tel);
				this.person.splice(index, 1);
			},
			adress2: function() {
				var sheng = document.getElementById('sheng2');
				var shi = document.getElementById('shi2');
				var xian = document.getElementById('xian2');
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
			//订单确认
			sub1:function(index,index1){
				if(this.dingdan[index].aa[index1].num <= 1){
					this.dingdan[index].aa[index1].num = 1;
					return;
				}
				this.dingdan[index].aa[index1].num--;
				this.dingdan[index].aa[index1].total = this.dingdan[index].aa[index1].num * this.dingdan[index].aa[index1].price;
				//计算
				this.dingdan[index].zongtotal = 0;
				for(var i = 0; i < this.dingdan[index].aa.length; i++) {
						this.dingdan[index].zongtotal = parseFloat(this.dingdan[index].zongtotal) + parseFloat(this.dingdan[index].aa[i].total);
				}
				//计算总价
				this.dingdan[index].zongtotal_yunfei = this.dingdan[index].zongtotal + 5;
//				for(var i = 0;i < this.items.length;i++){
//					this.zzongtotal += this.items[i].zongtotal;
//				}
		},
		add1:function(index,index1){
			this.dingdan[index].aa[index1].num++;
				this.dingdan[index].aa[index1].total = this.dingdan[index].aa[index1].num * this.dingdan[index].aa[index1].price;
				//计算

				this.dingdan[index].zongtotal = 0;
				for(var i = 0; i < this.dingdan[index].aa.length; i++) {
						this.dingdan[index].zongtotal = parseFloat(this.dingdan[index].zongtotal) + parseFloat(this.dingdan[index].aa[i].total);
				}
				//计算总价
				this.dingdan[index].zongtotal_yunfei = this.dingdan[index].zongtotal + 5;
		},
		//更改送达时间
		changetime:function(){
			$('.songdashijian').css("display",'block');
		},
		//更改送达时间
		addtime:function(index){
			this.time = this.times[index].times1;
		},
		quxiaobtn:function(){
			this.time = '10:00~13:00';
			$('.songdashijian').css("display",'none');
		},
		quedingbtn:function(){
			$('.songdashijian').css("display",'none');
		},
		syDe1:function(){
			this.syImg1 = true;
			this.syImg2 = false;
			this.syImg3 = false;
		},
		syDe2:function(){
			this.syImg1 = false;
			this.syImg2 = true;
			this.syImg3 = false;
		},
		syDe3:function(){
			this.syImg1 = false;
			this.syImg2 = false;
			this.syImg3 = true;
		},
		dingdanTijiao:function(){
			localStorage.zongjia = this.dingdan[0].zongtotal_yunfei;
		}
		}
	}
</script>

<style>
	*{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
	}
	.querendingdan {
		width: 1280px;
		margin: auto;
		/*position: relative;*/
	}

	.dingdan_top {
		width: 1280px;
		padding-bottom: 20px;
		border-bottom: 1px solid #ccc;
		/*display: none;*/
	}

	.dingdan_top>h2 {
		font-size: 18px;
		color: #666;
		line-height: 56px;
		font-weight: 400;
		border-bottom: 1px solid #ccc;
	}

	.shouhuomsg li:nth-child(1)>span,
	.shouhuomsg li:nth-child(2)>span,
	.shouhuomsg li:nth-child(3)>span,
	.shouhuomsg li:nth-child(4)>span {
		color: #ec6a17;
	}

	.querenbtn {
		display: inline-block;
		width: 205px;
		height: 40px;
		background: #ec6a17;
		border-radius: 5px;
		color: #fff;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		margin-left: 115px;
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

	.shouhuomsg ::-webkit-input-placeholder {
		color: #999;
		font-size: 16px;
		line-height: 35px;
	}
	/*cover层*/

	.dingdan_cover {
		width: 1280px;
		background: #fff;
		position: relative;
		margin-top: 1px;
		border-bottom: 1px solid #ccc;
		padding-bottom: 50px;
		overflow: hidden;
		display: none;
	}

	.dingdan_cover>p {
		font-size: 18px;
		color: #666;
		line-height: 56px;
		display: inline-block;
	}

	.dingdan_cover>span:nth-of-type(1) {
		display: inline-block;
		width: 90px;
		height: 30px;
		background: #ec6a17;
		border-radius: 5px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
		float: right;
		margin-top: 15px;
		cursor: pointer;
	}
	.dingdan_cover em{
		font-style: normal;
		font-size: 14px;
		color: #999;
		margin-left: 10px;
	}
	/*展开收起*/

	.zhanshou {
		width: 100%;
		height: 40px;
		position: absolute;
		bottom: 0;
		left: 0;
		background: #fff;
		/*padding-top: 10px;*/
	}

	.zhanshou>span:nth-of-type(1),
	.zhanshou>span:nth-of-type(2) {
		font-size: 16px;
		color: #498e3d;
		cursor: pointer;
	}

	.zhanshou>span:nth-of-type(1) img,
	.zhanshou>span:nth-of-type(2) img {
		margin-top: 5px;
		margin-left: 3px;
	}

	.zhanshou>span:nth-of-type(2) {
		left: 135px;
	}

	.shouhuomsg>li:nth-child(2)>select {
		width: 140px;
		height: 35px;
		padding-left: 15px;
		margin-right: 20px;
	}
	/*设置下拉箭头*/

	select {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		background-color: #fff;
		/*设置箭头*/
		background: url(../../assets/images/ico/sanjiliandongjiantou.png) no-repeat scroll right center transparent;
		background-position: 100px;
		padding-right: 14px;
	}

	select::-ms-expand {
		display: none;
	}

	select {
		width: 100px;
		direction: left;
	}

	select option {
		direction: ltr;
	}

	.dizhiguanli>li {
		background: #f4fff2;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 38px;
		color: #666;
	}

	.dizhiguanli>li:nth-child(1) {
		border: 1px solid #ccc;
	}

	.xxspan {
		display: inline-block;
		vertical-align: top;
		width: 15px;
		height: 15px;
		border: 1px solid #CCCCCC;
		/*#498e3d*/
		border-radius: 50%;
		margin: 10px 17px 0 17px;
		position: relative;
	}
	.dizhiguanli>li>span>img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}

	.dizhiguanli>li>span:nth-of-type(2),
	.dizhiguanli>li>span:nth-of-type(3),
	.dizhiguanli>li>span:nth-of-type(4) {
		font-size: 14px;
		/*color: #498e3d;*/
		float: right;
		margin: 0 18px;
	}

	.dizhiguanli>li>span:nth-of-type(2),
	.dizhiguanli>li>span:nth-of-type(3) {
		color: #498e3d;
		cursor: pointer;
	}

	.dizhiguanli>li>span:nth-of-type(4) {
		color: #f19320;
		cursor: pointer;
	}

	.addadress {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
	}

	.addadress_cover {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	.addadress_main {
		width: 677px;
		height: 442px;
		border: 5px solid #e2e2e2;
		position: absolute;
		top: -1400px;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background: #fff;
	}

	.addadress_main>p {
		display: block;
		font-size: 18px;
		color: #498e3d;
		line-height: 68px;
		padding-left: 30px;
		border-bottom: 1px solid #ccc;
	}
	/*弹出框*/

	.tan_ul {
		margin-top: 20px;
		margin-left: 30px;
	}

	.shezhichangyong {
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #3D8E43;
		border-radius: 50%;
		margin: 0 10px 0 115px;
		position: relative;
	}
	.shezhichangyong img{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
	}
	.adress_back,
	.adress_save {
		display: inline-block;
		width: 110px;
		height: 35px;
		border-radius: 5px;
		color: #fff;
		font-size: 18px;
		text-align: center;
		line-height: 35px;
		margin-top: 15px;
		cursor: pointer;
	}

	.adress_back {
		background: #999999;
		margin-left: 166px;
	}

	.adress_save {
		background: #f08200;
		margin-left: 125px;
	}
	/*商品信息*/
	.shangpinmsg1{
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	.shangpinmsg1>p:nth-of-type(1) {
		font-size: 18px;
		color: #666666;
		line-height: 60px;
	}

	.maincar_ul1 {
		width: 100%;
		border: 1px solid #e4e4e4;
		overflow: hidden;
		margin-bottom: 20px;
	}

	.maincar_ul1>li:nth-of-type(1) {
		overflow: hidden;
		background: #f2f2f2;
	}

	.maincar_ul1>li>* {
		float: left;
	}

	.querendingdan p {
		display: inline-block;
	}

	.maincar_ul1 li>p:nth-of-type(1) {
		width: 340px;
		height: 47px;
		line-height: 46px;
		margin-left: 56px;
	}

	.maincar_ul1 li>p:nth-of-type(2),
	.maincar_ul1 li>p:nth-of-type(3),
	.maincar_ul1 li>p:nth-of-type(4),
	.maincar_ul1 li>p:nth-of-type(5) {
		text-align: center;
		width: 180px;
		height: 47px;
		line-height: 46px;
	}

	.maincar_ul1 li>p:nth-of-type(6) {
		text-align: center;
		width: 160px;
		height: 47px;
		line-height: 46px;
		cursor: pointer;
	}

	#maincar_shangpin1 {
		height: 120px;
		border-bottom: 1px solid #e4e4e4;
	}

	#maincar_shangpin1>span {
		margin-top: 50px;
	}

	#maincar_shangpin1>p:nth-of-type(1) {
		margin-top: 20px;
		height: 100px;
	}
	#maincar_shangpin1>p:nth-of-type(1) img{
		width: 80px;
		height: 80px;
	}
	#maincar_shangpin1>p:nth-of-type(1) span {
		display: inline-block;
		height: 80px;
		line-height: 80px;
		margin-left: 20px;
		font-size: 14px;
		color: #666;
	}

	#maincar_shangpin1>p:nth-of-type(2),
	#maincar_shangpin1>p:nth-of-type(3),
	#maincar_shangpin1>p:nth-of-type(4),
	#maincar_shangpin1>p:nth-of-type(5) {
		text-align: center;
		width: 180px;
		height: 120px;
		line-height: 120px;
	}

	#maincar_shangpin1>p:nth-of-type(5) {
		font-size: 14px;
		color: #666;
	}

	#maincar_shangpin1>p:nth-of-type(2),
	#maincar_shangpin1>p:nth-of-type(3) {
		font-size: 14px;
		color: #666;
	}

	#maincar_shangpin1>p:nth-of-type(6) {
		text-align: center;
		width: 160px;
		height: 120px;
		line-height: 120px;
		font-size: 14px;
		color: #498e3d;
	}

	#maincar_shangpin1>p:nth-of-type(4)>input {
		width: 46px;
		height: 28px;
		text-align: center;
		line-height: 26px;
		color: #666666;
		border: none;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		vertical-align: top;
		margin-top: 45px;
	}

	#maincar_shangpin1>p:nth-of-type(4) span {
		display: inline-block;
		width: 28px;
		height: 28px;
		border: 1px solid #e4e4e4;
		background: #f2f2f2;
		margin-top: 45px;
		color: #999999;
		font-size: 25px;
		font-weight: 600;
		text-align: center;
		line-height: 28px;
		cursor: pointer;
	}

	#maincar_shangpin1>p:nth-of-type(4) span:nth-of-type(1) {
		margin-right: -5px;
	}

	#maincar_shangpin1>p:nth-of-type(4) span:nth-of-type(2) {
		margin-left: -5px;
	}
	/*商品金额*/

	.shangpinjine1 {
		height: 80px;
	}

	.shangpinjine1>span {
		display: inline-block;
		border: none;
		float: right;
	}

	.shangpinjine1>span:nth-of-type(1),.shangpinjine1>span:nth-of-type(3),.shangpinjine1>span:nth-of-type(5) {
		font-size: 24px;
		width: 90px;
		height: 80px;
		line-height: 80px;
		color: #ff5757;
		margin: 0;
		border: 0;
	}

	.shangpinjine1>span:nth-of-type(2),.shangpinjine1>span:nth-of-type(4),.shangpinjine1>span:nth-of-type(6) {
		font-size: 18px;
		width: 76px;
		height: 20px;
		line-height: 20px;
		color: #666;
		margin: 32px 15px 0 0;
		border: 0;
	}

	.fapiaoxinxi>p:nth-of-type(1),.fapiaoxinxi>p:nth-of-type(3),.fapiaoxinxi>p:nth-of-type(4),.fapiaoxinxi>p:nth-of-type(6){
		display: block;
		font-size: 18px;
		color: #666;
		line-height: 56px;
	}
	.fapiaoxinxi>span.syDian{
		border: 1px solid #498e3d !important;
	}
	.fapiaoxinxi>span:nth-of-type(1),.fapiaoxinxi>span:nth-of-type(3),.fapiaoxinxi>span:nth-of-type(5),.fapiaoxinxi>span:nth-of-type(7),.fapiaoxinxi>span:nth-of-type(9),.fapiaoxinxi>span:nth-of-type(11){
		display: inline-block;
		width: 15px;
		height: 15px;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin-right: 5px;
		margin-bottom: -3px;
		position: relative;
	}
	.fapiaoxinxi>span:nth-of-type(7){
		border: 1px solid #498e3d;
	}
	.fapiaoxinxi>span:nth-of-type(2),.fapiaoxinxi>span:nth-of-type(4),.fapiaoxinxi>span:nth-of-type(6),.fapiaoxinxi>span:nth-of-type(8),.fapiaoxinxi>span:nth-of-type(10),.fapiaoxinxi>span:nth-of-type(12){
		font-size: 14px;
		color: #666;
		line-height: 14px;
		margin-right: 35px;
	}
	.fapiaoxinxi>span:nth-of-type(1) img,.fapiaoxinxi>span:nth-of-type(3) img,.fapiaoxinxi>span:nth-of-type(5) img,.fapiaoxinxi>span:nth-of-type(7) img{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
	}
	.fapiaoxinxi>p:nth-of-type(2),.fapiaoxinxi>p:nth-of-type(5){
		display: block;
		font-size: 14px;
		color: #666;
		line-height: 56px;
		border-bottom: 1px solid #ccc;
		padding: 5px 0;
	}
	.fapiaoxinxi>p:nth-of-type(2)>input,.fapiaoxinxi>p:nth-of-type(5)>input{
		width: 370px;
		height: 35px;
		margin-right: 5px;
	}
	.fapiaoxinxi>p:nth-of-type(2)>span,.fapiaoxinxi>p:nth-of-type(5)>span{
		color: #EC6A17;
	}
	.fapiaoxinxi>p:nth-of-type(3)+input,.fapiaoxinxi>p:nth-of-type(6)+input{
		width: 626px;
		height: 35px;
		padding-left: 5px;
		margin-bottom: 30px;
	}
	.fapiaoxinxi2{
		width: 100%;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding-top: 20px;
	}
	.peisongtime{
		width: 100%;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding-bottom: 20px;
	}
	.peisongtime>p:nth-of-type(1){
		display: block;
		font-size: 18px;
		color: #498e3d;
		line-height: 56px;
	}
	.peisongtime>p:nth-of-type(2){
		font-size: 16px;
		color: #666;
		margin-right: 40px;
	}
	.peisongtime>span{
		font-size: 16px;
		color: #498e3d;
	}
	.peisongtime>span>img{
		width: 21px;
		height: 22px;
		vertical-align: top;
	}
	.songdashijian{
		width: 506px;
		height: 132px;
		margin-left: 150px;
		margin-bottom: 20px;
		padding: 33px 21px 0 21px;
		background: url(../../assets/images/img/shijianban.png) no-repeat center;
		display: none;
	}
	.songdashijian>span{
		display: inline-block;
		width: 100px;
		height: 30px;
		font-size: 14px;
		color: #666;
		border: 1px solid #ccc;
		background: #fff;
		text-align: center;
		line-height: 30px;
		margin-top: -1px;
		margin-left: -1px;
		cursor: pointer;
	}
	.songdashijian>button{
		border: none;
		width: 90px;
		height: 30px;
		border-radius: 5px;
		font-size: 14px;
		color: #fff;
		margin-top: 20px;
	}
	.songdashijian>button:nth-of-type(1){
		background: #999;
		margin-left: 140px;
	}
	.songdashijian>button:nth-of-type(2){
		background: #f08200;
		margin-left: 30px;
	}
	.dingdandibu{
		width: 100%;
		height: 230px;
		position: relative;
	}
	.shifujine{
		position: absolute;
		right: 0;
		font-size: 18px;
		color: #666;
		margin: 30px 0 20px 0;
	}
	.shifujine>span{
		font-size: 24px;
		color: #ff5757;
	}
	.huodejifen{
		position: absolute;
		right: 0;
		top: 80px;
		font-size: 16px;
		color: #333;
	}
	.huodejifen>span{
		color: #f08200;
	}
	.tijiaodingdan{
		display: inline-block;
		text-decoration: none;
		position: absolute;
		right: 0;
		top: 135px;
		display: inline-block;
		width: 150px;
		height: 50px;
		border-radius: 5px;
		background: #f08200;
		font-size: 20px;
		color: #FFFFFF;
		text-align: center;
		line-height: 50px;
	}
	/*默认设置圆点*/
	.dizhiguanli>li:nth-of-type(1)>span:nth-of-type(1){
		border: 1px solid #3D8E43;
	}
</style>
