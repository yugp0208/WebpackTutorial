const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    //mode
    mode : 'development', //development:ソースマップを生成し、再ビルド時間が短縮される //production: モジュールの圧縮、最適化される
    //entrypoint
    entry : './src/js/app.js',
    //出力の設定
    output : {
        //出力先のpath
        path : path.resolve(__dirname, 'public'),
        //出力するファイル名
        filename : 'js/bundle.js',
        clean : true
    },
    devServer: {
        open : true,
        port : 9000,
        static : {
            directory: path.join(__dirname, "public")
        }
    },
    module: {
        rules : [
            {
                test : /\.scss$/,
                include : path.resolve(__dirname, 'src/scss'),
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options : {
                            esModule: false,
                        },
                    },
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        })
    ]
}