# vue3-start-template

<h1 align="center"><a href="https://github.com/huatten/vue3-start-template" target="_blank">Vite4 - Vue3 - Pinia Start Template</a></h1>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/">
    <img src="https://img.shields.io/node/v/vite.svg" alt="node compatility" />
  </a>
  <a href="https://cn.vitejs.dev" rel="nofollow">
    <img src="https://img.shields.io/badge/vite-4.3.9-3963bc.svg" alt="vite" style="max-width:100%;" />
  </a>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.3.4-brightgreen.svg" alt="vue" />
  </a>
  <a href="https://github.com/vuejs/router">
    <img src="https://img.shields.io/badge/vue--router-4.2.2-brightgreen.svg" alt="vue-router" />
  </a>
  <a href="https://github.com/vuejs/pinia">
    <img src="https://img.shields.io/badge/pinia-2.1.3-brightgreen.svg" alt="pinia" />
  </a>
  <a href="https://github.com/ElanYoung/vite-vue-js-starter-template/blob/master/LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/github/license/ElanYoung/vite-vue-js-starter-template.svg" />
  </a>
</p>

<p align='center'>
  <b>Vite4</b> + <b>Vue3</b> + <b>JavaScript</b> + <b>Vue Router</b> + <b>Pinia</b> + <b>TDesign</b> + <b>Sass</b> + <b>Axios</b> + <b>ESLint + Stylelint + Prettier</b>
</p>



### 介绍 📖

vue3-start-template 基于 Vue3.3、Vite4、Pinia 开发构建用于初始化项目的模板。

### 特性概览 🎨

+ ⚡️ [Vite 4](https://github.com/vitejs/vite) - born with fastness
+ 🖖 [Vue 3](https://github.com/vuejs/core) - Composition API and `<script setup>`
+ 🚦 [Vue Router](https://github.com/vuejs/router) - The official router for Vue.js.
+ 📦 [Pinia](https://github.com/vuejs/pinia) - Intuitive, type safe and flexible Store for Vue
+ 💻 [TDesign](https://github.com/Tencent/tdesign-vue-next) - Vue Next for Web
+ 🎨 [Sass](https://github.com/scss/scss.js) - It's CSS, with just a little more
+ 🔗 [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
+ 🧰 [Husky](https://typicode.github.io/husky/#/) + [Lint-Staged](https://github.com/okonet/lint-staged) - Git Hook Tools
+ 🛡️ [EditorConfig](http://editorconfig.org) + [ESLint](http://eslint.org) + [Prettier](https://prettier.io) + [Stylelint](https://stylelint.io) + [AlloyTeam JavaScript Style Guide](https://github.com/AlloyTeam/eslint-config-alloy/tree/master) - Code Standards
+ 🔨 [Commitizen](https://cz-git.qbb.sh/zh) + [Commitlint](https://commitlint.js.org) - Submit Standards

### 代码规范格式化 🔨

- Prettier
  > 配置参考：https://www.prettier.cn
- ESLint
  > 配置参考：https://eslint.org/docs/user-guide/configuring
- Stylelint
  > 配置参考：https://stylelint.io


### 开发工具 📔

+ [npm](https://www.npmjs.com) - 包管理器
+ [Visual Stuido Code 扩展](./.vscode/extensions.json)
  + [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  + [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 一套用于统一代码格式的解决方案
  + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 可组装的JavaScript和JSX检查工具
  + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化工具
  + [StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - CSS 代码规范工具


### 文件资源目录 📚

```text
vue3-start-template
├─ .vscode                # VSCode 推荐配置
├─ public                 # 静态资源文件（该文件夹不会被打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ directives          # 全局指令文件
│  ├─ hooks               # hooks封装
│  ├─ routers             # 路由管理
│  ├─ stores              # pinia store
│  ├─ styles              # 全局样式文件
│  ├─ utils               # 常用工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 项目主组件
│  ├─ main.js             # 项目入口文件
├─ .commitlintrc.js       # commit提交规范配置
├─ .editorconfig          # 统一不同编辑器的编码风格
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置文件
├─ .gitignore             # 忽略 git 提交
├─ .npmcheckrc            # npm包检查忽略文件
├─ .prettierignore        # 忽略 Prettier 格式化
├─ .prettierrc.js         # Prettier 格式化配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ index.html             # 入口 html
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ .postcssrc.js          # postcss 配置
├─ README.md              # README 介绍
├─ CHANGELOG.md           # 更新日志
└─ vite.config.js         # vite 全局配置文件
```
