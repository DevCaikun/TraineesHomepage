//Home组件相关功能网络数据请求接口

// 引入二次封装的axios请求基础类
import request from "@/api/baseRequest.ts";
import type {siteArr} from "@/api/home/type.ts";

enum API {
    //获取所有站点的数据
    SITE_URL = "/home/site/",
}

export const reqGetSiteList = () => request.get<any, siteArr>(API.SITE_URL);
