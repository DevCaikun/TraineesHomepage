import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node提供的内置模块path:可以获取绝对路径,需要安装 "@types/node": "^20.11.10",
import path from "path"
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), //相对路径别名配置，使用 @ 符代替src
    },
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    cors: true,
    proxy: {
      // 设置需要代理的请求路径为以 /api 开头的请求。
      '/api': {
        // 指定代理服务器的目标地址为 http://192.168.1.47:1856。所有以 /api 开头的请求将被转发到该地址。
        target: 'http://192.168.1.196:8098',
        // 设置请求头中的 Origin 字段为目标地址。这样可以绕过一些安全限制。
        changeOrigin: true,
        // 如果后端没有处理api路径的前提下
        // 将请求路径中以 /api 开头的部分替换为空字符串。这样可以去除请求路径中的 /api 部分，以符合目标服务器的路由规则。
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
