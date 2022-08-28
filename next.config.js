/** @type {import('next').NextConfig} */
const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    // webpack: (config, { nextRuntime }) => {
    // undocumented property of next 12.
    //  if (nextRuntime !== 'nodejs') return config

    // return {
    //     ...config,
    //     entry() {
    //         return config.entry().then((entry) => ({
    //             ...entry,
    //             cli: path.resolve(process.cwd(), 'lib/cli.ts'),
    //         }))
    //     },
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.svg$/,
    //                 use: [
    //                     {
    //                         loader: '@svgr/webpack',
    //                         options: { icons: true },
    //                     },
    //                 ],
    //             },
    //         ],
    //     },

    //     plugins: [new WindiCSSWebpackPlugin()]
    //}

    webpack(config, { nextRuntime }) {
        console.log({ nextRuntime })
        if (!nextRuntime) {
            console.log('running 0', nextRuntime)
            config.module.rules.push({
                test: /\.svg$/,
                use: [{ loader: '@svgr/webpack', options: { icons: true } }],
            })

            config.plugins.push(new WindiCSSWebpackPlugin())
            return config
        }
        if (nextRuntime === 'edge') {
            console.log('this is edge functon')
            console.log('running 1', nextRuntime)
        } else {
            console.log('running 2', nextRuntime)
            config.module.rules.push({
                test: /\.svg$/,
                use: [{ loader: '@svgr/webpack', options: { icons: true } }],
            })

            config.plugins.push(new WindiCSSWebpackPlugin())
            return config
        }
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ]
    },
}
