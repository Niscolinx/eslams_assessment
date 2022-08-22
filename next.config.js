/** @type {import('next').NextConfig} */
const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icons: true } }],
    })

   config.plugins.push(new WindiCSSWebpackPlugin())

    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
