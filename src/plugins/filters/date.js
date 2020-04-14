export default {
    name: 'date',
    filter: (
        value,
        lang = 'it-IT',
        config = {},
    ) => {

        if( typeof window === 'undefined' )
            return;

        if( ! window.Intl || typeof window.Intl !== 'object' )
            return value;

        if( ! value || ! lang )
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
            , isValid = v instanceof Date && ! isNaN(
                v
            )
        ;

        if( isValid ) {

            return new Intl
                .DateTimeFormat(
                    lang,
                    options,
                )
                .format(
                    v
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
