<template>
	<!--商品详情与评价-->
	<div class="s-wrapper">

		<div class="s-goods-valuation">
			<!--商品详情部分-->
			<div class="s-valuation-title">
				<p @click="out($event)" class="xuanzhong">商品详情</p>
				<p @click="enter($event)">商品评价</p>
				<div class="s-addCar">
					<img src="../../images/icon/s-car.png" alt="" />
					<span>加入购物车</span>
				</div>
			</div>
			<!--内容部分-->
			<div class="s-valuation-cont">
				<div class="s-overflow">
					<!--商品详情-->
					<div class="s-goods-x">
						<!--第一列-->
						<ul>
							<li>
								男士短衬衫
							</li>
							<li>明水礼盒十分优秀，是送朋友，送亲人的不二选择</li>
							<li>什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。</li>
							<li>完成交易，如有剩余库存，从新上架产品</li>
							<li>
								<img src="../../images/img/sirendingzhi.png" alt="" />
							</li>
						</ul>
						<!--第二列-->
						<ul>
							<li>
								男士短衬衫
							</li>
							<li>明水礼盒十分优秀，是送朋友，送亲人的不二选择</li>
							<li>什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。</li>
							<li>完成交易，如有剩余库存，从新上架产品</li>
							<li>
								<img src="../../images/img/sirendingzhi.png" alt="" />
							</li>
						</ul>
					</div>
					<!--商品评价-->
					<div class="s-goods-say">
						<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p>
									<!--<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing4.png" alt="" />
								<img src="../../images/icon/xingxing3.png" alt="" />-->
									<div class="my-rating"></div>

									<span>2016-08-12</span>
									<span>20:45:01</span>

								</p>
								<p>帮同事买的,很不错,性价比很高</p>
								<p>
									<img src="../../images/img/touxiang2.png" alt="" />
									<img src="../../images/img/touxiang2.png" alt="" />
									<img src="../../images/img/touxiang2.png" alt="" />
									<img src="../../images/img/touxiang2.png" alt="" />
								</p>

							</li>

						</ul>
						<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p><img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing3.png" alt="" />

									<span>2016-08-12</span>
									<span>20:45:01</span>

								</p>
								<p>帮同事买的,很不错,性价比很高</p>
							</li>
						</ul>
						<!--<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-->
						<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p><img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing3.png" alt="" />

									<span>2016-08-12</span>
									<span>20:45:01</span>

								</p>
								<p>帮同事买的,很不错,性价比很高</p>
								<p>
									<img src="../../images/img/touxiang2.png" alt="" />
									<img src="../../images/img/touxiang2.png" alt="" />
									<img src="../../images/img/touxiang2.png" alt="" />
									<img src="../../images/img/touxiang2.png" alt="" />
								</p>

							</li>

						</ul>
						<ul>
							<li>
								<img src="../../images/img/touxiang1.png" alt="" />
								<p>158***0203</p>
							</li>
							<li>
								<p><img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing4.png" alt="" />
									<img src="../../images/icon/xingxing3.png" alt="" />

									<span>2016-08-12</span>
									<span>20:45:01</span>

								</p>
								<p>帮同事买的,很不错,性价比很高</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import star from "../../../static/js/jquery.star-rating-svg.js"
	export default {
		mounted() {
			this.star();
		},
		methods: {
			star: function() {
				$(".my-rating").starRating({
					starSize: 25,
					callback: function(currentRating, $el) {
						// make a server call here
					}
				});
			},
			enter: function(aa) {
				$(".s-valuation-title p").removeClass("xuanzhong");
				$(aa.target).addClass("xuanzhong");
				$(".s-overflow").removeClass("out");
				$(".s-overflow").addClass("enter");
			},
			out: function(aa) {
				$(".s-valuation-title p").removeClass("xuanzhong");
				$(aa.target).addClass("xuanzhong");
				$(".s-overflow").removeClass("enter");
				$(".s-overflow").addClass("out");
			},
		}
	}
</script>

<style scoped="scoped">
	.s-wrapper {
		width: 1280px;
		margin: auto;
	}
	
	.s-goods-valuation {
		width: 1280px;
		border: 1px solid #F1F1F1;
	}
	
	.s-valuation-title {
		background: #F4F4F4;
		height: 50px;
		display: flex;
		position: relative;
	}
	
	.s-valuation-title p {
		color: #737373;
		font-size: 18px;
		width: 120px;
		height: 50px;
		box-sizing: border-box;
		line-height: 50px;
		text-align: center;
	}
	
	.s-valuation-title .xuanzhong {
		color: #74AC75;
		border-top: 2px solid #A0C6A0;
		background: #FFFFFF;
	}
	
	.s-addCar {
		position: absolute;
		height: 50px;
		right: 0;
		display: flex;
		align-items: center;
		width: 180px;
		background: #F78327;
		justify-content: space-around;
	}
	
	.s-addCar span {
		color: #FFFFFF;
		font-size: 16px;
	}
	
	.s-goods-x {
		padding-left: 40px;
	}
	
	.s-goods-x ul {
		height: 460px;
		margin-top: 40px;
	}
	
	.s-goods-x ul li:first-child {
		color: #F47535;
		font-size: 20px;
		height: 40px;
	}
	
	.s-goods-x ul li:nth-child(n+1) {
		color: #666666;
		line-height: 40px;
		height: 40px;
	}
	
	.s-goods-x ul li:last-child img {
		margin-top: 30px;
	}
	
	.s-goods-say {
		padding-left: 42px;
	}
	
	.s-goods-say ul {
		padding-left: 42px;
		margin-top: 40px;
		display: flex;
		height: 160px;
		border-bottom: 1px solid #F6F6F6;
	}
	
	.s-goods-say ul li:first-child p {
		font-size: 14px;
		color: #595959;
		margin-top: 10px;
	}
	
	.s-goods-say ul li:last-child {
		padding-left: 20px;
	}
	
	.s-goods-say ul li:last-child p:first-child {
		height: 40px;
		position: relative;
		width: 1080px;
	}
	
	.s-goods-say ul li:last-child p:first-child span {
		position: absolute;
		right: 0;
		color: #C0C0C0;
		font-size: 14px;
	}
	
	.s-goods-say ul li:last-child p:first-child span:first-of-type {
		right: 80px;
	}
	
	.s-goods-say ul li:last-child p:first-child img {
		margin-top: 10px;
	}
	
	.s-goods-say ul li:last-child p:nth-child(2) {
		font-size: 16px;
		color: #585858;
		margin-bottom: 10px;
	}
	
	.s-overflow {
		width: 200%;
		display: flex;
		position: relative;
	}
	
	.s-goods-valuation {
		width: 100%;
		overflow: hidden;
	}
	
	.enter {
		animation: move 1000ms forwards ease-in-out;
	}
	
	.out {
		animation: move1 1000ms forwards ease-in-out;
	}
	
	@keyframes move {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
	
	@keyframes move1 {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}
</style>