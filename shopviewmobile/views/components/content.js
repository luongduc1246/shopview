import React, { Component } from 'react';
import { Text, View,Animated,Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
  }
  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 0,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
  componentWillReceiveProps() {
    Animated.sequence([
    Animated.timing(                  // Animate over time
     this.state.fadeAnim,            // The animated value to drive
     {
       toValue: 0,               // Animate to opacity: 1 (opaque)
       duration: 0,              // Make it take a while
     }
   ),
   Animated.timing(                  // Animate over time
    this.state.fadeAnim,            // The animated value to drive
    {
      toValue: 1,               // Animate to opacity: 1 (opaque)
      duration: 1000,              // Make it take a while
    }
  )
 ]).start();
 }
  render() {

    return (
      <Animated.View style={{flex:10,opacity: this.state.fadeAnim}} >
        <this.props.screen/>
      </Animated.View>
    );
  }
}
export default Content;
