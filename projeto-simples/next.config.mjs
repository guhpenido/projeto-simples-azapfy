import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        child_process: false,
        tls: false,
        readline: false,
        dgram: false,
        dns: false,
        http2: false,
        module: false,
        perf_hooks: false,
        process: false,
        punycode: false,
        querystring: false,
        repl: false,
        stream: false,
        string_decoder: false,
        sys: false,
        tty: false,
        url: false,
        util: false,
        vm: false,
        zlib: false,
      };

      config.plugins.push(new NodePolyfillPlugin());
      config.module.rules.push({
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      });
    }
    return config;
  },
};

export default nextConfig;