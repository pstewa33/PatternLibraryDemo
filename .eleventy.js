const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Copy CSS and assets to the output folder
  eleventyConfig.addPassthroughCopy({"src/assets/css": "assets/css"});

  // Markdown filter for Liquid templates
  const md = markdownIt({
    html: true,      // allow HTML in Markdown
    breaks: true,    // treat newlines as <br>
    linkify: true    // auto-link URLs
  });

  eleventyConfig.addFilter("markdownify", function(value) {
    return md.render(value || "");
  });

    // Case study collections
  eleventyConfig.addCollection("components", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/pages/components/*.md")
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