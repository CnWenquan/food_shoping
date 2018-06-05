<template>
  <nav class="nav1">
    <ul class="pagination">
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)" class="a1"> <img src="../images/icon/l_left1.png"/> </a></li>
      <!--<li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>-->
      <li v-for="p in grouplist" :class="{'aa': current == p.val}"><a href="javascript:;"
                                                                          @click="setCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <!--<li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>-->
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)" class="a1"> <img src="../images/icon/l_right1.png"/></a></li>
      <input type="text" value="" class="input11" />
    </ul>
    <p class="aaa1">/10</p>
    <button @click="tiaozhuany()">跳转</button>
  </nav>
</template>

<script>
	
  export default{
    data(){
      return {
        current: this.currentPage
        
      }
    },
    props: {
      total: {// 数据总条数
        type: Number,
        default: 100
      },
      display: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          ;
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        ;
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      },
      tiaozhuany(){
 		var idx = Number($(".input11").val());
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
        }
 	},
 	setCurrent4: function() {
				var a = 0;
				var b = 8;
				this.data1 = this.qiyidata.slice(a, b)
			}
   },
   mounted(){
   	 this.setCurrent4();
   }
  }
</script>

<style scoped>
.pagination {
	    overflow: hidden;
	    display: table;
	    margin: 10px auto;
	    /*width: 100%;*/
	    width: 700px;;
	    height: 30px;
	    border: none;
	}
  .pagination li {
	    float: left;
	    height: 30px;
	    border-radius: 5px;
	    margin: 3px;
	    color: #666;
	}	
  .pagination li:first-child{
  	    margin-left: 50px;
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
	.a1{
		background: #CCCCCC;
	}
	.a1>img{
		margin-top: 3px;
	}
.nav1{
		position: relative;
	}
	.input11{
		/*position: absolute;*/
		margin-left: 50px;
		top: 4px;
		width: 40px;
		height: 25px;
		font-size: 22px;
	}
	.aaa1{
		position: absolute;
		left: 900px;
		font-size: 22px;
		top: 4px;	
	}
	.nav1 button{
		width: 40px;
		height: 25px;
		border: none;
		background: #F08200;
		position: absolute;
		left: 950px;
		font-size: 12px;
		top: 4px;	
		
	}

</style>