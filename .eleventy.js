// .eleventy.js
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

eleventyConfig.addCollection("components", function(collectionApi) {
  return collectionApi.getFilteredByGlob("./src/content/components/*.md");
});