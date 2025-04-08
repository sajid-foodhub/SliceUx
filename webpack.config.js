const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './web/index.web.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource', // ✅ handles image files in Webpack 5+
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './web/index.html',
        }),
    ],
    resolve: {
        extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-native$': 'react-native-web',
            'react-native-config': 'react-web-config',
            'react-dom$': 'react-dom/profiling',
            'scheduler/tracing': 'scheduler/tracing-profiling',
            'lottie-react-native': 'react-native-web-lottie',
            'react-native-maps': 'react-native-web-maps',
            'react-native-webview': 'react-native-web-webview',
            'react-native-linear-gradient': 'react-native-web-linear-gradient',
            'rn-material-ui-textfield': path.resolve(__dirname, './Library/rn-material-ui-textfield'),
            'react-native-fh-slice-ui': path.resolve(__dirname, './modules/FhSliceUI'),
        },
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8291,
    },
};
