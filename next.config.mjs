/** @type {import('next').NextConfig} */
const nextConfig = {
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
