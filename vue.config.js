const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

const isPro = process.env.NODE_ENV === "production";

module.exports = {
  assetsDir: "static",
  publicPath: isPro ? "xiaomajia/" : "/",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: false,
  runtimeCompiler: false,
  productionSourceMap: false,
  configureWebpack: {
    externals: {},
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@lib", resolve("src/libs"))
      .set("@com", resolve("src/components"))
      .set("@view", resolve("src/views"))
      .set("@img", resolve("src/assets/images"));
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
  css: {
    requireModuleExtension: true,
    // extract: isPro,
    sourceMap: false,
  },
  devServer: {
    proxy: {
      "/admin": {
        target: "http://xx.xx.xx.xx:8080/", // 代理的接口路径
        // ws: true,   // 是否开启webscoket
        changeOrigin: true,
        secure: false, // 是否启用https
        pathRewrite: {
          "^/admin": "",
        },
      },
    },
  },
  pluginOptions: {
    // 用来传递任何第三方插件选项。Type: Object
  },
};
