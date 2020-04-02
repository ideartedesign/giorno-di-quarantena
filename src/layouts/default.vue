<template>
    <div class="layout">

        <header>

            <nuxt-link
                :title="title"
                to="/"
                exact
            >
                <h1>#giornodiquarantena</h1>
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
        
        <div class="actions">

            <nuxt-link
                to="/"
                title="Homepage"
                class="btn margin padding outline rounded"
                exact
            >
                <h5>home</h5>
            </nuxt-link>

            <nuxt-link
                to="/mappa"
                title="Mappa"
                class="btn margin padding outline rounded"
                exact
            >
                <h5>mappa</h5>
            </nuxt-link>

            <!--
                <nuxt-link
                    to="/3d"
                    title="3D"
                    class="btn margin padding outline rounded"
                    exact
                >
                    <h5>3D</h5>
                </nuxt-link>
            -->

        </div>

        <footer>

            <span>
                © 2020
                <nuxt-link
                    to="/"
                    title="giornodiquarantena.it"
                    exact
                >
                    <h2>giornodiquarantena.it</h2>
                </nuxt-link>
            </span>

            <p>
                <a
                    href="https://ideartedesign.com"
                    title="IDEARTE Design LAB"
                    rel="noopener"
                    target="_blank"
                >
                    Made by <strong>IDEARTE LAB</strong>
                </a>
            </p>

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
