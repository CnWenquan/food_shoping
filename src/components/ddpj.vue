<template>
<div class="ddpj">
    <p class="ddpj_p1">订单评价</p>
    <div class="ddpj_div1">
    	    <div class="ddpj_d1" v-for="iii in pj">
    	    	    <div class="ddpj_d2"><img v-bind:src="iii.img" alt="" /></div>
    	    	    <p class="ddpj_p2">{{iii.p1}}</p>
    	    	    <p class="ddpj_p3 pp">
    	    	       	商品评分&nbsp;&nbsp;
    	    	       	<img src="../images/icon/xingxing1.png" alt="" />
    	    	       	<img src="../images/icon/xingxing1.png" alt="" />
    	    	       	<img src="../images/icon/xingxing1.png" alt="" />
    	    	       	<img src="../images/icon/xingxing3.png" alt="" />
    	    	       	<img src="../images/icon/xingxing3.png" alt="" />
    	    	    </p>
    	    	    <p class="ddpj_p4">评价商品</p>
    	    	    <p class="ddpj_p5">晒图片</p>
    	    	    <textarea placeholder="商品评价，最少10个字，最多50个字"></textarea>
    	    	    <div class="ddpj_d3">
    	    	    	    <div class="ddpj_int">
    	    	    	    	    <input type="file" class="ddpj_int opac" multiple="multiple">
    	    	    	    </div>
    	    	    	    <div class="ddpj_int">
    	    	    	    	    <input type="file" class="ddpj_int opac" multiple="multiple">
    	    	    	    </div>
    	    	    	    <div class="ddpj_int">
    	    	    	    	    <input type="file" class="ddpj_int opac" multiple="multiple">
    	    	    	    </div>
    	    	    	    <div class="ddpj_int">
    	    	    	    	    <input type="file" class="ddpj_int opac" multiple="multiple">
    	    	    	    </div>   
    	    	    </div>
    	    	    
    	    </div>
    </div>
    <div class="ddpj_div2">
    	    <p class="ddpj_dp1 pp">
    	    	    服务态度&nbsp;&nbsp;
    	    	    <img src="../images/icon/xingxing1.png" alt="" />
    	    	    <img src="../images/icon/xingxing1.png" alt="" />
    	    	    <img src="../images/icon/xingxing1.png" alt="" />
    	    	    <img src="../images/icon/xingxing3.png" alt="" />
    	    	    <img src="../images/icon/xingxing3.png" alt="" />
    	    </p>
    	    <p class="ddpj_dp2 pp">
    	    	    描述相符&nbsp;&nbsp;
    	    	    <img src="../images/icon/xingxing1.png" alt="" />
    	    	    <img src="../images/icon/xingxing1.png" alt="" />
    	    	    <img src="../images/icon/xingxing1.png" alt="" />
    	    	    <img src="../images/icon/xingxing3.png" alt="" />
    	    	    <img src="../images/icon/xingxing3.png" alt="" />
    	    </p>
    </div>
    <button>提交评价</button>   
</div>
</template>
<script>
export default {
data () {
    return {
   	   pj:[{img:require('../images/img/l30.png'),p1:'珍享南非进口红心葡萄柚西柚柚子'},{img:require('../images/img/l30.png'),p1:'珍享南非进口红心葡萄柚西柚柚子'}]
   }
},
mounted(){
	
},
methods:{
	
}
}	
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
.ddpj{
	width: 1086px;
	border: 1px solid #E7E7E7;
	min-height: 625px;
	float: right;
}
.ddpj_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #323333;
	text-align: left;
	border-bottom: 1px solid #E7E7E7;
}
.ddpj>button{
	width: 150px;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
	background: #F78327;
	font-size: 24px;
	color: #FFFFFF;
	border: none;
	outline: none;
	margin: 40px 0;
}
.ddpj_div1{
	width: calc(100% - 40px);
	padding: 20px;
	border-bottom: 1px solid #E7E7E7;
}
.ddpj_d1{
	width: 100%;
	height: 335px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
	margin-bottom: 20px;
}
.ddpj_d2{
	width: 260px;
	height: 260px;
	border: 1px solid #E1E1E1;
	position: absolute;
	top: 0;
	left: 0;
}
.ddpj_d2>img{
	width: 100%;
	height: 100%;
}
.ddpj_d1>p{
	font-size: 16px;
	color: #666666;
	position: absolute;
}
.ddpj_p2{
	left: 0;
	top: 280px;
}
.ddpj_p3{
	left: 360px;
	top: 15px;
}
.ddpj_p4{
	left: 360px;
	top: 85px;
}
.ddpj_p5{
	left: 375px;
	top: 240px;
}
textarea{
	width: 577px;
	height: 116px;
	padding: 10px;
	position: absolute;
	font-size: 14px;
	line-height: 20px;
	color: #333333;
	top: 85px;
	right: 0;
	outline: none;
	border: 1px solid #DEDEDE; 
}
.ddpj_div2{
	width: 100%;
	height: 110px;
	position: relative;
}
.ddpj_dp1{
	position: absolute;
	font-size: 16px;
	color: #707070;
	top: 55px;
	left: 310px;
}
.ddpj_dp2{
	position: absolute;
	font-size: 16px;
	color: #707070;
	top: 55px;
	left: 585px;
}
.ddpj_d1:last-child{
	border: none;
}
.pp>img{
	width: 20px;
	height: 20px;
	margin-left: 5px;
}
/*上传图片*/
.ddpj_d3{
	width: 300px;
	height: 70px;
	position: absolute;
	top: 240px;
	left: 445px;
	display: flex;
	justify-content: space-around;
	align-items: center;	
}
.ddpj_int{
	width: 60px;
	height: 60px;
	background: url(../images/icon/dingdanpj.png);
	background-size: 100% 100%;
	cursor: pointer;
}
.opac{
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
    opacity: 0;
}






</style>