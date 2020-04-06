<template>
    <section class="page container">

        <div v-if="totalArticles.length" class="totalArticles">

            <notizia
                v-for="notizia in totalArticles"
                :key="notizia.id"
                :item="notizia"
            />

        </div>

        <div class="actions">
            <h1>{{ totalResults }} Articoli e notizie</h1>
            <a
                title="Powered by News API"
                class="btn margin padding"
                rel="noopener"
                href="https://newsapi.org/"
                target="_blank"
            >
                Powered by News API
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

                const totalArticles = [
                          {
                              type: 'highlight',
                              urlToImage: 'https://www.google.com/covid19/mobility/static/image.png',
                              title: 'Scopri come la tua community si muove in modo diverso a causa del COVID-19',
                              description: 'Google Maps potrebbe essere uno strumento utile per prendere decisioni critiche per affrontare il virus: queste relazioni sulla mobilità della comunità hanno lo scopo di fornire spunti su ciò che è cambiato in risposta alle politiche volte a combattere COVID-19. I rapporti tracciano nel tempo le tendenze di movimento per area geografica, attraverso diverse categorie di luoghi come negozi e attività ricreative, generi alimentari e farmacie, parchi, stazioni di transito, luoghi di lavoro e residenziali.',
                              publishedAt: '2020-03-29',
                              url: 'https://www.gstatic.com/covid19/mobility/2020-03-29_IT_Mobility_Report_en.pdf',
                          },
                          {
                              type: 'highlight',
                              urlToImage: 'https://www.epicentro.iss.it/coronavirus/img/coronavirus.jpg',
                              title: `L'epidemiologia per la sanità pubblica - Istituto Superiore di Sanità`,
                              description: 'Infografica giornaliera - Il rapporto sulle caratteristiche dei pazienti deceduti positivi a COVID-19 in Italia viene pubblicato su questa pagina ogni giorno',
                              publishedAt: new Date(),
                              url: 'https://www.epicentro.iss.it/coronavirus/',
                          },
                      ]
                      // Current country data
                      , { articles: top } = await $axios.$get(
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
                      )
                      , { articles: everything } = await $axios.$get(
                          '/everything',
                          {
                              params: {
                                  q: 'COVID',
                                  from: '2020-04-01',
                                  sortBy: 'publishedAt',
                                  language: 'it',
                                  apiKey: process.env.NEWS_API,
                                  pageSize: 10,
                                  page: 1,
                              },
                          }
                      )
                ;

                totalArticles.push(
                    ... ( top || [] ).map(
                        n => (
                            {
                                type: 'top',
                                ... n,
                            }
                        )
                    ),
                    ... ( everything || [] ).map(
                        n => (
                            {
                                type: 'everything',
                                ... n,
                            }
                        )
                    ),
                );

                return {
                    totalResults: totalArticles.length,
                    totalArticles,
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
                totalArticles: [],
            }
        ),
        head() {

            return {
                titleTemplate: 'Articoli e notizie - %s',
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
        jsonld() {

            if( ! this.totalArticles.length )
                return null;

            return {
                '@context': 'http://schema.org',
                '@type': 'ItemList',
                itemListElement: this.totalArticles.map(
                    (
                        item,
                        index
                    ) => (
                        {
                            '@type': 'ListItem',
                            position: index + 1,
                            url: item.url,
                            name: item.title,
                            image: item.urlToImage,
                            description: item.description,
                        }
                    )
                ),
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
