import React, { Component } from 'react';
import {Text,View} from 'react-native';

class Shop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex:1}} >
        <Text>{this.props.lang.ftrShop}</Text>
      </View>
    );
  }
}
export default Shop;
