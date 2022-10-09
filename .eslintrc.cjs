module.exports = {
    // 环境、浏览器、最新es语法、node环境
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    // 扩展的eslint语法规范,可以被继承的规则；字符串数组；每个配置继承它前面的配置
    // eslint-config-前缀可以简写
    extends: [
        // "eslint:recommended",
        "plugin:vue/vue3-strongly-recommended", // 分别是eslint-plugin-vue提供
        // "plugin:@typescript-eslint/recommended",
        "airbnb-base", // eslint-config-airbnb-base提供
        "prettier" // eslint-config-prettier提供
    ],
    // ESLint会对代码进行校验,而parser的作用是将代码转换为ESTree（AST），ESLint会对ESTree进行校验
    parser: "vue-eslint-parser", // 解析器
    parserOptions: { // 解析器配置器
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        // 源码类型 默认是script, es模块使用module
        sourceType: "module",
        // 额外的语言类型
        ecmaFeature: {
            tsx: true,
            jsx: true
        }
    },
    // 全局自定义宏 ,这样在源文件中使用全局变量就不会报错或警告
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly"
    },
    // 插件
    // 前缀eslint-plugin-可以省略
    // vue官方提供了一个eslint插件eslint-plugin-vue,它提供了 parser和rules
    // parser为vue-eslint-parser,放在上面parser字段里,
    // rules放在extends字段里，选择合适的规则
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    // 自定义规则,覆盖上面extends继承的第三方库的规则
    rules: {
        'import/no-extraneous-dependencies': 0,
        'no-param-reassign': 0,
        'vue/multi-word-component-names': 0, // 是否开启组件命名规则校验（强制多个单词以驼峰或'-'链接的命名规则）
        'vue/attribute-hyphenation': 0,
        'vue/v-on-event-hyphenation': 0
    },
    settings: {
        // 设置项目内的别名
        "import/resolver": {
            alias: {
                map: [['@', 'src']],
                extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
            },

        },
        // 允许的扩展名
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"]
    }
}
