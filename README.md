
# example

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 关于在webpack中vue-loader的配置

在loaders设置vue-loader之后，在modules同级设置vue的配置。vue的配置主要是针对在编译提取vue文件之后所要做的配置，比如：
```javascript
vue: {
    // postcss: [require('postcss-px2rem')({
    // 	baseDpr: 2,             // base device pixel ratio (default: 2)
    // 	threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
    // 	remVersion: true,       // whether to generate rem version (default: true)
    // 	remUnit: 75,            // rem unit value (default: 75)
    // 	remPrecision: 6         // rem precision (default: 6)
    // })],
    loaders: utils.cssLoaders(),
    // 原始配置
    // loaders: {
    // 	css: "style-loader!css-loader!postcss-loader"
    // }
    // 文档 https://github.com/postcss/autoprefixer#options
    autoprefixer: {
        // 该配置的文档 https://github.com/ai/browserslist#queries
        // browsers: ["Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 4"],
        browsers: ['last 2 versions'],
        cascade: true  // 不美化输出 css
    }
},
```
其中，loaders配置是在vue执行之后执行的loader编译，相关配置可参考“原始配置”注释部分。

## secmk
secondaryMarket 的前端代码部分，基于Vuejs生态组件（框架）搭建。单页应用，只有个入口文件。
