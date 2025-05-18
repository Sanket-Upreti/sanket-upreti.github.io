/** @type {import('next').NextConfig} */

const isExport = process.env.EXPORT === "true"

const nextConfig = {
  ...(isExport && {
    output: "export",
    distDir: "dist",
    images: {
      unoptimized: true,
    },
  }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig