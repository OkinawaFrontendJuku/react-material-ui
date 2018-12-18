import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: red,
  },
});

export const Header = ({ title ,value ,open , items , callback }) =>{
  return(
    <AppBar position="fixed">
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={callback.toggleDrawer}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
      <Tabs value={value} onChange={callback.selectItem} >
        {
          Object.keys(items).map( key =>{
            return <Tab value={key} label={items[key].label} />
          })
        }
      </Tabs>
    </AppBar>
  )
}