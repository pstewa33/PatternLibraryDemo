module.exports = function(eleventyConfig) {
  // Copy compiled CSS to the output folder
  eleventyConfig.addPassthroughCopy({"src/assets/css": "assets/css"});
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};