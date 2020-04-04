export default {
    name: 'date',
    filter: (
        value,
        lang = 'it',
        config = {},
    ) => {

        if( typeof window === 'undefined' )
            return;

        if( ! value || typeof value === 'object' || ! lang )
            return value;

        if( ! window.Intl || typeof window.Intl !== 'object' )
            return value;

        const v = value instanceof Date
            ? value
            : new Date(
                value,
            )
            , options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
                ... config,
            }
        ;

        // eslint-disable-next-line compat/compat
        return new Intl
            .DateTimeFormat(
                lang,
                options,
            )
            .format(
                v
            )
        ;

    },
};
