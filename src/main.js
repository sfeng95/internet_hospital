import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NutUI from "@nutui/nutui";
import axios from "axios";
import common from "./common/common.js";
import "@nutui/nutui/dist/nutui.scss";
import {post,get} from './tools/request.js'
import Vconsole from 'vconsole'

NutUI.install(Vue);
Vue.config.productionTip = false;
Vue.prototype.$common = common;
//环境的切换
if (process.env.NODE_ENV == 'development') {
	//图片需要补全地址
	Vue.prototype.$api = "http://122.112.206.233:8081/";
	// let vconsole = new Vconsole()
} else if (process.env.NODE_ENV == 'debug') {
} else if (process.env.NODE_ENV == 'production') {
} 

Vue.prototype.$axios = axios;
Vue.prototype.$post = post;
Vue.prototype.$get = get;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

