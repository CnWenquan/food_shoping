<template>
  <div class="ddxq">
        <div class="ddxq_div1">
       	   <p class="ddxq_p1">订单编号:<span>15041305000006958388</span></p>
       	   <p class="ddxq_p2">订单状态:<span>待兑换</span></p>
           <button class="ddxq_btn1">立即支付</button>
       	   <button class="ddxq_btn2">取消订单</button>
        </div>
        <div class="ddxq_div2">
       	    <ul class="ddxq_ul1">
       	    	    <li class="ddxq_li1">
       	    		    <p class="ddxq_p3">支付方式</p>
       	    		    <p class="ddxq_p4">支付宝</p>
       	    	    </li>
       	      	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">支付流水号</p>
       	    		    <p class="ddxq_p4">4643196461647896166</p>
       	       	</li>
       	     	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">下单时间</p>
       	    		    <p class="ddxq_p4">2016-04-03 16:11:38</p>
       	     	</li>
       	     	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">支付时间</p>
       	    		    <p class="ddxq_p4"></p>
       	     	</li>
       	    	    <li class="ddxq_li1">
       	    		    <p class="ddxq_p3">发货时间</p>
       	    		    <p class="ddxq_p4"></p>
       	     	</li>
       	     	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">收货时间</p>
       	    		    <p class="ddxq_p4"></p>
       	    	    </li>
       	      	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">订单备注</p>
       	    		    <p class="ddxq_p4">希望包装的严实一些,不要有破损的情况,谢谢</p>
       	    	    </li>
       	    </ul>
       	    <p class="ddxq_p5">收货人信息</p>
       	    <ul class="ddxq_ul2">
       	    	   <li class="ddxq_li1">
       	    		    <p class="ddxq_p3">收货人姓名</p>
       	    		    <p class="ddxq_p4">王敏敏</p>
       	    	    </li>
       	      	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">地址</p>
       	    		    <p class="ddxq_p4">4643196461647896166</p>
       	       	</li>
       	     	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">手机</p>
       	    		    <p class="ddxq_p4">15035689556/固定电话:010-12548756</p>
       	     	</li>
       	    </ul>
       	    <p class="ddxq_p5">发票信息</p>
       	    <ul class="ddxq_ul5">
       	    	    <li class="ddxq_li1">
       	    		    <p class="ddxq_p3">发票抬头</p>
       	    		    <p class="ddxq_p4">北京嘉和影业有限公司</p>
       	    	    </li>
       	      	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">发票内容</p>
       	    		    <p class="ddxq_p4">明细</p>
       	       	</li>
       	    </ul>
       	    <p class="ddxq_p5">物流信息</p>
       	    <ul class="ddxq_ul3">
       	    	    <li class="ddxq_li1">
       	    		    <p class="ddxq_p3">联系人</p>
       	    		    <p class="ddxq_p4">张小哥</p>
       	    	    </li>
       	      	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">联系方式</p>
       	    		    <p class="ddxq_p4">13995684562</p>
       	       	</li>
       	    </ul>
            <p class="ddxq_p5">卖家信息</p>
       	    <ul class="ddxq_ul6">
       	    	    <li class="ddxq_li1">
       	    		    <p class="ddxq_p3">店铺名称</p>
       	    		    <p class="ddxq_p4">海澜之家旗舰店</p>
       	    	    </li>
       	      	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">真实姓名</p>
       	    		    <p class="ddxq_p4">赵敏芝</p>
       	       	</li>
       	       	<li class="ddxq_li1">
       	    		    <p class="ddxq_p3">联系电话</p>
       	    		    <p class="ddxq_p4">0512-25664952</p>
       	       	</li>
       	    </ul>
            <ul class="ddxq_ul4">
            	    <li class="ddxq_li2">
            	    	    <p class="ddxq_p6 ddxq_p11">爱果果水果店</p>
            	    	    <p class="ddxq_p7 ddxq_p11">规格</p>
            	    	    <p class="ddxq_p8 ddxq_p11">单价</p>
            	    	    <p class="ddxq_p9 ddxq_p11">数量</p>
            	    	    <p class="ddxq_p10 ddxq_p11">金额</p>
            	    </li>
            	    <li class="ddxq_li3" v-for="item in ab">
            	    	    <div><img v-bind:src="item.img" alt="" /></div>
            	    	    <p class="ddxq_p12 ddxq_p13">{{item.name}}</p>
            	    	    <p class="ddxq_p7 ddxq_p13">{{item.type}}</p>
            	    	    <p class="ddxq_p8 ddxq_p13">{{item.mon}}</p>
            	    	    <p class="ddxq_p9 ddxq_p13">{{item.am}}</p>
            	    	    <p class="ddxq_p10 ddxq_p13">{{item.soc}}</p>
            	    </li>
            </ul>
            <p class="ddxq_p14">实付金额 : <span>￥2276</span></p>
            <div class="ddxq_dd">
               	<p class="ddxq_ddp1">取消订单</p>
               	<p class="ddxq_ddp2">立即支付</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ab:[{img:require('../images/img/l17.png'),name:'云南蒙自石榴 8个装',type:'8个装',mon:'¥569',am:'1',soc:'￥569'},{img:require('../images/img/l17.png'),name:'江西火龙果 6个装',type:'6个装',mon:'¥666',am:'1',soc:'￥569'},{img:require('../images/img/l17.png'),name:'橘生淮南为橘 10个装',type:'10个装',mon:'¥100',am:'1',soc:'￥569'},{img:require('../images/img/l17.png'),name:'橘生淮北为枳 10个装',type:'10个装',mon:'¥10',am:'1',soc:'￥569'}]
    }
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.ddxq{
	width: 1088px;
	border: 1px solid #E7E7E7;
	float: right;
}
.ddxq_div1{
	width: 100%;
	height: 59px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
}
.ddxq_div1>p{
	position: absolute;
	display: inline-block;
	height: 59px;
	line-height: 59px;
}
.ddxq_div1>button{
	position: absolute;
	width: 90px;
	height: 30px;
	border-radius: 5px;
	border: none;
	outline: none;
	top: 14.5px;
}
.ddxq_p1,.ddxq_p2{
	font-size: 13.5px;
	color: #333333;
}
.ddxq_p2>span{
	color: #F78327;
}
.ddxq_p1{
	left: 20px;
}
.ddxq_p2{
	left: 488px;
}
.ddxq_btn1{
	color: #FFFFFF;
	left:845px;
	background: #3D8E43;
}
.ddxq_btn2{
	color: #FFFFFF;
	right: 20px;
	background: #999999;
}
.ddxq_div2{
	width: calc(100% - 40px);
	padding: 20px;
}
ul{
	list-style: none;
	width: 100%;	
	border: 1px solid #E9E9E9;
}
.ddxq_ul1,.ddxq_ul2,.ddxq_ul3,.ddxq_ul5,.ddxq_ul6{
	background: #F9F9F9;
}
.ddxq_ul1{
	height: 274px;
}
.ddxq_ul2{
	height: 117px;
}
.ddxq_ul3{
	height: 78px;
}
.ddxq_li1{
	width: 100%;
	height: 39px;
	position: relative;
}
.ddxq_li1>p{
	display: inline-block;
	height: 39px;
	line-height: 39px;
	position: absolute;
	font-size: 12px;
	color: #666666;
}
.ddxq_p3{
	left: 20px;
}
.ddxq_p4{
	left: 145px;
}
.ddxq_p5{
	display: inline-block;
	width: calc(100% - 10px);
	padding-left: 10px;
	height: 55px;
	line-height: 55px;
	text-align: left;
	font-size: 13.5px;
	color: #3D8E43;
}
.ddxq_ul4{
	margin-top: 20px;
	background: #FFFFFF;
}
.ddxq_p11{
	position: absolute;
	font-size: 12px;
	color: #333333;
	height: 46px;
	line-height: 46px;
}
.ddxq_p13{
	position: absolute;
	font-size: 10.5px;
	color: #7B7B7B;
}
.ddxq_ul4>li>p{
	display: inline-block;
}
.ddxq_li2{
	width: 100%;
	height: 46px;
	background: #F2F2F2;
	position: relative;
}
.ddxq_p6{
	left: 20px;
}
.ddxq_p7{
	left: 430px;
}
.ddxq_p8{
	left: 610px;
}
.ddxq_p9{
	left: 795px;
}
.ddxq_p10{
	left: 970px;
}
.ddxq_p12{
	left: 120px;
}
.ddxq_li3{
	width: 100%;
	height: 120px;
	position: relative;
	border-bottom: 1px solid #EAEAEA;
	display: flex;
	align-items: center;
}
.ddxq_li3>div{
	width: 80px;
	height: 80px;
	border: 1px solid #EAEAEA;
	position: absolute;
	left: 20px;
}
.ddxq_li3>div>img{
	width: 100%;
	height: 100%;
}
.ddxq_p14{
	display: inline-block;
	width: 100%;
	height: 100px;
	line-height: 100px;
	font-size: 12px;
	color: #767676;
	text-align: right;
}
.ddxq_p14>span{
	font-size: 15px;
	color: #F85559;
}
.ddxq_dd{
	width: 100%;
	height: 50px;
	position: relative;
}
.ddxq_dd>p{
	display: inline-block;
	width: 150px;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
	font-size: 15px;
	color: #FFFFFF;
	position: absolute;
	top: 0;
}
.ddxq_ddp1{
	  background: #939393;
	  right: 195px;
}
.ddxq_ddp2{
	  background: #F07F26;
	  right: 0;
}
</style>
