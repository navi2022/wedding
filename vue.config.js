const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const zlib = require("zlib");
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
            runtimeChunk: true,
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        chunks: 'initial',
                        name: 'vendor',
                        enforce: true,
                    },
                },
            },
        },
        plugins: [
            new BundleAnalyzerPlugin({
                openAnalyzer: false, // 자동으로 open하지 않음
                analyzerMode: 'static' /* 분석파일 html 보고서를 dist 폴더에 저장한다  */,
                reportFilename: 'bundle-report.html', // 리포트이름
            })
        ],
    },
    pluginOptions: {
        compression:{
            brotli: {
                filename: '[file].br[query]',
                algorithm: 'brotliCompress',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                compressionOptions: {
                    params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    },
                },
                minRatio: 0.8,
            },
            gzip: {
                filename: '[file].gz[query]',
                algorithm: 'gzip',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8,
            }
        }
    },
}


