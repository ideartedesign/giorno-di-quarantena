export default {
    name: 'number',
    filter: (
        value,
        lang = 'it-IT',
        config = {},
    ) => {

        if( typeof window === 'undefined' )
            return;

        if( ! value || typeof value === 'object' || ! lang )
            return value;

        if( typeof window.Intl !== 'object' || ! window.Intl )
            return value;

        const v = typeof value !== 'number'
            ? parseInt(
                value
            )
            : value
            , options = {
                ... config,
            }
            , isValid = typeof v === 'number' && ! isNaN(
                v
            )
        ;

        if( isValid ) {

            return new Intl
                .NumberFormat(
                    lang,
                    options,
                ).format(
                    v,
                )
            ;

        }

        console.error(
            {
                value,
                v,
            }
        );

        return value;

    },
};
