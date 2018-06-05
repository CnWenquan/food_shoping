<template>
	<div class="zjll">
		<p class="zj_p1">最近浏览</p>
		<ul class="zj_ul1">
			<li class="zj_li1" v-for="(itemm,a) in sc">
				<div><img v-bind:src="itemm.img" alt="" /></div>
				<p class="zj_p2">{{itemm.p1}}</p>
				<p class="zj_p3">{{itemm.p2}}</p>
				<p class="zj_p4">{{itemm.p3}}&nbsp;&nbsp;&nbsp;<span>{{itemm.s1}}</span></p>
				<img src="../images/icon/gouwuche.png" alt="" class="zj_gwc"/>
				<img src="../images/icon/wrong.png" alt="" class="zj_img" @click="zj_btn(a)"/>
			</li>	
		</ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
      sc:[{img:require('../images/img/l9.png'),p1:'新西兰佳沛黄金奇异果',p2:'果肉绵密、花蜜般的甘甜百吃不厌',p3:'￥18.80',s1:'¥10.00',p4:'已失效'},{img:require('../images/img/l18.png'),p1:'新西兰佳沛黄金奇异果',p2:'果肉绵密、花蜜般的甘甜百吃不厌',p3:'￥28.80',s1:'¥20.00',p4:'取消收藏'},{img:require('../images/img/l19.png'),p1:'新西兰佳沛黄金奇异果',p2:'果肉绵密、花蜜般的甘甜百吃不厌',p3:'￥38.80',s1:'¥30.00',p4:'取消收藏'},{img:require('../images/img/l10.png'),p1:'新西兰佳沛黄金奇异果',p2:'果肉绵密、花蜜般的甘甜百吃不厌',p3:'￥38.80',s1:'¥30.00',p4:'取消收藏'},{img:require('../images/img/l9.png'),p1:'新西兰佳沛黄金奇异果',p2:'果肉绵密、花蜜般的甘甜百吃不厌',p3:'￥18.80',s1:'¥10.00',p4:'已失效'},{img:require('../images/img/l11.png'),p1:'新西兰佳沛黄金奇异果',p2:'果肉绵密、花蜜般的甘甜百吃不厌',p3:'￥28.80',s1:'¥20.00',p4:'取消收藏'}]
    }
  },
  methods:{
  	zj_btn:function(a){
  		this.sc.splice(a,1);
  	}
  } 	
}

</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.zjll{
	width: 1086px;
	min-height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.zj_p1{
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
.zj_ul1{
	width: 100%;
	padding-bottom: 40px;
	display: flex;
	flex-wrap: wrap;	
}
.zj_li1{
	width: 301px;
	height: 433px;
	border: 1px solid #F2F2F2;
	margin-top: 40px;
	margin-left: 40px;
	position: relative;
}
.zj_li1:hover{
	border-color: #3F9444;
}
.zj_li1>p{
	position: absolute;
	display: inline-block;
}
.zj_li1>div{
	width: calc(100% - 40px);
	height: 253px;
	padding: 0 20px;
	position: absolute;
	top: 40px;
	left: 0;	
}
.zj_li1>div>img{
	width: 100%;
	height: 100%;
}
.zj_p2{
	top: 315px;
	left: 20px;
	font-size: 16px;
	color: #707070;
}
.zj_p3{
	top: 345px;
	left: 20px;
	font-size: 14px;
	color: #949494;
}
.zj_p4{
	top: 378px;
	left: 20px;
	font-size: 20px;
	color: #FF575C;
}
.zj_p4>span{
	font-size: 15px;
	color: #949494;
	text-decoration:line-through;
}
.zj_gwc{
	position: absolute;
	width: 34px;
	height: 30px;
	top: 375px;
	right: 20px;
	cursor: pointer;
}
.zj_img{
	width: 30px;
	height: 30px;
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
}
</style>
