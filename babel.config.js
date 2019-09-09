module.exports = function(api) {
  // Cache the returned value forever and don't call this function again.
  if (api) api.cache(true);

  return {
    "presets": ["@babel/preset-env"],
    "plugins": [
      ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
    ]
  };
};
