/* eslint-disable */
// https:// github.com/yannickcr/eslint-plugin-react#recommended
module.exports = {
  "env": {
      "browser": false,
      "commonjs": true,
      "es6": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      // "plugin:flowtype/recommended",
      // "plugin:prettier/recommended",
      // "prettier/flowtype",
      // "prettier/react",
      // "prettier/standard",
      "plugin:import/errors",
  ],
  "globals": {
      "$": true,
      "process": true,
      "__dirname": true,
      "window": true,
      "lg": true,
      "document": true,
      "console": true,
      "clearTimeout": true,
      "setTimeout": true,
      "clearInterval": true,
      "setInterval": true,
      "parseInt_10": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "legacyDecorators": true,
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module",
      "ecmaVersion": 7
  },
  "plugins": [
      "react",
      'flowtype',
      // 'prettier'
  ],
  // rules中的值0、1、2分别表示不开启检查、警告、错误
  "rules": {
      // "prettier/prettier": "warn",
      'block-spacing': 1, // 禁止或强制在代码块中开括号前和闭括号后有空格 (block-spacing)
      'no-console': 'off', // 禁用 console
      'no-undef': 1, // 禁用未声明的变量
      'no-useless-constructor': 1, // 禁用不必要的构造函数
      'react/jsx-filename-extension': 'off', // 关闭airbnb对于jsx必须写在jsx文件中的设置
      'react/no-string-refs': 1, // Using this.refs is deprecated
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': [1, { 'vars': 'all', 'args': 'none' }], // 禁止未使用过的变量,此规则旨在消除未使用的变量、函数和函数参数
      'sort-imports': 'off', // 该规则检查所有的 import 声明，验证所有的 import 都是首先按照使用的成员语法排序，其次是按照第一个成员或别名的字母顺序排序。
      'no-prototype-builtins': 1, // 该规则禁止直接在对象实例上调用 Object.prototype 的一些方法。
      'indent': [1, 4, {
          'ignoredNodes': ['TemplateLiteral']
      }], // 缩进
      'sort-keys': 'off',
      'react/sort-comp': 1, // 强制组件方法顺序
      'react/jsx-key': 1, //在数组或迭代器中验证JSX具有key属性
      'quotes': ['off', 'single'],
      'semi': [0, 'always', { 'omitLastInOneLineBlock': true }], // 分号 关闭，由prettier执行
      'import/default': 'off',
      'import/order': [1, { 'groups': ['builtin', 'external', 'parent', 'sibling', 'index'] }],
      'import/no-unresolved': 'off', // 引用时候根据根目录为基础，关闭
      'import/namespace': 'off',
      'object-curly-spacing': [1, 'always'],
      "arrow-spacing": 1, // =>的前/后括号
      "keyword-spacing": 1,
      "object-curly-newline": [1, {
          "ObjectExpression": { "consistent": true, "minProperties": 5 }, // 与 "react/jsx-max-props-per-line" 限制数量对应
          "ObjectPattern": { "multiline": true },
          "ImportDeclaration": { "consistent": true, "minProperties": 5 },
          "ExportDeclaration": { "multiline": true, "minProperties": 3 }
      }],
      "object-property-newline": [1, { "allowAllPropertiesOnSameLine": true }],
      "rest-spread-spacing": 1, // 强制剩余和扩展运算符及其表达式之间有空格
      "no-multi-spaces": 1, // 去除多余空格
      "space-before-function-paren": 1, // 函数和括号之间增加空格
      "comma-spacing": 1, // 强制在逗号前后使用一致的空格
      "array-bracket-newline": [1, "consistent"],
      "key-spacing": 1,
      "space-infix-ops": 1, // 要求操作符周围有空格

      "no-useless-escape": 0,
      "no-tabs": "off",
      "no-debugger": 1, // 禁用debugger
      "no-var": 0, // 对var警告
      "no-irregular-whitespace": 0, // 不规则的空白不允许
      "no-trailing-spaces": 1, // 一行结束后面有空格就发出警告
      "eol-last": 0, // 文件以单一的换行符结束
      "no-underscore-dangle": 0, // 标识符不能以_开头或结尾
      "no-alert": 1, // 禁止使用alert confirm prompt
      "no-lone-blocks": 0, // 禁止不必要的嵌套块
      "no-class-assign": 1, // 禁止给类赋值
      "no-cond-assign": 1, // 禁止在条件表达式中使用赋值语句
      "no-const-assign": 1, // 禁止修改const声明的变量
      "no-delete-var": 1, // 不能对var声明的变量使用delete操作符
      "no-dupe-keys": 1, // 在创建对象字面量时不允许键重复
      "no-duplicate-case": 1, // switch中的case标签不能重复
      "no-dupe-args": 1, // 函数参数不能重复
      "no-empty": 1, // 块语句中的内容不能为空
      "no-func-assign": 1, // 禁止重复的函数声明
      //  "no-invalid-this": 1, // 禁止无效的this，只能用在构造器，类，对象字面量
      "no-redeclare": 1, // 禁止重复声明变量
      "no-spaced-func": 1, // 函数调用时 函数名与()之间不能有空格
      "no-this-before-super": 1, // 在调用super()之前不能使用this或super
      "no-use-before-define": [1, { "variables": false, "functions": true, "classes": true }], // 未定义前不能使用
      "camelcase": 0, // 强制驼峰法命名
      "jsx-quotes": [1, "prefer-double"], // 强制在JSX属性（jsx-quotes）中一致使用双引号
      "react/button-has-type": [1, { "button": true, "submit": true, "reset": true }], // button按钮必须有type属性
      "react/default-props-match-prop-types": [1, { "allowRequiredDefaults": true }], // Prevent extraneous defaultProps on components
      "react/destructuring-assignment": [0, "always"], //  Rule enforces consistent usage of destructuring assignment in component
      "react/forbid-component-props": [0, { "forbid": ["className"] }], // Forbid certain props on Components
      "react/forbid-foreign-prop-types": 1, // 解构
      //  "react/no-access-state-in-setstate": 1,// Prevent using this.state inside this.setState
      "react/no-children-prop": 1, // Prevent passing children as props
      "react/no-find-dom-node": 1, // Prevent usage of findDOMNode
      "react/no-is-mounted": 1, // Prevent usage of isMounted
      "react/no-redundant-should-component-update": 1, // Prevent usage of shouldComponentUpdate when extending React.PureComponent
      "react/no-this-in-sfc": 1, //  Prevent using this in stateless functional components
      "react/no-unescaped-entities": 0, // Prevent invalid characters from appearing in markup
      "react/no-will-update-set-state": 1, // Prevent usage of setState in componentWillUpdate
      "react/require-default-props": 1, // Enforce a defaultProps definition for every prop that is not a required "react/require-optimization": 1, // Enforce React components to have a shouldComponentUpdate method
      "react/require-render-return": 1, // Enforce ES5 or ES6 class for returning value in render function
      "react/forbid-prop-types": [1, { "forbid": ["any"] }], // 禁止某些propTypes

      "react/jsx-wrap-multilines": [
          1,
          {
              "declaration": "parens",
              "assignment": "parens",
              "return": "parens",
              "arrow": "parens",
              "condition": "ignore",
              "logical": "ignore",
              "prop": "ignore"
          }
      ], // Prevent missing parentheses around multilines JSX (fixable
      "react/jsx-props-no-multi-spaces": 1, // Disallow multiple spaces between inline JSX props (fixable)
      "react/jsx-one-expression-per-line": 0, // Limit to one expression per line in JSX
      "react/jsx-handler-names": 0, // Enforce event handler naming conventions in JSX
      "react/jsx-closing-tag-location": 1, // Validate closing tag location in JSX (fixable)
      "react/jsx-boolean-value": 1, // 在JSX中强制布尔属性符号
      "react/jsx-closing-bracket-location": [1, {
          "nonEmpty": false,
          "selfClosing": "tag-aligned"
      }], // 在JSX中验证右括号位置
      "react/jsx-curly-spacing": [1, { "when": "never", "children": true }], // 在JSX属性和表达式中加强或禁止大括号内的空格。
      "react/jsx-indent-props": [0, 4], // 验证JSX中的props缩进  @todo
      "react/jsx-max-props-per-line": [1, { "maximum": 5 }], //  限制JSX中单行上的props的最大数量
      "react/jsx-no-bind": 0, // JSX中不允许使用箭头函数和bind
      "react/jsx-no-duplicate-props": 1, // 防止在JSX中重复的props
      "react/jsx-no-literals": 0, // 防止使用未包装的JSX字符串
      "react/jsx-no-undef": 1, // 在JSX中禁止未声明的变量
      "react/jsx-pascal-case": 0, // 为用户定义的JSX组件强制使用PascalCase
      "react/jsx-sort-props": 0, // 强化props按字母排序
      "react/jsx-uses-react": 1, // 防止反应被错误地标记为未使用
      "react/jsx-uses-vars": 1, // 防止在JSX中使用的变量被错误地标记为未使用
      "react/no-danger": 0, // 防止使用危险的JSX属性
      "react/no-did-mount-set-state": 0, // 防止在componentDidMount中使用setState
      "react/no-did-update-set-state": 1, // 防止在componentDidUpdate中使用setState
      //  "react/no-direct-mutation-state": 1, // 防止this.state的直接变异
      "react/no-multi-comp": 0, // 防止每个文件有多个组件定义
      "react/no-set-state": 0, // 防止使用setState
      "react/no-unknown-property": 1, // 防止使用未知的DOM属性
      "react/prefer-es6-class": 1, // 为React组件强制执行ES5或ES6类
      "react/react-in-jsx-scope": 1, // 使用JSX时防止丢失React
      "react/self-closing-comp": 0, // 防止没有children的组件的额外结束标签
      "no-extra-boolean-cast": 0, // 禁止不必要的bool转换
      "react/no-array-index-key": 0, // 防止在数组中遍历中使用数组key做索引
      "react/no-deprecated": 0, // 不使用弃用的方法
      "react/jsx-equals-spacing": 1, // 在JSX属性中强制或禁止等号周围的空格
      "no-unreachable": 1, // 不能有无法执行的代码
      "comma-dangle": 1, // 对象字面量项尾不能有逗号
      "no-mixed-spaces-and-tabs": 1, // 禁止混用tab和空格
      "prefer-arrow-callback": 0, // 比较喜欢箭头回调
      "arrow-parens": 0, // 箭头函数用小括号括起来
      "react/jsx-no-comment-textnodes": 1,
      "lines-between-class-members": [1, "always", { "exceptAfterSingleLine": true }] // 要求或禁止在类成员之间出现空行
  },
  "settings": {
      "import/ignore": ["node_modules"]
  }
}
