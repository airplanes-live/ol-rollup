import cjs from '@rollup/plugin-commonjs';
import node from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'main.js',
  output: [
    {file: 'ol-custom.js', format: 'umd', name: 'ol', exports: 'named', sourcemap: true, inlineDynamicImports: true}
  ],
  plugins: [
    node({browser: true}),
    cjs(),
    production && terser()
  ],
};
