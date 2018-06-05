<template>
	<div class="shopguanli1">
		<ul v-for="(item,index) in goods" class="maincar_ul1">
			<li>
				<p>{{item.name}}</p>
				<p>规格</p>
				<p>单价</p>
				<p>操作</p>
			</li>
			<li v-for="(items,index1) in item.aa" id="maincar_shangpin1">
				<p><img v-bind:src="items.src" alt=""/><span>{{items.aName}}</span></p>
				<p>{{items.size}}</p>
				<p>¥{{items.xPrice}}</p>
				<p class="deltext">删除</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			goods:[]
		}
	},
	mounted(){
		this.$axios.get('/api/thing').then(function(data){
			console.log(222);
			this.goods = data.data;
			console.log(this.goods);
		}.bind(this));
		},
	methods:{
//		del1:function(index,index1){
//			
//		}
	}
}
</script>

<style>
	.shopguanli1{
		width: 1000px;
		margin: auto;
		text-align: center;
	}
	.maincar_ul1{
	width: 100%;
	border: 1px solid #e4e4e4;
	overflow: hidden;
	margin-bottom: 20px;
}
.maincar_ul1>li:nth-of-type(1){
	overflow: hidden;
	background: #f2f2f2;
}
.maincar_ul1>li>*{
	float: left;
}
.maincar_ul1 li>span{
	display: inline-block;
	width: 16px;
	height: 16px;
	border: 1px solid #e4e4e4;
	margin: 13px 20px;
	background: #fff;
}
.shopguanli1 p{
	display: inline-block;
}
.maincar_ul1 li>p:nth-of-type(1){
	width: 340px;
	height: 47px;
	line-height: 46px;
}
.maincar_ul1 li p:nth-of-type(1) img{
	width: 80px;
	height: 79px;
}
.maincar_ul1 li>p:nth-of-type(2),.maincar_ul1 li>p:nth-of-type(3),.maincar_ul1 li>p:nth-of-type(4),.maincar_ul1 li>p:nth-of-type(5){
	text-align: center;
	width: 180px;
	height: 47px;
	line-height: 46px;
}
.maincar_ul1 li>p:nth-of-type(6){
	text-align: center;
	width: 160px;
	height: 47px;
	line-height: 46px;
	cursor: pointer;
}
#maincar_shangpin1{
	height: 120px;
	border-bottom: 1px solid #e4e4e4;
}
#maincar_shangpin1>span{
	margin-top: 50px;
}
#maincar_shangpin1>p:nth-of-type(1){
	margin-top: 20px;
	height: 100px;
}
#maincar_shangpin1>p:nth-of-type(1) span{
	display: inline-block;
	height: 80px;
	line-height: 80px;
	margin-left: 20px;
	font-size: 14px;
	color: #666;
}
#maincar_shangpin1>p:nth-of-type(2),#maincar_shangpin1>p:nth-of-type(3),#maincar_shangpin1>p:nth-of-type(4),#maincar_shangpin1>p:nth-of-type(5){
	text-align: center;
	width: 180px;
	height: 120px;
	line-height: 120px;
}
#maincar_shangpin1>p:nth-of-type(5){
	font-size: 14px;
	color: #666;
}
#maincar_shangpin1>p:nth-of-type(2),#maincar_shangpin1>p:nth-of-type(3){
	font-size: 14px;
	color: #666;
}
#maincar_shangpin1>p:nth-of-type(6){
	text-align: center;
	width: 160px;
	height: 120px;
	line-height: 120px;
	font-size: 14px;
	color: #498e3d;
}
#maincar_shangpin1>p:nth-of-type(4)>input{
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
#maincar_shangpin1>p:nth-of-type(4) span{
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
#maincar_shangpin1>p:nth-of-type(4) span:nth-of-type(1){
	margin-right: -5px;
}
#maincar_shangpin1>p:nth-of-type(4) span:nth-of-type(2){
	margin-left: -5px;
}
.deltext{
	color: #498E3D;
}
</style>