<template>
	<div>
		<!--添加购物车弹框-->
		<div class="alert_cargo">
			<div class="cacover" @click="hide_ca()">
				<div class="ca_cont" @click.stop>
					<p>请选择产品规格</p>
					<div class="ca_info">
						<div class="ca_pay">
							<p>现价：￥<span>20.0</span></p>
							<p>原价：￥ <span>40.0</span><span></span></p>
						</div>
						<div class="ca_size">
							<em>请选择规格</em>
							<p @click="ca_add($event)"><span>500</span>g</p>
							<p @click="ca_add($event)"><span>1000</span>g</p>
							<p @click="ca_add($event)"><span>2000</span>g</p>
							<p @click="ca_add($event)"><span>2000</span>g</p>
						</div>
						<div class="ca_size">
							<em>请选择规格</em>
							<p @click="ca_add($event)"><span>500</span>g</p>
						</div>
						<div class="ca_num">
							<em>数 量：</em>
							<p>
								<span @click="ca_jian()"><img src="../../../static/img/shopCar/jian.png" /></span>
								<span class="ca_number">1</span>
								<span @click="ca_jia()"><img src="../../../static/img/shopCar/jia.png"/></span>
							</p>
							<em>件</em>
						</div>
						<p>添加到购物车</p>
					</div>
				</div>
			</div>
		</div>
		<div class="qiyi_money">
			<p>排序：</p>
			<div class="qiyi_pay">
				<p @click="qiyichange($event)">销量</p>
				<p @click="qiyichange($event)">价格<span><img src="../../../static/img/city/shangjian.png" alt="" /><img src="../../../static/img/city/xiajian.png" alt="" /></span></p>
				<p @click="qiyichange($event)">评分最高</p>
			</div>
			<div class="qiyi_all">
				<p>筛选：</p>
				<ul>
					<li @click="qiyiall($event)" class="active">全部</li>
					<li @click="qiyiall($event)">次日达</li>
				</ul>
			</div>
		</div>
		<div class="qiyi_info">
			<ul>
				<li v-for="item in data1">
					<p @click="ca_show()"><img :src="item.src" alt="" class="flyimg" /></p>
					<p>{{item.name}}</p>
					<p>{{item.info}}</p>
					<p><span>￥</span><span>{{item.pay}}</span></p>
					<p>¥<span>{{item.money}}</span><span></span></p>
					<p><img src="../../../static/img/home/colorcar.png" class="shop-cart" /></p>
				</li>
			</ul>
		</div>
		<!--分页器-->
		<nav class="nav1">
			<ul class="pagination">
				<li :class="{'disabled': current == 1}">
					<a href="javascript:;" @click="setCurrent(current - 1)" class="a1"> <img src="../../../static/img/center/aazuo.jpg" /> </a>
				</li>
				<li v-for="p in grouplist" :class="{'aa': current == p.val}">
					<a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
				</li>
				<li :class="{'disabled': current == page}">
					<a href="javascript:;" @click="setCurrent(current + 1)" class="a1"> <img src="../../../static/img/center/aayou.jpg" /></a>
				</li>
			</ul>
			<input type="text" value="" class="input11" />
			<p class="aaa1">/10</p>
			<button @click="tiaozhuany()">跳转</button>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: this.currentPage,
				data1: [],
				qiyidata: []
			}

		},
		//分页器
		props: {
			total: { // 数据总条数
				type: Number,
				default: 24
			},
			display: { // 每页显示条数
				type: Number,
				default: 8
			},
			currentPage: { // 当前页码
				type: Number,
				default: 1
			},
			pagegroup: { // 分页条数
				type: Number,
				default: 8,
				coerce: function(v) {
					v = v > 0 ? v : 8;
					return v % 8 === 0 ? v : v + 1;
				}
			}
		},
		computed: {
			page: function() { // 总页数
				return Math.ceil(this.total / this.display);
			},
			grouplist: function() { // 获取分页页码
				var len = this.page,
					temp = [],
					list = [],
					count = Math.floor(this.pagegroup / 2),
					center = this.current;
				if(len <= this.pagegroup) {
					while(len--) {
						temp.push({
							text: this.page - len,
							val: this.page - len
						});
					};
					return temp;
				}
				while(len--) {
					temp.push(this.page - len);
				};
				var idx = temp.indexOf(center);
				(idx < count) && (center = center + count - idx);
				(this.current > this.page - count) && (center = this.page - count);
				temp = temp.splice(center - count - 1, this.pagegroup);
				do {
					var t = temp.shift();
					list.push({
						text: t,
						val: t
					});
				} while (temp.length);
				if(this.page > this.pagegroup) {
					(this.current > count + 1) && list.unshift({
						text: '...',
						val: list[0].val - 1
					});
					(this.current < this.page - count) && list.push({
						text: '...',
						val: list[list.length - 1].val + 1
					});
				}
				return list;
			}
		},
		methods: {
			qiyichange: function(ev) {
				$(".qiyi_pay>p").removeClass("active");
				$(ev.target).addClass("active");
			},
			qiyiall: function(ev) {
				$(".qiyi_all>ul>li").removeClass("active");
				$(ev.target).addClass("active");
			},
			hide_ca: function() {
				$(".alert_cargo").fadeOut(300);
			},
			ca_show: function() {
				$(".alert_cargo").fadeIn(300);
			},
			ca_jia: function() {
				var num = $(".ca_number").text() - 0;
				num ++;
				$(".ca_number").text(num);
			},
			ca_jian: function() {
				var num = $(".ca_number").text() - 0;
				if(num <= 0) {
					return;
				} else {
					num --;
					$(".ca_number").text(num);
				}
			},
			ca_add: function() {
				$(".ca_size>p").removeClass("active");
				$(event.currentTarget).addClass("active");
			},
			setCurrent(idx) {
				if(this.current != idx && idx > 0 && idx < this.page + 1) {
					this.current = idx;
					var a = (idx - 1) * 8;
					var b = a + 8;
					this.data1 = this.qiyidata.slice(a, b);
				}
			},
			tiaozhuany() {
				var idx = Number($(".input11").val());
				if(this.current != idx && idx > 0 && idx < this.page + 1) {
					this.current = idx;
					var a = (idx - 1) * 8;
					var b = a + 8;
					this.data1 = this.qiyidata.slice(a, b)
				}
			},
			setCurrent4: function() {
				var a = 0;
				var b = 8;
				this.data1 = this.qiyidata.slice(a, b)
			}
		},
		mounted() {
			this.$ajax.get('/api/qiyidata').then(function(data) {
				this.qiyidata = data.data[0].qiyidata;
				this.$nextTick(function() {
					this.setCurrent4();
//					this.$nextTick(function(){
//							/飞入购物车/
//					var num = 0;
//					var offset = $('.cartBox').offset();
//					$('.shop-cart').click(function(event) {
//						var img = $(this).parent().parent().find('.flyimg').attr('src');
//						var flyImg = $('<img class="u-flyer" id="z-index" src="' + img + '">');
//						console.log(event.pageX, event.pageY);
//						flyImg.fly({
//							start: {
//								left: event.clientX - 200,
//								top: event.clientY - 200,
//							},
//							end: {
//								left: offset.left + 50,
//								top: offset.top,
//								width: 0,
//								height: 0
//							}
//						});
//						num++;
//						$('.cartBox span').text(num);
//					})
//					})
				
				});
			}.bind(this));

		}
	}
