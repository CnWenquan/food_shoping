<template>
	<div class="add">
		<div class="add-cover" @click="on($event)"></div>
		<div class="add-div" >
			<p class="add-p1">请选择产品规格</p>
			<p class="add-p2">现价 : ￥20.0 <span>原价 : ￥40.0</span></p>
			<p class="add-p3 size1">请选择规格  <span>500g</span> <span>1000g</span> <span>1500g</span> <span>2000g</span></p>
			<p class="add-p3 yangshi">请选择样式  <span>简约型</span> <span>时尚型</span></p>
			<p class="add-p4">数 量 :  &nbsp;&nbsp;<span class="p3-span" @click="minus()">-</span><span id="num">{{oNum}}</span><span class="p3-span" @click="add()">+</span> 件 </p>
			<button @click="hide2()">添加到购物车</button>
		</div>
	</div>
</template>

<script>
	import contentNav from "./content-nav"

	export default {
		mounted () {
			$(".size1 span").click(function(){
				$(".size1 span").removeClass("asd");
				$(this).addClass("asd");
			});
			$(".yangshi span").click(function(){
				$(".yangshi span").removeClass("asd");
				$(this).addClass("asd");
			});
		},
		data () {
			return {
				oNum:1
			}
		},
		methods:{
			minus:function(){
				this.oNum--;
				if(this.oNum <= 1){
					this.oNum = 1;
				}
			},
			add:function(){
				this.oNum++;
			},
			// 添加到购物车
			hide2:function(){
				$(".add").fadeOut("normal");
				var asd = ($("#gw-num").text()-0) + this.oNum;
				$("#gw-num").text(asd);

				var tit = localStorage.tit;
				var src1 = localStorage.src1;
				var ming = localStorage.ming;
				var price = localStorage.price;
				this.$axios.get('/api/add?shop='+ tit +'&src='+ src1  +'&name='+ ming +'&size=6&total=0&zongtotal=0&showImgs=false&showImg=false&price='+ price + '&num='+ this.oNum).then(function(data){
					console.log(data.data);
				}.bind(this));


				this.oNum = 1;
			},
			on:function(event){
				event.stopPropagation();
				$(".add").fadeOut("normal");
				return false;
			},


		}

	}
</script>

<style scoped>
	.add{
		width: 100%;
		height: 100%;
		display: none;
		position: fixed;
		top: 0;
		z-index: 11000;
	}
	.add-cover{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		/*display: none;*/
	}
	.add-div{
		width: 687px;
		height: 452px;
		border: 5px solid #ccc;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: #fff;
		z-index: 111;
	}
	.add-p1{
		padding: 20px 20px;
		color: #498E3D;
		font-size: 18px;
		border-bottom:1px solid #ccc ;
	}
	.add-p2{
		padding: 30px;
		color: #ff5757;
		font-size: 30px;
		font-weight: 800;
	}
	.add-p2>span{
		margin-left: 20px;
		color: #666666;
		font-size: 18px;
		text-decoration: line-through;
	}
	.add-p3{
		padding-left: 30px;padding-bottom: 20px;
		color: #666666;
		font-size: 18px;
	}
	.add-p3>span{
		display: inline-block;
		width: 83px;
		height: 34px;
		border: 1px solid #ccc;
		text-align: center;
		line-height: 34px;
		margin-left: 15px;
	}

	.add-p4{
		color: #666666;
		font-size: 18px;
		padding-left: 30px;
		margin-top: 20px;
	}
	.add-p4>span{
		display: inline-block;
	}
	.p3-span{
		width: 34px;
		height: 34px;
		background: #f2f2f2;
		line-height: 34px;
		text-align: center;
		border: 1px solid #ccc;
		cursor: pointer;
	}
	#num{
		width: 68px;
		height: 34px;
		line-height: 34px;
		background: #fff;
		text-align: center;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.add-div>button{
		width: 191px;
		height: 35px;
		background: #f08200;
		text-align: center;
		color: #fff;
		font-size: 16px;
		line-height: 35px;
		border: none;
		border-radius: 5px;
		margin-left: 30px;
		margin-top: 40px;
	}

	.asd{
		background: #f08200;
		color: #fff;
	}
</style>
