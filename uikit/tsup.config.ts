import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/utils.ts'],
  // entry: {
  //   index: 'src/index.ts',
  //   utils: 'src/utils.ts',
  //   'tailwind-preset': 'tailwind.config.ts',
  //   styles: 'src/styles/index.css',
  // },
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  sourcemap: false,
  clean: true,
  tsconfig: 'tsconfig.build.json',
});
