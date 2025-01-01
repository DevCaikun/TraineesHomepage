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
      '@': path.resolve('./src'), //相对路径别名配置，使用 @ 符代替src
    },
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    cors: true,
    proxy: {
      //
    },
  },
})
