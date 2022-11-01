/**
 * This theme is to be used primarily by tailwindcss projects but can also be
 * imported directly into a runtime file and be used if necessary.
 */
export declare const theme: {
    theme: {
        colors: {
            accent: string;
            accentLight: string;
            background: string;
            black: string;
            body1: string;
            body2: string;
            brand: string;
            critical: string;
            criticalDarker: string;
            darker: string;
            lighter: string;
            overlay: string;
            dimmed1: string;
            dimmed2: string;
            divider: string;
            form: string;
            inverseBg: string;
            inverseBody1: string;
            inverseBody2: string;
            inverseDimmed1: string;
            inverseDimmed2: string;
            inverseDivider: string;
            inverseForm: string;
            link: string;
            primary: string;
            secondary: string;
            subtle: string;
            transparent: string;
            warning: string;
            warningLighter: string;
            warningDarker: string;
            error: string;
            success: string;
        };
        borderRadius: {
            sm: string;
            DEFAULT: string;
            lg: string;
            full: string;
        };
        extend: {
            gridTemplateColumns: {
                detailLayout: string;
                detailLayoutAside: string;
            };
            spacing: {
                '1em': string;
            };
            cursor: {
                copy: string;
            };
            keyframes: {
                linearIndeterminate1: {
                    '0%': {
                        left: string;
                        right: string;
                    };
                    '60%': {
                        left: string;
                        right: string;
                    };
                    '100%': {
                        left: string;
                        right: string;
                    };
                };
                linearIndeterminate2: {
                    '0%': {
                        left: string;
                        right: string;
                    };
                    '60%': {
                        left: string;
                        right: string;
                    };
                    '100%': {
                        left: string;
                        right: string;
                    };
                };
                fall: {
                    '0%, 2%, 4%, 6%, 8.4%': {
                        background: string;
                    };
                    '1%, 3%, 5%, 7%': {
                        background: string;
                    };
                };
                bedExit: {
                    '0%, 2%, 4%, 6%, 8.4%': {
                        background: string;
                    };
                    '1%, 3%, 5%, 7%': {
                        background: string;
                    };
                };
            };
            animation: {
                linearIndeterminate1: string;
                linearIndeterminate2: string;
                fall: string;
                bedExit: string;
            };
        };
    };
    variants: {
        extend: {
            opacity: string[];
            cursor: string[];
        };
    };
    plugins: any[];
};
