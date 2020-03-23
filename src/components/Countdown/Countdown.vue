<template>
    <div class="countdown" :class="classes">

        <div class="countdown__outer">

            <div
                v-if="showPercentage"
                :aria-valuenow="percentage"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                class="countdown__progress"
            >
                <svg viewBox="0 0 100 100">
                    <path
                        d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                        fill-opacity="0"
                        stroke-dashoffset="0"
                        :stroke-dasharray="( 296 * percentage ) / 100"
                    />
                </svg>
            </div>

            <div class="countdown__content">

                <header v-if="$slots.title || $scopedSlots.title" class="countdown__header">
                    <slot
                        name="title"
                        :data="slotsData"
                    />
                </header>

                <time class="countdown__time" :datetime="valueToString">
                    <slot
                        :data="{
                            distance,
                            days,
                            hours,
                            minutes,
                            seconds,
                            isEnded,
                        }"
                    >

                        <!-- Days -->
                        <template v-if="! hideDays">

                            <slot
                                name="days"
                                :data="{
                                    days,
                                    isEnded,
                                }"
                            >
                                <div class="countdown__time__slot days">

                                    <div class="number">

                                        <span
                                            v-if="! hideDaysValue"
                                            class="value"
                                            v-text="days.value"
                                        />

                                    </div>

                                    <span
                                        v-if="! hideDaysLabel"
                                        class="label"
                                        v-text="days.label"
                                    />

                                </div>
                            </slot>

                            <div
                                v-if="separator && ! hideDaysSeparator"
                                class="countdown__time__slot separator"
                            >
                                <div
                                    class="number"
                                    v-text="separator"
                                />
                            </div>

                        </template>

                        <!-- Hours -->
                        <template v-if="! hideHours">

                            <slot
                                name="hours"
                                :data="{
                                    hours,
                                    isEnded,
                                }"
                            >
                                <div class="countdown__time__slot hours">

                                    <div class="number">

                                        <span
                                            v-if="! hideHoursValue"
                                            class="value"
                                            v-text="hours.value"
                                        />

                                    </div>

                                    <span
                                        v-if="! hideHoursLabel"
                                        class="label"
                                        v-text="hours.label"
                                    />

                                </div>
                            </slot>

                            <div
                                v-if="separator && ! hideHoursSeparator"
                                class="countdown__time__slot separator"
                            >
                                <div
                                    class="number"
                                    v-text="separator"
                                />
                            </div>

                        </template>

                        <!-- Minutes -->
                        <template v-if="! hideMinutes">

                            <slot
                                name="minutes"
                                :data="{
                                    minutes,
                                    isEnded,
                                }"
                            >
                                <div class="countdown__time__slot minutes">

                                    <div class="number">

                                        <span
                                            v-if="! hideMinutesValue"
                                            class="value"
                                            v-text="minutes.value"
                                        />

                                    </div>

                                    <span
                                        v-if="! hideMinutesLabel"
                                        class="label"
                                        v-text="minutes.label"
                                    />

                                </div>
                            </slot>

                            <div
                                v-if="separator && ! hideMinutesSeparator"
                                class="countdown__time__slot separator"
                            >
                                <div
                                    class="number"
                                    v-text="separator"
                                />
                            </div>

                        </template>

                        <!-- Seconds -->
                        <slot
                            v-if="! hideSeconds"
                            name="seconds"
                            :data="{
                                seconds,
                                isEnded,
                            }"
                        >
                            <div class="countdown__time__slot seconds">

                                <div class="number">

                                    <span
                                        v-if="! hideSecondsValue"
                                        class="value"
                                        v-text="seconds.value"
                                    />

                                </div>

                                <span
                                    v-if="! hideSecondsLabel"
                                    class="label"
                                    v-text="seconds.label"
                                />

                            </div>
                        </slot>

                    </slot>
                </time>
            </div>

        </div>

        <slot
            name="footer"
            :data="slotsData"
        />

    </div>
</template>

