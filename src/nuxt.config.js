import { resolve } from 'path';

// Dotenv Vars
import dotenv from 'dotenv';

const ENV = dotenv
        .config(
            {
                path: resolve(
                    __dirname,
                    '.env',
                ),
            }
        )
        .parsed
    // Var
    , meta = [
        {
            once: true,
            hid: 'description',
            name: 'description',
            content: ENV.DESCRIPTION,
        },
        {
            once: true,
            hid: 'color-scheme',
            name: 'color-scheme',
            content: 'light dark',
        },
    ]
    , link = [
        {
            once: true,
            hid: 'favicon',
            rel: 'shortcut icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
    ]
    , script = []
    , noscript = [
        {
            once: true,
            hid: 'noscript-fonts',
            innerHTML: '<link rel="stylesheet" href="/fonts/inter.min.css">',
        },
    ]
    , __dangerouslyDisableSanitizersByTagID = {}
    , modules = [ '@nuxtjs/pwa' ]
;

// Google Analytics
if( ENV.ANALYTICS ) {

    link.push(
        {
            once: true,
            hid: 'preconnect-google-tagmanager',
            rel: 'preconnect',
            href: 'https://www.googletagmanager.com',
            crossorigin: true,
        },
    );
    link.push(
        {
            once: true,
            hid: 'prefetch-google-tagmanager',
            rel: 'dns-prefetch',
            href: 'https://www.googletagmanager.com',
            crossorigin: true,
        },
    );
    link.push(
        {
            once: true,
            hid: 'preconnect-google-analytics',
            rel: 'preconnect',
            href: 'https://www.google-analytics.com',
            crossorigin: true,
        },
    );
    link.push(
        {
            once: true,
            hid: 'prefetch-google-analytics',
            rel: 'dns-prefetch',
            href: 'https://www.google-analytics.com',
            crossorigin: true,
        },
    );

    script.push(
        {
            once: true,
            hid: 'google-tag-manager-inner-html',
            innerHTML: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({originalLocation:document.location.protocol+'//'+document.location.hostname+document.location.pathname+document.location.search});`,
        },
    );

    __dangerouslyDisableSanitizersByTagID[ 'google-tag-manager-inner-html' ] = [ 'innerHTML' ];

    modules.push(
        [
            '@nuxtjs/google-analytics',
            {
                id: ENV.ANALYTICS,
            },
        ],
    );

}

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
        title: ENV.TITLE,
        meta,
        link,
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
    modules,
    meta: {
        name: ENV.TITLE,
        description: ENV.DESCRIPTION,
        theme_color: '#aeaec0',
        ogHost: ENV.URL,
    },
    manifest: {
        name: ENV.TITLE,
        short_name: ENV.TITLE,
        description: ENV.DESCRIPTION,
    },
    icon: {
        accessibleIcons: false,
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
