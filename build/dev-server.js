var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
	? require('./webpack.prod.conf')
	: require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)
/**
 * webpack中间件
 * 需要一个连接的服务器，将webpack处理之后的文件存放在电脑内存，无需存在磁盘中，如果
 * 监测的文件被修改，则会对这部分文件进行webpack的处理，对于没有修改的文件则保持原来的模样。
 */
var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
})
/**
 * webpack 热加载
 * 必须运行在连接中的服务器上
 */
var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
/**
 * 编写一个webpack的插件 有关webpack插件编写的介绍： https://zhuanlan.zhihu.com/p/20929843?refer=jscss
 * 插件名字： html-webpack-plugin-after-emit
 * 内容： hotMiddleware.publish({ action: 'reload' })
 */
compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({ action: 'reload' })
		cb()
	})
})

// proxy api requests
/**
 * proxy 代理设置
 * 关于代理设置的说明： http://www.imooc.com/wiki/detail/id/3457
 */
Object.keys(proxyTable).forEach(function (context) {
	var options = proxyTable[context]
	if (typeof options === 'string') {
		options = { target: options }
	}
	app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
/**
 * HTML5 链接跳转处理文件
 */
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
/**
 * express中间件
 * staticPath 第一个参数 中间件路径
 * express.static('./static') 第二个参数 静态文件服务
 */
app.use(staticPath, express.static('./static'))


/**
 * express 服务器启动代码
 */
module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err)
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
})