<script>
    // Node
    import { setInterval, clearInterval } from 'timers';

    // Component
    export default {
        name: 'countdown',
        inheritAttrs: false,
        props: {
            value: {
                type: [
                    Number,
                    Date,
                    String,
                ],
                default: Date.now(),
            },
            startDate: {
                type: [
                    Number,
                    Date,
                    String,
                ],
                default: null,
            },
            endDate: {
                type: [
                    Number,
                    Date,
                    String,
                ],
                default: null,
            },
            milliseconds: {
                type: [
                    String,
                    Number,
                ],
                default: 1000,
            },
            locale: {
                type: Object,
                default: () => (
                    {
                        DAY_PLURAL: 'giorni',
                        DAY_SINGULAR: 'giorni',
                        HOUR_PLURAL: 'ore',
                        HOUR_SINGULAR: 'ore',
                        MINUTE_PLURAL: 'minuti',
                        MINUTE_SINGULAR: 'minuti',
                        SECOND_PLURAL: 'secondi',
                        SECOND_SINGULAR: 'secondi',
                    }
                ),
            },
            separator: {
                type: String,
                default: ':',
            },
            type: {
                type: String,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            distanceFromStart: {
                type: Boolean,
                default: false,
            },
            distanceEndFromStart: {
                type: Boolean,
                default: false,
            },
            showPercentage: {
                type: Boolean,
                default: false,
            },
            hideDays: {
                type: Boolean,
                default: false,
            },
            hideHours: {
                type: Boolean,
                default: false,
            },
            hideMinutes: {
                type: Boolean,
                default: false,
            },
            hideSeconds: {
                type: Boolean,
                default: false,
            },
            hideDaysSeparator: {
                type: Boolean,
                default: false,
            },
            hideHoursSeparator: {
                type: Boolean,
                default: false,
            },
            hideMinutesSeparator: {
                type: Boolean,
                default: false,
            },
            hideDaysLeadingZero: {
                type: Boolean,
                default: false,
            },
            hideHoursLeadingZero: {
                type: Boolean,
                default: false,
            },
            hideMinutesLeadingZero: {
                type: Boolean,
                default: false,
            },
            hideSecondsLeadingZero: {
                type: Boolean,
                default: false,
            },
            hideDaysValue: {
                type: Boolean,
                default: false,
            },
            hideDaysLabel: {
                type: Boolean,
                default: false,
            },
            hideHoursValue: {
                type: Boolean,
                default: false,
            },
            hideHoursLabel: {
                type: Boolean,
                default: false,
            },
            hideMinutesValue: {
                type: Boolean,
                default: false,
            },
            hideMinutesLabel: {
                type: Boolean,
                default: false,
            },
            hideSecondsValue: {
                type: Boolean,
                default: false,
            },
            hideSecondsLabel: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            classes() {

                return {
                    [ `countdown--type-${ this.type || 'default' }` ]: !! this.type,
                };

            },
            // Values
            valueToNumber() {

                if( ! this.value )
                    return 0;

                let value = 0;

                if( this.value instanceof Date )
                    value = this.value.getTime();
                else if( typeof this.value === 'string' ) {

                    value = new Date(
                        this.value
                    ).getTime();

                } else
                    value = this.value;

                return value <= 0 ? 0 : value;

            },
            startDateToNumber() {

                if( ! this.startDate )
                    return this.valueToNumber;

                let value = 0;

                if( this.startDate instanceof Date )
                    value = this.startDate.getTime();
                else if( typeof this.startDate === 'string' ) {

                    value = new Date(
                        this.startDate
                    ).getTime();

                } else
                    value = this.startDate;

                return value <= 0 ? 0 : value;

            },
            endDateToNumber() {

                if( ! this.endDate )
                    return this.valueToNumber;

                let value = 0;

                if( this.endDate instanceof Date )
                    value = this.endDate.getTime();
                else if( typeof this.endDate === 'string' ) {

                    value = new Date(
                        this.endDate
                    ).getTime();

                } else
                    value = this.endDate;

                return value <= 0 ? 0 : value;

            },
            valueToString() {

                const DATE = new Date(
                    this.valueToNumber
                );

                return DATE.toJSON();

            },
            distanceFromEndToStart() {

                return this.endDateToNumber - this.startDateToNumber;

            },
            distanceFromStartToValue() {

                return this.valueToNumber - this.startDateToNumber;

            },
            distanceFromEndToValue() {

                if( ! this.valueToNumber )
                    return 0;

                return this.endDateToNumber - this.valueToNumber;

            },
            distance() {

                if( this.startDate ) {

                    if( this.distanceFromStart )
                        return this.distanceFromStartToValue;

                    if( this.distanceEndFromStart )
                        return this.distanceFromEndToStart;

                }

                return this.distanceFromEndToValue;

            },
            percentage() {

                if( ! this.startDate )
                    return 0;

                return Math.round(
                    100 * this.distanceFromStartToValue / this.distanceFromEndToStart
                );

            },
            ticking() {

                if( this.distance <= 0 ) {

                    return {
                        days: {
                            label: this.locale.DAY_PLURAL,
                            value: 0,
                        },
                        hours: {
                            label: this.locale.HOUR_PLURAL,
                            value: 0,
                        },
                        minutes: {
                            label: this.locale.MINUTE_PLURAL,
                            value: 0,
                        },
                        seconds: {
                            label: this.locale.SECOND_PLURAL,
                            value: 0,
                        },
                    };

                }

                const TIMING = 1000
                      , DAYS = ( TIMING * 60 * 60 * 24 )
                      , HOURS = ( TIMING * 60 * 60 )
                      , SECONDS = ( TIMING * 60 )
                      // Time calculations for days, hours, minutes and seconds
                      , days = Math.floor(
                          this.distance / DAYS
                      )
                      , hours = Math.floor(
                          ( this.distance % DAYS ) / HOURS
                      )
                      , minutes = Math.floor(
                          ( this.distance % HOURS ) / SECONDS
                      )
                      , seconds = Math.floor(
                          ( this.distance % SECONDS ) / TIMING
                      )
                      // Results
                      , results = {
                          days: {
                              label: days > 1 || days <= 0 ? this.locale.DAY_PLURAL : this.locale.DAY_SINGULAR,
                              value: ! this.hideDaysLeadingZero && days.toString().length === 1 ? `0${ days }` : days,
                          },
                          hours: {
                              label: hours > 1 || hours <= 0 ? this.locale.HOUR_PLURAL : this.locale.HOUR_SINGULAR,
                              value: ! this.hideHoursLeadingZero && hours.toString().length === 1 ? `0${ hours }` : hours,
                          },
                          minutes: {
                              label: minutes > 1 || minutes <= 0 ? this.locale.MINUTE_PLURAL : this.locale.MINUTE_SINGULAR,
                              value: ! this.hideMinutesLeadingZero && minutes.toString().length === 1 ? `0${ minutes }` : minutes,
                          },
                          seconds: {
                              label: seconds > 1 || seconds <= 0 ? this.locale.SECOND_PLURAL : this.locale.SECOND_SINGULAR,
                              value: ! this.hideSecondsLeadingZero && seconds.toString().length === 1 ? `0${ seconds }` : seconds,
                          },
                      }
                ;

                return results;

            },
            // Values
            days() {

                return this.ticking.days;

            },
            hours() {

                return this.ticking.hours;

            },
            minutes() {

                return this.ticking.minutes;

            },
            seconds() {

                return this.ticking.seconds;

            },
            slotsData() {

                return {
                    distance: this.distance,
                    days: this.days,
                    hours: this.hours,
                    minutes: this.minutes,
                    seconds: this.seconds,
                    isEnded: this.isEnded,
                };

            },
            // Statuses
            isEnded() {

                return this.distance <= 0;

            },
            // setInterval options
            millisecondsToNumber() {

                if( typeof this.milliseconds === 'string' ) {

                    return parseInt(
                        this.milliseconds
                    );

                }

                return this.milliseconds;

            },
        },
        created() {

            this.$interval = null;

        },
        mounted() {

            this.$interval = setInterval(
                this.onTick,
                this.millisecondsToNumber
            );

        },
        beforeDestroy() {

            this.clearInterval();

        },
        methods: {
            newTick() {

                if( this.value instanceof Date || typeof this.value === 'string' ) {

                    const DATE = new Date(
                        Date.now()
                    );

                    if( this.value instanceof Date )
                        return this.value.getTime();

                    return DATE.toJSON();

                }

                return Date.now();

            },
            // setInterval methods
            onTick() {

                if( this.disabled )
                    return;

                this.$emit(
                    'input',
                    this.newTick()
                );

                if( ! this.isEnded )
                    return;

                this.clearInterval();

                this.$emit(
                    'ended',
                );

            },
            clearInterval() {

                this.$interval && clearInterval(
                    this.$interval
                );

            },
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
