var express = require("express");
var  app = new express();
var mongoose = require("mongoose");

//默认连接的数据库是test,链接user写在connect里面这直接写user
var db = mongoose.connect('mongodb://127.0.0.1:27017/Friday');
db.connection.on('error',function (err) {
    console.error("连接数据库未遂"+err);
});
db.connection.on('open',function () {
    console.log("连接数据库成功");
});

// schema:一种以文件形式存储的数据模型骨架
var Pschema = new mongoose.Schema({
        src:{type:String},
        name:{type:String},
		js:{type:String},
		src2:{type:String},
		aName:{type:String},
		aJs:{type:String},
		xPrice:{type:String},
		yPrice:{type:String},
		score:{type:String},
		price:{type:String},
		num:{type:String},
		size:{type:String}
	},
    {collection:'Thing'});
var Model = db.model('Thing',Pschema);
app.get('/thing',function (req,res) {
    Model.find({},function(err,doc){
        if(err){
            console.error("查找未遂");
        }else{
            res.send(doc);
        }

    });
});


// 添加到购物车
var Pschema2 = new mongoose.Schema({
		shop:{type:String},
		src:{type:String},
    name:{type:String},
    size:{type:String},
    price:{type:Number,default:0},
		num:{type:Number,default:0},
		total:{type:Number,default:0},
		zongtotal:{type:Number,default:0},
		showImgs:{type:Boolean},
		showImg:{type:Boolean}
	},
    {collection:"shopCar"});
var Model2 = db.model('shopCar',Pschema2);
// 添加内容
app.get('/add',function (req,res) {
    var shop = req.query.shop;
    var src = req.query.src;
    var name = req.query.name;
    var size = req.query.size;
    var price = req.query.price;
    var num = req.query.num;
    var total = req.query.total;
    var zongtotal = req.query.zongtotal;
    var showImgs = req.query.showImgs;
    var showImg = req.query.showImg;
    Model2.create({shop:shop,src:src,name:name,size:size,price:price,num:num,total:total,zongtotal:zongtotal,showImgs:showImgs,showImg:showImg},function (err) {
        if (err){
            console.error('添加失败');
        }else {
            Model2.find({},function (err,doc) {
                if(err){
                    console.log('查找未遂');
                }else {
                    res.send(doc);
                }
            });
        }
    });
});

//购物车查询
app.get('/cc',function (req,res) {
    Model2.find({},function (err,doc) {
	    if(err){
	        console.error('查找未遂')
	    } else{

	    	var shops = {};

	    	for (var i = doc.length - 1; i >= 0; i--) {

	    		// console.log(shops.hasOwnProperty(doc[i]['shop']))
	    		// console.log(doc[i]['shop'])
	    		if (shops.hasOwnProperty(doc[i]['shop'])) {
	    			shops[doc[i]['shop']]['zongtotal'] += doc[i]['total']
	    			shops[doc[i]['shop']]['data'].push(doc[i])
	    		}else{
	    			shops[doc[i]['shop']] = {};
	    			shops[doc[i]['shop']]['zongtotal'] = doc[i]['total']
	    			shops[doc[i]['shop']]['data'] = []
	    			shops[doc[i]['shop']]['data'].push(doc[i])
	    		}

	    		console.log(shops)
	    	}

	        res.send(shops);
	    }
	});
});

app.get('/delcar',function (req,res) {
    var name = req.query.name;
    Model2.remove({name:name},function(err){
        if(err){
            console.error("删除失败");
        }else{
              res.send("删除成功");

            };
        });
    });



// 用户注册登录
var Pschema3 = new mongoose.Schema({
					        name:{type:String},
					        pass:{type:String}},
							{collection:'User'});

var Model3 = db.model('User',Pschema3);

//登录部分
app.get('/enter',function (req,res) {
 	  var name	= req.query.name;
  	var pass = req.query.pass;
    Model3.find({},function(err,doc){
        if(err){
          res.send("登录失败")
        }else{
          res.send(doc)
        }
    });
});

//修改密码部分
app.get('/forgetPass',function (req,res) {
 	var name	= req.query.name;
  	var pass = req.query.pass;
    Model3.update({name:name},{$set:{pass:pass}},{multi:true},function (err) {
	    if(err){
	       console.error("更新失败");

	    }else{
	        console.log("更新成功");
	    }
	})
});

