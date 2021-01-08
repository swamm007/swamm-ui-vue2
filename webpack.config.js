const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		app: ['./src/index.js']
	},
	output: {
		filename: "[name][chunkhash:8].js",
		path: path.resolve(__dirname, 'dist'),
		library: 'SWAMM',
		libraryTarget: 'umd'
	},
	resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				main: path.resolve(__dirname, '../src'),
				packages: path.resolve(__dirname, '../packages'),
				examples: path.resolve(__dirname, '../examples'),
				'element-ui': path.resolve(__dirname, '../')
			}
	},
	externals: {
		vue: {
			root: 'Vue'
		}
	}

}