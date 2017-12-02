import React, { Component } from 'react';
import {Text, View } from 'react-native';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
class ShopView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}
export default ShopView;
