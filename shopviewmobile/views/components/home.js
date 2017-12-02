import React, { Component } from 'react';
import {Text,View} from 'react-native';
import Frisbee from 'frisbee';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  async getMoviesFromApi() {
    try {
      const api = new Frisbee({
        baseURI: 'https://news.zing.vn',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      res = await api.get('', {

    });
      return res.body;
    } catch(error) {
      console.error(error);
    }
  }
  render() {
    return (
      <View style={{flex:1}} >

      </View>
    );
  }
}
export default Home;
