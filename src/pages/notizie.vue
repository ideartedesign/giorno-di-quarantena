<template>
    <section class="page container">

        <div class="global-data">
            <h2 class="title">
                {{ totalArticles.length }} Articoli e notizie
            </h2>
            <h3 v-if="verifiedArticles" class="subtitle">
                <small>
                    <em>{{ verifiedArticles | number }} verificate</em>
                </small>
            </h3>
        </div>

        <div v-if="totalArticles.length" class="totalArticles">

            <div class="search_container">
                <input
                    v-model="search"
                    type="text"
                    aria-label="Cerca"
                    placeholder="Cerca ..."
                >
            </div>

            <notizia
                v-for="notizia in dataFiltered"
                :key="notizia.id"
                :item="notizia"
            />

        </div>

        <div class="actions">
            <h1>
                Articoli e notizie verificati
            </h1>
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
                              urlToImage: 'https://www.ilpost.it/wp-content/uploads/2020/04/GettyImages-1207839450-copia.jpg',
                              title: 'Cosa ci aspetta',
                              description: `Un lungo articolo del New York Times raccoglie analisi e previsioni di venti esperti di epidemie, salute e storia, delineando diversi scenari sul prossimo anno e forse di più.`,
                              publishedAt: '2020-04-22',
                              url: 'https://www.cultweek.com/pandemia-quel-che-sapevamo-e-che-non-e-servito-a-niente-sapere/',
                          },
                          {
                              type: 'highlight',
                              urlToImage: 'https://www.cultweek.com/wp-content/uploads/2020/04/covid-19.jpeg',
                              title: 'Pandemia: quel che sapevamo',
                              description: `Davvero il Big one non si poteva prevedere? Davvero non avevamo avvisaglie? Davvero le scelte di politica sanitaria non hanno concorso all'esito della pandemia che è sotto gli occhi di tutti? La risposta è no, più d'uno ci aveva avvertito. Ed è stato ignorato.`,
                              publishedAt: '2020-04-18',
                              url: 'https://www.cultweek.com/pandemia-quel-che-sapevamo-e-che-non-e-servito-a-niente-sapere/',
                          },
                          {
                              type: 'highlight',
                              urlToImage: 'https://i2.wp.com/www.francescocosta.net/wp-content/uploads/2020/04/contagi.png',
                              title: 'I dati ufficiali non avevano senso prima e non hanno senso adesso',
                              description: `I dati ufficiali sull'epidemia diffusi ieri dalla Protezione Civile hanno generato qualche preoccupazione. Dopo oltre 40 giorni di quarantena – quarantena decisa per combattere una malattia che avrebbe un tempo di incubazione di 14 giorni al massimo – ci sono molti segnali positivi ma non c’è il crollo del numero quotidiano dei nuovi contagiati che sarebbe stato logico aspettarsi.`,
                              publishedAt: '2020-04-12',
                              url: 'https://www.francescocosta.net/2020/04/12/dati-ufficiali-senza-senso/',
                          },
                          {
                              type: 'highlight',
                              urlToImage: 'https://www.askanews.it/wp-content/uploads/2020/04/20200408_112455_18FE0EA7.jpg',
                              title: 'Fine del lock down (confinamento) di Wuhan',
                              description: `Dopo la revoca del confinamento obbligatorio, iniziata a mezzanotte ora locale, gli undici milioni di abitanti di Wuhan possono finalmente lasciare la città che ha visto nascere l'epidemia di coronavirus: sempre che, come ricorda il South China Post, siano in possesso del codice QR che garantisca la loro negatività e il non essere stati in contatto con dei contagiati.`,
                              publishedAt: '2020-04-08',
                              url: 'https://www.askanews.it/esteri/2020/04/08/che-succede-a-wuhan-senza-il-lockdown-e-cosa-%c3%a8-il-qr-di-negativit%c3%a0-top10_20200408_112508/',
                          },
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
                              urlToImage: 'https://tvblog-static.tradingview.com/uploads/2020/03/covid_19_1.png',
                              title: `Grafico riguardante l'impatto globale del nuovo coronavirus (il cui nome scientifico è SARS-CoV-2)`,
                              description: `Lavoro da casa, traffico, velocità alla guida, polveri nell'aria, uso dei trasporti pubblici, compravendita.. Questo e altro in questa serie di diapositive che analizzano l'impatto che ha avuto il coronavirus a livello mondiale.`,
                              publishedAt: '2020-04-10',
                              url: 'https://docs.google.com/presentation/d/e/2PACX-1vTg9n7VMzj8RqHqPImPHY3oiVjDLFHJRfYJADZh51fddM0-3FBUr_CRDPBaZ_ezUCZikmEA8GibDJYU/pub?start=true&loop=true&delayms=5000',
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
                      , verifiedArticles = totalArticles.length
                      // Current country data
                      , { articles: top } = await $axios.$get(
                          '/top-headlines',
                          {
                              params: {
                                  q: 'coronavirus',
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
                                  qInTitle: 'coronavirus',
                                  from: '2020-04-01',
                                  sortBy: 'relevancy',
                                  language: 'it',
                                  apiKey: process.env.NEWS_API,
                                  pageSize: 5,
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
                    totalArticles,
                    verifiedArticles,
                };

            } catch( e ) {

                console.error(
                    e
                );

            }

        },
        data: () => (
            {
                totalArticles: [],
                search: '',
                verifiedArticles: 0,
            }
        ),
        computed: {
            searchToUppercase() {

                return this.search.toUpperCase();

            },
            dataFiltered() {

                if( ! this.search )
                    return this.totalArticles;

                return this.totalArticles.filter(
                    (
                        {
                            title,
                            description,
                        }
                    ) => (
                        title.toUpperCase().includes(
                            this.searchToUppercase
                        )
                        || description.toUpperCase().includes(
                            this.searchToUppercase
                        )
                    )
                );

            },
        },
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

        .title {

            font-weight: bolder;
            font-size: 45px;

        }

        .subtitle {

            margin: 8px auto;
            color: #27ae60;
            font-weight: bold;
            font-size: 25px;

        }

        .articles {

            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 24px auto;

        }

    }
</style>
