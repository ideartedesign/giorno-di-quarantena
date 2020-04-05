<template>
    <article class="notizia">

        <img
            v-if="item.urlToImage"
            :src="item.urlToImage"
            :alt="item.title"
            loading="lazy"
            class="notizia__img"
        >

        <header class="notizia__header">

            <h2
                v-if="item.title"
                class="notizia__title"
                v-text="item.title"
            />

        </header>

        <p
            v-if="item.description"
            class="notizia__content"
            v-text="item.description"
        />

        <footer v-if="item.publishedAt" class="notizia__footer">

            <time v-if="item.publishedAt" :datetime="$options.filters.date( item.publishedAt )">
                <small
                    class="notizia__badge notizia--bg-info"
                    v-text="$options.filters.date( item.publishedAt )"
                />
            </time>

            <a
                v-if="item.url"
                :href="item.url"
                title="Leggi di più"
                rel="noopener"
                target="_blank"
            >
                leggi di più >
            </a>

        </footer>

    </article>
</template>

<script>
    // Component
    export default {
        name: 'notizia',
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