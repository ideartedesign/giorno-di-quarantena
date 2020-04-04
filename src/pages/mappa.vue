<template>
    <section class="page">

        <iframe
            id="mappa"
            :src="iframeSrc"
            name="mappa"
            width="100%"
            height="100%"
            frameborder="0"
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />

        <div class="actions container">
            <h1>Mappa</h1>
            <a
                title="Corona virus app"
                class="btn margin padding outline rounded"
                rel="noopener"
                href="http://coronavirus.app/"
                target="_blank"
            >
                scopri di più >
            </a>
        </div>

    </section>
</template>

<script>
    // Page
    export default {
        name: 'mappa',
        data: () => (
            {
                iframeSrc: 'https://coronavirus.app/map?embed=true',
            }
        ),
        head() {

            return {
                titleTemplate: 'Mappa contagi - %s',
                link: [
                    {
                        once: true,
                        hid: 'preload-coronavirus-map',
                        rel: 'preload',
                        as: 'document',
                        href: this.iframeSrc,
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

        overflow: hidden;

        iframe {

            width: 100%;
            height: 100%;
            min-height: 560px;
            border-radius: 6px;
            pointer-events: none;

        }

    }
</style>