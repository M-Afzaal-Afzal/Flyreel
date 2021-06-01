import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1E1F27',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  mainButton: {
    padding: '1.25vw 3.125vw',
    fontSize: '1.2rem',
    background: '#5E0CEF',
    fontFamily: 'Gilroy-Medium',
    color: "#fff",
    textDecoration:'none',
    display: 'inline-block',
    marginTop: '2.6875vw',
    cursor: 'pointer',
    '@media only screen and (max-width: 800px)': {
      marginTop: '10.60241vw',

    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          fontFamily: "Gilroy-Medium",
          fontWeight: '400',
          fontSize: '1rem',
        }
      },
    },
  },
});

export default theme;
