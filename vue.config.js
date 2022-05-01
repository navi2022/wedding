module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/wedding/'
        : '/',
    outputDir: 'dist',
    devServer: {
         disableHostCheck: true
    },
    configureWebpack:{
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }
}


