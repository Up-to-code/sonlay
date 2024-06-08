/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.ignoreWarnings = [
        // Warning pattern for extra attributes
        /react-dom\/classic.*?/,
      ];
    }
    return config;
  },
};

export default nextConfig;
