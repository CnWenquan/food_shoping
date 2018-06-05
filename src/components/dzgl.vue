<template>
	<div class="dzgl">
	    <div class="dz_div1">
	        <p class="dz_p1">地址管理</p>
	        <p class="dz_p2"><router-link to="./tjdz">添加新地址</router-link></p>
	        
	    </div>
	    <div class="dz_div2">
	    	    <ul class="dz_ul1">
	    	    	    <li class="dz_li1">
	    	    	    	    <p class="dz_p3">收货人</p>
	    	    	    	    <p class="dz_p4">所在区域</p>
	    	    	    	    <p class="dz_p5">街道地址</p>
	    	    	    	    <p class="dz_p6">联系电话</p>
	    	    	    	    <p class="dz_p7">备注</p>
	    	    	    	    <p class="dz_p8">操作</p>
	    	    	    </li>
	    	    	    <li class="dz_li2" v-for="(item,aa) in dz">
	    	    	    	    <p class="dz_p9">{{item.name}}</p>
	    	    	    	    <p class="dz_p10">
	    	    	    	    	    <span>{{item.sheng}}</span>
	    	    	    	    	    <span>{{item.shi}}</span>
	    	    	    	    	    <span>{{item.xian}}</span>
	    	    	    	    </p>
	    	    	    	    <p class="dz_p11">{{item.adres}}</p>
	    	    	    	    <p class="dz_p12">{{item.tel1}}</p>
	    	    	    	    <p class="dz_p13">家里的地址</p>
	    	    	    	    <p class="dz_p14">
	    	    	    	    	    <span class="dz_s1" @click="dz_btn1(aa)">设为默认地址&nbsp;</span>
	    	    	    	    	    <span class="dz_s2">修改&nbsp;</span>
	    	    	    	    	    <span class="dz_s3" @click="dz_btn2(aa)">删除</span>
	    	    	    	    </p>
	    	    	    </li>
	    	    </ul>	    	    
	    </div>
	    <div class="dz_div3">
	    	     <img src="../images/icon/pencil.png" alt="" />
	    	     <p class="dz_d_p1">暂无收货地址,请点击</p>
	    	     <p class="dz_d_p2"><router-link to="./tjdz">添加新地址</router-link></p>
	    </div>
	</div>
</template>
<script>	
export default {
  data () {
    return {
    	    dz:[],
    }
  },
  mounted(){
//	   $('.dz_s1').eq(0).hide();
  	   console.log($('.dz_s1').eq(0).text());
	    this.$axios.get('/api/dzgl').then(function(data){
		    this.dz=data.data;
		    if(this.dz.length==0){
	  	   	    $('.dz_div2').hide();
	  	   	    $('.dz_div3').show();
	  	    }else{
	  	   	    $('.dz_div2').show();
	  	   	    $('.dz_div3').hide();
	  	    }
	    }.bind(this));
  },
  methods:{
    		  		
  	dz_btn1: function(aa){
		this.dz.unshift(this.dz[aa]);
		this.dz.splice(aa+1,1);
  		$(aa.target).hide();  		
		$('.dz_s1').show();
		$('.dz_s1').eq(0).hide();
  	},
  	dz_btn2: function(aa){
        var id = this.dz[aa]._id;
        console.log(id);
		this.$axios.get('/api/deldzgl?id='+id).then(function(data){	
			console.log(data.data);
			this.dz.splice(aa,1);
		    if(this.dz.length==0){
	  	   	    $('.dz_div2').hide();
	  	   	    $('.dz_div3').show();
	  	    }else{
	  	   	    $('.dz_div2').show();
	  	   	    $('.dz_div3').hide();
	  	    }
	    }.bind(this));
  	}
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.dzgl{
	width: 1086px;
	min-height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.dz_div1{
	width: 100%;
	height: 59px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
}
.dz_div1>p{
	display: inline-block;
	position: absolute;
}
.dz_p1{
	top: 0;
	left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;	
	color: #313232;
}
.dz_p2{
	width: 90px;
	height: 30px;
	line-height: 30px;
	top: 14.5px;
	right: 20px;
	border-radius: 5px;
	background: #3D8E43;
}
.dz_p2>a{
	color: #FFFFFF;
	font-size: 14px;
	text-decoration: none;	
}
.dz_div2{
	width: calc(100% - 40px);
	padding: 20px;
}
ul{
	list-style: none;
}
.dz_ul1{
	width: 100%;
	border: 1px solid #E7E7E7;
}
.dz_li1{
	width: 100%;
	height: 44px;
	background: #F2F2F2;
	position: relative;
}
.dz_li1>p{
	display: inline-block;
	font-size: 15.46px;
	color: #333333;
	height: 44px;
	line-height: 44px;
	position: absolute;
	top: 0;
}
.dz_p3{
	left: 30px;
}
.dz_p4{
	left: 150px;
}
.dz_p5{
	left: 380px;
}
.dz_p6{
	left: 630px;
}
.dz_p7{
	left: 775px;
}
.dz_p8{
	left: 920px;
}
.dz_li2{
	width: 100%;
	height: 44px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
}
.dz_li2>p{
	position: absolute;
	display: inline-block;
	height: 44px;
	line-height: 44px;
	font-size: 14px;
	color: #666666;
	top: 0;
}
.dz_p9{
	left: 30px;
}
.dz_p10{
	left: 120px;
}
.dz_p11{
	width: 280px;
	left: 285px;
}
.dz_p12{
	left: 610px;
}
.dz_p13{
	left: 735px;
}
.dz_p14{
	left: 855px;
	width: 175px;
}
.dz_p14>span{
	cursor: pointer;
}
.dz_s1{
	color: #F78327;
    border-right: 1px solid #999999;
}
.dz_s2{
	color: #5AA25C;
	border-right: 1px solid #999999;
}
.dz_s3{
	color:#5AA25C;
}
.dz_div3{
	width: 100%;
	height: 565px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.dz_div3>img{
	width: 31px;
	height: 31px;
	margin-right: 20px;
}
.dz_d_p1{
	font-size: 18px;
	color: #999999;
	margin-right: 10px;
}
.dz_d_p2{
	display: inline-block;
	width: 90px;
	height: 30px;
	line-height: 30px;
	border-radius: 5px;
	background: #3D8E43;
}
.dz_d_p2>a{
	font-size: 14px;
	color: #FFFFFF;
	text-decoration: none;	
}
</style>