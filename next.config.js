// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins([optimizedImages], { target: 'serverless' });

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: pluginOptions.options,
        },
      ],
    });

    return config;
  },
};
