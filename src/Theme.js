import { createTheme } from "@mui/material";

const theme_custom = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#230007',
          contrastText: '#C98986',
        },
        secondary: {
          main: '#C98986',
          contrastText: '#a40606',
        },
        warning: {
          main: '#05299E',
        },
        divider: '#230007',
        error: {
          main: '#A40606',
        },
        success: {
          main: '#C98986',
        },
        info: {
          main: '#3454D1',
        },
        background: {
          default: '#bfb1b1',
        },
      },
      typography: {
        button: {
          fontFamily: 'Oswald',
        },
        fontFamily: 'Oswald',
        body1: {
          fontFamily: 'Roboto',
        },
        caption: {
          fontFamily: 'Roboto',
        },
      },
    })

    export default theme_custom