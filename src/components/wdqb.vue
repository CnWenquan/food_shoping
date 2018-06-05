<template>
	<div class="wdqb">
		<p class="wd_p1">账户余额&nbsp;:&nbsp;<span>¥20.0</span></p>
		<div class="wd_div1 box">
			<p class="wd_p2">请选择充值金额&nbsp;:</p>
			<ul class="wd_ul1">
				<li v-for="item in money">{{item.m}}</li>
			</ul>
			<p class="wd_p3">充值有礼</p>
			<ul class="wd_ul2">
				<li v-for="items in gift">
					<p class="wd_p4">充{{items.m}}送&nbsp;:</p>
					<div class="wd_dd1">
						<img v-bind:src="items.img" alt="" />
					</div>
					<p class="wd_p5">{{items.name}}</p>
					<p class="wd_p6">价值&nbsp;:&nbsp;<span>{{items.value}}</span></p>
				</li>
			</ul>
			<p class="wd_p7">立即充值</p>
		</div>
	</div>
</template>
<script>
export default {	
   data () {
        return {
           money:[{m:'10元'},{m:'20元'},{m:'50元'},{m:'100元'},{m:'500元'},{m:'1000元'},{m:'5000元'}],
           gift:[{m:'500元',img:require('../images/img/l31.png'),name:'新疆哈密瓜25kg',value:'500'},{m:'1000元',img:require('../images/img/l31.png'),name:'新疆哈密瓜25kg',value:'500'}]
        }
    }
}   
</script>

<style>
*{

	padding: 0;
	margin: 0;
}
.box::after{
content:"";
display:block;
height:0;
visibility:hidden;
clear:both;
}	
.wdqb{
	width: 1086px;
	border: 1px solid #E7E7E7;
	float: right;
}
.wd_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	border-bottom: 1px solid #E7E7E7;
	font-size: 18px;
	color: #212121;
	text-align: left;
}
.wd_p1>span{
	color: #F05F3E;
}
.wd_div1{
	width: calc(100% - 80px);
	padding: 40px;
}
.wd_p2{
	height: 20px;
	line-height: 20px;
	font-size: 18px;
	color: #262626;
	text-align: left;
}
ul{
	list-style: none;
}
.wd_ul1{
	width: 100%;
	height: 74px;
	display: flex;
	align-items: center;
}
.wd_ul1>li{
	width: 113px;
	height: 32px;
	border: 1px solid #DFDFDF;
	line-height: 32px;
	font-size: 18px;
	color: #474747;
	margin-right: 40px;
	text-align: center;
}
.wd_ul1>li:hover{
	border-color: #A1CC8C;
	background: #F3FFF3;
	cursor: pointer;
}
.active{
	border-color: #A1CC8C;
	background: #F3FFF3;
}
.wd_p3{
	height: 58px;
	line-height: 58px;
	text-align: left;
	font-size: 18px;
	color: #F88A2D;
}
.wd_ul2{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.wd_ul2>li{
	width: 335px;
	height: 169px;
	padding: 20px;
	margin-right: 40px;
	margin-bottom: 40px;
	border: 1px solid #F2F2F2;
	position: relative;
}
.wd_ul2>li>p{
	display: inline-block;
	position: absolute;
	font-size: 18px;
	color: #383838;
	text-align: left;
}
.wd_p4{
	width: 100%;
	height: 20px;
	line-height: 20px;
	left: 20px;
	top: 20px;
}
.wd_dd1{
	width: 155px;
	height: 155px;
	position: absolute;
	left: 20px;
	bottom: 0;
	overflow: hidden;	
}
.wd_dd1>img{
	width: 100%;
	height: 100%;
}
.wd_p5{
	 width: 160px;
	 left: 190px;
	 top:80px;	
	 overflow: hidden;
     text-overflow:ellipsis;
     white-space: nowrap; 
}
.wd_p6{
	width: 160px;
	top: 120px;
	left: 190px;
	overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap; 
}
.wd_p7{
	display: inline-block;
	width: 150px;
	height: 50px;
	line-height: 50px;
	background: #F78327;
	font-size: 18px;
	color: #FFFFFF;
	border-radius: 5px;
	float: left;
}
</style>