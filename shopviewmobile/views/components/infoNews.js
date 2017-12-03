import React, { Component } from 'react';
import {Text,View,AsyncStorage,FlatList,StyleSheet} from 'react-native';
import Frisbee from 'frisbee';
import cheerio from 'react-native-cheerio';
class InfoNews extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  load = async () => {
    try {
      var b= await this.getPage();
      console.log(b);
    } catch (e) {
      console.error('Failed to load name.')
    }
  }
  async getPage() {
  	try {
  		const api = new Frisbee({
  			baseURI: `https://${this.props.info}`,
  			headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json'
  			}
  		});
  		res = await api.get('',{

  	});
  	$=cheerio.load(res.body);
  	 let page = new Set();
  	 $('#multimedia').each(function(i, elem){
  				page.add($(this).text());
  	 });
  	return page;
  	} catch(error) {
  		console.error(error);
  	}
  }
  componentWillMount() {
    this.load();
  }
  componentWillUnmount() {

  }
  itemClick(event){
    console.log(event._targetInst.memoizedProps.children);
  }
  render() {
    const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
    },
  });
    return (
      <View style={{flex:1}}>

      </View>
    );
  }
}
export default InfoNews;
