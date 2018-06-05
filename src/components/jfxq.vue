<template>
  <div class="jfxq">
        <div class="jf_div1">
       	   <p class="jf_p1">订单编号:<span>15041305000006958388</span></p>
       	   <p class="jf_p2">订单状态:<span>待兑换</span></p>
           <button class="jf_btn1"><router-link to="/jifen">立即兑换</router-link></button>
       	   <button class="jf_btn2">取消订单</button>
        </div>
        <div class="jf_div2">
       	    <ul class="jf_ul1">
       	    	    <li class="jf_li1">
       	    		    <p class="jf_p3">支付方式</p>
       	    		    <p class="jf_p4">积分</p>
       	    	    </li>
       	      	<li class="jf_li1">
       	    		    <p class="jf_p3">支付流水号</p>
       	    		    <p class="jf_p4">4643196461647896166</p>
       	       	</li>
       	     	<li class="jf_li1">
       	    		    <p class="jf_p3">下单时间</p>
       	    		    <p class="jf_p4">2016-04-03 16:11:38</p>
       	     	</li>
       	     	<li class="jf_li1">
       	    		    <p class="jf_p3">支付时间</p>
       	    		    <p class="jf_p4"></p>
       	     	</li>
       	    	    <li class="jf_li1">
       	    		    <p class="jf_p3">发货时间</p>
       	    		    <p class="jf_p4"></p>
       	     	</li>
       	     	<li class="jf_li1">
       	    		    <p class="jf_p3">收货时间</p>
       	    		    <p class="jf_p4"></p>
       	    	    </li>
       	      	<li class="jf_li1">
       	    		    <p class="jf_p3">订单备注</p>
       	    		    <p class="jf_p4">希望包装的严实一些,不要有破损的情况,谢谢</p>
       	    	    </li>
       	    </ul>
       	    <p class="jf_p5">收货人信息</p>
       	    <ul class="jf_ul2">
       	    	   <li class="jf_li1">
       	    		    <p class="jf_p3">收货人姓名</p>
       	    		    <p class="jf_p4">王敏敏</p>
       	    	    </li>
       	      	<li class="jf_li1">
       	    		    <p class="jf_p3">地址</p>
       	    		    <p class="jf_p4">4643196461647896166</p>
       	       	</li>
       	     	<li class="jf_li1">
       	    		    <p class="jf_p3">手机</p>
       	    		    <p class="jf_p4">15035689556/固定电话:010-12548756</p>
       	     	</li>
       	    </ul>
       	    <p class="jf_p5">物流信息</p>
       	    <ul class="jf_ul3">
       	    	    <li class="jf_li1">
       	    		    <p class="jf_p3">联系人</p>
       	    		    <p class="jf_p4">张小哥</p>
       	    	    </li>
       	      	<li class="jf_li1">
       	    		    <p class="jf_p3">联系方式</p>
       	    		    <p class="jf_p4">13995684562</p>
       	       	</li>
       	    </ul>
            <ul class="jf_ul4">
            	    <li class="jf_li2">
            	    	    <p class="jf_p6 jf_p11">爱果果水果店</p>
            	    	    <p class="jf_p7 jf_p11">规格</p>
            	    	    <p class="jf_p8 jf_p11">单价</p>
            	    	    <p class="jf_p9 jf_p11">数量</p>
            	    	    <p class="jf_p10 jf_p11">金额</p>
            	    </li>
            	    <li class="jf_li3" v-for="item in ab">
            	    	    <div><img v-bind:src="item.img" alt="" /></div>
            	    	    <p class="jf_p12 jf_p13">{{item.name}}</p>
            	    	    <p class="jf_p7 jf_p13">{{item.type}}</p>
            	    	    <p class="jf_p8 jf_p13">{{item.mon}}</p>
            	    	    <p class="jf_p9 jf_p13">{{item.am}}</p>
            	    	    <p class="jf_p10 jf_p13">{{item.soc}}</p>
            	    </li>
            </ul>
            <p class="jf_p14">积分 : <span>500积分</span></p>
            <div class="jf_dd">
               	<p class="jf_ddp1">取消订单</p>
               	<p class="jf_ddp2">立即兑换</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ab:[{img:require('../images/img/l17.png'),name:'云南蒙自石榴 8个装',type:'8个装',mon:'¥569',am:'1',soc:'50积分'},{img:require('../images/img/l17.png'),name:'江西火龙果 6个装',type:'6个装',mon:'¥666',am:'1',soc:'666积分'},{img:require('../images/img/l17.png'),name:'橘生淮南为橘 10个装',type:'10个装',mon:'¥100',am:'1',soc:'100积分'},{img:require('../images/img/l17.png'),name:'橘生淮北为枳 10个装',type:'10个装',mon:'¥10',am:'1',soc:'10积分'}]
    }
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.jfxq{
	width: 1088px;
	border: 1px solid #E7E7E7;
	float: right;
}
.jf_div1{
	width: 100%;
	height: 59px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
}
.jf_div1>p{
	position: absolute;
	display: inline-block;
	height: 59px;
	line-height: 59px;
}
.jf_div1>button{
	position: absolute;
	width: 90px;
	height: 30px;
	border-radius: 5px;
	border: none;
	outline: none;
	top: 14.5px;
}
.jf_p1,.jf_p2{
	font-size: 13.5px;
	color: #333333;
}
.jf_p2>span{
	color: #F78327;
}
.jf_p1{
	left: 20px;
}
.jf_p2{
	left: 488px;
}
.jf_btn1{
	color: #FFFFFF;
	left:845px;
	background: #3D8E43;
}
.jf_btn1>a{
	color: #FFFFFF;
	text-decoration: none;
}
.jf_btn2{
	color: #FFFFFF;
	right: 20px;
	background: #999999;
}
.jf_div2{
	width: calc(100% - 40px);
	padding: 20px;
}
ul{
	list-style: none;
	width: 100%;	
	border: 1px solid #E9E9E9;
}
.jf_ul1,.jf_ul2,.jf_ul3{
	background: #F9F9F9;
}
.jf_ul1{
	height: 274px;
}
.jf_ul2{
	height: 117px;
}
.jf_ul3{
	height: 78px;
}
.jf_li1{
	width: 100%;
	height: 39px;
	position: relative;
}
.jf_li1>p{
	display: inline-block;
	height: 39px;
	line-height: 39px;
	position: absolute;
	font-size: 12px;
	color: #666666;
}
.jf_p3{
	left: 20px;
}
.jf_p4{
	left: 145px;
}
.jf_p5{
	display: inline-block;
	width: calc(100% - 10px);
	padding-left: 10px;
	height: 55px;
	line-height: 55px;
	text-align: left;
	font-size: 13.5px;
	color: #3D8E43;
}
.jf_ul4{
	margin-top: 20px;
	background: #FFFFFF;
}
.jf_p11{
	position: absolute;
	font-size: 12px;
	color: #333333;
	height: 46px;
	line-height: 46px;
}
.jf_p13{
	position: absolute;
	font-size: 10.5px;
	color: #7B7B7B;
}
.jf_ul4>li>p{
	display: inline-block;
}
.jf_li2{
	width: 100%;
	height: 46px;
	background: #F2F2F2;
	position: relative;
}
.jf_p6{
	left: 20px;
}
.jf_p7{
	left: 430px;
}
.jf_p8{
	left: 610px;
}
.jf_p9{
	left: 795px;
}
.jf_p10{
	left: 970px;
}
.jf_p12{
	left: 120px;
}
.jf_li3{
	width: 100%;
	height: 120px;
	position: relative;
	border-bottom: 1px solid #EAEAEA;
	display: flex;
	align-items: center;
}
.jf_li3>div{
	width: 80px;
	height: 80px;
	border: 1px solid #EAEAEA;
	position: absolute;
	left: 20px;
}
.jf_li3>div>img{
	width: 100%;
	height: 100%;
}
.jf_p14{
	display: inline-block;
	width: 100%;
	height: 100px;
	line-height: 100px;
	font-size: 12px;
	color: #767676;
	text-align: right;
}
.jf_p14>span{
	font-size: 15px;
	color: #F85559;
}
.jf_dd{
	width: 100%;
	height: 50px;
	position: relative;
}
.jf_dd>p{
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
.jf_ddp1{
	  background: #939393;
	  right: 195px;
}
.jf_ddp2{
	  background: #F07F26;
	  right: 0;
}
</style>
