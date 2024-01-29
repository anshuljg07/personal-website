import React from 'react'
import { createTheme, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";


// creating a custom UserDevice hook that will fetch the current device configurations, (must start with use and be capitlized
export const useResponsiveDevice = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isStandard = useMediaQuery(theme.breakpoints.up('md'));

    return { isMobile, isTablet, isStandard };
}


const useCustomTheme = () => {
    const [mode, setMode] = React.useState('light');

    const toggleColorMode = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    }

    const theme = createTheme({
        palette: {
            mode: mode,
            ...getDesignTokens(mode),
        },
    });

    return {theme, toggleColorMode};
}

const getDesignTokens = (mode)  => ({
        ...(mode === 'light'
            ? {
                background: {
                    default: '#ffffff'
                },
                primary: {
                    // main: '#ffffff',
                    main: '#ffffff',
                    contrastText: '#252422',
                },
                secondary: {
                    main: '#9cc5a1',
                },
                text: {
                    primary: '#f32431',
                },
            }
            : {
                background: {
                    default: '#000000'
                },
                primary: {
                    main: '#212529',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#9cc5a1',
                },
                text: {
                    primary: '#6c757d',
                },
            }),
});

export { useCustomTheme };
