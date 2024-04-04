const path = require('path'); // Importing Node.js path module

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importing HtmlWebpackPlugin

module.exports = [
    {
        entry: "./src/index.tsx", // Entry point of your application
        mode: "development", // Webpack mode set to development
        target: "web", // Target environment set to web
        devtool: 'inline-source-map', // Source mapping for debugging
        output: {
            path: path.resolve(__dirname, "dist/"), // Output directory path
            filename: "bundle.js" // Output bundle file name
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html' // HtmlWebpackPlugin configuration
            })
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx"], // File extensions to resolve
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/, // Regex test for TypeScript files
                    exclude: /node_modules/, // Exclude node_modules directory
                    use: 'ts-loader' // Use ts-loader for TypeScript files
                },
                {
                    test: /\.(js|jsx)$/, // Regex test for JavaScript/JSX files
                    exclude: /node_modules/, // Exclude node_modules directory
                    use: {
                        loader: 'babel-loader', // Use babel-loader for JavaScript/JSX files
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] // Babel presets configuration
                        }
                    }
                },
                {
                    test: /\.css$/, // Regex test for CSS files
                    exclude: /node_modules/, // Exclude node_modules directory
                    use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for CSS files
                },
                {
                    test: /\.(png|svg|ttf)$/i, // Regex test for image and font files
                    type: "asset/resource" // Asset module type for handling resources
                }
            ]
        }
    }
];
