<template>
	<div class="g_maincarxia">
		<div class="maincarxia_top">
			<img src="../../assets/images/ico/gouwuche.png" alt=""/>
			<span>购物车</span>
		</div>
		<ul v-for="(val,key) in items" class="maincar_ul">
			<li>
				<span v-bind:class="{spanb:val.showImgs}" v-on:click="zongxuan(key)"></span>
				<p>{{key}}</p>
				<p>规格</p>
				<p>单价</p>
				<p>数量</p>
				<p>金额</p>
				<p>操作</p>
			</li>
			<li v-for="(items,index1) in val.data" id="maincar_shangpin">
				<span v-bind:class="{spanb:items.showImg}" v-on:click="xuanzhong(key,index1)"><img v-if="items.showImg" src="../../assets/images/ico/xuanzesb.png" alt=""/></span>
				<p><img v-bind:src="items.src" alt=""/><span>{{items.name}}</span></p>
				<p>{{items.size}}</p>
				<p>¥{{items.price}}</p>
				<p>
					<span @click="sub(key,index1)">-</span>
					<input type="text" v-model="items.num"/>
					<span @click="add(key,index1)">+</span>
				</p>
				<p>¥{{items.total}}</p>
				<p @click="del(key)">删除</p>
			</li>
			<li class="shangpinjine"><span>¥{{val.zongtotal}}</span><span>商品金额</span></li>
		</ul>
		<div class="maincarxia_b">
			<span class="allspan" @click="allxuan">全选</span>
			<span class="allspan" @click="alldel">批量删除</span>
			<a href="#/Index/dingdan"><span class="goumaibtn" @click="lijiBuy">立即购买</span></a>
			<span class="zzspan">¥{{zzongtotal}}</span>
			<span class="shpjine">商品金额:</span>
		</div>
		<div id="main_cover">


		<div class="covercar">
			<img src="../../assets/images/img/dagouwuche.png" alt=""/>
			<div>
				<p>你的购物车是空的</p><br />
				<a href="#/">去首页看看</a>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				// items:[{showImgs:false,shop:'甜品',zongtotal:'0',aa:[{showImg:false,src:'/static/images/banligao.jpg',size:'160*4/盒',price:'20',num:'4',total:80},{showImg:false,src:'/static/images/fenghuangjuan.jpg',size:'6个/盒',price:'25',num:'5',total:125},{showImg:false,src:'/static/images/meiguisu.jpg',size:'280g/盒',price:'59',num:'2',total:118}]}],
				items:{},
				zzongtotal: 0,
				shopping: [{name:'香味糕点',src:'/static/icon/niunai1.png',aa:[{aName:'桂林特产 板栗糕',src:'/static/images/banligao.jpg',aJs:'160g*4/盒',xPrice:'20',yPrice:'35'},{aName:'葡韵 澳门特产 凤凰卷',src:'/static/images/fenghuangjuan.jpg',aJs:'6个/盒',xPrice:'25',yPrice:'40'},{aName:'上海特产 屋里香 玫瑰酥',src:'/static/images/meiguisu.jpg',aJs:'280g/盒',xPrice:'59',yPrice:'69'},{aName:'鲜乳酪面包',src:'/static/images/rulao.jpg',aJs:'800g/盒',xPrice:'45.90',yPrice:'46.90'}]}]
			}
		},
		mounted(){
			this.getSum();
			var we = {};
			// var edg = [];
		  	this.$axios.get('/api/cc').then(function(data){

			we = data.data;
			// for(var i = 0;i < we.length;i++){
			//   we[i].aa = [];
			// }
			// for(var i = 1;i < we.length;i++){
			//   for(var j = 0;j < we.length - i;j++){
			//     if(we[j].shop == we[j + 1].shop){
			//       we.splice(j + 1,1);
			//     }
			//   }
			// }
			// this.$axios.get('/api/cc').then(function(data){
			//   for(var i = 0;i < data.data.length;i++){
			//   edg[i] = data.data[i];
			//   edg[i].total = edg[i].num * edg[i].price;
			//   }
			//   for(var i = 0;i < data.data.length;i++){
			//     for(var j = 0;j < we.length;j++){
			//       if(edg[i].shop == we[j].shop)
			//       we[j].aa.push(edg[i]);
			//     }
			//   }
			  this.items = we;


			// }.bind(this));
	  //			console.log(we,we.aa);
	  //			for(var i = 0;i < we.length;i++){
	  //				this.items[i].total = this.items[i].num * this.items[i].price;
	  //			}
		  	}.bind(this));
		  this.locachange();
		},
		methods:{
			xuanzhong: function(key,k){

				// var showImg_n = 0;
				this.items[key]['data'][k].showImg = !this.items[key]['data'][k].showImg;

				if (this.items[key]['data'][k].showImg){
                    this.items[key].zongtotal += this.items[key]['data'][k].total;
				}else{
                    this.items[key].zongtotal -= this.items[key]['data'][k].total;
				}

				// for(var i = 0;i < this.items[index].aa.length;i++){
				// 	if(this.items[index].aa[i].showImg == true){
				// 		showImg_n++;
				// 	}
				// }
				// if(showImg_n == this.items[index].aa.length){
				// 	this.items[index].showImgs = true;
				// }else{
				// 	this.items[index].showImgs = false;
				// }
				// //计算
				// if(this.items[index].aa[index1].showImg == true){
				// 	this.items[index].zongtotal = parseFloat(this.items[index].zongtotal) + parseFloat(this.items[index].aa[index1].total);
				// }else{
				// 	this.items[index].zongtotal = this.items[index].zongtotal - this.items[index].aa[index1].total;
				// }
				//计算总价
				this.getSum();

			},
			zongxuan: function(key){
				//计算
				this.items[key]['zongtotal'] = 0;
				console.log(this.items[key]);

				$.each(this.items[key]['data'], (k,v)=> {
                    v.showImg = !v.showImg;

                    if (v.showImg){
                        this.items[key]['zongtotal'] += parseFloat(v.total);
                    }

                });
				// for(var i = 0;i < this.items[key].length;i++){
                //
                 //    this.items[key][i].showImg = ! this.items[key][i].showImg;
				// 	this.items[key].zongtotal = parseFloat(this.items[key].zongtotal) + parseFloat(this.items[key][i].total);
                //
				// }
				//计算总价
				this.getSum();
			},
			del: function(index,index1){
				this.items[index].aa[index].showImg = false;
				this.items[index].aa.splice(this.items[index].aa[index1],1);
				if(this.items[index].aa == 0){
					this.items.splice(this.items[index],1);
				}



				if(this.items.length == 0){
					$('#main_cover').css("display",'block');
				}
			},
			allxuan: function(){

			    console.log('1111');

			    console.log(this.items);

			    $.each(this.items,function (key,val) {

                    $.each(val.data,function (k,v) {

                        v.showImg = true;
                        val.zongtotal += parseFloat(v.total);
                        // this.items[key][k].showImg = true;
                        // this.items[key].zongtotal += parseFloat(this.items[key][k].total);

                    })
                });


                // for (var i = 0;i <this.items.length;i++){
			     //    for (var j = 0;j<this.items[i].length;j++){
			     //        this.items[i][j].showImg = true;
                 //        this.items[i].zongtotal = parseFloat(this.items[i].zongtotal) + parseFloat(this.items[i][j].total);
				// 	}
				// }

				// for(var i = 0;i < this.items.length;i++){
				// 	this.items[i].showImgs = true;
				// 	for(var j = 0;j < this.items[i].aa.length;j++){
				// 		this.items[i].aa[j].showImg = true;
				// 	}
				// }
				// //计算
				// this.items[0].zongtotal = 0;
				// this.items[1].zongtotal = 0;
				// for(var i = 0;i < this.items.length;i++){
				// 	for(var j = 0;j < this.items[i].aa.length;j++){
				// 		this.items[i].zongtotal = parseFloat(this.items[i].zongtotal) + parseFloat(this.items[i].aa[j].total);
				// 	}
				// }
				//计算总价
				this.getSum();
			},
			alldel: function(){
				$('#main_cover').css("display",'block');
				this.items.splice(0);
			},
			sub: function(index,index1){
				if(this.items[index].aa[index1].num <= 0){
					this.items[index].aa[index1].num = 0;
					return;
				}
				this.items[index].aa[index1].num--;
				this.items[index].aa[index1].total = this.items[index].aa[index1].num * this.items[index].aa[index1].price;
				//计算
				this.items[index].zongtotal = 0;
				for(var i = 0; i < this.items[index].aa.length; i++) {
					if(this.items[index].aa[i].showImg == true) {
						this.items[index].zongtotal = parseFloat(this.items[index].zongtotal) + parseFloat(this.items[index].aa[i].total);
					}
				}//计算总价
				this.getSum();
			},
			getSum(){
				//计算总价
				this.zzongtotal = 0;
				for(var i = 0;i < this.items.length;i++){
					this.zzongtotal += parseFloat(this.items[i].zongtotal);
				}
			},
			add: function(index,index1){
				this.items[index].aa[index1].num++;
				this.items[index].aa[index1].total = this.items[index].aa[index1].num * parseFloat(this.items[index].aa[index1].price);
				//计算
				this.items[index].zongtotal = 0;
				for(var i = 0; i < this.items[index].aa.length; i++) {
					if(this.items[index].aa[i].showImg == true) {
						this.items[index].zongtotal = parseFloat(this.items[index].zongtotal) + parseFloat(this.items[index].aa[i].total);
					}
				}//计算总价
				this.getSum();
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
			lijiBuy:function(){
				for(var i = 0;i < this.items.length;i++){
						if(this.items[i].showImgs == true){
						localStorage.qdBuy = this.items[i].name;
					}
				}
			}
		}
	}
