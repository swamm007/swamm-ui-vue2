const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log('当前打包环境为---production---')
module.exports = {
	mode: 'production',
	entry: {
		app: ['./src/index.js']
	},
	output: {
		filename: "swamm-ui.umd.js",
		path: path.resolve(__dirname, 'lib'),
		library: 'SWAMM',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			main: path.resolve(__dirname, '../src'),
			packages: path.resolve(__dirname, '../packages'),
			examples: path.resolve(__dirname, '../examples'),
      modules: ['node_modules']
		},
	},
	// 不需要把Vue打入生产包中
	externals: {
		vue: {
			root: 'Vue'
		}
	},
	optimization: {
    minimize: false
  },
	module: {
		rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader'
      }
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		// new HtmlWebpackPlugin({
    //   template: './examples/index.html',
    //   filename: 'index.html',
    //   favicon: './examples/favicon.ico'
		// }),
		new VueLoaderPlugin(),
		new ProgressBarPlugin()
	]
}