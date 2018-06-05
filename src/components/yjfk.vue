<template>
	<div class="yjfk">
        <p class="yjfk_p1">意见反馈</p>
        <div class="yjfk_div1">
        	    <textarea placeholder="请输入您的意见,我们将期待与您共同成长"></textarea>
        	    <div class="yjfk_div2">
        	    	    <p>取消</p>
        	    	    <p>提交</p>
        	    </div>
        </div>
	</div>
</template>
<script>

</script>

<style>
*{
	padding: 0;
	margin: 0;
}	
.yjfk{
	width:1086px;
	min-height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.yjfk_p1{
	width: calc(100 - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #323333;
	border-bottom: 1px solid #E7E7E7;
	text-align: left;
}
.yjfk_div1{
	width: calc(100% - 80px);
	padding: 40px;
}
textarea{
	width: 961px;
	height: 332px;
	padding: 20px;
	border: 1px solid #E0E0E0;
	resize:none;
	outline: none;
	font-size: 16px;
}
.yjfk_div2{
	width: 100%;
	height: 130px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.yjfk_div2>p{
	display: inline-block;
	width: 150px;
	height: 50px;
	line-height: 50px;
	font-size: 20px;
	color: #FFFFFF;
	border-radius: 5px;
	cursor: pointer;
}
.yjfk_div2>p:nth-child(1){
	background: #999999;
	margin-right: 100px;
}
.yjfk_div2>p:nth-child(2){
	background: #F68227;
}
</style>