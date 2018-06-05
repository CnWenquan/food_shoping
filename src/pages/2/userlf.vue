<template>
	<div class="userlf">
		<table border="1" cellspacing="0" cellpadding="0">
			<tr><th>账号</th><th>密码</th><th>操作</th></tr>
			<tr v-for="(item,bb) in hh"><td>{{item.name}}</td><td>{{item.pass}}</td><td><span @click="delet($event,bb)">删除</span></td></tr>
		</table>
		<div class="addUser">
		<label for=""> 账号</label>	<input type="" name="" id="name" value="" /><br />
		<label for=""> 密码</label>	<input type="" name="" id="pass" value="" />	
		<button @click="add()">添加</button>
		<button @click="change()">修改</button>
		</div>
	</div>
</template>

<script>
	export default{
		data (){
			return {
				hh: []
			}
		},
		mounted(){
			this.$axios.get('/api/enter').then(function(data){
					this.hh=data.data;
					
			}.bind(this));
			console.log(this.hh);
		},
		methods: {
			add:function(){
				var name = $("#name").val();
				var pass = $("#pass").val();
				this.$axios.get('/api/register?name='+name+'&pass='+pass).then(function(data){
					alert("添加成功");
			}.bind(this));
			},
			delet :function(aa,bb){
				var id = this.hh[bb]._id;
				$(aa.target).parents("tr").remove();
				this.$axios.get('/api/delet?id='+id).then(function(data){
					alert("删除成功");
			}.bind(this));
			},
			change :function(aa,bb){
				var name = $("#name").val();
				var pass = $("#pass").val();
				this.$axios.get('/api/forgetPass?name='+name+'&pass='+pass).then(function(data){
					alert("修改成功");
			}.bind(this));
			}
		}
		
	}
</script>

<style scoped>
	.userlf{
		width: 1000px;
	}
	.userlf table{
		width: 300px;
		text-align: center;
		background: lightyellow;
	}
	.addUser button{
		width: 50px;
		height: 20px;
		background: orange;
		color: #FFF;
		text-align: center;
		line-height: 20px;
		border-radius: 5px;
		outline: none;
		border: none;
	}
</style>