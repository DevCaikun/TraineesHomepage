import axios from "axios";

//利用axios.create方法创建一个axios实例,可以设置基础路径/超时设置
const request = axios.create({
    baseURL:"/api",//请求的基础路径设置
    timeout:1000,//超时时间设置,超出5秒即请求失败
});

//请求拦截器
request.interceptors.request.use((config:any)=>{

    config.headers.token = "CheryNewEnergySPS";

    //config:请求拦截器回调注入的对象(配置对象),配置对象的身上最终要的一件事headers属性
    //可以通过请求头写到公共参数如token
    return config;
});

//响应拦截器
request.interceptors.response.use((response) => {
        //响应拦截器成功的回调,一般会进行简化数据
        return response.data;
    },
    (error) => {
        // 处理http网络错误
        let status = error.response.status;
        switch (status) {
            case 404:
                console.log("404:", error.message);
                break;
            case 500 | 501 | 502 | 503 | 504 | 505:
                console.log("500:", error.message);
                break;
        }
        return Promise.reject(new Error(error.message));
    }
);

//对外暴露
export default request;
