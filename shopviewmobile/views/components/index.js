import React, { Component } from 'react';
import {Text, View } from 'react-native';

class ShopView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}} />
        <View style={{flex:9, backgroundColor: 'skyblue'}} />
        <View style={{flex:1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
export default ShopView;
