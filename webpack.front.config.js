const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/front/ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist', 'public', 'js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    watchOptions: {
        poll: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        configFile: "tsconfig.front.json"
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                    }
                }],

            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "**/*.html",
                    to: "../",
                    context: "./src/front/public/",
                },
            ]
        })
    ]
}