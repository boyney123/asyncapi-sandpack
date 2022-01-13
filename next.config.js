module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.yml$/i,
      loader: 'raw-loader',
    });
    // Important: return the modified config
    return config;
  },
}
