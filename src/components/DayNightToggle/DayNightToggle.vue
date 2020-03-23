<template>
    <label
        :for="id"
        :aria-label="title"
        :class="classes"
        class="day-night-toggle"
    >

        <input
            :id="id"
            ref="input"
            v-model="model"
            :placeholder="title"
            :disabled="disabled"
            autocomplete="off"
            type="checkbox"
            @input="$emit(
                'input',
                $event.target.checked
            )"
            @change="$emit(
                'input',
                $event.target.checked
            )"
        >

        <span />

    </label>
</template>

<script>
    export default {
        name: 'day-night-toggle',
        inheritAttrs: false,
        props: {
            value: {
                type: Boolean,
                default: false,
            },
            id: {
                type: String,
                default: 'theme-toggle',
            },
            title: {
                type: String,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        data: () => (
            {
                model: false,
            }
        ),
        computed: {
            classes() {

                return {
                    'day-night-toggle--checked': this.model,
                };

            },
        },
        watch: {
            value: {
                immediate: true,
                handler(
                    newVal
                ) {

                    this.model = newVal;

                },
            },
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
