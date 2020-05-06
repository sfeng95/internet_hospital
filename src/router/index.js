import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: () => import('../views/主页.vue'),
		redirect: '/index',
		meta: {
			keepAlive: true //需要被缓存的组件
		},
		children: [{
				path: 'index',
				name: 'index',
				component: () => import('../views/childrens/首页.vue'),
			},
			{
				path: 'wzlb',
				name: 'wzlb',
				component: () => import('../views/childrens/问诊列表.vue'),
			},
			{
				path: 'mine',
				name: 'mine',
				component: () => import('../views/childrens/我的.vue'),
			}
		]
	},
	{
		path: '/jkkp',
		name: 'jkkp',
		component: () => import('../views/childrens/page/健康科普.vue'),
	},
	{
		path: '/dz',
		name: 'dz',
		component: () => import('../views/childrens/page/导诊.vue'),
		redirect: '/dz/dzjd',
		children: [{
				path: 'dzjd',
				name: 'dzjd',
				component: () => import('../views/childrens/page/导诊/导诊接待.vue'),
			},
			{
				path: 'ppyy',
				name: 'ppyy',
				component: () => import('../views/childrens/page/导诊/匹配医生.vue'),
			},
		]
	},
	{
		path: 'yspd',
		name: 'yspd',
		component: () => import('../views/childrens/page/导诊/在线沟通.vue'),
	},
	{
		path: '/dzbl',
		name: 'dzbl',
		component: () => import('../views/childrens/page/电子病例.vue'),
	},
	{
		path: '/wdwz',
		name: 'wdwz',
		component: () => import('../views/childrens/page/我的问诊.vue'),
	},
	{
		path: '/wz',
		name: 'wz',
		component: () => import('../views/childrens/page/问诊.vue')
	},
	{
		path: '/xzks',
		name: 'xzks',
		component: () => import('../views/childrens/page/选择科室.vue')
	},
	{
		path: '/zf',
		name: 'zf',
		component: () => import('../views/childrens/page/支付.vue')
	},
	// {
	// 	path: '/dhwz',
	// 	name: 'dhwz',
	// 	component: () => import('../views/childrens/page/电话问诊.vue')
	// },
	// {
	// 	//id 医院id
	// 	path: '/yyghks/:id',
	// 	name: 'yyghks',
	// 	component: () => import('../views/childrens/page/预约挂号科室.vue')
	// },
	// {
	// 	path: '/yyzy',
	// 	name: 'yyzy',
	// 	component: () => import('../views/childrens/page/医院主页.vue')
	// },
	{
		path: '/xzys/:id',
		name: 'xzys',
		component: () => import('../views/childrens/page/选择医生.vue')
	},
	{
		//id 医生id
		path: '/ysxq',
		name: 'ysxq',
		component: () => import('../views/childrens/page/医生详情.vue')
	},
	{
		path: '/ghxx',
		name: 'ghxx',
		component: () => import('../views/childrens/page/挂号信息.vue')
	},
	{
		path: '/ghcg',
		name: 'ghcg',
		component: () => import('../views/childrens/page/挂号成功.vue')
	},
	{
		path: '/ddxq',
		name: 'ddxq',
		component: () => import('../views/childrens/page/订单详情.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/childrens/page/登录.vue')
	},
	{
		path: '/jzrgl',
		name: 'jzrgl',
		component: () => import('../views/childrens/page/就诊人管理.vue')
	},
	{
		path: '/tjjzr',
		name: 'tjjzr',
		component: () => import('../views/childrens/page/添加就诊人.vue')
	},
	{
		path: '/jbxx',
		name: 'jbxx',
		component: () => import('../views/childrens/page/基本信息.vue')
	},
	{
		path: '/tpjq',
		name: 'tpjq',
		component: () => import('../views/childrens/page/图片剪切.vue')
	},
	// {
	// 	path: '/ysjj/:id',
	// 	name: 'ysjj',
	// 	component: () => import('../views/childrens/page/医生简介.vue')
	// },
	{
		path: '/wdcf',
		name: 'wdcf',
		component: () => import('../views/childrens/page/我的处方.vue')
	},
	{
		path: '/xsgy',
		name: 'xsgy',
		component: () => import('../views/childrens/page/线上购药.vue')
	},
	{
		path: '/ypddxq',
		name: 'ypddxq',
		component: () => import('../views/childrens/page/药品订单详情.vue')
	},
	{
		path: '/qrzf',
		name: 'qrzf',
		component: () => import('../views/childrens/page/确认支付.vue')
	},
	{
		path: '/xxts',
		name: 'xxts',
		component: () => import('../views/childrens/page/消息推送.vue')
	},
	{
		path: '*',
		name: 'notfount',
		component: () => import('../views/404.vue')
	}

]

const router = new VueRouter({
	routes
})

//权限白名单['路由name']
const write = ['index', 'login', 'jbxx', 'notfount']
//to 即将进入的路由
//from 来自哪个路由
router.beforeEach((to, from, next) => {

	if (write.indexOf(to.name) != -1) {
		// 如果在白名单里面 就直接跳转
		next()
	} else {
		// 没在白名单中/ 进行检测 是否登录
		if (localStorage.getItem('token') != null) {

			if (sessionStorage.getItem('isInfo') == 'true' || sessionStorage.getItem('isInfo') == null) {
				next()
			} else {
				next({
					path: '/jbxx'
				})
			}

		} else {
			next({
				path: '/login'
			})
		}
	}
})

export default router
