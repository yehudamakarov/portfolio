import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(2,119,189,0.91)',
      contrastText: '#fdf9f1',
    },
    secondary: {
      main: '#7CB46A',
      contrastText: '#FDF9F1',
    },
    error: {
      main: '#e24813',
      contrastText: '#FDF9F1',
    },
    background: {
      default: '#141929',
      paper: '#1B2237',
    },
    text: {
      primary: '#FDF9F1',
    },
  },
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 900,
      lineHeight: 0.99,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.9rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.3rem',
    },
    fontFamily: 'Lato',
    fontSize: 13,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    subtitle1: {
      fontWeight: 700,
      fontFamily: 'Lato',
    },
    body1: {
      fontSize: '0.93rem',
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: '0.83rem',
    },
    overline: {
      fontWeight: 500,
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiAppBar: {
      color: 'transparent',
    },
  },
};
