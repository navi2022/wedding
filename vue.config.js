module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/wedding/'
        : '/',
    outputDir: 'dist',
    devServer: {
        host: 'localhost',
        disableHostCheck: true
    }
}
