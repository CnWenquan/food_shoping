<template>
	<div class="wdxx">
		<p class="wd_p1">我的消息</p>
		<div class="wdxx_div1">
			<ul class="wdxx_ul1">
				<li class="wdxx_li1">
					<p>标题</p>
					<p>发送时间</p>
					<p>状态</p>
					<p>操作</p>
				</li>
				<li class="wdxx_li2" v-for="(itemss,n) in msge">
					<p>{{itemss.title}}                                          </p>
					<p>{{itemss.t}}</p>
					<p>未查看</p>
					<p class="wdxx_lp1">
						<span @click="check()"><router-link to="/aa/xxxq">查看</router-link>&nbsp;</span>
						<span></span>
						<span @click="detate(n)">&nbsp;删除</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msge:[{title:'您的货物已发货您的货物已发货您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:01'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:02'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:03'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:04'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:05'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:06'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:07'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:08'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:09'},{title:'您的货物已发货您的货物已发货您的货物已发货',t:'2015年9月23日15:25:10'}]
    }
  },
  methods:{
  	check:function(){
  		console.log(1);
  	},
  	detate:function(n){
  		this.msge.splice(n,1);
  	}
  },
}

</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
ul{
	list-style: none;
}
.wdxx{
	width: 1086px;
	min-height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.wd_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	text-align: left;
	font-size: 18px;
	color: #606060;
	border-bottom: 1px solid #E7E7E7;
}
.wdxx_div1{
	width: calc(100% - 40px);
	padding: 20px;
}
.wdxx_ul1{
	width: 100%;
	border: 1px solid #E7E7E7;
}
.wdxx_li1{
	width: 100%;
	height: 46px;
	background: #F2F2F2;
	position: relative;
}
.wdxx_li1>p{
	display: inline-block;
	position: absolute;
	font-size: 18px;
	color: #353535;
	height: 46px;
	line-height: 46px;
	top: 0;
}
.wdxx_li1>p:nth-child(1){
	left: 185px;
}
.wdxx_li1>p:nth-child(2){
	left: 600px;
}
.wdxx_li1>p:nth-child(3){
	left: 805px;
}
.wdxx_li1>p:nth-child(4){
	left: 940px;
}

/**/
.wdxx_li2{
	width: 100%;
	height: 50px;
	border-bottom: 1px solid #E7E7E7;
	position: relative;
}
.wdxx_li2>p{
	position: absolute;
	height: 50px;
	font-size: 14px;
	line-height: 50px;
}
.wdxx_li2>p:nth-child(1){
	left: 60px;
	color: #6F6F6F;
	width: 310px;
	white-space: nowrap;  
    overflow: hidden;  
    text-overflow: ellipsis;
	
}
.wdxx_li2>p:nth-child(2){
	left: 550px;
	color: #6F6F6F;
}
.wdxx_li2>p:nth-child(3){
	left: 800px;
	color: #666666;
}
.wdxx_li2>p:nth-child(4){
	left: 928px;
	color: #3E9444;
	width: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.wdxx_li2>p:nth-child(4) span a{
	color: #3E9444;
    font-size: 14px;
    text-decoration: none;
}
.wdxx_lp1>span:nth-child(2){
	display: inline-block;
	height: 16px;
	width: 2px;
	background: #ABADAB;
}
.wdxx_lp1>span{
	cursor: pointer;
}
</style>
