const withTM = require("next-transpile-modules")(["@project/shared"]);
const withImages = require("next-images");

module.exports = withImages(withTM());
