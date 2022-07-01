module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = "Telegram Mobile";
            return args;
        });
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "~@/scss/main.scss";
              `,
            },
        },
    },
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
}