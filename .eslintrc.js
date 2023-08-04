const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  rules: {
    // 禁止使用多余的包
    'import/no-extraneous-dependencies': 0,
    // 确保在导入路径内一致使用文件扩展名
    'import/extensions': 0,
    // 确保导入指向可以解析的文件/模块
    'import/no-unresolved': 0,
    // 首选默认导出导入/首选默认导出
    'import/prefer-default-export': 0,
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 禁止使用 new 以避免产生副作用
    'no-new': 1,
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 0,
    // 禁用 console
    'no-console': 0,
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 0,
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 0,
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': 0,
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 0,
    // 禁用特定的语法
    'no-restricted-syntax': 0,
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 0,
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 0,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止重复模块导入
    'no-duplicate-imports': 'error',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁止不必要的转义字符
    'no-useless-escape': 0,
    // 禁用 continue 语句
    'no-continue': 0,
    // 强制使用一致的缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    // 强制使用骆驼拼写法命名约定
    camelcase: 0,
    // 强制类方法使用 this
    'class-methods-use-this': 0,
    // 要求构造函数首字母大写
    'new-cap': 0,
    // 强制一致地使用 function 声明或表达式
    'func-style': 0,
    // 强制一行的最大长度
    'max-len': 0,
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 0,
    // 强制switch要有default分支
    'default-case': 2,
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'error',
    // 只强制对象解构，不强制数组解构
    'prefer-destructuring': ['error', { object: true, array: false }],
    //  数组的方法除了 forEach 之外，回调函数必须有返回值
    'array-callback-return': 'error',
    // 禁止函数的循环复杂度超过 20
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
    // constructor 中必须有 super
    'constructor-super': 'error',
    // 必须使用 === 或 !==，禁止使用 == 或 !=
    eqeqeq: ['error', 'always'],
    // 禁止方向错误的 for 循环
    'for-direction': 'error',
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': ['error', 5],
    // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
    'max-nested-callbacks': ['error', 3],
    // 函数的参数禁止超过 5 个
    'max-params': ['error', 5],
    // 禁止将 async 函数做为 new Promise 的回调函数 出现这种情况时，一般不需要使用 new Promise 实现异步了
    'no-async-promise-executor': 'error',
    // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    'no-case-declarations': 'error',
    // 禁止对已定义的 class 重新赋值
    'no-class-assign': 'error',
    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',
    // 禁止对使用 const 定义的常量重新赋值
    'no-const-assign': 'error',
    // 禁止 if else 的条件判断中出现重复的条件
    'no-dupe-else-if': 'error',
    // 禁止在对象字面量中出现重复的键名
    'no-dupe-keys': 'error',
    // 禁止出现空代码块，允许 catch 为空代码块
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    // 禁止使用 foo == null，必须使用 foo === null
    'no-eq-null': 'error',
    // 禁止修改原生对象 @reason 修改原生对象可能会与将来版本的 js 冲突
    'no-extend-native': 'error',
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',
    // 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
    'no-implicit-coercion': [
      'error',
      {
        allow: ['!!'],
      },
    ],
    // 禁止将一个函数声明重新赋值
    'no-func-assign': 'error',
    // 禁止在 if 代码块内出现函数声明
    'no-inner-declarations': ['error', 'both'],
    // 禁止使用没必要的 {} 作为代码块
    'no-lone-blocks': 'error',
    // 禁止使用 new 来生成 Symbol
    'no-new-symbol': 'error',
    // 禁止使用 new 来生成 String, Number 或 Boolean
    'no-new-wrappers': 'error',
    // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
    'no-obj-calls': 'error',
    // 禁止在 Promise 的回调函数中直接 return
    'no-promise-executor-return': 'error',
    // 禁止将自己赋值给自己
    'no-self-assign': 'error',
    // 禁止将自己与自己比较
    'no-self-compare': 'error',
    // 禁止使用逗号操作符
    'no-sequences': 'error',
    // 禁止在数组中出现连续的逗号
    'no-sparse-arrays': 'error',
    // 禁止在 super 被调用之前使用 this 或 super
    'no-this-before-super': 'error',
    // 禁止将 undefined 赋值给变量
    'no-undef-init': 'error',
    // 禁止使用 undefined
    'no-undefined': 'off',
    // 已定义的变量必须使用
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'none',
      },
    ],
    // 禁止未使用过的表达式
    'no-unused-expressions': ['off', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],

    // vue eslint https://eslint.vuejs.org/

    /**
     * 支持在模版中使用 eslint-disable-next-line 等注释
     */
    'vue/comment-directive': 'error',
    /**
     * 组件名称必须是两个以上的单词
     */
    'vue/multi-word-component-names': 'off',
    /**
     * 组件中必须按照 <template>, <script>,<style> 排序
     */
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    /**
     * 约束 defineEmits 定义 emit 的格式
     */
    'vue/define-emits-declaration': 'off',
    /**
     * 必须按规则排序 defineEmits 和 defineProps
     */
    'vue/define-macros-order': 'error',
    /**
     * 约束 defineProps 定义 props 的格式
     */
    'vue/define-props-declaration': 'off',
    /**
     * 自定义事件名必须用 camelCase 风格
     */
    'vue/custom-event-name-casing': 'error',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    'vue/eqeqeq': ['error', 'always'],
    /**
     * watch 中禁止使用箭头函数
     */
    'vue/no-arrow-functions-in-watch': 'error',
    /**
     * 计算属性禁止包含异步方法
     */
    'vue/no-async-in-computed-properties': 'error',
    /**
     * 计算属性必须有返回值
     */
    'vue/return-in-computed-property': 'error',
    /**
     * emits 中的方法必须有返回值
     */
    'vue/return-in-emits-validator': 'error',
    /**
     * 禁止有 v-html 或 v-text 属性的标签内部还有内容
     */
    'vue/no-child-content': 'error',
    /**
     * 禁止 data() 中有计算属性
     */
    'vue/no-computed-properties-in-data': 'error',
    /**
     * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
     */
    'vue/no-constant-condition': 'off',
    /**
     * 禁止在 data 中使用已废弃的对象定义
     */
    'vue/no-deprecated-data-object-declaration': 'error',
    /**
     * 禁止使用已废弃的 destroyed 和 beforeDestroy 生命周期
     */
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    /**
     * 禁止使用已废弃的 $listeners
     */
    'vue/no-deprecated-dollar-listeners-api': 'error',
    /**
     * 禁止使用已废弃的 $scopedSlots
     */
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    /**
     * 禁止使用已废弃的 events 接口
     */
    'vue/no-deprecated-events-api': 'error',
    /**
     * 禁止使用已废弃的 filters 语法
     */
    'vue/no-deprecated-filter': 'error',
    /**
     * 禁止在模版中用 this
     */
    'vue/this-in-template': 'error',
    /**
     * 使用缩写的 : 而不是 v-bind:
     */
    'vue/v-bind-style': 'error',
    /**
     * ref属性定义了必须要使用
     */
    'vue/no-unused-refs': 'error',
    /**
     * 禁止属性定义了却未使用
     */
    'vue/no-unused-properties': 'error',
    /**
     * 禁止在同一个元素上使用 v-if 和 v-for 指令
     */
    'vue/no-use-v-if-with-v-for': 'error',
    /**
     * props 必须指定默认值
     */
    'vue/require-default-prop': 'error',
    /**
     * 禁止解构props eslint-plugin-vue v9.16.0 调整 https://github.com/vuejs/eslint-plugin-vue/issues/2259
     */
    'vue/no-setup-props-destructure': 'off',
  },
})
