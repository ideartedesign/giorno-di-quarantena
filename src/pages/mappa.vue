<template>
    <section class="page">

        <iframe
            id="mappa"
            name="mappa"
            class="iframe"
            width="100%"
            height="100%"
            src="https://coronavirus.app/map?embed=true"
            frameborder="0"
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />

    </section>
</template>

<script>
    // Page
    export default {
        name: 'mappa',
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>

<style scoped lang="scss">
    .page {

        overflow: hidden;

        .iframe {

            width: 100%;
            height: 100%;
            min-height: 700px;
            border-radius: 6px;
            pointer-events: none;

        }
        
    }
</style>