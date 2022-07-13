const withPlugins = require("next-compose-plugins");
const withPreact = require('next-plugin-preact')
const withLess = require("next-with-less");
const withBundleAnalyzer = require('@next/bundle-analyzer')

const plugins = [
    [withBundleAnalyzer, {
        enabled: process.env.ANALYZE === 'true',
    }],
    [withPreact, {
        /* ... */
    }],
    [withLess, {
        lessLoaderOptions: {
            lessOptions: {
                modifyVars: {
                    '@primary-color': '#ff7b53',
                    '@border-radius-base': '5px',
                },
                javascriptEnabled: true,
            },
        },
    }],
    /* ...other plugins... */
];

module.exports = withPlugins(plugins, {
    /* ... */
});
