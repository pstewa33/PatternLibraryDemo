module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary("njk", require("nunjucks").configure());

  eleventyConfig.addNunjucksShortcode("showCode", function(path) {
    const fs = require("fs");
    const fullPath = `./src/_includes/${path}`;
    let code = fs.readFileSync(fullPath, "utf-8");

    // Escape HTML for display
    code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<pre><code>${code}</code></pre>`;
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
  };
};