<template>
	<div class="wdsc">
		<p class="wdsc_p1">我的收藏</p>
		<ul class="wdsc_ul1">
			<li class="wdsc_li1" v-for="(itemn,a) in sc">
				<div><img v-bind:src="itemn.img" alt="" /></div>
				<p class="wdsc_p2">{{itemn.p1}}</p>
				<p class="wdsc_p3">{{itemn.p2}}</p>
				<p class="wdsc_p4">{{itemn.p3}}&nbsp;&nbsp;&nbsp;<span>{{itemn.s1}}</span></p>
				<p class="wdsc_p5">{{itemn.p4}}</p>
				<img src="../images/icon/gouwuche.png" alt="" class="wdsc_gwc"/>
			</li>	
		</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
      sc:[{img:require('../images/img/l9.png'),p1:'新西兰佳沛黄金奇异果',p2:'花蜜般的甘甜百吃不厌',p3:'￥18.80',s1:'¥10.00',p4:'已失效'},{img:require('../images/img/l18.png'),p1:'新西兰佳沛黄金奇异果',p2:'花蜜般的甘甜百吃不厌',p3:'￥28.80',s1:'¥20.00',p4:'取消收藏'},{img:require('../images/img/l19.png'),p1:'新西兰佳沛黄金奇异果',p2:'花蜜般的甘甜百吃不厌',p3:'￥38.80',s1:'¥30.00',p4:'取消收藏'}]
    }
  },
  mounted(){
  	for(var i=0;i<this.sc.length;i++){
  		if($('.wdsc_p5').eq(i).text()=='已失效'){
  			$('.wdsc_p5').eq(i).css('background','#999999');
  		}
  		
  	}
}
}

</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.wdsc{
	width: 1086px;
	min-height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.wdsc_p1{
	width: calc(100 - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #323333;
	border-bottom: 1px solid #E7E7E7;
	text-align: left;
}
ul{
	list-style: none;
}
.wdsc_ul1{
	width: 100%;
	padding-bottom: 40px;
	display: flex;
	flex-wrap: wrap;	
}
.wdsc_li1{
	width: 301px;
	height: 477px;
	border: 1px solid #F2F2F2;
	margin-top: 40px;
	margin-left: 40px;
	position: relative;
}
.wdsc_li1:hover{
	border-color: #3F9444;
}
.wdsc_li1>p{
	position: absolute;
	display: inline-block;
}
.wdsc_li1>div{
	width: calc(100% - 40px);
	height: 253px;
	padding: 0 20px;
	position: absolute;
	top: 40px;
	left: 0;	
}
.wdsc_li1>div>img{
	width: 100%;
	height: 100%;
}
.wdsc_p2{
	top: 315px;
	left: 20px;
	font-size: 16px;
	color: #707070;
}
.wdsc_p3{
	top: 345px;
	left: 20px;
	font-size: 14px;
	color: #949494;
}
.wdsc_p4{
	top: 378px;
	left: 20px;
	font-size: 18px;
	color: #FF898B;
}
.wdsc_p4>span{
	font-size: 15px;
	color: #949494;
	text-decoration:line-through;
}
.wdsc_p5{
	bottom: 20px;
	left: 80px;
	font-size: 16px;
	color: #FFFFFF;
	width: 150px;
	height: 36px;
	line-height: 36px;
	background: #3E9444;
	border-radius: 36px;
	cursor: pointer;
}
.wdsc_gwc{
	position: absolute;
	width: 34px;
	height: 30px;
	top: 375px;
	right: 20px;
	cursor: pointer;
}
</style>
