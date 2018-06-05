<template>
	<div>
		<div class="logo-b">
			<div class="user-logo">
				<a href="#/"><img src="../../../static/icon/logo.png" alt="" /></a>
				<span>礼拜五商城用户管理系统</span>
			</div>
		</div>
			
		
		
		<!-- userCtrl -->
		<div class="userCtrl">
			<ul class="user-nav">
				<li @click="liang($event)"><router-link to="/shopCtrl" tag="p">商品管理</router-link></li>
				<li @click="liang($event)"><router-link to="/carCtrl" tag="p">购物车管理</router-link></li>
				<li @click="liang($event)"><router-link to="/adressCtrl" tag="p">地址管理</router-link></li>
				<li @click="liang($event)"><router-link to="/userlf" tag="p">用户管理</router-link></li>
				<li @click="liang($event)"><router-link to="/jifenCtrl" tag="p">积分管理</router-link></li>
			</ul>
			
			<router-view class="user-view animated fadeIn"></router-view>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		mounted(){
	
		},
		methods :{
			liang: function(aa){
			
					$(".user-nav p").removeClass("active");
					$(aa.target).addClass("active");
				
			}
		}
	}
</script>

<style scoped>
	.logo-b{
		
		border-bottom: 1px solid #ccc;
	}
	.user-logo{
		width: 1280px;
		margin: auto;
		padding: 20px 0;
		display: flex;
		align-items: center;
	}
	.user-logo span{
		margin-left: 60px;
		height: 40px;
		color: #878787;
		font-size: 20px;
		line-height: 40px;
		border-left: 1px solid #CCCCCC;
		padding-left: 40px;	
	}
	.userCtrl{
		width: 1280px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		padding: 20px 0 ;
	}
	
	.user-nav{
		width: 200px;
		border: 1px solid #ccc;
	}
	.user-nav p{
		height: 50px;
		font-size: 20px;
		text-align: center;
		border-bottom: 1px solid #CCCCCC;
		line-height: 50px;
		background:darkgrey;
		color:#FFFFFF;
		cursor: pointer;
	}
	.user-view{
		width: 1000px;
	}
	.user-nav .active{
		background: brown;
	}
	
	
</style>