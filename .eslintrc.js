module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 12,
        socurceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],

    rules: {
        /**
         * 最佳实践
         */
        eqeqeq: 2, //强制使用===和 !==
        'default-case': 1, //要求switch 语句中有defaulte分支
        'no-else-return': 1, //要求if语句中return 语句之后有else快
        'no-empty-spaces': 1, //禁止出现空函数
        'no-multi-spaces': 1, //禁止使用多个空格
        redix: 1, //强制在parseInt()使用基数参数
        endOfLine: 'auto', //允许多种换行符存在


        /**
         * 变量声明
         */
        'init-declarations': ['error', 'always'], //声明变量必须赋值
        'prefer-const': 'off', //将let替换成const，减少认知负荷并提高可维护性


        /**
         * ECMAScript
         */
        'arrow-spaceing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用空格
        'no-var': 2, //禁止使用var声明变量
        'object-showthand': 2, // 要求使用对象方法名和属性名简写
        'prefer-arrow-callback': 2, //要求回调函数使用箭头函数
        'prefer-rest-params': 2, //要求使用剩余参而不是 arguments


        /**
         * 风格指南
         */
        'space-before-function-paren': 0, //函数名称或function关键字与开始参数之间允许有空格
        'array-bracket-spacing': 0, //数组方括号内必须空格
        'eol-last': 2, //要求文件末尾存在空行
        // 对象冒号前禁止空格，冒号后必须空格
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // 关键字（if、else等）前后必须有空格
        'keyword-spacing': ['error', { before: true, after: true }],
        // 禁止出现多行空格
        'no-muktiple-empty-lines': ['error', { max: 1 }],
        semi: ['error', 'never'], //禁止末尾分号
        quotes: ['error', 'single'], // 强制使用单引号
        'space-infix-ops': 2, // 操作符周围必须有空格
        'spaced-comment': ['error', 'always'], // 注释后必须跟随至少一个空格
    },
    global: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    }
}