</script>

<style>
#main_cover{
	width: 100%;
	height: 490px;
	position: relative;
	display: none;
	background: #fff;
	margin-top: -170px;
	margin-bottom: 2px;
}
.maincar_ul li .spanb{
	border: 1px solid #498e3d;
}
.g_maincarxia{
	width: 1280px;
	margin: auto;
	position: relative;
}
.maincarxia_top{
	width: 100%;
	height: 60px;
	position: relative;
}
.maincarxia_top>img{
	width: 22px;
	height: 20px;
	margin: 15px 15px 15px 0;
}
.maincarxia_top>span{
	position: absolute;
	top: 14px;
	color: #666666;
	font-size: 18px;
	vertical-align: middle;
	/*padding-top: 15px;*/
}
.maincar_ul{
	width: 100%;
	border: 1px solid #e4e4e4;
	overflow: hidden;
	margin-bottom: 20px;
}
.maincar_ul>li:nth-of-type(1){
	overflow: hidden;
	background: #f2f2f2;
}
.maincar_ul>li>*{
	float: left;
}
.maincar_ul li>span{
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 1px solid #e4e4e4;
	margin: 13px 20px;
	background: #fff;
}
.maincarxia_top p{
	display: inline-block;
}
.maincar_ul li>p:nth-of-type(1){
	width: 340px;
	height: 47px;
	line-height: 46px;
}
.maincar_ul li p:nth-of-type(1) img{
	width: 80px;
	height: 79px;
}
.maincar_ul li>p:nth-of-type(2),.maincar_ul li>p:nth-of-type(3),.maincar_ul li>p:nth-of-type(4),.maincar_ul li>p:nth-of-type(5){
	text-align: center;
	width: 180px;
	height: 47px;
	line-height: 46px;
}
.maincar_ul li>p:nth-of-type(6){
	text-align: center;
	width: 160px;
	height: 47px;
	line-height: 46px;
	cursor: pointer;
}
#maincar_shangpin{
	height: 120px;
	border-bottom: 1px solid #e4e4e4;
}
#maincar_shangpin>span{
	margin-top: 50px;
}
#maincar_shangpin>p:nth-of-type(1){
	margin-top: 20px;
	height: 100px;
}
#maincar_shangpin>p:nth-of-type(1) span{
	display: inline-block;
	height: 80px;
	line-height: 80px;
	margin-left: 20px;
	font-size: 14px;
	color: #666;
}
#maincar_shangpin>p:nth-of-type(2),#maincar_shangpin>p:nth-of-type(3),#maincar_shangpin>p:nth-of-type(4),#maincar_shangpin>p:nth-of-type(5){
	text-align: center;
	width: 180px;
	height: 120px;
	line-height: 120px;
}
#maincar_shangpin>p:nth-of-type(5){
	font-size: 14px;
	color: #666;
}
#maincar_shangpin>p:nth-of-type(2),#maincar_shangpin>p:nth-of-type(3){
	font-size: 14px;
	color: #666;
}
#maincar_shangpin>p:nth-of-type(6){
	text-align: center;
	width: 160px;
	height: 120px;
	line-height: 120px;
	font-size: 14px;
	color: #498e3d;
}
#maincar_shangpin>p:nth-of-type(4)>input{
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
#maincar_shangpin>p:nth-of-type(4) span{
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
#maincar_shangpin>p:nth-of-type(4) span:nth-of-type(1){
	margin-right: -5px;
}
#maincar_shangpin>p:nth-of-type(4) span:nth-of-type(2){
	margin-left: -5px;
}
/*商品金额*/
.shangpinjine{
	height: 80px;
}
.shangpinjine>span{
	display: inline-block;
	border: none;
	float: right;
}
.shangpinjine>span:nth-of-type(1){
	font-size: 24px;
	width: 90px;
	height: 80px;
	line-height: 80px;
	color: #ff5757;
	margin: 0;
	border: 0;
}
.shangpinjine>span:nth-of-type(2){
	font-size: 18px;
	width: 76px;
	height: 20px;
	line-height: 20px;
	color: #666;
	margin: 32px 15px 0 0;
	border: 0;
}
.maincarxia_b{
	width: 100%;
	height: 110px;
}
.allspan{
	float: left;
	font-size: 14px;
	color: #498e3d;
	margin: 40px 20px 0 20px;
	cursor: pointer;
	border: 0;
}
.goumaibtn,.zzspan,.shpjine{
	float: right;
}
.goumaibtn{
	display: inline-block;
	width: 150px;
	height: 50px;
	margin-top: 20px;
	background: #f08200;
	border-radius: 5px;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
}
.zzspan{
	font-size: 24px;
	color: #ff5757;
	margin: 35px 30px 0 15px;
}
.shpjine{
	font-size: 18px;
	color: #666;
	margin-top: 40px;
}
.g_maincarxia span>img{
	width: 8px;
	height: 8px;
	margin: 4px 0 0 4px;
}
.covercar{
	width: 100%;
	height: 490px;
	background: #fff;
	position: absolute;
	top: 1px;
	left: 0;
	/*display: none;*/
}
.covercar>img{
	margin-top: 180px;
	margin-left: 512px;
}
.covercar>div{
	display: inline-block;
	margin-top: 195px;
	margin-left: 25px;
}
.covercar>div>p{
	font-size: 20px;
	color: #666;
	line-height: 20px;
}
.covercar>div>a{
	text-decoration: none;
	display: inline-block;
	width: 170px;
	height: 45px;
	background: #ec6a17;
	border-radius: 5px;
	font-size: 18px;
	color: #fff;
	text-align: center;
	line-height: 45px;
	margin-top: 30px;
	cursor: pointer;
}
.maincarxia_b>a{
	float: right;
	display: inline-block;
}
</style>
