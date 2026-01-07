/** @type {import('next').NextConfig} */
const isGhPages = true
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGhPages ? '/gamenative-landing-page-fix' : '',
  assetPrefix: isGhPages ? '/gamenative-landing-page-fix/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
