const path = require('path')
const reslove = (filePath) => path.resolve(__dirname, filePath)
module.exports = (config, env) => {
    config.module.rules = [
        ...config.module.rules,
        {
            test: /\.{sass}|{scss}$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        }
    ]
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': reslove('./src')
    }
    return config
}