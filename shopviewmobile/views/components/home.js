import React, { Component } from 'react';
import {Text,View,AsyncStorage,FlatList,StyleSheet} from 'react-native';
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={name:''};
  }
  load = async () => {
    try {
      var b= await this.props.menu.then((value)=>{
        return value;
      });
      this.setState({name:b});
    } catch (e) {
      console.error('Failed to load name.')
    }
  }
  componentWillMount() {
    this.load();
    console.log('load');
  }
  componentWillUnmount() {

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
    var menu=[];
    var i=0;
    for(let item of this.state.name){
      menu[i]={key:item};
      i++;
    }
    return (
      <View style={{flex:1}}>
        <FlatList
          style={styles.container}
          data={menu}
          renderItem={({item}) => <Text style={styles.row}>{item.key}</Text>}

        />
      </View>
    );
  }
}
export default Home;
