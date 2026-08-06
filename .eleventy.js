const markdownIt = require("markdown-it");
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  // --- Passthrough for assets ---
  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });

  // --- Raw file filter ---
  eleventyConfig.addFilter("rawFile", function(filePath) {
    const fullPath = path.join("src/_includes/", filePath);
    return fs.readFileSync(fullPath, "utf-8");
  });

  // --- Markdown filter ---
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.addFilter("markdownify", function(value) {
    return md.render(value || "");
  });

  // --- Components collection ---
  eleventyConfig.addCollection("components", function(collectionApi) {
    return collectionApi
      .getFilteredByTag("components")
      .filter(item => !item.data.excludeFromComponents)
      .sort((a, b) => {
        const titleA = (a.data.title || "").toLowerCase();
        const titleB = (b.data.title || "").toLowerCase();
        return titleA.localeCompare(titleB);
      });
  });

  // --- Templates collection ---
  eleventyConfig.addCollection("templates", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/pages/templates/*.md")
      .filter(item => !item.data.excludeFromTemplates)
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  });

  console.log("INPUT DIR:", __dirname);

  // --- Directory structure ---
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    }
  };
};