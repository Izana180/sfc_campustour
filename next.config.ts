import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['web.sfc.keio.ac.jp'], // 許可するホスト名を追加
  },
};

export default nextConfig;
