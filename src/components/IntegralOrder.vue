<template>
	<div class="IntegralOrder">
		<div class="Int_div2">
			<p class="Int_p1">积分订单</p>
			<p class="Int_p2">当前积分:<span> 240分</span></p>
		</div>
	    <div class="Int_div1">
	    	    <div class="Int_dd1" v-for="(item,q) in aaa">
	    	    	    <div class="Int_ddd1">
	    	    	    	    <p class="Int_p3">订单号:<span>{{item._id}}</span></p>
	    	    	    	    <p class="Int_p4">下单日期:<span>2015.04.09&nbsp;&nbsp;18:06:06</span></p>
	    	    	    	    <p class="Int_p5">订单状态:<span>已完成</span></p>
	    	    	    </div>
	    	    	    <div class="Int_ddd2">
	    	    	    	    <div class="Int_dddd1">
	    	    	    	    	    <div class="Int_ddddd1"><img v-bind:src="item.img" alt="" /></div>
	    	    	    	    	    <p class="Int_p6">{{item.name}}</p>
	    	    	    	    	    <p class="Int_p7">{{item.num}}个装</p>
	    	    	    	    	    <p class="Int_p8">X&nbsp;1</p>
	    	    	    	    </div>
	    	    	    	    <div class="Int_dddd2">
	    	    	    	    	    <p>积分:<span>{{item.score}}</span></p>
	    	    	    	    </div>
	    	    	    	    <div class="Int_dddd3">
	    	    	    	    	    <router-link to="/aa/jfxq">查看详情</router-link>
	    	    	    	    	    <button @click="shanchu(q)">删除订单</button>
	    	    	    	    </div>
	    	    	    </div>
	    	    </div>
	    </div>
	</div>
</template>

<script>
export default {
  methods:{
  	shanchu:function(q){
  		this.aaa.splice(q,1);		
  	}
  },
  data (){
  	return {
  		aaa:[]
  	}
  },
  mounted(){
  	this.$axios.get('/api/interOder').then(function(data){
		    this.aaa=data.data;
		    console.log(this.aaa);
	    }.bind(this));
  }
}

</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.IntegralOrder{
		width: 1088px;
		border: 1px solid #E7E7E7;
		float: right;
	}
	.Int_div2{
		width: calc(100% - 40px);
		padding:0 20px;
		height: 59px;
		border-bottom: 1px solid #E7E7E7;
	}
	.Int_p1,.Int_p2{
		height: 100%;
		line-height: 59px;		
	}
	.Int_p1{
		float: left;
	}
	.Int_p2{
		float: right;
	}
	.Int_p2>span{
		color: #F78327;
	}
	.Int_div1{
		width: calc(100% - 40px);
		padding: 0 20px;
	}
	.Int_dd1{
		width: 100%;
		border: 1px solid #E7E7E7;
		margin-top: 20px;
	}
	.Int_ddd1{
		width: 100%;
		height: 46px;
		background: #F2F2F2;
		position: relative;
	}
	.Int_ddd1>p{
		display: inline-block;
		position: absolute;
		height: 46px;
		line-height: 46px;
	}
	.Int_p3{
		left: 20px;
	}
	.Int_p4{
		left:340px;
	}
	.Int_p5{
		right: 20px;
	}
	.Int_p5>span{
		color: #F78327;
	}
	.Int_ddd2{
		width: 100%;
		height: 120px;
		display: flex;
		justify-content: space-between;
	}
	.Int_ddd2>div{
		height: 100%;
	}
	.Int_dddd1{
		width: 698px;
		display: flex;
		align-items: center;	
		position: relative;
	}
	.Int_dddd2{
		width: 210px;
		border-left: 1px solid #E7E7E7;
		border-right: 1px solid #E7E7E7;	
		display: flex;
		justify-content: center;
		align-items: center;	
	}
	.Int_dddd3{
		width: 138px;
		position: relative;
	}
	.Int_ddddd1{
		width: 80px;
		height: 80px;
		position: absolute;
		left: 20px;
	}
	.Int_ddddd1>img{
		width: 80px;
		height: 80px;
	}
	.Int_dddd1>p{
		position: absolute;
		font-size: 10.5px;
	}
	.Int_p6{
		left: 120px;
		color: #666666;
	}
	.Int_p7{
		left: 390px;
		color: #999999;
	}
	.Int_p8{
		left: 535px;
		color: #666666;
	}
	.Int_dddd2>p{
		font-size: 10.5px;
		color: #666666;
	}
	.Int_dddd3>a{
		font-size: 10.5px;
		color: #4C9B50;
		position:absolute;
		top: 30px;
		right: 30px;
	}
	.Int_dddd3>button{
		width: 90px;
		height: 30px;
		border-radius: 5px;
		background: #F78327;
		outline: none;
		border: none;
		color: #FFFFFF;
		top: 60px;
		right: 20px;
		position: absolute;
	}
	.Int_dd1:last-child{
		margin-bottom: 40px;
	}
</style>