import { resolve } from 'path';

// Dotenv Vars
import dotenv from 'dotenv';
dotenv.config();

// Var
const meta = [
        {
            once: true,
            hid: 'description',
            name: 'description',
            content: process.env.DESCRIPTION,
        },
        {
            once: true,
            hid: 'color-scheme',
            name: 'color-scheme',
            content: 'light dark',
        },
    ]
    , links = [
        {
            once: true,
            hid: 'favicon',
            rel: 'shortcut icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
    ]
    , noscript = [
        {
            once: true,
            hid: 'noscript-fonts',
            innerHTML: '<link rel="stylesheet" href="/fonts/inter.css">',
        },
    ]
    , __dangerouslyDisableSanitizersByTagID = {
        'noscript-fonts': [ 'innerHTML' ],
    }
;

// Nuxt config
export default {
    modern: true,
    css: [
        'modern-normalize/modern-normalize.css',
        '~assets/style.scss',
    ],
    srcDir: __dirname,
    rootDir: resolve(
        __dirname,
        '..',
    ),
    buildDir: resolve(
        __dirname,
        '.nuxt',
    ),
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: process.env.TITLE,
        meta,
        links,
        noscript,
        __dangerouslyDisableSanitizersByTagID,
    },
    /*
     * Plugins
     */
    plugins: [ '~/plugins/jsonld' ],
    /*
     * Modules
     */
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/google-analytics',
    ],
    googleAnalytics: {
        id: process.env.GA_ID,
    },
    /*
     * buildModules
     */
    buildModules: [
        '@nuxtjs/dotenv',
        'nuxt-compress',
    ],
    /*
     * Build
     */
    build: {
        babel: {
            presets: (
                { isServer }
            ) => (
                [
                    [
                        require.resolve(
                            '@nuxt/babel-preset-app'
                        ),
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            corejs: {
                                version: 3,
                            },
                        },
                    ],
                ]
            ),
        },
        loaders: {
            vue: {
                compilerOptions: {
                    preserveWhitespace: false,
                    whitespace: 'condense',
                },
            },
        },
        /*
         ** PostCSS
         */
        postcss: {
            plugins: {
                'postcss-import': {},
                'postcss-url': {},
                'postcss-scoped': {},
                'postcss-nested': {},
                'postcss-combine-duplicated-selectors': {
                    removeDuplicatedProperties: true,
                },
            },
            preset: {
                stage: 2,
                autoprefixer: {
                    cascade: false,
                    grid: true,
                },
            },
        },
        /*
         ** Minifier
         */
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                collapseInlineTagWhitespace: true,
                removeOptionalTags: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeComments: true,
                continueOnParseError: true,
            },
        },
        /*
         ** Run lint on save
         */
        extend(
            config,
            {
                isDev,
                isClient,
            },
        ) {

            /*
             ** ESLint loaded
             */
            isDev && isClient && config.module.rules.push(
                {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                },
            );

        },
    },
    /*
     * Generate
     */
    generate: {
        dir: resolve(
            __dirname,
            '../docs'
        ),
    },
    /*
     * Server
     */
    server: {
        host: '0.0.0.0',
    },
};
