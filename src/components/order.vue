<template>
	<div class="l_outer">
	    <p class="l_d1_p1">我的订单 </p>
	    <div class="l_d1_div1">
	        <ul class="l_d1_ul1">
	        	    <li class="l_d1_li1" @click="b1($event)">全部</li>
	        	    <li class="l_d1_li2"></li>
	        	    <li class="l_d1_li1" @click="b2($event)">待付款</li>
	        	    <li class="l_d1_li2"></li>
	        	    <li class="l_d1_li1" @click="b3($event)">待发货</li>
	        	    <li class="l_d1_li2"></li>
	        	    <li class="l_d1_li1" @click="b4($event)">待收货</li>
	        	    <li class="l_d1_li2"></li>
	        	    <li class="l_d1_li1" @click="b5($event)">待评价</li>
	        	    <li class="l_d1_li2"></li>
	        	    <li class="l_d1_li1" @click="b6($event)">退款/售后</li>
	        	    <li class="l_d1_li2"></li>
	        	    <li class="l_d1_li1" @click="b7($event)">已完成/关闭</li>
	        	    <li class="l_d1_li3" @click="empty()">订单回收站</li>
	        </ul>
	        <!--关闭-->
	        <div class="l_d1_dd1" v-for="(item,w) in msg">
	        	    <div class="l_d1_ddd1">
	        	    	    <p class="l_ddd_p1">订单号:<span class="l_ddd_s1">{{item.num}}</span></p>
	        	    	    <p class="l_ddd_p2">下单日期:<span class="l_ddd_s2">{{item.time}}</span></p>
	        	    	    <p class="l_ddd_p3">{{item.name}}</p>
	        	    	    <p class="l_ddd_p4">订单状态:<span class="l_ddd_s3">{{item.cond}}</span></p>
	        	    </div>
	        	    <div class="l_d1_ddd2">
	        	    	    <div class="l_dd1_dd1">
	        	    	    	    <div class="l_dd1_ddd1" v-for="aa in item.msg1">
	        	    	    	    	    <div class="l_dd1_dddd1"><img src="../images/img/l32.png" alt="" /></div>
	        	    	    	    	    <p class="l_ddd_p5">云南昭通丑苹果</p>
	        	    	    	    	    <p class="l_ddd_p6">6个装</p>
	        	    	    	    	    <p class="l_ddd_p7">￥35.0 x 1</p>
	        	    	    	    </div>
	        	    	    </div>
	        	    	    <div class="l_dd1_dd2">
	        	    	    	    <p class="l_ddd_p8">店铺合计:<span>{{item.sum}}</span></p>
	        	    	    	    <p class="l_ddd_p8">(含运费:<span>{{item.fre}}</span>)</p>
	        	    	    </div>
	        	    	    <div class="l_dd1_dd3">
	        	    	    	    <p><router-link to="/aa/ddxq">查看详情</router-link></p>
	        	    	    	    <button class="l_btn l_btn1" @click="splic(w)">删除订单</button>
	        	    	    	    <button class="l_btn l_btn2">去支付</button>
	        	    	    	    <button class="l_btn l_btn3">取消订单</button>
	        	    	    	    <button class="l_btn l_btn4">申请退款</button>
	        	    	    	    <button class="l_btn l_btn5">确认收货</button>
	        	    	    	    <button class="l_btn l_btn6">查看物流</button>
	        	    	    	    <button class="l_btn l_btn7"><router-link to="/aa/ddpj">去评价</router-link></button>
	        	    	    	    <button class="l_btn l_btn8">交易完成</button>
	        	    	    	    <button class="l_btn l_btn9">申请平台介入</button>
	        	    	    </div>
	        	    </div>
	        </div>
	        <div class="order_div1">
	        	    <img src="../images/icon/dingdan.png" alt="" />
	        	    <div class="order_div2">
	        	    	    <p>您还没有订单哦!</p>
	        	        <a href="#/">去首页看看</a>
	        	    </div>	        	    
	        </div>
	    </div>
	    <v-pagination></v-pagination>
	</div>
</template>

