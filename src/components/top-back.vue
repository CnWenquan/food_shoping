<template>
	<div class="tb">
		<router-link to="/aa/yjfk">反馈</router-link>
		<a @click="tb()">顶部</a>
	</div>
	
	
</template>

<script>
	export default {
		methods:{
			handleScroll2:function(){
				var sTop = $(document).scrollTop();
				if (sTop > 130) {
					$(".tb").fadeIn("normal");
				} else{
					$(".tb").fadeOut("normal");
				}
			},
			tb:function(){
				 $("html,body").animate({scrollTop:0}, 500);
			}
		},
		mounted () {
			window.addEventListener("scroll",this.handleScroll2);
			
		}
	}
	
</script>

<style>
	.tb{
		width: 35px;
		height: 100px;
		position: fixed;
		bottom: 20px;
		right: 20px;
		display: none;
	}
	.tb>a{
		display: inline-block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: #fff;
		border-radius: 5px;
		background: #498E3D;
		text-align: center;
		margin-bottom: 20px;
		cursor: pointer;
	}
</style>