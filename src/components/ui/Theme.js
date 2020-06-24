import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#496fb8';
const lightBlue = '#819edc';
const gold = '#b4942c';
const lightGold = '#d3caaa';
const lighterBlue = '#dbe5f8'


export default createMuiTheme({
  palette: {
    common: {
      blue: blue,
      lightBlue: lightBlue,
      gold: gold,
      lightGold: lightGold,
      lighterBlue: lighterBlue,
    },
    primary: {
        main: blue,
        light: lightBlue,
    },
    secondary: {
        main: gold,
        light: lightGold,
    },
  },
  typography: {
    h1: {
    },
    h2: {
    },

    h3: {
    },
    h4: {
    },
    h5: {
    },
    h6: {
    },
    subtitle1: {
    },
    subtitle2: {
    },
    body1: {
    },
    body2: {
    },
    caption: {
    },
  },
  overrides: {
    MuiInputLabel: {

      root: {
        fontSize: '1rem',
        '&$focused': {
          // increase the specificity for the pseudo class
        },
      },
    },
    MuiInput: {
      root: {
      },
      underline: {
        '&:before': {
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
        },
      },
    },
  },
});
