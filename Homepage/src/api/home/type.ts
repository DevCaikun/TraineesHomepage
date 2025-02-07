//首页相关接口

//引入基础接口返回的数据的基础数据类型
import type {baseResponseData} from "@/api/baseResponseData.ts";

export interface site {
    "title": string,
    "introduce": string,
    "img": string,
    "link": string,
}

export type siteArr = site[];

export interface siteData extends baseResponseData {
    data: site;
}
export interface siteListData extends baseResponseData {
    data: siteArr;
}
