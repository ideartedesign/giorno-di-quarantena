<template>
    <section class="page container">

        <div v-if="globalData" class="global-data">
            <h2 v-if="globalData.cases" class="title">
                Casi totali: {{ globalData.cases | number }}
            </h2>
            <h3 v-if="globalData.recovered" class="subtitle">
                Recuperati: {{ globalData.recovered | number }} &#8593; ({{ globalData.recoveredPercent | number }}%)
            </h3>
            <h6 v-if="globalData.updated" class="date">
                <time :datetime="$options.filters.date( globalData.updated )">
                    <small>
                        <em>
                            <strong>Aggiornato al</strong>: {{ globalData.updated | date }}
                        </em>
                    </small>
                </time>
            </h6>
        </div>

        <div v-if="countriesData.length" class="countries">

            <p class="margin">
                <small>
                    <em>
                        N.B.: sono mostrati solo gli stati con più di 1000 casi, ordinati per tasso di recupero
                    </em>
                </small>
            </p>

            <country-item
                v-for="country in countriesData"
                :key="country.country"
                :item="country"
            />

        </div>

        <div class="actions">
            <h1>#IoRestoPositivo</h1>
            <a
                title="Corona virus API Data"
                class="btn margin padding outline rounded"
                rel="noopener"
                href="https://www.worldometers.info/coronavirus/"
                target="_blank"
            >
                scopri di più >
            </a>
        </div>

    </section>
</template>

