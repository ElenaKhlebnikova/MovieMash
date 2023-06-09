import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 1. read vite config on where should you store the assets, in the src/ or in public/ for improved performance :)
// 2. add script called format to run prettier on the whole project easily
//  3. https://github.com/import-js/eslint-plugin-import for adding space after imports
export default defineConfig({
    plugins: [react()],
});
