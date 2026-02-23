module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
    "node_modules/@uswds/uswds/dist": "uswds"
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};