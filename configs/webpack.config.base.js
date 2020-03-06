import path from "path";
import webpack from "webpack";
import { dependencies } from "../package.json";

export default {
    externals: [...Object.keys(dependencies || {})],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    'ts-loader'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, '..', 'app'),
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        }),
        new webpack.NamedModulesPlugin()
    ]
};
