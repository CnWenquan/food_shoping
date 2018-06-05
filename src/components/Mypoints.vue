<template>
	<div class="integral">
	    <p class="lin_p1">我的积分</p>
	    <p class="lin_p2">当前积分:<span>240分</span></p>
	    <div class="lin_d1">
	    	    <ul class="lin_ul1">
	    	    	    <li class="lin_li1">
	    	    	    	    <p class="lin_p3">积分日期</p>
	    	    	    	    <p class="lin_p4">变动</p>
	    	    	    	    <p class="lin_p5">来源</p>
	    	    	    </li>
	    	    	    <li class="lin_li2" v-for="item in scor">
	    	    	    	    <p class="lin_p6">{{item.t}}</p>
	    	    	    	    <p class="lin_p7">{{item.change}}</p>
	    	    	    	    <p class="lin_p8">{{item.find}}</p>
	    	    	    </li>
	    	    </ul>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'Mypoints',
  methods:{
  	
  },
  data (){
  	return {
  		scor:[{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'},{t:'2015-04-05 16:20:10                                            ',change:'+100',find:'消费赠送'}]
  	}
  }
}

</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.integral{
		width: 1088px;
		border: 1px solid #E7E7E7;
		float: right;
	}
	.lin_p1{
		border-bottom: 1px solid #E7E7E7;
		font-size: 13.5px;
		color: #333333;
	}
	.lin_p1,.lin_p2{
		width: calc(100% - 20px);
		height: 59px;
		line-height: 59px;
		padding-left: 20px;
		text-align: left;		
	}
	.lin_p2{
		font-size: 12px;
		color: #333333;
	}
	.lin_p2>span{
		font-size: 13.5px;
		color: #F78327;
	}
	.lin_d1{
		width: calc(100% - 40px);
		padding: 0 20px;
	}
	.lin_ul1{
		width: 100%;
		border: 1px solid #E7E7E7;
		margin-bottom: 60px;
		list-style: none;
	}
	.lin_ul1 li {
		width: 100%;
		position: relative;
	}
	.lin_ul1 li p{
		position: absolute;
		height: 100%;
		/*border-bottom: 1px solid #E7E7E7;*/
	}
	.lin_li1{
		height: 46px;
		background: #F2F2F2;
	}
	.lin_li2{
		height: 50px;
		border-bottom: 1px solid #E7E7E7;
	}
	.lin_li1>p{
		font-size: 12px;
		color: #333333;
		line-height: 46px;
	}
	.lin_li2>p{
		line-height: 50px;
		font-size: 10.5px;
		color: #666666;
	}
	.lin_p3,.lin_p6{
		width: 170px;
		top: 0;
		left: 70px;
	}
	.lin_p4,.lin_p7{
		width: 50px;
		top: 0;
		left: 525px;
	}
	.lin_p5,.lin_p8{
		width: 110px;
		top: 0;
		left: 885px;
	}
</style>