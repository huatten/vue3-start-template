// https://vitejs.dev/config/
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import minipic from 'vite-plugin-minipic'
import ViteRestart from 'vite-plugin-restart'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
const url = 'http://devgateway.zhixuehuijiao.cn/'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  return {
    base: '/',
    plugins: [
      // vue支持
      vue(),
      // JSX支持
      vueJsx(),
      // setup语法糖组件名支持
      vueSetupExtend(),
      // 用于生成 svg 雪碧图
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        // 自定义插入位置
        inject: 'body-last',
        // custom dom id
        customDomId: '__svg__icons__dom__',
      }),
      // NaiveUi vue vue-router pinia按需引入
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      // 用于生成 svg 雪碧图
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg-icon')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        // 自定义插入位置
        inject: 'body-last',
        // custom dom id
        customDomId: '__svg__icons__dom__',
      }),
      // 监听配置文件修改自动重启Vite
      ViteRestart({
        restart: ['*.config.[jt]s', '**/config/*.[jt]s'],
      }),
      // 打包开启.gz压缩
      isBuild &&
      viteCompression({
        verbose: true, // 默认即可
        disable: false, // 开启压缩(不禁用)，默认即可
        deleteOriginFile: false, // 删除源文件
        threshold: 10240, // 压缩前最小文件大小
        algorithm: 'gzip', // 压缩算法
        ext: '.gz', // 文件类型
      }),
      // 图片压缩
      isBuild &&
      minipic({
        sharpOptions: {
          png: {
            quality: 70,
          },
          jpeg: {
            quality: 33,
          },
          jpg: {
            quality: 70,
          },
        },
        convert: [
          { from: 'png', to: 'webp' },
          { from: 'jpg', to: 'webp' },
          { from: 'jpeg', to: 'webp' },
        ],
        cache: true,
      }),
      // 打包分析
      isBuild && visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        filename: "visualizer.html",
        open:false
      }),
    ],
    resolve: {
      // 路径别名
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      // 使用路径别名时想要省略的后缀名，可以自己增减
      extensions: ['.js', '.json', '.ts', '.vue'],
    },
    build: {
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
      target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
      chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
      assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          // 分包
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
            naive: ['naive-ui'],
          },
          // 静态资源分类
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          charset: false, // 避免出现: build时的 @charset 必须在第一行的警告
        },
      },
      postcss: {
        plugins: [
          // 自动添加前缀
          autoprefixer({
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 10'],
            grid: false,
          }),
        ],
      },
    },
    server: {
      hmr: { overlay: true }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: 80, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy: {
        '/api': {
          target: url,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
