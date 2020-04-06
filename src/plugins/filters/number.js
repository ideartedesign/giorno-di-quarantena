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
        ;
            
        // eslint-disable-next-line compat/compat
        return new Intl
            .NumberFormat(
                lang,
                options,
            ).format(
                v,
            )
        ;

    },
};