</script>

<style>
	/*  飞入购物车 */
	
	#z-index {
		display: block;
		width: 100px;
		height: 100px;
		border-radius: 50px;
		position: fixed;
		z-index: 9999;
	}
	/**/
	
	.alert_cargo {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		display: none;
		z-index: 999;
	}
	
	.cacover {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
	
	.ca_cont {
		width: 687px;
		height: 452px;
		background: #FFFFFF;
		border: 6px solid #E2E2E2;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	
	.ca_cont>p {
		height: 70px;
		border-bottom: 1px solid #E2E2E2;
		padding-left: 30px;
		font-size: 18px;
		line-height: 70px;
		color: #498E3D;
	}
	
	.ca_info {
		width: 627px;
		margin: auto;
	}
	
	.ca_pay {
		height: 30px;
		position: relative;
		margin-top: 40px;
	}
	
	.ca_pay>p:nth-child(1) {
		height: 30px;
		font-size: 30px;
		line-height: 30px;
		color: #FF575C;
		position: absolute;
		font-weight: 500;
	}
	
	.ca_pay>p:nth-child(2) {
		font-size: 18px;
		color: #666666;
		position: absolute;
		bottom: 0;
		left: 225px;
		font-weight: 500;
	}
	
	.ca_pay>p:nth-child(2)>span:nth-child(2) {
		width: 100%;
		height: 1px;
		background: #666666;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		left: 0;
	}
	
	.ca_size {
		height: 34px;
		display: flex;
		align-items: center;
		margin-top: 20px;
	}
	
	.ca_size>em,
	.ca_num>em {
		font-style: normal;
		font-size: 18px;
		color: #666666;
	}
	
	.ca_size>p {
		font-size: 14px;
		color: #666666;
		width: 81px;
		height: 32px;
		border: 1px solid #D4D4D4;
		text-align: center;
		line-height: 32px;
		margin-left: 20px;
		cursor: pointer;
	}
	
	.ca_size>p.active {
		border: 1px solid #3E9444;
		background: #F3FFF3;
	}
	
	.ca_num {
		height: 34px;
		display: flex;
		align-items: center;
		margin-top: 40px;
	}
	
	.ca_num>em:nth-child(3) {
		margin-left: 10px;
	}
	
	.ca_num>p {
		width: 132px;
		height: 32px;
		border: 1px solid #D3D3D3;
		color: #D3D3D3;
		display: flex;
		justify-content: space-between;
		margin-left: 20px;
	}
	
	.ca_num>p>span:nth-child(1) {
		width: 33px;
		height: 32px;
		border-right: 1px solid #D3D3D3;
		background: #F2F2F2;
	}
	
	.ca_num>p>span:nth-child(2) {
		font-size: 18px;
		color: #666666;
		font-weight: 600;
	}
	
	.ca_num>p>span:nth-child(3) {
		width: 33px;
		height: 32px;
		border-left: 1px solid #D3D3D3;
		background: #F2F2F2;
	}
	
	.ca_num>p>span {
		text-align: center;
		line-height: 32px;
	}
	
	.ca_num>p>span>img {
		vertical-align: middle;
		margin-bottom: 1px;
	}
	
	.ca_info>p {
		width: 191px;
		height: 35px;
		font-size: 18px;
		background: #F78327;
		border-radius: 5px;
		text-align: center;
		line-height: 35px;
		color: #FFFFFF;
		margin-top: 35px;
	}
	/**/
	
	.qiyi_money {
		width: 1280px;
		height: 77px;
		margin: auto;
		display: flex;
		align-items: center;
		color: #6F6F6F;
		line-height: 77px;
		position: relative;
		border-top: 1px solid #E9E9E9;
	}
	
	.qiyi_pay {
		width: 320px;
		height: 26px;
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		color: #333333;
		line-height: 24px;
		margin-left: 60px;
	}
	
	.qiyi_pay>p {
		height: 24px;
		padding: 0 15px;
		border: 1px solid #DDDDDD;
		position: relative;
		cursor: pointer;
	}
	
	.qiyi_pay>p.active {
		border: 1px solid #47944C;
		color: #47944C;
	}
	
	.qiyi_pay>p:nth-child(2)>span {
		margin-left: 5px;
		width: 8px;
		height: 24px;
		position: relative;
	}
	
	.qiyi_pay>p:nth-child(2)>span>img:nth-child(1) {
		position: absolute;
		top: 5px;
	}
	
	.qiyi_pay>p:nth-child(2)>span>img:nth-child(2) {
		position: absolute;
		bottom: 5px;
	}
	
	.qiyi_all {
		width: 270px;
		height: 26px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		color: #6F6F6F;
		line-height: 26px;
		position: absolute;
		bottom: 0;
		top: 0;
		right: 0;
		margin: auto;
	}
	
	.qiyi_all>ul {
		width: 184px;
		height: 26px;
		display: flex;
		justify-content: space-between;
	}
	
	.qiyi_all>p {
		height: 26px;
	}
	
	.qiyi_all>ul>li {
		padding: 0 15px 0 15px;
		cursor: pointer;
		background: #DEDEDE;
		color: #333333;
	}
	
	.qiyi_all>ul>li.active {
		background: #47944C;
		color: #FFFFFF;
	}
	
	.qiyi_info {
		width: 1280px;
		margin: auto;
	}
	
	.qiyi_info>ul {
		width: 1280px;
		height: 886px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-between;
	}
	
	.qiyi_info>ul>li {
		width: 305px;
		height: 433px;
		background: #FFFFFF;
		border: 1px solid #F1F1F1;
		position: relative;
	}
	
	.qiyi_info>ul>li:hover {
		border: 1px solid green;
	}
	
	.qiyi_info>ul>li>p:nth-child(1) {
		width: 305px;
		height: 300px;
		position: relative;
	}
	
	.qiyi_info>ul>li>p:nth-child(1)>img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.qiyi_info>ul>li>p:nth-child(2) {
		font-size: 18px;
		line-height: 30px;
		color: #3E3E3E;
		padding-left: 20px;
	}
	
	.qiyi_info>ul>li>p:nth-child(3) {
		font-size: 14px;
		line-height: 30px;
		color: #8C8C8C;
		padding-left: 20px;
		margin-top: 10px;
	}
	
	.qiyi_info>ul>li>p:nth-child(4) {
		font-size: 22px;
		color: #FF585C;
		font-weight: 600;
		padding-left: 20px;
		margin-top: 10px;
	}
	
	.qiyi_info>ul>li>p:nth-child(5) {
		width: 49px;
		height: 22px;
		position: absolute;
		bottom: 22px;
		left: 120px;
		color: #7D7D7D;
		font-weight: 500;
	}
	
	.qiyi_info>ul>li>p:nth-child(5)>span:nth-child(2) {
		width: 49px;
		height: 1px;
		background: #7D7D7D;
		position: absolute;
		left: 0;
		bottom: 0;
		top: 0;
		margin: auto;
	}
	
	.qiyi_info>ul>li>p:nth-child(6) {
		cursor: pointer;
	}
	
	.qiyi_info>ul>li>p:nth-child(6)>img {
		position: absolute;
		bottom: 25px;
		right: 20px;
	}
	/*分页器*/
	
	.pagination {
		overflow: hidden;
		display: table;
		margin: 10px auto;
		/*width: 100%;*/
		height: 50px;
	}
	
	.pagination li {
		float: left;
		height: 30px;
		border-radius: 5px;
		margin: 3px;
		color: #666;
	}
	
	.pagination li:hover {
		background: #498e3d;
	}
	
	.pagination li:hover a {
		color: #fff;
	}
	
	.pagination>li>a {
		display: block;
		width: 40px;
		height: 30px;
		padding-right: 8px;
		padding-left: 8px;
		text-align: center;
		line-height: 30px;
		font-size: 18px;
		border-radius: 5px;
		text-decoration: none;
		color: #666666;
	}
	
	.aa {
		background: #498e3d;
	}
	
	.pagination li.aa a {
		color: #fff;
	}
	
	.a1 {
		background: #CCCCCC;
	}
	
	.a1>img {
		margin-top: 3px;
	}
	
	.nav1 {
		position: relative;
		width: 1280px;
		margin: auto;
	}
	
	.input11 {
		position: absolute;
		left: 1030px;
		top: 4px;
		width: 40px;
		height: 25px;
		font-size: 22px;
		padding-left: 20px;
	}
	
	.aaa1 {
		position: absolute;
		left: 1100px;
		font-size: 22px;
		top: 4px;
	}
	
	.nav1 button {
		width: 40px;
		height: 25px;
		border: none;
		background: #F08200;
		position: absolute;
		left: 1150px;
		font-size: 12px;
		top: 4px;
	}
</style>