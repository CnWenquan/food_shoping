<template>
	<div id="s-time">
		<count-down endTime="14907616200" :callback="call()" endText="已经结束了" @click="call()"></count-down>
	</div>
</template>

<script>
	import countDown from "../../components/time"
	export default {
		components:{
			countDown
		},
		methods :{
			call :function (){
				
				alert("时间到了");
			}
		}
	}
</script>

<style>
	#s-time{
		height: 100px;
	}
</style>