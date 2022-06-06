import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';

// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, process.cwd(), '');
  return {
    base: `${environment.BASE_URL || ''}/`,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url)),
      },
    },
    define: {
      __APP_ENV__: environment.APP_ENV,
    },
  };
});
