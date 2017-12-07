const babili = require("gulp-babili")
const gulp = require('gulp')
const gulpWebpack = require('gulp-webpack')
const plumber = require('gulp-plumber')
const pump = require('pump')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const webpack = require('webpack')

gulp.task('js:build-navbar', function() {
  gulp.src('./src/navbar.js')
    .pipe(gulpWebpack({
      output: {
        filename: 'navbar.js'
      },
      devtool: 'source-maps',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('./static/js/'))
})

gulp.task('js:prod:build-navbar', function(cb) {
  pump([
    gulp.src('./src/navbar.js'),
    gulpWebpack({
      output: {
        filename: 'navbar.min.js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
      ],
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }, webpack),
    uglify(),
    gulp.dest('./static/js/')
  ], cb)
})

gulp.task('js:build-home', function() {
  gulp.src(['whatwg-fetch', './src/home.js'])
    .pipe(gulpWebpack({
      output: {
        filename: 'home.js'
      },
      devtool: 'source-maps',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('./static/js/'))
})

gulp.task('js:prod:build-home', function(cb) {
  pump([
    gulp.src(['whatwg-fetch', './src/home.js']),
    gulpWebpack({
      output: {
        filename: 'home.min.js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
      ],
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }, webpack),
    uglify(),
    gulp.dest('./static/js/')
  ], cb)
})

gulp.task('js:build-single', function() {
  gulp.src('./src/single.js')
    .pipe(gulpWebpack({
      output: {
        filename: 'single.js'
      },
      devtool: 'source-maps',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('./static/js/'))
})

gulp.task('js:prod:build-single', function(cb) {
  pump([
    gulp.src('./src/single.js'),
    gulpWebpack({
      output: {
        filename: 'single.min.js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
      ],
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }, webpack),
    uglify(),
    gulp.dest('./static/js/')
  ], cb)
})

gulp.task('js:build-landing', function() {
  gulp.src('./src/landing.js')
    .pipe(gulpWebpack({
      output: {
        filename: 'landing.js'
      },
      devtool: 'source-maps',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('./static/js/'))
})

gulp.task('js:prod:build-landing', function(cb) {
  pump([
    gulp.src('./src/landing.js'),
    gulpWebpack({
      output: {
        filename: 'landing.min.js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
      ],
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      }
    }, webpack),
    uglify(),
    gulp.dest('./static/js/')
  ], cb)
})

gulp.task('js', [
  'js:build-home',
  'js:build-single',
  'js:build-navbar',
  'js:build-landing'
])

gulp.task('js:prod', [
  'js:prod:build-home',
  'js:prod:build-single',
  'js:prod:build-navbar',
  'js:prod:build-landing'
])

gulp.task('build-prod', [
  'js:prod'
])

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['js'])
})

gulp.task('watch:prod', function() {
  gulp.watch('./src/**/*.js', ['js:prod'])
})

gulp.task('default', ['js', 'watch'])
