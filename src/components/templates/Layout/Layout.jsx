import React,{Component} from 'react';
import {TITLE,PAGES} from '../../../contents/contents';
import {Navi} from '../../organisms/Navi/Navi';
import {Body} from '../Body/Body';
import {Header} from '../Header/Header';

export default class Layout extends Component{
  constructor(props){
    super(props);

    this.state = {
      tabvalue : props.page,
      drawer:false,
    }

    this.callback = {
      //Page
      selectItem:(e,value)=>{
        this.props.history.push(`/${PAGES[value].path}`);
        this.setState({tabvalue:value});
      },

      //Drawer open/close
      toggleDrawer:(e)=>{
        this.setState({drawer:!this.state.drawer});
      }
    }

  }

  render(){
    return(
      <React.Fragment>
        <Header
          title = {TITLE}
          items  = {PAGES} 
          value = {this.state.tabvalue}
          callback  = {this.callback}
        />
        <Navi
          items  = {PAGES} 
          open = {this.state.drawer}
          callback  = {this.callback}
          />
        <Body>
          {this.props.children}
        </Body>
      </React.Fragment>
    )
  }
}