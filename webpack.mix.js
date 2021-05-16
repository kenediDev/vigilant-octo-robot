const { VueLoaderPlugin } = require("vue-loader");
const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.ts", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        resolve: {
            extensions: [".ts", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader"
                },
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    },
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    },
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
                // {
                //     test: /\.scss$/,
                //     use: [
                //         "vue-style-loader",
                //         "css-loader",
                //         {
                //             loader: "sass-loader",
                //             options: {
                //                 indentedSyntax: true
                //             }
                //         }
                //     ]
                // }
            ]
        },
        plugins: [new VueLoaderPlugin()]
    });
