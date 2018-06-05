<template>
	<div>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="/static/images/dalunbo2.jpg" /></div>
				<div class="swiper-slide"><img src="/static/images/dalunbo1.jpg" /></div>
				<div class="swiper-slide"><img src="/static/images/dalunbo3.jpg" /></div>
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo1.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo2.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo3.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo4.jpg" alt=""/></div>-->
				<!--<div class="swiper-slide"><img src="../../static/img/lunbo5.png" alt=""/></div>-->
			</div>
			<div class="swiper-pagination"></div>
		</div>

		<el-row class="conts" :gutter="24">
			<el-col :span="6">
				<el-card>
					<div slot="header" class="clearfix headers">
						<span>交易商机</span>
					</div>
					<span class="text item" v-for="(o,i) in cityArr" style="font-size: 16px;padding: 0 5px;" @click="tiaozhuan(o)">
						{{o}}
					</span>
				</el-card>
				<el-card>
					<div slot="header" class="clearfix headers">
						<span>食品供求</span>
						<el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
					</div>
					<div class="text">
						暂无数据
					</div>
				</el-card>
				<el-card>
					<div slot="header" class="clearfix headers">
						<span>食品政策</span>
					</div>
					<div class="text item ov" v-for="(o,i) in zhengce"  @click="detail(i)">
						{{o.title}}
					</div>
					
				</el-card>
			</el-col>
			<el-col :span="18" v-show="is">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>展会和政策</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="more">点击加载更多</el-button>
					</div>
					<div class="text">
						<el-button style="margin: 12px 0 16px" @click.stop="add()" v-show="isAdmin">添加展会</el-button>
					</div>
					<div v-for="(o,i) in zhanhui" class="text item" v-if="i<zhanhuiIndex">
						{{o}}
						<el-button style="float: right; padding: 3px 0" type="text" @click="del(i)" v-show="isAdmin">删除</el-button>
					</div>
					<div class="text item">
						<img src="../../static/images/2.gif"/>
					</div>
					<div class="text item">
						<img src="../../static/images/3.gif"/>
					</div>
				</el-card>
			</el-col>
			<el-col :span="18" v-show="!is">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>{{zhengce[index].title}}</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="is=true">返回展会和政策列表</el-button>
					</div>
					<div class="text">
						{{zhengce[index].cont}}
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import swiper from '../../static/js/swiper.min.js'
	import pagination from './fenye2'
	export default {
		data() {
			var aa = localStorage.name == "admin";
			return {
				zhanhui: [
					"[展会]  2013第九届中国（广州）国际食品饮料展",
					"[展会] 2013中国绿色食品及有机农产品展览会",
					"[展会]  2013第九届中国（广州）国际食品饮料展",
					"[展会] 2013中国绿色食品及有机农产品展览会",
					"[展会]  2013第九届中国（广州）国际食品饮料展",
					"[展会] 2013中国绿色食品及有机农产品展览会",
					"[展会]  2013第九届中国（广州）国际食品饮料展",
					"[展会] 2013中国绿色食品及有机农产品展览会",
					"[展会]  2013第九届中国（广州）国际食品饮料展",
					"[展会] 2013中国绿色食品及有机农产品展览会",
				],
				city: "北京 	重庆 	江苏 	四川 	吉林 	福建 	海南 	云南 	广西 	新疆 	澳门 	黑龙江 	内蒙古 	台湾 	西藏 	宁夏 	陕西 	江西 	湖北 	山东 	河南 	河北 	浙江 	上海 	天津  广东 	山西 	辽宁 	安徽 	湖南 	贵州 	甘肃 	青海 	香港 ",
				cityArr: [],
				isAdmin: aa,
				zhanhuiIndex: 4,
				index: 0,
				zhengce: [
					{
						title: "[食品政策] “农家乐”严禁使用病死畜禽",
						cont: "日前，国家食品药品监管局发布了《关于进一步加强农村餐饮消费食品安全监管工作的指导意见(征求意见稿)》。 　　征求意见稿还指出，严禁用非食品原料加工制作食品，或者用回收的食品加工制作食品;严禁使用病死、毒死或者死因不明的畜、禽、兽、水产动物肉类及其制品;严禁使用腐败变质、油脂酸败、霉变生虫、污秽不洁、混有异物、掺假掺杂或者感官性状异常的食品;严禁使用无标签的预包装食品和超过保质期的食品;严禁加工制作河豚鱼等国家为防病等特殊需要明令禁止的食品。"						
					},
					{
						title: "[食品政策] 食药监局：农村摆席超过50人拟备案",
						cont: "记者昨天从国家食品药品监督管理局获悉，面向社会征求意见的《关于进一步加强农村餐饮消费食品安全监管工作的指导意见》(以下简称《意见》)中，拟规定农村聚餐超过50人规模备案。　　农村地区婚丧嫁娶有摆席聚餐的习俗。《意见》要求今后农村集体聚餐50人以上的，由办理者或承办者将菜单、举办场地、参加人数等内容提前向本村餐饮消费食品安全信息员报告，信息员做好登记，要求办理者或承办者签订食品安全承诺书，并报告乡镇餐饮消费食品安全工作站。工作站安排人员到现场进行指导，必要时可请县级餐饮消费食品安全监管人员进行指导。　　《意见》要求，农村中小学和幼儿园的食堂建立以校长为第一责任人的食堂食品安全责任制，签订餐饮消费食品安全承诺书。严禁农村学校食堂加工制作冷荤凉菜；严禁采购、贮存和使用亚硝酸盐，严禁违规加工制作豆角，确保学校食堂食品安全 "						
					},
					{
						title: "[食品政策] 食品药品监管局：“农家乐”严禁加工制作河豚鱼",
						cont: "新华网北京12月7日电（徐艺婷 朱立毅）根据食品药品监管局日前发布的《关于进一步加强农村餐饮消费食品安全监管工作的指导意见（征求意见稿）》，“农家乐”等农村餐饮服务提供者严禁加工制作河豚鱼等国家为防病等特殊需要明令禁止的食品。 　　这份征求意见稿要求，加强对“农家乐”等农村餐饮服务提供者餐饮消费许可管理，要根据“农家乐”等农村餐饮服务提供者的经营特点，确定餐饮服务许可形式，及时办理餐饮服务许可证或临时餐饮服务许可证。 　　征求意见稿还指出，严禁用非食品原料加工制作食品，或者用回收的食品加工制作食品；严禁使用病死、毒死或者死因不明的畜、禽、兽、水产动物肉类及其制品；严禁使用腐败变质、油脂酸败、霉变生虫、污秽不洁、混有异物、掺假掺杂或者感官性状异常的食品；严禁使用无标签的预包装食品和超过保质期的食品；严禁加工制作河豚鱼等国家为防病等特殊需要明令禁止的食品。"
					},
					{
						title: "[食品政策] 农业部办公厅关于发布2011年上半年动物产品残留监控结果的通报",
						cont: "农业部办公厅关于发布2011年上半年动物产品残留监控结果的通报（农办医<2011>63号） 根据《兽药管理条例》规定和《农业部关于下达2011年度动物及动物产品兽药残留监控计划的通知》（农医发<2011>3号）要求，各地上报了上半年畜禽产品中兽药残留监控结果，经汇总分析，现将有关情况通报如下：　　一、基本情况　　2011年上半年动物产品兽药残留监控计划执行时间为2011年1月至2011年7月15日。检测鸡肝、鸡肉、鸡蛋、牛奶、牛肉、羊肉、猪肝、猪肉、猪尿等9种畜禽动物组织及产品；检测药物及禁用物质包括β-受体激动剂、地美硝唑/甲硝唑及其代谢产物、氯霉素、硝基呋喃类代谢物、卡巴氧残留标示物、喹乙醇残留标示物、氟喹诺酮类、磺胺类、四环素类、阿维菌素类、β-内酰胺类、氨基糖苷类、林可胺类、大环内酯类、泰乐菌素、氯羟吡啶、替米考星共计17种（类）。样品采自除西藏外的30个省、市、自治区。上半年绝大部分单位按规定要求完成检测任务和结果上报工作，监控计划执行情况良好。　　二、监控结果　　截至2011年7月15日，上半年共完成6254批畜禽产品残留样品的检测，占全年计划任务的48.73%,其中未检出样品6124批，检出但低于残留限量标准的样品127批；超过残留限量标准的样品3批，占已分析样品总数的0.05%,比去年同期的0.19%下降了0.14个百分点（见附件）。主要超标物质为卡巴氧残留标示物和磺胺类总量（磺胺间甲氧嘧啶和磺胺喹恶啉）。　　按检测药物统计，完成168批卡巴氧残留标示物残留样品的检测，1批猪肝样品超标，占已分析样品总数的0.60%;完成1092批磺胺类残留样品的检测，2批鸡肉样品超标，占已分析样品总数的1.72%;完成474批β-受体激动剂、364批地美硝唑/甲硝唑及其代谢产物、714批氯霉素、521批硝基呋喃类代谢物、140批喹乙醇残留标示物、816批氟喹诺酮类、238批四环素类、20批阿维菌素类、473批β-内酰胺类、547批氨基糖苷类、229批林可胺和大环内酯类、46批泰乐菌素、101批氯羟吡啶、311批替米考星残留样品的检测，均未检出超标样品。　　按检测动物组织统计，完成982批鸡肉样品的检测，2批磺胺类样品超标，占已分析样品总数的1.72%;完成465批猪肝样品的检测，1批卡巴氧残留标示物样品超标，占已分析样品总数的0.60%;完成224批鸡蛋、1075批鸡肝、1631批牛奶、20批牛肉、168批羊肉、177批猪尿、1512批猪肉残留样品的检测，均未检出超标样品。 "
					}
				],
				is: true
			}
		},
		methods: {
			tiaozhuan(o){
				this.$confirm('将跳转到'+o+"是否定位到该城市", '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	$("#dizhi").html(o);
          this.$message({
            type: 'success',
            message: '定位成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
			},
			detail(i){
				this.is = false;
				this.index = i;
			},
			more(){
				this.zhanhuiIndex+=4;
				if(this.zhanhuiIndex>this.zhanhui.length){
					this.$message({
			          message: '已经没用更多消息了！！',
			          type: 'warning'
			        });
				}
			},
			del(i){
				 this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	this.zhanhui.splice(i,1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
			},
			add(){
				this.$prompt('请输入新的展会标题', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
        	this.zhanhui.unshift("[展会]"+value);
        });
			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000,
				touchAngle: 10,
				loop: true,
				effect: 'fade',
				autoplayDisableOnInteraction: false,
				extButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				pagination: '.swiper-pagination',
				paginationClickable: true,
			});
			this.cityArr = (this.city.replace(/\s+/g,',')).split(",")
		},
		components: {
			'v-pagination': pagination
		},
		
	}
</script>

<style scoped>
 .text {
    font-size: 14px;
  }
  .text p{text-indent:2em;line-height: 30px;}
  .text img{margin: 24px auto;display: block;}
.conts{ width: 1280px;margin:24px auto!important; }
  .item {
    margin-bottom: 18px;
    cursor: pointer;
  }
  .item:hover{ color: #f08200; }
	.ov{ white-space: nowrap;text-overflow: ellipsis;overflow: hidden; }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>
<style type="text/css">
	.el-card{ margin-bottom: 24px; }
</style>