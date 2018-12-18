import React, { Component } from 'react';
import Layout from '../templates/Layout/Layout';
import {PRICE_MENU} from '../../contents/contents';
import {List} from '../organisms/List/List';
import {Map} from '../organisms/Map/Map';
import {THEME_PRICE} from '../../contents/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class Price extends Component{

  render(){
    return(
      <MuiThemeProvider theme={THEME_PRICE}>
        <Layout
          page="price" 
          history={this.props.history}
        >
          <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCOxQttFe-M0xmIQ3L52anBhHeoUCgHZV4&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <List data={PRICE_MENU} />
        </Layout>
      </MuiThemeProvider>
    )
  }
}