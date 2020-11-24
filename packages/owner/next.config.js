const withTM = require("next-transpile-modules")(["@project/shared"]);
const withImages = require("next-images");

module.exports = withImages(
  withTM({
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias["@sentry/node"] = "@sentry/browser";
      }
      return config;
    },
  })
);
