<template>
	<div>
		<p class="dh-p">您的当前位置 : <span>首页</span> > <span>关于我们</span></p>
		
		<div class="cont3">
			<div class="cont3-div1">
				<h3>服务声明</h3>
				<p>日期 : {{nian}}年{{yue}}月{{ri}}日  {{hour}}时{{min}}分{{sec}}秒</p>
			</div>
			
			<div class="cont3-div2">
				<p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
				<p>管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。</p>
				<img src="../../static/img/l_bg6.png" alt="" />
				<p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
				<p>管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。</p>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				nian:"",
				yue:"",
				ri:"",
				hour:'',
				min:'',
				sec:''
			}
		},
		mounted () {
			this.ck(),
			setInterval(this.ck,1000)
		},
		methods:{
			ck:function(){
				var oData = new Date();
				this.nian = oData.getFullYear();
				this.yue = oData.getMonth() + 1;
				this.ri = oData.getDate();
				this.hour = oData.getHours();
				this.min = oData.getMinutes();
				this.sec = oData.getSeconds();
			}
		}
		
	}
	
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
	.dh-p>span:nth-child(n+2){
		color: #498e3d;
	}
	.cont3{
		width: 1280px;
		margin: auto;
		border: 1px solid #ccc;
		margin-bottom: 40px;
	}
	.cont3-div1{
		width: 1200px;
		margin: auto;
		border-bottom: 1px solid #ccc;
		padding-top: 55px;
	}
	.cont3-div1>h3{
		text-align: center;
		font-size: 24px;
		color: #498e3d;
	}
	.cont3-div1>p{
		text-align: right;
		color: #999999;
		font-size: 14px;
		padding: 18px 0;
	}
	.cont3-div2{
		padding: 40px;
	}
	.cont3-div2>p{
		font-size: 14px;
		color: #666666;
		text-indent: 20px;
		line-height: 30px;
		padding-bottom: 45px;
	}
	.cont3-div2>p:nth-last-child(1){
		padding: 0;
	}
	.cont3-div2>img{
		margin-bottom: 40px;
	}
</style>