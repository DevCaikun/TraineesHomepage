/// <reference types="vite/client" />

//vite使用的是ts，ts不识别.vue 后缀的文件 的解决办法
declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>;
    export default component
}
