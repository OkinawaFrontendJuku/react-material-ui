import React, { Component } from 'react';
import Layout from '../templates/Layout/Layout';
import {HOME_IMAGE} from '../../contents/contents';
import {ImageGrid} from '../organisms/ImageGrid/ImageGrid';
import {THEME_HOME} from '../../contents/theme';
import {MuiThemeProvider} from '@material-ui/core/styles';

export default class Home extends Component{
  render(){
    return(
      <MuiThemeProvider theme={THEME_HOME}>
        <Layout
          page="home"
          history={this.props.history} 
        >
          <ImageGrid data={HOME_IMAGE} />
        </Layout>
      </MuiThemeProvider>
    )
  }
}