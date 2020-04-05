<template>
    <section class="page container">

        <div v-if="articles.length" class="articles">

            <notizia
                v-for="notizia in articles"
                :key="notizia.id"
                :item="notizia"
            />

        </div>

        <div class="actions">
            <h1>{{ totalResults }} Articoli</h1>
            <a
                title="Powered by News API"
                class="btn margin padding outline rounded"
                rel="noopener"
                href="https://newsapi.org/"
                target="_blank"
            >
                scopri di più >
            </a>
        </div>

    </section>
</template>

<script>
    // Lazy
    import { hydrateWhenIdle } from 'vue-lazy-hydration';

    // Page
    export default {
        name: 'notizie',
        components: {
            'notizia': hydrateWhenIdle(
                () => import(
                    '~/components/Notizia'
                )
            ),
        },
        async asyncData(
            { app: { $axios } }
        ) {

            try {

                // Current country data
                const {
                    totalResults,
                    articles, 
                } = await $axios.$get(
                    '/top-headlines',
                    {
                        params: {
                            q: 'COVID',
                            from: '2020-04-01',
                            sortBy: 'publishedAt',
                            country: 'it',
                            apiKey: process.env.NEWS_API,
                            pageSize: 20,
                            page: 1,
                        },
                    }
                );

                return {
                    totalResults,
                    articles,
                };
            
            } catch( e ) {

                console.error(
                    e 
                );
            
            }

        },
        data: () => (
            {
                totalResults: 0,
                articles: [],
            }
        ),
        head() {

            return {
                titleTemplate: 'Notizie - %s',
                link: [
                    {
                        once: true,
                        hid: 'preconnect-corona-api',
                        rel: 'preconnect',
                        href: 'https://newsapi.org',
                        crossorigin: true,
                    },
                ],
            };
        
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>

<style scoped lang="scss">
    .page {

        .articles {

            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 24px auto;

        }

    }
</style>
