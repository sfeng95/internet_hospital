import {post,get} from './tools/request.js';
export function news = res => post('/hospital/news/list',res)
