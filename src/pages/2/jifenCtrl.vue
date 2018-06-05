<template>
	<div class="s-fuits">
			<ul v-for="(item,index) in mhh">
				<li><img v-bind:src="item.img" alt="" />
				</li>
				<li>
					<p>{{item.name}}</p>
				</li>
				<li>
					<p>{{item.intro}}</p>
				</li>
				<li>
					<p>积分: <span>{{item.score}}</span></p>
					<p>价值: <span>¥{{item.price}}</span></p>
				</li>
				<li>
					<p @click="chuandi(index)">立即兑换</p> 
				</li>
			</ul>
		</div> 
</template>

<script>
	export default {
		mounted() {
			this.$axios.get('/api/jifen').then(function(data){
						this.mhh=data.data;
			}.bind(this));
			
		},
		data () {
    return {
    		mhh:[]
    
    }
  },
  	methods: {
  		chuandi :function(index){
  			localStorage.mhh=JSON.stringify(this.mhh[index]);
  			console.log(this.mhh[index]);
			location.href="#/integral"
  		}
  	}
	}
</script>

<style scoped="scoped">
	.s-fuits{
		margin-bottom: 50px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 1280px;
		transform-style: preserve-3d;
	}
	.s-fuits img{
		width: 261px;
		height: 253px;
	}
	.s-fuits a{
		color: #FFFFFF;
	}
	.s-fuits ul{
		height: 480px;
		width: 305px;
		border: 1px solid #ECECEC;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 20px;
		cursor: pointer;
	}
	.s-fuits ul li:nth-child(2) p{
		font-size: 18px;
		color: #333333;
	}
	.s-fuits ul li:nth-child(3) p{
		font-size: 12px;
		color: #666666;
	}
	.s-fuits ul li:nth-child(4){
		display: flex;
		justify-content: space-around;
		color: #666666;
	}
	.s-fuits ul li:nth-child(4) p:nth-child(1) span{
		font-size: 20px;
		color: #FF575C;
	}
	.s-fuits ul li:nth-child(5){
		display: flex;
		justify-content: center;
	}
	.s-fuits ul li:nth-child(5) p{
		width: 150px;
		height: 34px;
		background: #F78327;
		border-radius: 20px;
		color: #FFFFFF;
		line-height: 34px;
		font-size: 16px;
		font-weight: 300;
		cursor: pointer;
	}
	.s-fuits>ul:hover{
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