import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, './src'),
      },
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
        path: false,
      },
    };
    // Handle WASM module that uses require()
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        module: false,
      };
    }
    return config;
  },
};

export default nextConfig;