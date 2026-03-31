const markdownIt = require("markdown-it");
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  // Copy CSS and assets to the output folder
  eleventyConfig.addPassthroughCopy({"src/assets/css": "assets/css"});

    eleventyConfig.addFilter("rawFile", function (filePath) {
    return fs.readFileSync(filePath, "utf-8");
  });

  eleventyConfig.addFilter("rawFile", function (filePath) {
    const fullPath = path.join("src/_includes/", filePath);
    return fs.readFileSync(fullPath, "utf-8");
  });

  // Markdown filter for Liquid templates
  const md = markdownIt({
    html: true,      // allow HTML in Markdown
    breaks: true,    // treat newlines as <br>
    linkify: true    // auto-link URLs
  });

  eleventyConfig.addFilter("markdownify", function(value) {
    return md.render(value || "");
  });

    // Components collections
  eleventyConfig.addCollection("components", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/pages/components/*.md")
    .sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  // Templates collections
  eleventyConfig.addCollection("templates", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/pages/templates/*.md")
    .sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  // Optional: set default directory structure
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    }
  };
};