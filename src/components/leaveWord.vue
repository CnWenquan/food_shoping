<template>
	<div>
		<el-row class="conts" :gutter="24">
			<el-col :span="6">
				<el-card>
					<div slot="header" class="clearfix headers">
						<span>用户登录</span>
					</div>
					<div class="text item ov" @click="login">
						登录
					</div>
					
				</el-card>
				<el-card>
					<div slot="header" class="clearfix headers">
						<span>交易商机</span>
					</div>
					<span class="text item" v-for="(o,i) in cityArr" style="font-size: 16px;padding: 0 5px;" @click="tiaozhuan(o)">
						{{o}}
					</span>
				</el-card>
			</el-col>
			<el-col :span="18" v-show="is">
				<el-card class="box-card" v-show="!isAdmin">
					<div slot="header" class="clearfix">
						<span>留言给我们</span>
					</div>
					<div class="text wenti" v-for="i in wordArr">
						<div>问：{{i.cont}}</div>
						<div>答：{{i.n}}</div>
					</div>
					<h4 class="word">提交你的留言给我们</h4>
					<el-form ref="form" :model="form" label-width="80px">
					  <el-form-item label="主题">
					    <el-input v-model="form.name"></el-input>
					  </el-form-item>
					  <el-form-item label="内容">
					    <el-input type="textarea" v-model="form.cont"></el-input>
					  </el-form-item>
					  <el-form-item label="电子邮件" class="aaa">
					    <el-input v-model="form.mail"></el-input>
					  </el-form-item>
					  <el-form-item label="QQ" class="aaa">
					    <el-input v-model="form.qq"></el-input>
					  </el-form-item>
					  <el-form-item label="电话" class="aaa">
					    <el-input v-model="form.phone"></el-input>
					  </el-form-item>
					  <el-form-item label="验证码" class="aaa">
					    <el-input v-model="form.code"></el-input>
					  </el-form-item>
					<el-form-item>
					    <el-button type="primary" @click="onSubmit">留言</el-button>
					  </el-form-item>
					</el-form>
				</el-card>
				<el-card class="box-card" v-show="isAdmin">
					<div slot="header" class="clearfix">
						<span>回答用户的留言</span>
					</div>
					<div class="text wenti" v-for="(i,index) in wordArr">
						<div>问：{{i.cont}}</div>
						<div v-if="i.n">答：{{i.n}}</div>
						<div v-else>
							<el-input v-model="i.s"/>
							<el-button @click="submitWord(index)" style="margin-top: 12px;">提交给用户</el-button>
						</div>
					</div>
				</el-card>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			var wordArr = [
				{
					cont: "你好啊",
					n: "我很好啊啊啊 啊啊 啊啊"
				},
				{
					cont: "你好啊",
					n: "我很好啊啊啊 啊啊 啊啊"
				},
				{
					cont: "你好啊",
					n: "我很好啊啊啊 啊啊 啊啊"
				}
			];
			if(!localStorage.wordArr)localStorage.wordArr = JSON.stringify(wordArr);
			var aa = localStorage.name == "admin";
			return {
				isAdmin: aa,
				city: "北京 	重庆 	江苏 	四川 	吉林 	福建 	海南 	云南 	广西 	新疆 	澳门 	黑龙江 	内蒙古 	台湾 	西藏 	宁夏 	陕西 	江西 	湖北 	山东 	河南 	河北 	浙江 	上海 	天津  广东 	山西 	辽宁 	安徽 	湖南 	贵州 	甘肃 	青海 	香港 ",
				cityArr: [],
				wordArr: JSON.parse(localStorage.wordArr),
				index: 0,
				is: true,
				form: {
					name: "",
					cont: "",
					mail: "",
					qq: "",
					phone: "",
					code: "",
					n: "",
					s: ""
				}
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
			zhengces(){
				this.$router.push("/shopFenlei")
			},
			onSubmit(){
				if(!this.form.cont){
					 this.$message.error('你还没有填写留言内容！');
					 return;
				}
				if($(".hea-li1")[0].style.display == "none"){
					this.$message.error('你还没登录！');
					return;
				}
				this.wordArr.push(this.form);
				localStorage.wordArr = JSON.stringify(this.wordArr);
			},
			submitWord(i){
				this.wordArr[i].n = this.wordArr[i].s;
				localStorage.wordArr = JSON.stringify(this.wordArr);
			},
			login(){
				if($(".hea-li1")[0].style.display == "none"){
					this.$router.push("/enter")
				}else{
					this.$message('您已经登录过了');
				}
			}
		},
		mounted() {
			this.cityArr = (this.city.replace(/\s+/g,',')).split(",")
		},
		
	}
</script>

<style scoped>
 .text {
    font-size: 14px;
  }
  .aaa{ width: calc(50% - 12px);display: inline-block;box-sizing: border-box; }
  .word{ padding: 24px 0; }
  .wenti{ line-height: 30px;padding: 12px 0; }
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