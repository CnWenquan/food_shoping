<template>
	<div>
		<p class="dh-p">您的当前位置 : <span>首页</span> > <span>专题</span></p>
		
		<div class="cont2">
			<router-link to=""><img src="../../static/img/d1.png" alt=""/></router-link>
			<router-link to=""><img src="../../static/img/d2.png" alt="" /></router-link>
			<router-link to=""><img src="../../static/img/d3.png" alt="" /></router-link>
		</div>
			
	</div>
	
</template>

<script>
	
</script>

<style scoped> 
	.dh-p{
		width: 1240px;
		margin: 20px auto;
		padding: 20px;
		color: #666666;
		font-size: 14px;
		background: #f4f4f4;
	}
	.cont2{
		width: 1280px;
		margin: auto;
		padding-bottom: 20px;
	}
	.cont2>a{
		display: inline-block;
		margin-bottom: 20px;
	}
	
	
</style>