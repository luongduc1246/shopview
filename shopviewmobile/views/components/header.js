import React, { Component } from 'react';
import {Text,View,StyleSheet,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Header extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop:Platform.OS=='ios'?20:0,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      viewTitle:{
        justifyContent: 'center',
        alignItems: 'center'
      },
      viewHeaderLeft:{
        justifyContent: 'center',
        marginLeft:5
      },
      txtTitle:{
        fontSize:20
      }
    });
    return (
      <View style={styles.container}>
        <View style={styles.viewHeaderLeft}><Icon name='th' size={40}/></View>
        <View style={styles.viewTitle}><Text style={styles.txtTitle}>{this.props.lang.ftrHome}</Text></View>
        <View style={{backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
export default Header;
