const repoName = "/type-practice";
const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? repoName : "",
  assetPrefix: isProduction ? `${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? repoName : "",
  },
};

export default nextConfig;
