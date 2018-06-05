<template>
  <div id="app">
  	<!-- 头 -->
  	<my-header></my-header>

  	<!-- 路由 -->
	<router-view class="animated bounceInUp"></router-view>

  	<!-- 尾 -->
  	<my-footer></my-footer>
  	<my-tb></my-tb>
  </div>
</template>

<script>
import myHeader from '@/components/Header'
import myFooter from '@/components/footer'
import myTb from "@/components/top-back"

export default {
  name: 'app',
  components:{
  	myHeader,
  	myFooter,
  	myTb
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	font-family: '微软雅黑';
    word-break: break-all;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
/*html,body{
	height:100%;
    overflow:hidden;
}*/
a{
	text-decoration: none;
}
ul,li{
	list-style-type: none;
}
img{
	vertical-align: top;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
}
</style>
