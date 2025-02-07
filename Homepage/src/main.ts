import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入路由
import instanceRouter from "./router"
//引入路由守卫
import "./router/guards.ts";

import Antd from 'ant-design-vue';
import { ConfigProvider } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'

const vueApp = createApp(App);

vueApp.use(instanceRouter);
vueApp.use(Antd);
vueApp.use(ConfigProvider);

vueApp.mount('#app');
