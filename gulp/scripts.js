import gulp from 'gulp';
import {config, env} from './gulp.config';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';

const scripts = () => {
  return gulp.src(config.scripts.src)
    .pipe(webpackStream({
      output: {
        filename: env.env === 'PROD' ? 'bundle.min.js' : 'bundle.js'
      },
      plugins: env.env === 'PROD' ? [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
      ] : [],
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    }))
    .pipe(gulp.dest(config.scripts.dest));
};

module.exports = scripts;
