module.exports = {
  plugins: [
    require("postcss-randomcolor")({ functionName: "random-color" }),
    require("postcss-nested"),
    require("autoprefixer"),
  ],
};
