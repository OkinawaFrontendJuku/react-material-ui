import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./Navi.css";

export const Navi = ({open,items,callback}) =>{
  return(
    <Drawer
      className="Menu"
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div>
        <IconButton onClick={callback.toggleDrawer}>
          <Icon>close</Icon>
        </IconButton>
      </div>
      <Divider />
      <List>
        {
          Object.keys(items).map( key =>{
            return (
              <ListItem 
                button
                key = {key}
                className="listitem" 
                onClick = {(e)=>{callback.selectItem(e,key)}}
                >
                <ListItemText primary={items[key].label} />
              </ListItem>
            )
          })
        }
      </List>
    </Drawer>
  )
}