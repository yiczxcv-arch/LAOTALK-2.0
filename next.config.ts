import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 로컬 LAN(휴대폰 등)에서 개발 서버 접속 시 HMR cross-origin 차단을 막기 위한 개발 전용 설정
  allowedDevOrigins: ["192.168.1.3"],
};

export default nextConfig;
