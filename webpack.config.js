const path = require('path');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const mode = env.env;
    const inputPath = path.join(__dirname, 'src');
    const outputPath = path.resolve(__dirname, 'dist');
    const outputFileSuffix = mode === 'development' ? '' : '.min';

    return {
        mode,
        watch: env.watch,
        entry: [ './index.ts', './index.scss' ],
        context: inputPath,
        devtool: 'inline-source-map',
        plugins: [
            new MiniCssExtractPlugin({ filename: `index${outputFileSuffix}.css` }),
            new DefinePlugin({
                'process.env': {
                    BUNDLE_ENVIRONMENT: JSON.stringify(mode),
                },
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
                },
            ],
        },
        optimization: {
            minimize: env.env === 'production',
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.scss', '.sass', '.css' ],
        },
        output: {
            filename: `index${outputFileSuffix}.js`,
            path: outputPath,
        },
        stats: 'minimal',
        performance: {
            hints: false,
        },
    };
};
