import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import cyan from '@material-ui/core/colors/cyan';

export const THEME_HOME = createMuiTheme({
  palette: {
    primary: red,
    secondary: yellow,
  },
});

export const THEME_PRICE = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: yellow,
  },
});