module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    postcss([require("postcss-randomcolor")(options)]),
  ],
};
