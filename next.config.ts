/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ここで swc が JSX を react-jsx で扱うことを保証
    styledComponents: false
  }
};

module.exports = nextConfig;
