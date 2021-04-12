import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            black: string;
            gray: string;
            purple: string;
            warning: string
        }
    }
}