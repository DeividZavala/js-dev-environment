import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
	  main: path.resolve(__dirname, 'src/index'),
	  vendor: path.resolve(_dirname, 'src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
	//Create HTML file that includes reference to bundle.js
	new HtmlWebpackPlugin({
		template: "src/index.html",
		minify: {
			removeComments: true,
			collapseWhitespace: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeEmptyAttributes: true,
			removeStyleLinkTypeAttributes: true,
			keepClosingSlash: true,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: true
		},
		inject: true
	}),
	//Eliminate Duplicate packages when generating bundle
	new webpack.optimize.DedupePlugin(),
	//Minify JS
	new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
