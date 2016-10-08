var px2rem = require('postcss-px2rem');

var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		fallback: [path.join(__dirname, '../node_modules')],
		alias: {
			'src': path.resolve(__dirname, '../src'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'views': path.resolve(__dirname, '../src/views'),
			'components': path.resolve(__dirname, '../src/components'),
			'static': path.resolve(__dirname, '../static'),
			'data': path.resolve(__dirname, '../src/vuex'),
			'util': path.resolve(__dirname, '../src/utils'),
		}
	},
	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	},
	module: {
		// eslint 检查
		// preLoaders: [
		// 	{
		// 		test: /\.vue$/,
		// 		loader: 'eslint',
		// 		include: projectRoot,
		// 		exclude: /node_modules/
		// 	},
		// 	{
		// 		test: /\.js$/,
		// 		loader: 'eslint',
		// 		include: projectRoot,
		// 		exclude: /node_modules/
		// 	}
		// ],
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				include: projectRoot,
				exclude: /node_modules/
			},
			// {
			// 	test: /\.css$/,
			// 	loader: "style-loader!css-loader!postcss-loader"
			// },
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.html$/,
				loader: 'vue-html'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	// eslint 检查
	// eslint: {
	// 	formatter: require('eslint-friendly-formatter')
	// },
	// postcss: function() {
	// 	return [require('postcss-px2rem')]
	// },
	vue: {
		// postcss: [require('postcss-px2rem')({
		// 	baseDpr: 2,             // base device pixel ratio (default: 2)
		// 	threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
		// 	remVersion: true,       // whether to generate rem version (default: true)
		// 	remUnit: 75,            // rem unit value (default: 75)
		// 	remPrecision: 6         // rem precision (default: 6)
		// })],
		loaders: utils.cssLoaders(),
		// loaders: {
		// 	css: "style-loader!css-loader!postcss-loader"
		// }
		// 文档 https://github.com/postcss/autoprefixer#options
		// autoprefixer: {
		// 	// 该配置的文档 https://github.com/ai/browserslist#queries
		// 	// browsers: ["Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 4"],
		// 	browsers: ['last 2 versions'],
		// 	cascade: true  // 不美化输出 css
		// }
	},
}
