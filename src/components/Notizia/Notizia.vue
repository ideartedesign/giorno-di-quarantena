<template>
    <article class="notizia">

        <div
            v-if="item.urlToImage"
            :class="{
                'notizia__img__container--loading': loading,
            }"
            class="notizia__img__container"
        >
            <a
                :href="item.url ? item.url : '#'"
                :title="item.title"
                rel="noopener"
                target="_blank"
                class="notizia__img"
            >
                <img
                    :src="item.urlToImage"
                    :alt="item.title"
                    loading="lazy"
                    @load="loading = false"
                >
            </a>
        </div>

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

            <div class="notizia__meta">

                <i
                    v-if="item.type"
                    title="Notizia verificata"
                    :class="{
                        [ `notizia__badge--type-${ item.type }` ]: item.type,
                    }"
                    class="notizia__badge"
                />

                <time v-if="item.publishedAt" :datetime="$options.filters.date( item.publishedAt )">
                    <small
                        class="notizia__date"
                        v-text="$options.filters.date( item.publishedAt )"
                    />
                </time>

            </div>

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
        data: () => (
            {
                loading: true,
            }
        ),
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>
