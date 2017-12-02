import React, { Component } from 'react';
import {Text, View } from 'react-native';
import HeaderContainer from './headerContainer.js';
import ContentContainer from './contentContainer.js';
import FooterContainer from './footerContainer.js';
class ShopView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderContainer />
        <ContentContainer />
        <FooterContainer />
      </View>
    );
  }
}
export default ShopView;
