<template>
	<div>
		<div class="content-fl">
			<p class="dh-p2">您的当前位置 : <span>首页</span> > <span>全部商品</span> > <span>苹果</span> > <span>阿克苏</span> </p>

			<div class="px">
				<div class="btn-div2">
					<button>评分最高</button>
					<select name="">
						<option value="">价格</option>
						<option value="">人气</option>
						<option value="">美女</option>
						<option value="">旅游</option>
					</select>
					<button>销量</button>
					<span>排序 : </span>
				</div>
				<div class="btn-div2 btn-div3">
					<button>次日达</button>
					<button>全国</button>
					<span>筛选 : </span>
				</div>
			</div>
			
			<ul class="fri-ul">
				<li v-for="he in aa" class="fri-li">
					<div class="fri-li-div"><img :src="he.src" alt="" class="flyimg"/></div>
					<p class="fri-p1 ck-p1">{{he.aName}}</p>
					<p class="ck-p2">{{he.aJs}}</p>
					<div class="fri-div2">
						<p><span class="li-pri">￥{{he.xPrice}}</span><span>￥{{he.yPrice}}</span></p>
						<img src="../../static/icon/gouwuche.png" alt="" @click="addCar()" class="shop-cart"/>
					</div>
				</li>
			</ul>
			
			
		</div>
		
		<add-cover></add-cover>
		
		<v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
	</div>
</template>

<script>
	import pagination from './fenye2'
	import addCover from './add-shopCar'
	
	export default {
		data () {
			return {
				fenlei:["全部","苹果","阿克苏","酒店","休闲","电影"],
				bol:false,
				total: 100,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1,   // 当前的页数
				aa:[
				{src:"../../static/img/1-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"},
				{src:"../../static/img/2-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"},
				{src:"../../static/img/3-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"},
				{src:"../../static/img/4-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"},
				{src:"../../static/img/1-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"},
				{src:"../../static/img/2-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"},
				{src:"../../static/img/3-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"},
				{src:"../../static/img/4-ck.png",aName:"新西兰佳沛黄金奇异果",aJs:"果肉绵密、花蜜般的甘甜百吃不厌",xPrice:"28.80",yPrice:"40.00"}
				]
			}
		},
		methods:{
			sel:function(index){
				$(".ha1 span").removeClass("span-on");
				$(".ha1 span").eq(index).addClass("span-on");
			},
			sel2:function(index){
				$(".ha2 span").removeClass("span-on");
				$(".ha2 span").eq(index).addClass("span-on");
			},
			on:function(){
				$('.btn-div3 button').click(function(){
					$('.btn-div3 button').removeClass("btn-on");
					$(this).addClass("btn-on");
				})
			},
			pagechange:function(currentPage){
		        console.log(currentPage);
		        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		   },
		   addCar: function() {
				$(".add").fadeIn("normal");
		   }
		},
		mounted(){
			this.on();
			//飞入购物车
//			var num = 0;
			var offset = $('.cartBox').offset();
			$('.shop-cart').click(function(event) {
					var img = $(this).parent().parent().find('.flyimg').attr('src');
					var flyImg = $('<img class="u-flyer" id="z-index" src="' + img + '">');
					console.log(event.pageX, event.pageY);
					flyImg.fly({
						start: {
							left: event.clientX-150,
							top: event.clientY-250,
						},
						end: {
							left: offset.left + 50,
							top: offset.top,
							width: 0,
							height: 0
						}
					});
//					num++;
//					$('.cartBox span').text(num);
			});
		},
		components:{
			'v-pagination': pagination,addCover
		}
		
	}
	
</script>

<style scoped>
	/*  飞入购物车 */
	#z-index{display: block;width: 100px;height: 100px;border-radius: 50px;position: fixed;z-index: 103;}
	
	.content-fl{
		width: 1280px;
		margin: auto;		
	}
	.dh-p2{
		margin: 20px 0;
		padding: 20px;
		color: #666666;
		font-size: 14px;
		background: #f4f4f4;
	}
	.fl-p1{
		color: #666666;
		font-size: 16px;
		padding-bottom: 20px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 20px;
	}
	.fl-p1>span{
		margin-left: 20px;
		padding: 0 10px;
	}
	.fl-p1>span:hover{
		background: #498E3D;
		color: #fff;
	}
	.span-on{
		background: #498E3D;
		color: #fff;
	}
	
	.px{
		overflow: hidden;
		margin-bottom: 20px;
	}
	.btn-div2{
		float: left;
		overflow: hidden;
	}
	.btn-div3{
		float: right;
	}
	.btn-div2>*{
		float: right;
		margin-left: 40px;
		font-size: 16px;
	}
	.btn-div2>button{
		height: 26px;
		padding: 0 15px;
		background: #fff;
		border: 1px solid #ccc;
		color: #333333;
	}
	.btn-div2>select{
		height: 26px;
		border: 1px solid #498e3d;
		color: #498e3d;
	}
	.btn-div2>span{
		margin-right: 50px;
		margin-left: 0;
	}
	.btn-div3>button{
		background: #dedede;
		color: #333333;
	}
	.btn-div3>span{
		margin-right: 0px;
	}
	.btn-div3>button.btn-on{
		background: #498E3D;
		color: #fff;
	}
	
	
	
	
	.fri-ul{
		margin: auto;
		/*padding: 20px 0;*/
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
		transform-style: preserve-3d;
	}
	.fri-ul>li{
		width: 305px;
		height: 433px;
		background: #f8f6f7;
		margin-bottom: 20px;
	}
	.fri-li-div{
		width: 100%;
		height: 312px;
		position: relative;
	}
	.fri-li-div>img{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}
	.fri-ul p{
		padding: 0 20px;
		text-align: center;
		font-size: 18px;
	}
	.fri-p1{
		color: #333333;
		/*height: 30px;*/
		line-height: 30px;
	}
	
	.fri-ul>li.fri-li{
		background: #fff;
		border: 1px solid #ccc;
	}
	
	.fri-li>p.ck-p1{
		text-align: left;
	}
	.fri-li>p.ck-p2{
		color: #666666;
		font-size: 14px;
		text-align: left;
		height: 40px;
		line-height: 40px;
	}
	.fri-div2{
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.fri-div2>p{
		padding: 0;
	}
	.fri-div2>p>span.li-pri{
		font-size: 24px;
		color: #ff5757;
		margin-right: 20px;
		text-decoration: none;
	}
	.fri-div2>p>span:nth-child(2){
		font-size: 18px;
		color: #666666;
		text-decoration: line-through;
	}
	
	.fri-ul>li:hover {
		border: 1px solid #498e3d;
		animation: hover 1s forwards;
	}
	
	@keyframes hover {
		from {}
		to {
			transform: translate3d(0, -5px, 2px);
			box-shadow: 0 0 20px 5px #999;
		}
	}
	
</style>