module.exports = {
  plugins: [require("postcss-nested"), require("autoprefixer")],
  [require('postcss-randomcolor')({functionName: 'random-color'})]
};
