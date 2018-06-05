<template>
	<div>
		<ul class="add-ul1">
			<li class="add_li1">
	    	    	    	    <p class="add_p3">收货人</p>
	    	    	    	    <p class="add_p4">所在区域</p>
	    	    	    	    <p class="add_p5">街道地址</p>
	    	    	    	    <p class="add_p6">联系电话</p>
	    	    	    	    <p class="add_p7">备注</p>
	    	    	    	    <p class="add_p8">操作</p>
	    	    	    </li>
	    	    	    <li class="add_li2" v-for="(item,aa) in dz">
	    	    	    	    <p class="add_p9">{{item.name}}</p>
	    	    	    	    <p class="add_p10">
	    	    	    	    	    <span>{{item.sheng}}</span>
	    	    	    	    	    <span>{{item.shi}}</span>
	    	    	    	    	    <span>{{item.xian}}</span>
	    	    	    	    </p>
	    	    	    	    <p class="add_p11">{{item.adres}}</p>
	    	    	    	    <p class="add_p12">{{item.tel1}}</p>
	    	    	    	    <p class="add_p13">家里的地址</p>
	    	    	    	    <p class="add_p14">
	    	    	    	    	    <span class="add_s1" @click="add_btn1(aa)">设为默认地址&nbsp;</span>
	    	    	    	    	    <span class="add_s2">修改&nbsp;</span>
	    	    	    	    	    <span class="add_s3" @click="add_btn2(aa)">删除</span>
	    	    	    	    </p>
	    	    	    </li>  
		</ul>
	</div>
</template>

<script>
export default {
	data() {
	    return {
             dz:[]
	    }
    },
    methods:{
    	    add_btn1:function(aa){
    	    	    this.dz.unshift(this.dz[aa]);
		    this.dz.splice(aa+1,1);
  		    $(aa.target).hide();  		
		    $('.dz_s1').show();
    	    },
    	    add_btn2:function(aa){
    	    		var id = this.dz[aa]._id;
    	    	    this.$axios.get('/api/deldzgl?id='+id).then(function(data){ 
    	    	    	      this.dz.splice(aa,1);
    	    	    }.bind(this));
    	    }
    },
    mounted(){
    	    this.$axios.get('/api/dzgl').then(function(data){   
    	      	this.dz=data.data;
    	      	console.log(data.data);
    	    }.bind(this));
    	    console.log(this.dz);
    }
}
</script>

<style scoped>
	ul{
	list-style: none;
	border: none;
}
.add-ul1{
	width: 1000px;
	border: 1px solid #E7E7E7;
}
.add_li1{
	width: 100%;
	height: 44px;
	background: #F2F2F2;
	position: relative;
}
.add_li1>p{
	display: inline-block;
	font-size: 15.46px;
	color: #333333;
	height: 44px;
	line-height: 44px;
	position: absolute;
	top: 0;
}
.add_p3{
	left: 20px;
}
.add_p4{
	left: 107px;
}
.add_p5{
	left: 325px;
}
.add_p6{
	left: 577px;
}
.add_p7{
	left: 707px;
}
.add_p8{
	left: 877px;
}
.add_li2{
	width: 100%;
	height: 44px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
}
.add_li2>p{
	position: absolute;
	display: inline-block;
	height: 44px;
	line-height: 44px;
	font-size: 14px;
	color: #666666;
	top: 0;
}
.add_p9{
	left: 20px;
}
.add_p10{
	left: 97px;
}
.add_p11{
	width: 280px;
	left: 281px;
}
.add_p12{
	left: 567px;
}
.add_p13{
	left: 692px;
}
.add_p14{
	left: 812px;
	width: 175px;
}
.add_p14>span{
	cursor: pointer;
}
.add_s1{
	color: #F78327;
    border-right: 1px solid #999999;
}
.add_s2{
	color: #5AA25C;
	border-right: 1px solid #999999;
}
.add_s3{
	color:#5AA25C;
}
</style>