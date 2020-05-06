/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import router from "../router";
import Toast from '@nutui/nutui/dist/packages/toast/toast.js'; // 加载构建后的JS
import '@nutui/nutui/dist/packages/toast/toast.css'; //加载构建后的CSS

let Loading = null
// 环境的切换
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV == 'debug') {
	axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = 'http://122.112.206.233:9528';
}

// 请求超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
	config => {
		Loading = Toast.loading('加载中...', {
			customClass: 'customLoading',
			// icon:'data:image/png;base64,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'
		});
		let token = localStorage.getItem('token')
		if (token) {
			config.headers['X-TOKEN'] = token;
		}
		return config;
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	response => {
		Loading.hide()
		if (response.status === 200) {
			switch (response.data.code ){
				case '403':
					Toast.text('登录已失效')
					localStorage.removeItem('token')
					return
				case '400':
				case '9998':
					Toast.text('请查看是否填写完成填写')
					break;
				default:
					break;
			}
		
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	// 服务器状态码不是200的情况
	error => {
		Loading.hide()
		if (error.response.status) {
			switch (error.response.status) {
				case 401:
					Toast.text('您没有访问权限')
					break;
				case 403:
					Toast.text('暂时无法访问')
					break;
				case 404:
					Toast.text('无法访问服务器')
					break;
				case 408:
					Toast.text('请求超时')
					break;
				case 500:
					Toast.text(error.response.data.message)
					break;
				default:
					Toast.text('未知错误,请检查网络')
					break;
			}
			return Promise.reject(error.response);
		}
	}
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(
				url, {
					withCredentials: true,
					params: params
				}
			)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(
				url,
				params, {
					withCredentials: true
				}
			)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
