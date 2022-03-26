import path from 'path';
import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { sassPlugin } from 'esbuild-sass-plugin';

const baseConfig = {
  platform: 'node' as const,
  target: 'esnext' as const,
  bundle: true,
  minify: true,
  sourcemap: false,
  nodePaths: [path.join(__dirname, './src')],
  entryPoints: [path.join(__dirname, './src/index')],
  external: [],
  plugins: [nodeExternalsPlugin(), sassPlugin()],
};

async function main() {
  await build({
    ...baseConfig,
    format: 'cjs',
    outdir: path.join(__dirname, './dist/cjs'),
  });

  await build({
    ...baseConfig,
    format: 'esm',
    outdir: path.join(__dirname, './dist/esm'),
  });
}

(async () => {
  await main();
})();
