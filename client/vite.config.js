import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// .envファイルを読み込む
dotenv.config();

const env_type = process.env.VITE_ENV_TYPE;
const port = env_type === "prod" ? 80 : 5173;
const do_host = env_type === "prod" ? true : false;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
    host: do_host,
  }
})
