/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",
    // localeDetection: false, // to disable automatic locale detection
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
