<template>
    <article class="country-item">

        <header class="country-item__header">
                
            <img
                v-if="item.countryInfo.flag"
                :src="item.countryInfo.flag"
                :alt="`Flag of ${ item.country }`"
                width="36"
                height="24"
                loading="lazy"
                class="country-item__header__flag"
            >

            <h2
                v-if="item.country"
                class="country-item__header__title"
                v-text="item.country"
            />

        </header>

        <div class="country-item__meta">

            <div v-if="item.recoveredPercent" class="country-item__meta__col">

                <h6>Recuperati:</h6>
                <p
                    :class="{
                        'country-item--text-bad': item.recoveredPercent > item.recoveredYesterday,
                        'country-item--text-good': item.recoveredPercent <= item.recoveredYesterday,
                    }"
                >

                    {{ item.recoveredPercent | number }}%

                    <span
                        v-html="item.recoveredPercent > item.recoveredYesterday ? '&#8593;' : '&#8595;'"
                    />

                    ({{ item.recovered | number }})

                </p>

            </div>

            <div v-if="item.activePercent" class="country-item__meta__col">

                <h6>Casi attivi:</h6>
                <p>
                    {{ item.active | number }}
                </p>

            </div>

            <div v-if="item.cases" class="country-item__meta__col">
                <h6>Casi totali:</h6>
                <p v-text="$options.filters.number( item.cases )" />
            </div>

        </div>

        <footer v-if="item.todayDeaths === 0 && item.todayCases === 0 || ( item.daysWithoutDeaths > 1 && item.daysWithoutDeaths < 7 && item.todayDeaths === 0 ) || ( item.todayDeaths === 0 && item.todayCases > 0 )" class="country-item__footer">

            <small v-if="item.todayDeaths === 0 && item.todayCases === 0" class="country-item__badge country-item--bg-bad">
                Nessun dato nuovo da ieri
            </small>

            <small v-if="item.daysWithoutDeaths > 1 && item.daysWithoutDeaths < 7 && item.todayDeaths === 0" class="country-item__badge  country-item--bg-good">
                Nessuna morte segnalata negli scorsi {{ item.daysWithoutDeaths }} giorni!
            </small>
            <small v-else-if="item.todayDeaths === 0 && item.todayCases > 0" class="country-item__badge  country-item--bg-good">
                Nessun deceduto registrato oggi!
            </small>

        </footer>

    </article>
</template>

<script>
    // Component
    export default {
        name: 'country-item',
        inheritAttrs: false,
        props: {
            item: {
                type: Object,
                required: true,
            },
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>