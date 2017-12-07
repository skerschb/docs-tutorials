import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

export default {
   output: {
      format: 'iife'
   },
   plugins:
   [
      babel({
         babelrc: false,
         include: ['src/**', 'node_modules/rigning-non-greni/**'],
         presets: [ [ 'es2015', { modules: false, loose: true } ], 'stage-0', 'react' ],
         plugins: [ 'external-helpers' ]
      }),
      nodeResolve({
        jsnext: true
      }),
      commonjs({
         include: 'node_modules/**',
         namedExports:
         {
            './node_modules/react/react.js':
            [
               'cloneElement',
               'createElement',
               'PropTypes',
               'Children',
               'Component'
            ],
         }
      }),
      replace({
         'process.env.NODE_ENV': JSON.stringify('production')
      }),
      uglify({}, minify)
   ]
}