<script>
    // API
    import { NovelCovid } from 'novelcovid';

    // Lazy
    import { hydrateWhenIdle } from 'vue-lazy-hydration';

    // Usage
    const covid = new NovelCovid()
          , threshold = 1000
    ;

    // Page
    export default {
        name: 'io-resto-positivo',
        components: {
            'country-item': hydrateWhenIdle(
                () => import(
                    '~/components/CountryItem'
                )
            ),
        },
        async asyncData() {

            const objValues = obj => Object
                      .keys(
                          obj
                      )
                      .map(
                          key => obj[ key ]
                      )
                  , getPercent = (
                      value1,
                      value2,
                      value3,
                  ) => ( value1 / ( value2 - value3 ) * 100 )
                  , getHistorical = countries => {

                      const promises = countries.map(
                          (
                              { country }
                          ) => covid.historical(
                              null,
                              country 
                          ) 
                      );

                      // eslint-disable-next-line compat/compat
                      return Promise.all(
                          promises 
                      );
            
                  }
                  , filterLastWeek = countries => {

                      const countriesArray = []
                            // Number of days back in time to return
                            , amountOfDays = 7
                      ;

                      countries.forEach(
                          country => {

                              const arr = [];

                              for( const key in country.timeline.deaths ) {

                                  if(
                                      Object.prototype.hasOwnProperty.call(
                                          country.timeline.deaths,
                                          key
                                      )
                                  ) {

                                      arr.push(
                                          country.timeline.deaths[ key ] 
                                      );

                                  }
        
                              }
                              countriesArray.push(
                                  arr.slice(
                                      arr.length - amountOfDays 
                                  ) 
                              );
                
                          } 
                      );

                      return countriesArray;
            
                  }
                  , mergeData = (
                      countryData,
                      historicalData,
                      historicalAll 
                  ) => {

                      const arr = [];

                      countryData.forEach(
                          (
                              country, i 
                          ) => {

                              let daysWithoutDeaths = 0
                                  , recoveredYesterday
                                  , recoveredDifference
                              ;

                              historicalData[ i ].reverse().forEach(
                                  (
                                      item, index 
                                  ) => {

                                      if( item === historicalData[ i ][ 0 ] && index !== 0 && item !== historicalData[ i ][ index + 1 ] ) 
                                          daysWithoutDeaths = index + 1;
        
                                  } 
                              );

                              historicalAll.forEach(
                                  c => {

                                      if( country.country.toUpperCase() === c.country.toUpperCase() ) {

                                          const deaths = objValues(
                                                    c.timeline.deaths 
                                                )[ 
                                                    objValues(
                                                        c.timeline.deaths 
                                                    ).length - 1 
                                                ]
                                                , cases = objValues(
                                                    c.timeline.cases 
                                                )[ 
                                                    objValues(
                                                        c.timeline.cases 
                                                    ).length - 1
                                                ]
                                                , recovered = objValues(
                                                    c.timeline.recovered 
                                                )[ 
                                                    objValues(
                                                        c.timeline.recovered 
                                                    ).length - 1
                                                ]
                                          ;

                                          recoveredYesterday = getPercent(
                                              recovered,
                                              cases,
                                              deaths
                                          );

                                          recoveredDifference = Math.abs(
                                              country.recoveredPercent - recoveredYesterday 
                                          );
                        
                                      }
                    
                                  } 
                              );

                              arr.push(
                                  {
                                      ... country,
                                      historicalData: historicalData[ i ],
                                      daysWithoutDeaths,
                                      recoveredYesterday,
                                      recoveredDifference, 
                                  } 
                              );
                
                          } 
                      );

                      return arr;
            
                  }
                  , getAllCalculations = (
                      data,
                      countriesData 
                  ) => {

                      const updated = new Date(
                                data.updated
                            )
                                .toLocaleString(
                                    'it-IT'
                                )
                            , recoveredPercent = getPercent(
                                data.recovered,
                                data.cases,
                                data.deaths
                            )
                            , mostRecovered = countriesData
                                .sort(
                                    (
                                        a, b
                                    ) => b.recoveredPercent - a.recoveredPercent
                                )
                                .slice(
                                    0,
                                    3
                                )
                            , noDeaths = countriesData.filter(
                                item => item.daysWithoutDeaths > 0 && item.todayDeaths === 0 
                            )
                            , criticalLessThanFive = countriesData
                                .filter(
                                    item => item.nonCriticalPercent > 95 
                                )
                                .length / countriesData.length * 100
                            , recoveredMostDifference = countriesData
                                .filter(
                                    item => item.recoveredYesterday > 0 && item.recoveredYesterday !== item.recoveredPercent 
                                )
                                .sort(
                                    (
                                        a,
                                        b 
                                    ) => b.recoveredDifference - a.recoveredDifference 
                                )[ 0 ]
                      ;

                      return {
                          ... data,
                          recoveredPercent,
                          updated,
                          mostRecovered,
                          noDeaths,
                          criticalLessThanFive,
                          recoveredMostDifference, 
                      };
            
                  }
                  , getCountriesCalculations = data => {

                      const dataFiltered = data.filter(
                                country => country.country !== 'World' 
                            )
                            , updated = []
                      ;

                      dataFiltered.forEach(
                          item => {

                              if( item.cases > threshold ) {

                                  const recoveredPercent = getPercent(
                                            item.recovered,
                                            item.cases,
                                            item.deaths
                                        )
                                        , criticalPercent = getPercent(
                                            item.critical,
                                            item.cases,
                                            item.deaths
                                        )
                                        , nonCriticalPercent = 100 - criticalPercent
                                        , activePercent = getPercent(
                                            item.active,
                                            item.cases,
                                            item.deaths
                                        )
                                  ;

                                  updated.push(
                                      {
                                          ... item,
                                          recoveredPercent,
                                          criticalPercent,
                                          nonCriticalPercent,
                                          activePercent, 
                                      } 
                                  );
                    
                              }
                
                          } 
                      );

                      return updated;
            
                  }
            ;
            
            try {

                // Current country data
                const countries = await covid.countries()
                      , countriesCalculated = getCountriesCalculations(
                          countries 
                      )
                      // Historical country data
                      , countriesHistorical = await getHistorical(
                          countriesCalculated 
                      )
                      , countriesHistoricalFiltered = filterLastWeek(
                          countriesHistorical 
                      )
                      , mergedData = mergeData(
                          countriesCalculated,
                          countriesHistoricalFiltered,
                          countriesHistorical 
                      )
                      // Global data
                      , global = await covid.all()
                      , globalCalculated = getAllCalculations(
                          global,
                          mergedData 
                      )
                      , countriesData = mergedData.slice().sort(
                          (
                              a, b 
                          ) => ( ( a.recoveredPercent < b.recoveredPercent ) ? 1 : - 1 ) 
                      )
                      , globalData = globalCalculated
                ;
                
                return {
                    countriesData,
                    globalData,
                };
            
            } catch( e ) {

                console.error(
                    e 
                );
            
            }

        },
        data: () => (
            {
                countriesData: [],
                globalData: {},
            }
        ),
        head() {

            return {
                titleTemplate: 'Io resto positivo - %s',
                link: [
                    {
                        once: true,
                        hid: 'preconnect-corona-api',
                        rel: 'preconnect',
                        href: 'https://corona.lmao.ninja',
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

        .title {

            font-weight: bolder;
            font-size: 45px;

        }

        .subtitle {

            color: #27ae60;
            font-weight: bold;
            font-size: 25px;
            line-height: 2;

        }

        .countries {

            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 24px auto;

        }

    }
</style>
