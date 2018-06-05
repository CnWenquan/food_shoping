<template>
	<div class="grzl">
		<p class="gr_p1">个人资料</p>
		<div class="gr_div1">
			<div class="gr_dd1">
			    <p class="gr_p2">当前头像&nbsp;:&nbsp;</p>
			    <div class="gr_ddd1"><img src="../images/img/l23.png" alt="" /></div>
			    <p class="gr_p3">修改</p>
		    </div>
		    <ul class="gr_ul1">
		    	    <li>
		    	    	    <label>昵称&nbsp;:</label><input type="text" value="13012341234" class="l_int1"/>
		    	    </li>
		    	    <li class="gr_li1">
		    	    	    <label>性别&nbsp;:</label>
		    	    	    <div class="gr_s1 active" @click="dj($event)">
		    	    	    	    <span class="gr_s2 active1" @click="dj1($event)"></span>
		    	    	    </div> 
		    	    	    <p class="gr_p4">男</p> 
		    	    	    <div class="gr_s1" @click="dj($event)">
		    	    	    	    <span class="gr_s2" @click="dj1($event)"></span>
		    	    	    </div>
		    	    	    <p class="gr_p4">女</p>
		    	    </li>
		    	    <li class="gr_li1">
		    	    	    <label>生日&nbsp;:</label>
		    	    	    <select>   
                            <option value="1996" v-for="item1 in year">{{item1.y}}</option>                                         
                    </select><p class="gr_p7">年</p>
                    <select>
                            <option v-for="item2 in months">{{item2.mon}}</option>
                    </select><p class="gr_p7">月</p>
                    <select>
                            <option v-for="item3 in date">{{item3.d}}</option>
                    </select><p class="gr_p7">日</p>    
		    	    </li>
		    	    <li class="gr_li1">
		    	       	<label>手机&nbsp;:</label><p class="gr_p5">13012341234</p>
		    	       	<p class="gr_p6"><router-link to="/aa/hbsj1">更换手机</router-link></p>	
		    	    </li>
		    </ul>
		    <div class="gr_dd2">
		    	    <p>确认提交</p>
		    </div>
		</div>
	</div>
</template>
<script>
export default {	
    data () {
        return {
        	year:[{y:'1979'},{y:'1980'},{y:'1981'},{y:'1982'},{y:'1983'},{y:'1984'},{y:'1985'},{y:'1986'},{y:'1987'},{y:'1988'},{y:'1989'},{y:'1990'},{y:'1991'},{y:'1992'},{y:'1993'},{y:'1994'},{y:'1995'},{y:'1996'},{y:'1997'},{y:'1998'},{y:'1999'},{y:'2000'},{y:'2001'},{y:'2002'},{y:'2003'},{y:'2004'},{y:'2005'},{y:'2006'},{y:'2007'},{y:'2008'},{y:'2009'},{y:'2010'},{y:'2011'},{y:'2012'},{y:'2013'},{y:'2014'},{y:'2015'},{y:'2016'},{y:'2017'}],
        months:[{mon:'1'},{mon:'2'},{mon:'3'},{mon:'4'},{mon:'5'},{mon:'6'},{mon:'7'},{mon:'8'},{mon:'9'},{mon:'10'},{mon:'11'},{mon:'12'}],
        date:[{d:'1'},{d:'2'},{d:'3'},{d:'4'},{d:'5'},{d:'6'},{d:'7'},{d:'8'},{d:'9'},{d:'10'},{d:'11'},{d:'12'},{d:'13'},{d:'14'},{d:'15'},{d:'16'},{d:'17'},{d:'18'},{d:'19'},{d:'20'},{d:'21'},{d:'22'},{d:'23'},{d:'24'},{d:'25'},{d:'26'},{d:'27'},{d:'28'},{d:'29'},{d:'30'},{d:'31'}]
        } 
    },
   methods:{
   	    dj:function($event){
   	    	    $('.gr_s1').removeClass('active');
   	    	    $($event.target).addClass('active'); 	 
   	    },
   	    dj1:function($event){
   	    	    $('.gr_s1 span').removeClass('active1');
   	    	    $($event.target).addClass('active1');
   	    }
     	 
   }
}   
/*-----------------*/


/*-----------------*/

</script>

<style>
*{

	padding: 0;
	margin: 0;
}
.grzl{
	width: 1086px;
	height: 625px;
	border: 1px solid #E7E7E7;
	float: right;
}
.gr_p1{
	width: calc(100% - 20px);
	padding-left: 20px;
	height: 59px;
	line-height: 59px;
	font-size: 18px;
	color: #404141;
	border-bottom: 1px solid #E7E7E7;
	text-align: left;
}
.gr_div1{
   width: 100%;
   padding-top: 30px;	
}
.gr_dd1{
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
}
.gr_ddd1{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 20px;
}
.gr_ddd1>img{
	width: 100%;
	height: 100%;
}
.gr_p2{
	margin-left: 40px;
	font-size: 18px;
	color: #404141;
}
.gr_p3{
	font-size: 18px;
	color: #3E9444;
	cursor: pointer;
}
ul{
	list-style: none;
}
.gr_ul1{
	width: calc(100% - 75px);
	padding-left: 75px;
	border: none;
}
.gr_ul1>li{
	width: 100%;
	text-align: left;
	height: 35px;
	line-height: 35px;
	margin-bottom: 20px;
}
.gr_ul1>li>label{
	font-size: 18px;
	color: #333333;
	margin-right: 20px;
}
.l_int1{
	width: 150px;
	padding-left: 20px;
	height: 33px;
	background: #F4F4F4;
	outline: none;
	font-size: 18px;
	color: #6F6F6F;
	border: 1px solid #D3D3D3;
}
.gr_li1{
    display: flex;
    align-items: center;
}
.gr_s1{
	width: 15px;
	height: 15px;
	border: 1px solid #BEBEBE;
	border-radius: 50%;
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: #FFFFFF;
}
.active{
	border-color:#3E9444;
}
.active1{
	background: #3E9444;
}
.gr_s2{
	width: 8px;
	height: 8px;
	border-radius: 50%;
}
.gr_p4{
	font-size: 18px;
	color: #666666;
	margin-right: 35px;
}
.gr_p5{
	width: 150px;
	height: 33px;
	padding-left: 20px;
	font-size: 18px;
	color: #6F6F6F;
	background: #F4F4F4;
	border: 1px solid #D3D3D3;
	margin-right: 20px;
}
.gr_p6 a{
	font-size: 18px;
	color: #3E9444;
	text-decoration: none;
}

.gr_dd2{
	width: 100%;
	height: 50px;
	margin-top: 35px;
}
.gr_dd2>p{
	width: 150px;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
	background: #F78327;
	color: #FFFFFF;
	font-size: 20px;
	margin-left: 145px;
	cursor: pointer;
}
select{
	width: 110px;
	height: 35px;
	border: 1px solid #D3D3D3;
	border-radius: 0px;
	font-size: 16px;
	color: #333333;
	position: relative;
	outline: none;
	background: #FFFFFF;
}
.gr_p7{
	font-size: 16px;
	color: #333333;
	margin: 0 25px 0 10px;
}
</style>