<script>
import 	pagination from './fenye'
export default {
  components:{
    'v-pagination': pagination
  },
  methods:{
  	
  	b1:function($event){
  		console.log($('.l_btn').length);
  		for(var i=0;i<this.msg.length;i++){
  			$('.l_d1_dd1').eq(i).show();
  			$('.l_d1_li1').removeClass('acti');
			$($event.target).addClass('acti');
  		}
  	},
  	b2:function($event){
  		console.log(2);
  		for(var i=0;i<this.msg.length;i++){
  			if(this.msg[i].cond=='待付款'){
  				$('.l_d1_dd1').eq(i).show(); 				
  			}else{
  				$('.l_d1_dd1').eq(i).hide(); 	
  			}
  			$('.l_d1_li1').removeClass('acti');
$($event.target).addClass('acti');
  		}
  	},
  	b3:function($event){
  		console.log(3);
  		for(var i=0;i<this.msg.length;i++){
  			if(this.msg[i].cond=='待发货'){
  				$('.l_d1_dd1').eq(i).show(); 				
  			}else{
  				$('.l_d1_dd1').eq(i).hide(); 	
  			}
  			$('.l_d1_li1').removeClass('acti');
$($event.target).addClass('acti');
  		}
  	},
  	b4:function($event){
  		console.log(4);
  		for(var i=0;i<this.msg.length;i++){
  			if(this.msg[i].cond=='已发货'){
  				$('.l_d1_dd1').eq(i).show(); 				
  			}else{
  				$('.l_d1_dd1').eq(i).hide(); 	
  			}
  			$('.l_d1_li1').removeClass('acti');
$($event.target).addClass('acti');
  		}
  	},
  	b5:function($event){
  		console.log(5);
  		for(var i=0;i<this.msg.length;i++){
  			if(this.msg[i].cond=='已收货'){
  				$('.l_d1_dd1').eq(i).show(); 				
  			}else{
  				$('.l_d1_dd1').eq(i).hide(); 	
  			}
  			$('.l_d1_li1').removeClass('acti');
$($event.target).addClass('acti');
  		}
  	},
  	b6:function($event){
  		console.log(6);
  		for(var i=0;i<this.msg.length;i++){
  			if(this.msg[i].cond=='退款中' || this.msg[i].cond=='申请退款中' ||this.msg[i].cond=='退款失败'){
  				$('.l_d1_dd1').eq(i).show(); 				
  			}else{
  				$('.l_d1_dd1').eq(i).hide(); 	
  			}
  			$('.l_d1_li1').removeClass('acti');
$($event.target).addClass('acti');
  		}
  	},
  	b7:function($event){
  		console.log(7);
  		for(var i=0;i<this.msg.length;i++){
  			if(this.msg[i].cond=='关闭'){
  				$('.l_d1_dd1').eq(i).show(); 				
  			}else{
  				$('.l_d1_dd1').eq(i).hide(); 	
  			}
  			$('.l_d1_li1').removeClass('acti');
			$($event.target).addClass('acti');
  		}
  	},
  	splic:function(w){  	      	   	
	   	//this.msg.splice(w,1);
        console.log(1);
    	},
	empty:function(){
	 	this.msg = [];
	 	if(this.msg.length == 0){
  	    	    $('.l_d1_dd1').hide();
  	    	    $('.nav1').hide();
  	    	    $('.order_div1').show();  	    	    
  	    }else{
  	    	    $('.order_div1').hide();  
  	    	    $('.l_d1_dd1').show();
  	    	    $('.nav1').show();
  	    };
	 }  
  },
   mounted(){
   	    if(this.msg.length==0){
  	    	    $('.l_d1_dd1').hide();
  	    	    $('.nav1').hide();
  	    	    $('.order_div1').show();  	    	    
  	    }else{
  	    	    $('.order_div1').hide();  
  	    	    $('.l_d1_dd1').show();
  	    	    $('.nav1').show();
  	    };
   	   $('.l_btn').hide();   	   
  	   for(var i=0;i<this.msg.length;i++){
  	   	   if(this.msg[i].cond=='关闭'){ 
  	   	       $('.l_btn1').eq(i).show();
  	   	   }else if(this.msg[i].cond=='待付款'){
  	   	       $('.l_btn2').eq(i).show();
  	   	       $('.l_btn3').eq(i).show();
  	   	   }else if(this.msg[i].cond=='待发货'){
  	   	       $('.l_btn4').eq(i).show(); 	   	    
  	   	   }else if(this.msg[i].cond=='已发货'){ 
  	   	       $('.l_btn5').eq(i).show();
  	   	       $('.l_btn6').eq(i).show();
  	   	   }else if(this.msg[i].cond=='已收货'){
  	   	       $('.l_btn4').eq(i).show();
  	   	       $('.l_btn7').eq(i).show();
  	   	       $('.l_btn8').eq(i).show();
  	   	   }else if(this.msg[i].cond=='退款失败'){
  	   	       $('.l_btn9').eq(i).show();
  	   	   }  	   	
  	    }
  	   $('.l_d1_li1').eq(0).addClass('acti');
  },
  data () {
  	return {
  		msg:[{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'关闭',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'待付款',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'待发货',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'已发货',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'已收货',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'申请退款中',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'退款中',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'退款中',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]},{num:'150319690000',time:'2015.04.09 18:06:06',name:'爱果果水果店',cond:'退款失败',sum:'￥105.0',fre:'￥8.0',msg1:[{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'},{img:'../images/img/l32.png',nam:'云南昭通丑苹果',nu:'6个装',mon:'￥35.0x1'}]}]
  	}
  }
}
</script>
moun


<style scoped="scoped">
*{
	padding: 0;
	margin: 0;	
}
.acti{
	color: #FFFFFF;
	background: #F78327;
}
ul{
	list-style: none;
}
.l_outer{
	width: 1088px;
	border: 1px solid #E7E7E7;
	float: right;
}
/*标题*/
.l_d1_p1{
	width: 100%;
	height: 59px;
	line-height: 59px;
	font-size: 14px;
	color: #414141;
	border-bottom: 1px solid #E7E7E7;
	box-sizing: border-box;
	padding-left: 20px;
	text-align: left;
}
/*订单详情*/
.l_d1_div1{
	width: calc(100% - 40px);
	padding: 0 20px;
}
/*订单详情导航*/
.l_d1_ul1{
	list-style: none;
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	position: relative;
}
.l_d1_li1,.l_d1_li2{
	margin-right: 25px;
}
.l_d1_li1{
	height: 12px;
	padding: 8px 15px;
	font-size: 12px;
	color: #666666;
}
.l_d1_li1:hover,.l_d1_li3:hover{
	color: #FFFFFF;
	background: #F78327;
	cursor: pointer;
}
.active1{
	color: #FFFFFF;
	background: #F78327;
}
.l_d1_li2{
	width: 1px;
	height: 20px;
	background: #999999;
}
.l_d1_li3{
	height: 12px;
	position: absolute;
	right: 0;
	margin: 0;
	padding: 8px 15px;
	font-size: 12px;
	color: #3E9444;
}
/*订单内容*/
.l_d1_dd1{
	width: 100%;
	border: 1px #E9E9E9 solid;
	margin-bottom: 20px;
	
}
.l_d1_ddd1{
	width: 100%;
	height: 46px;
	background: #F2F2F2;
	position: relative;
}
.l_d1_ddd1>p{
	display: inline-block;
	height: 46px;
	line-height: 46px;
	position: absolute;	
}
.l_ddd_p1,.l_ddd_p2,.l_ddd_p4{
	font-size: 12px;
	color: #333333;
}
.l_ddd_p1{
	left: 20px;
}
.l_ddd_p2{
	left: 254px;
}
.l_ddd_p3{
	font-size: 12px;
	color: #3E9444;
	left: 550px;
}
.l_ddd_p4{
	right: 25px;
}
.l_ddd_s3{
	color: #F78327;
}
.l_d1_ddd2{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.l_dd1_dd1{
	
}
.l_dd1_dd1{
	width: 698px;
}
.l_dd1_dd2{
	width: 208px;
	border-left: 1px solid #E9E9E9;
	border-right: 1px solid #E9E9E9;
}
.l_dd1_dd3{
	width: 140px;
}
.l_dd1_dd2,.l_dd1_dd3{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.l_dd1_ddd1{
	width: 100%;
	height: 120px;
	display: flex;
	align-items: center;
	position: relative;
	border-bottom: 1px solid #E9E9E9;
}
.l_dd1_dddd1{
	width: 80px;
	height: 80px;
	position: absolute;
	left: 20px;
}
.l_dd1_dddd1>img{
	width: 100%;
	height: 100%;
}
.l_ddd_p5{
	font-size: 10.5px;
	color: #7A7A7A;
	position: absolute;
	left: 120px;
}
.l_ddd_p6{
	font-size: 10.5px;
	color: #999999;
	position: absolute;
	left: 370px;
}
.l_ddd_p7{
	font-size: 10.5px;
	color: #666666;
	position: absolute;
	left: 510px;
}
.l_ddd_p8{
	font-size: 10.5px;
	color: #666666;
}
.l_dd1_dd3>p{
	margin-bottom: 20px;
	cursor: pointer;
}
.l_dd1_dd3>p>a{
	font-size: 10.5px;
	color: #3E9444;	
}
.l_btn{
	width: 90px;
	height: 30px;
	font-size: 10.5px;
	color: #FFFFFF;	
	border-radius: 5px;
	border: none;
	outline: none;
	margin-bottom: 10px;
	background: #F78327;
	cursor: pointer;
}
.l_btn>a{
	font-size: 10.5px;
	color: #FFFFFF;
	text-decoration: none;	
}
.l_btn3{
	background: #999999;
}
/**/
.order_div1{
	width: 100%;
	height: 510px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.order_div1>img{
	width: 76px;
	height: 100px;
	margin-right: 40px;
}
.order_div2{
	width: 150px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.order_div2>p{
	width: 100%;
	font-size: 15px;
	color: #666666;
	text-align: left;
}
.order_div2>a{
	text-decoration: none;
	text-align: center;
	width: 150px;
	height: 45px;
	line-height: 45px;
	font-size: 15px;
	color: #FFFFFF;
	background: #F78327;
	border-radius: 5px;
}
</style>