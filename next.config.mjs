const isProd = process.env.NODE_ENV === 'production';

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/product-idea-loop' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
