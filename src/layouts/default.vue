<template>
    <div class="layout">

        <header>

            <nuxt-link
                :title="title"
                to="/"
                exact
            >
                <h4>#giornodiquarantena</h4>
            </nuxt-link>
            
            <day-night-toggle
                v-model="isDarkTheme"
                title="Theme toggle"
                type="neomorphism"
            />

        </header>

        <div class="menu">

            <nuxt-link
                to="/"
                title="Homepage"
                class="btn margin padding outline rounded"
                exact
            >
                <h3>home</h3>
            </nuxt-link>

            <nuxt-link
                to="/mappa"
                title="Mappa"
                class="btn margin padding outline rounded"
                exact
            >
                <h3>mappa</h3>
            </nuxt-link>

            <nuxt-link
                to="/io-resto-positivo"
                title="Io resto positivo"
                class="btn margin padding outline rounded"
                exact
            >
                <h3>pensa positivo</h3>
            </nuxt-link>

        </div>

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
                    <h4>giornodiquarantena.it</h4>
                </nuxt-link>
            </span>

            <client-only>
                <social-sharing
                    :url="$route.path"
                    :title="title"
                    :description="description"
                    :hashtags="keywords"
                    :quote="description"
                    twitter-user="luxdamore"
                    inline-template
                >
                    <div class="social-container">

                        <network network="facebook">
                            <button
                                type="button"
                                class="btn icon margin rounded"
                                title="Condividi su Facebook"
                            >
                                <font-awesome-icon :icon="[ 'fab', 'facebook' ]" />
                            </button>
                        </network>
                        <network network="linkedin">
                            <button
                                type="button"
                                class="btn icon margin rounded"
                                title="Condividi su Linkedin"
                            >
                                <font-awesome-icon :icon="[ 'fab', 'linkedin' ]" />
                            </button>
                        </network>
                        <network network="telegram">
                            <button
                                type="button"
                                class="btn icon margin rounded"
                                title="Condividi su Telegram"
                            >
                                <font-awesome-icon :icon="[ 'fab', 'telegram' ]" />
                            </button>
                        </network>
                        <network network="twitter">
                            <button
                                type="button"
                                class="btn icon margin rounded"
                                title="Condividi su Twitter"
                            >
                                <font-awesome-icon :icon="[ 'fab', 'twitter' ]" />
                            </button>
                        </network>
                        <network network="whatsapp">
                            <button
                                type="button"
                                class="btn icon margin rounded"
                                title="Condividi su WhatsApp"
                            >
                                <font-awesome-icon :icon="[ 'fab', 'whatsapp' ]" />
                            </button>
                        </network>

                        <h6 class="social-title">
                            <small>
                                <em>
                                    condividi (non il virus)
                                </em>
                            </small>
                        </h6>

                    </div>
                </social-sharing>
            </client-only>

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
                description: process.env.DESCRIPTION,
                url: process.env.URL,
                keywords: process.env.KEYWORDS,
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
                name: this.title,
                about: this.description,
                url: this.url,
            };

        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
