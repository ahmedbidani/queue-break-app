import path from "path"
import fs from "fs"
import webpack from "webpack"
import chalk from "chalk"
import merge from "webpack-merge"
import { spawn, execSync } from "child_process"
import baseConfig from "./webpack.config.base"
import CheckNodeEnv from "../helpers/CheckNodeEnv"

CheckNodeEnv('development')

const port = process.env.PORT || 1212
const publicPath = `http://localhost:${port}/dist`
const dll = path.join(__dirname, '..', 'dll')
const manifest = path.resolve(dll, 'renderer.json')
const requiredByDLLconfig = module.parent.filename.includes('webpack.config.renderer.dev.dll')

if (!requiredByDLLconfig && !(fs.existsSync(dll) && fs.existsSync(manifest))) {
    console.log(
        chalk.black.bgYellow.bold(
            'The DLL files are missing. Sit back while we build them for you with "yarn build-dll"'
        )
    )
    execSync('yarn build-dll')
}

export default merge.smart(baseConfig, {
    devtool: 'inline-source-map',
    mode: 'development',
    target: 'electron-renderer',
    entry: [ 'react-hot-loader/patch', require.resolve('../app/index.tsx')],
    output: {
        publicPath: `http://localhost:${port}/dist/`,
        filename: 'renderer.dev.js'
    },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    //Inject Css to the DOM
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]'
                            },
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    //Compile Sass/Scss files to the Css
                    'sass-loader',
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            // WOFF2 Font
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            // TTF Font
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/octet-stream'
                    }
                }
            },
            // EOT Font
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            // SVG Font
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/svg+xml'
                    }
                }
            },
            // Common Image Formats
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        requiredByDLLconfig ? null : new webpack.DllReferencePlugin({
            context: path.join(__dirname, '..', 'dll'),
            manifest: require(manifest),
            sourceType: 'var'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    node: {
        __dirname: false,
        __filename: false,
    },
    devServer: {
        port,
        publicPath,
        compress: true,
        noInfo: false,
        stats: 'errors-only',
        inline: true,
        lazy: false,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        contentBase: path.join(__dirname, 'dist'),
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 100
        },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        },
        before() {
            if (process.env.START_HOT) {
                console.log('Starting Main Process...');
                spawn('npm', ['run', 'start-main-dev'], {
                    shell: true,
                    env: process.env,
                    stdio: 'inherit'
                })
                    .on('close', code => process.exit(code))
                    .on('error', spawnError => console.error(spawnError))
            }
        }
    }
})