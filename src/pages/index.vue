<template>
    <section class="page container">

        <countdown
            :start-date="START_DATE"
            :end-date="END_DATE"
            disabled
            distance-from-start
            show-percentage
            hide-days-label
            hide-days-separator
            hide-hours
            hide-minutes
            hide-seconds
            type="neomorphism"
        >
            <template #title>
                <h1 v-text="title" />
            </template>
        </countdown>

        <div class="margin-top--48">
            <countdown
                v-model="value"
                :timezone="timezone"
                :start-date="START_DATE"
                :end-date="END_DATE"
            />
        </div>

    </section>
</template>

<script>
    // Lazy
    import { hydrateWhenIdle } from 'vue-lazy-hydration';

    // Data
    const START_DATE = '2020-03-09T00:00:00.000Z'
          , END_DATE = '2020-04-04T00:00:00.000Z'
    ;

    // Page
    export default {
        name: 'homepage',
        components: {
            'countdown': hydrateWhenIdle(
                () => import(
                    '~/components/Countdown'
                )
            ),
        },
        data: () => (
            {
                title: process.env.TITLE.toUpperCase(),
                value: Date.now(),
                // fixme: use getTimezoneOffset
                timezone: {
                    type: '+',
                    value: 2,
                },
                END_DATE,
                START_DATE,
            }
        ),

    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