//删除
app.get('/delet',function (req,res) {
    var id = req.query.id;
    Model3.remove({_id:id},function (err) {
        if(err){
            console.error("删除未遂");

        }else{
            Model3.find({},function(err,doc){
                if(err){
                    console.error("查找未遂");
                }else{
                    res.send(doc);
                }

            });
        }
    });
})

//注册部分
app.get("/register",function (req,res) {
    debugger
    var name= req.query.name;
    var pass = req.query.pass;


    Model3.find({name:name},function(err,doc){
    	if (err) {
    		console.error("查询失败");
    	}else if(doc.length !=0){
    		console.error(doc);
    		res.send({"status":"error","code":400,"message":"该账号已注册"});
    	}else{
    		Model3.create({name:name,pass:pass},function (err,doc) {
		        if(err){
		            res.send({"status":"error","code":400,"message":"添加失败"});
		        }else{
		            res.send({"status":"error","code":200,"message":"注册成功"});
		        }
		    })
    	}
    })

    
});
//积分商城主页数据
var Pschema4 = new mongoose.Schema({
        img:{type:String},
        name:{type:String},
		intro:{type:String},
		score:{type:String},
		price:{type:String},
},

    {collection:'jiFen'

    });
var Model4 = db.model('jiFen',Pschema4);

app.get('/jifen',function (req,res) {
    Model4.find({},function(err,doc){
		if(err){
			res.send("调取失败")
		}else{
			res.send(doc)
		}
    });
});
//积分订单数据
var Pschema5 = new mongoose.Schema({
        img:{type:String},
        name:{type:String},
		score:{type:String},
		num:{type:String},
		size:{type:String}
},

    {collection:'jfDing'

    });
var Model5 = db.model('jfDing',Pschema5);

app.get('/integral',function (req,res) {
	var img= req.query.img;
    var name = req.query.name;
    var score= req.query.score;
    var num = req.query.num;
    var size= req.query.size;
    Model5.create({img:img,name:name,score:score,num:num,size:size},function(err,doc){
		if(err){
			res.send("插入数据失败")
		}else{
			res.send(doc)
		}
    });
});
//订单调取数据
app.get('/exchange',function (req,res) {
    Model5.find({},function(err,doc){
		if(err){
			res.send("调取数据失败")
		}else{
			res.send(doc)
		}
    });
});


//搜索
var Pschema6 = new mongoose.Schema({
        name:{type:String},
        sheng:{type:String},
        shi:{type:String},
        xian:{type:String},
        adres:{type:String},
        tel1:{type:String},
        tel2:{type:String},
        tel3:{type:String},
},
    {collection:'Adress'
   }) ;
//搜索
var Model6 = db.model('Adress',Pschema6);
app.get('/dzgl',function (req,res) {
    Model6.find({},function(err,doc){
        if(err){
            console.error("查找未遂");
        }else{
            res.send(doc);
        }
    });
});
//插入
// var Model1 = db.model('Adress',Pschema);
app.get('/tjdz',function (req,res) {
	var name = req.query.name;
	var sheng = req.query.sheng;
	var shi = req.query.shi;
	var xian = req.query.xian;
	var adres = req.query.adres;
	var tel1 = req.query.tel1;
	var tel2 = req.query.tel2;
	var tel3 = req.query.tel3;
	Model6.create({name:name,sheng:sheng,shi:shi,xian:xian,adres:adres,tel1:tel1,tel2:tel2,tel3:tel3},function(err,doc){
        if(err){
            console.error("添加失败");
        }else{
            res.send(doc);
        }
    });
});
//删除
app.get('/deldzgl',function (req,res) {
    var id = req.query.id;

	Model6.remove({_id:id},function(err){
        if(err){
            console.error("删除失败");
        }else{
        		Model6.find({},function(err,doc){
        			res.send(doc);
        		});
        }
    });
});
//积分订单搜索
//var Pschema7 = new mongoose.Schema({},{collection:'jfDing'}) ;
//var Model7 = db.model('jfDing',Pschema7);
app.get('/interOder',function (req,res){
    Model5.find({},function(err,doc){
        if(err){
            console.error("查找未遂");
        }else{
            res.send(doc);
        }
    });
});


//搜索
var Pschema8 = new mongoose.Schema({},{collection:'foodList'}) ;
//搜索
var Model8 = db.model('foodList',Pschema8);
app.get('/foodList',function (req,res) {
    Model8.find({},function(err,doc){
        if(err){
            console.error("查找未遂");
        }else{
            res.send(doc);
        }
    });
});


app.listen(3000);
