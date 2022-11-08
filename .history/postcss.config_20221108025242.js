module.exports = {
  plugins: [require("postcss-nested"), require("autoprefixer"),"build:css": "postcss src/styles/main.css -o src/index.css",
  "watch:css": "postcss src/styles/main.css -o src/index.css -w",],
};
