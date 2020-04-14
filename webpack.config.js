
const Path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');  // webpack 4版本之后加的，之前的版本不需要这个

let config = {
    entry: Path.resolve(__dirname, './src/index.js'), // 以join拼接path的形式配置绝对路径,相对路径打包后找不到会报错
    output: {
        filename: 'vendor.build.js',
        path: Path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 1024, // 判断图片的大小   如果小于1024就会转换成base64
                    name: '[name].[ext]' // 输出图片的名字  ext是扩展名
                }
            }
        },{
            test: /\.(sa|sc)ss$/,
            use: [
                {
                    loader: 'sass-loader',
                    options: {
                        data: `@import "./src/assets/custom.scss"; @import "@nutui/nutui/dist/styles/index.scss";`,
                    }
                }
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};

module.exports = config;