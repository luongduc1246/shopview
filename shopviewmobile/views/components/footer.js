import React, { Component } from 'react';
import {Alert, Text, View,StyleSheet,Button,TouchableWithoutFeedback,Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state={
      choiceName:'home',
    };
  };
  onStartShouldSetResponder = (event) => {
      return true;
    };
    onResponderGrant = (event) => {
        console.log(event._targetInst.memoizedProps.name)
        this.setState({choiceName:event._targetInst.memoizedProps.name});
        this.props.changeLanguage('lang_en');
        this.props.changeScreen(event._targetInst.memoizedProps.name);
      };
  handleTouchTap = (event) => {

  };
  render() {
    const colorChoice=this.props.colorChoice?this.props.colorChoice:'red';
    const colorBase=this.props.colorBase?this.props.colorBase:'black';
    const iconSize=this.props.iconSize?this.props.iconSize:24;
    const fontSize=this.props.fontSize?this.props.fontSize:16;
    let choice=this.state.choiceName;
    let data=[{
      nameIcon:'home',
      label:this.props.lang.ftrHome
    },
    {
      nameIcon:'search',
      label:this.props.lang.ftrSearch
    },
    {
      nameIcon:'user-circle',
      label:this.props.lang.ftrShop
    },
    {
      nameIcon:'cog',
      label:this.props.lang.ftrSetting
    }];
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      footer:{
        flex:1,
        flexDirection:'row'
      },
      footerchild:{
        flex:1
      },
      ftchildnav:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      ftchildicon:{

      },
      ftchildlabel:{
        fontSize:fontSize
      },
      ftchildlabelchoice:{
        color:'red'
      }
    });
    return (
      <View style={styles.footer} >
        {data.map((ftchild,index)=>{
          return(
          <View key={index} name={ftchild.nameIcon} style={styles.footerchild} onStartShouldSetResponder={this.onStartShouldSetResponder}
          onResponderGrant={this.onResponderGrant}>
            <View style={styles.ftchildnav} >
                <Icon name={ftchild.nameIcon} size={iconSize} color={choice===ftchild.nameIcon?colorChoice:colorBase}/>
                <Text style={[styles.ftchildlabel,choice===ftchild.nameIcon?styles.ftchildlabelchoice:styles.ftchildlabel]}>
                  {ftchild.label}
                </Text>
            </View>
          </View>
        )
        }
      )}
      </View>
    );
  }
}

export default Footer;
