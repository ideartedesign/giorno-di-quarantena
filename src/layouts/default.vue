<template>
    <div class="layout">

        <header>

            <nuxt-link
                :title="title"
                to="/"
                exact
            >
                #giornodiquarantena
            </nuxt-link>

            <day-night-toggle
                v-model="isDarkTheme"
                title="Theme toggle"
                type="neomorphism"
            />

        </header>

        <main>
            <nuxt />
        </main>

        <footer>

            <span>
                © 2020
                <nuxt-link
                    to="/"
                    title="giornodiquarantena.it"
                    exact
                >
                    giornodiquarantena.it
                </nuxt-link>
            </span>

            <a
                href="https://ideartedesign.com"
                title="IDEARTE Design LAB"
                rel="noopener"
                target="_blank"
            >
                Made by <strong>IDEARTE LAB</strong>
            </a>

        </footer>

    </div>
</template>

<script>
    // Lazy
    import { hydrateWhenIdle } from 'vue-lazy-hydration';

    // Layout
    export default {
        name: 'default',
        components: {
            'day-night-toggle': hydrateWhenIdle(
                () => import(
                    '~/components/DayNightToggle'
                )
            ),
        },
        data: () => (
            {
                isDarkModeAvailable: false,
                isDarkTheme: false,
                title: process.env.TITLE,
            }
        ),
        mounted() {

            if(
                window
                    .matchMedia(
                        '(prefers-color-scheme)'
                    )
                    .media !== 'not all'
            ) {

                this.isDarkModeAvailable = true;

                this.isDarkTheme = !! window
                    .getComputedStyle(
                        document.documentElement
                    )
                    .getPropertyValue(
                        '--color-mode'
                    )
                ;

            }

        },
        head() {

            return {
                bodyAttrs: {
                    class: `theme--${ this.isDarkTheme ? 'dark' : 'light' }`,
                },
            };

        },
        jsonld() {

            return {
                '@context': 'https://schema.org/',
                '@type': 'WebSite',
                name: process.env.TITLE,
                about: process.env.DESCRIPTION,
                url: process.env.URL,
            };

        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
