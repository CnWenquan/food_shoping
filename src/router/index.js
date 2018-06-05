import Vue from 'vue'
import Router from 'vue-router'
import ContentNav from '@/components/content-nav'
import imgShow from '@/components/imgShow'
import imgShow1 from '@/components/imgShow1'
import Shouye from "@/components/shouye"
import Tongcheng from "@/components/tongcheng"
import Friday from "@/components/Fri-shophome"
import Daohang from "@/components/zhuanti-daohang"
import Youxianbz from "@/components/yxbz"
import shopFenlei from "@/components/shop-fenlei"
import kong from "@/components/sorry-null"
import sResult from "@/components/shop-sousuo"
// 个人中心
import aA from "@/components/aa"
import wdzh from "@/components/wdzh"
import order from '@/components/order'
import Mypoints from '@/components/Mypoints'
import IntegralOrder from '@/components/IntegralOrder'
import jfxq from '@/components/jfxq'
import wdqb from '@/components/wdqb'
import grzl from '@/components/grzl'
import dzgl from '@/components/dzgl'
import wdsc from '@/components/wdsc'
import zjll from '@/components/zjll'
import xgmm from '@/components/xgmm'
import sdmm from '@/components/sdmm'
import wdxx from '@/components/wdxx'
import xxxq from '@/components/xxxq'
import yjfk from '@/components/yjfk'
import ddxq from '@/components/ddxq'
import czdh from '@/components/czdh'
import wdzd from '@/components/wdzd'
import tjdz from '@/components/tjdz'
import hbsj1 from '@/components/hbsj1'
import bdsj from '@/components/bdsj'
import ddpj from '@/components/ddpj'
// 购物车
import indexx from "@/components/Index"
import Maincar from '@/components/Shopingcar/maincar.vue'
import Dingdan from '@/components/Shopingcar/dingdan.vue'
import Tijiao from '@/components/Shopingcar/tijiao.vue'
import Chakan from '@/components/Shopingcar/zhifuchenggong.vue'
// 积分商城
import aboutUs from '@/pages/1/aboutUs'
import jifen from '@/pages/1/jifen'
import integral from '@/pages/1/integral'
import exchange from '@/pages/1/exchange'
import exchangeSuccess from '@/pages/1/exchangeSuccess'
import goodsDetail from '@/pages/1/goodsDetail'
import register from "@/pages/2/register"
import enter from "@/pages/2/enter"
import phoneEnter from "@/pages/2/phoneEnter"
import forgetPass from "@/pages/2/forgetPass"
// 404
import sos from "@/components/aa404"

// userCtrl
import userCtrl from "@/pages/2/userCtrl"
import shopCtrl from "@/pages/2/shopCtrl"
import carCtrl from "@/pages/2/carCtrl"
import adressCtrl from "@/pages/2/adressCtrl"
import userlf from "@/pages/2/userlf"
import jifenCtrl from "@/pages/2/jifenCtrl"

// 奇异果
//import qiyiguo from "@/components/qiyiguo"

import leave from '@/components/leaveWord'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'contentNav',
			component: ContentNav,
			children: [{
							path: '/shouye',
							name: 'shouye',
							component: Shouye
						},
						{
							path: '/',
							component: Shouye
						},
						{
							path: '/tongcheng',
							component: Tongcheng
						},
						{
							path: '/imgShow',
							component: imgShow
						},
						{
							path: '/imgShow1',
							component: imgShow1
						},
						{
							path: '/libaiwu',
							component: Friday
						},
						{
							path: '/jifen',
							component: jifen
						},
						{
							path: '/integral',
							component: integral
						},
						{
							path: '/daohang',
							component: Daohang
						},
						{
							path: '/yxbz',
							component: Youxianbz
						},
						{
							path: '/shopfenlei',
							component: shopFenlei
						},
						{
							path: '/kong',
							component: kong
						},
						{
							path: '/leave',
							component: leave
						},
						{
							path: 'sResult',
							component: sResult
						},
						{
							path: '/goodsDetail',
							component: goodsDetail
						},
						{
							path: '/aboutUs',
							component: aboutUs
						},
//						{
//							path: '/qiyiguo',
//							component: qiyiguo
//						},
						{
							path: '/aa/wdzh',
							component: aA,
							children: [{
								path:"/aa/wdzh",
								component:wdzh
							},
							{
						        path: '/aa/order',
						        component: order
						    },
						    {
						        path: '/aa/Mypoints',
						        component: Mypoints
						    },  
						    {
						        path: '/aa/IntegralOrder',
						        component: IntegralOrder,
						    },
						    {
						      	  path: '/aa/wdqb',
						        component: wdqb,
						    },
						    {
						    	    path: '/aa/grzl',
						        component: grzl,
						    },
						    {
						    	    path: '/aa/dzgl',
						        component: dzgl,
						    },
						    {
						      	  path: '/aa/wdsc',
						        component: wdsc, 
						    },
						    {
						      	  path: '/aa/zjll',
						        component: zjll, 
						    },
						    {
						      	  path:'/aa/xgmm',
						      	  component: xgmm, 
						    },
						    {
						      	  path:'/aa/wdxx',
						      	  component: wdxx,
						    },
						    {
						      	  path:'/aa/xxxq',
						      	  component: xxxq,
						    },
						    {
						      	  path:'/aa/yjfk',
						      	  component: yjfk,  
						    },
						    {
						      	  path:'/aa/ddxq',
						      	  component: ddxq,
						    },
						    {
						  	      path: '/aa/jfxq',
						        component: jfxq
						    },
						    {
						      	  path: '/aa/czdh',
						        component: czdh,
						    },
						    {
						      	  path:'/aa/wdzd',
						      	  component: wdzd,
						    },
						    {
						      	  path:'/aa/tjdz',
						      	  component: tjdz, 
						    },
						    {
						      	  path:'/aa/hbsj1',
						      	  component: hbsj1, 
						    },
						    {
						      	  path:'/aa/ddpj',
						      	  component: ddpj,
						    }
							]
						}
					]
			
	},
	{
		path: '/Index/maincar',
		component: indexx,
		children:[
      	{
      		path: '/Index/maincar',
      		name: 'maincar',
      		component: Maincar	
      	},
      	{
      		path: '/Index/dingdan',
      		name: 'dingdan',
      		component: Dingdan	
      	},
      	{
      		path: '/Index/tijiao',
      		name: 'tijiao',
      		component: Tijiao	
      	},
      	{
      		path: '/Index/chakan',
      		name: 'chakan',
      		component: Chakan	
      	}
      ]
	},
	{
		path: '/exchange',
		component: exchange
	},
	{
		path: '/exchangeSuccess',
		component: exchangeSuccess
	},
	{
		path: '/enter',
		component: enter
	},
	{
		path: '/register',
		component: register
	},
	{
		path: '/forgetPass',
		component: forgetPass
	},
	{
		path: '/phoneEnter',
		component: phoneEnter
	},
	{
		path: '/404',
		component: sos
	},
	{
		path: "/userCtrl",
		component: userCtrl,
		children:[
			{
				path: '/shopCtrl',
				component: shopCtrl
			},
			{
				path: '/carCtrl',
				component: carCtrl
			},
			{
				path: '/adressCtrl',
				component: adressCtrl
			},
			{
				path: '/userlf',
				component: userlf
			},
			{
				path: '/jifenCtrl',
				component: jifenCtrl
			}
		]
	}
	

	]
})