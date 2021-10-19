const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], {
  target: "serverless",
  images: {
    disableStaticImages: true,
  },
});

// import withPlugins from "next-compose-plugins";
// import optimizedImages from "next-optimized-images";
