/** @format */

import path from 'path'
import { glob } from 'glob'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import WebpackObfuscatorPlugin from 'webpack-obfuscator'
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin' // 1. Optimalizace obrázků
import fs from 'fs'
import autoprefixer from 'autoprefixer' // 2. Autoprefixer

const outputDir = path.resolve(process.cwd(), 'dist')
const sourceDir = path.resolve(process.cwd(), 'src')

const getEntries = (extension, isProduction) => {
    const entries = {}
    const files = glob.sync(`./src/${extension}/**/*.${extension}`).filter((file) => !path.basename(file).startsWith('_'))
    if (files.length > 0) {
        for (const file of files) {
            const filename = path.basename(file, path.extname(file))
            const minExtension = isProduction ? '.min' : ''
            entries[`${extension}-${filename}${minExtension}`] = './' + file
        }
    }
    return entries
}

const getGlobalAssetsEntry = () => {
    const entries = {}
    if (fs.existsSync('./assets')) {
        const files = glob.sync(`./assets/**/*`)
        const fileEntries = files.filter((file) => fs.statSync(file).isFile())
        if (fileEntries.length > 0) {
            entries['assets'] = fileEntries.map((str) => './' + str)
        }
    }
    return entries
}

export default (env) => {
    const isProduction = env === 'production'
    
    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'source-map',
        resolve: {
            alias: {
                '@js': path.resolve(process.cwd(), 'src/js'),
                '@scss': path.resolve(process.cwd(), 'src/scss'),
            }
        },
        entry: {
            ...getEntries('js', isProduction),
            ...getEntries('scss', isProduction),
            ...getEntries('css', isProduction),
            ...getGlobalAssetsEntry(),
        },
        output: {
            path: outputDir,
            clean: true,
            filename: '[name].js',
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: '[name].css' }), 
            new RemoveEmptyScriptsPlugin()
        ],
        optimization: {
            usedExports: true,
            minimize: isProduction,
            minimizer: [
                new CssMinimizerPlugin(), 
                ...(isProduction ? [new WebpackObfuscatorPlugin({ rotateStringArray: true }, ['scss-*.js', 'css-*.js'])] : []),
                // PRODUKČNÍ OPTIMALIZACE OBRÁZKŮ
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminMinify,
                        options: {
                            plugins: [
                                ['gifsicle', { interlaced: true }],
                                ['jpegtran', { progressive: true }],
                                ['optipng', { optimizationLevel: 5 }],
                                ['svgo', { plugins: [{ name: 'removeViewBox', active: false }] }],
                            ],
                        },
                    },
                    // Automatické generování WebP verzí
                    generator: [
                        {
                            type: "asset",
                            implementation: ImageMinimizerPlugin.imageminGenerate,
                            options: {
                                plugins: ["imagemin-webp"],
                            },
                        },
                    ],
                }),
            ],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env'] }
                    },
                },
                {
                    test: /\.scss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { sourceMap: !isProduction } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: { plugins: [autoprefixer()] },
                                sourceMap: !isProduction,
                            },
                        },
                        { 
                            loader: 'sass-loader', 
                            options: { 
                                sassOptions: { outputStyle: isProduction ? 'compressed' : 'expanded' }, 
                                sourceMap: !isProduction 
                            } 
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|webp)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[name][ext]',
                    },
                },
            ],
        },
    }
}