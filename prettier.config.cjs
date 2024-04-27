// prettier.config.cjs
/** @type {import('prettier').Config} */
const config = {
  semi: true, // 行尾加分号
  trailingComma: 'es5', // 尽可能控制尾随逗号的输出。
  singleQuote: true, // 使用单引号
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid| always。avoid 能省略括号的时候就省略 例如x => x。always 总是有括号
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  vueIndentScriptAndStyle: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
};

// export default config;
module.exports = config;