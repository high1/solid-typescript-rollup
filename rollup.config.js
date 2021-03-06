import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import url from '@rollup/plugin-url';
import hotcss from 'rollup-plugin-hot-css';
import static_files from 'rollup-plugin-static-files';
import { terser } from 'rollup-plugin-terser';

const extensions =  ['.ts', '.tsx'];
let config = {
  input: './src/main.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name].[hash].js',
    assetFileNames: '[name].[hash][extname]',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    hotcss({
      hot: process.env.NODE_ENV === 'development',
      filename: 'styles.css',
    }),
    resolve({ extensions, browser: true }),
    babel({ extensions, babelHelpers: 'bundled' }),
    // commonjs(),
    url(),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    static_files({
      include: ['./public'],
    }),
    terser({
      compress: {
        global_defs: {
          module: false,
        },
      },
    }),
  ]);
}

export default config;
