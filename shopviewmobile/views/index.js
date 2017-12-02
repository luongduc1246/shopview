import React, { Component } from 'react';
import { Text , View } from 'react-native';
import { createStore } from 'redux';
import ShopViewContainer from './containers';
import todoApp from './reducers';
import { Provider } from 'react-redux';
let store = createStore(todoApp)
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Provider store={store}>
        <ShopViewContainer/>
      </Provider>
    );
  }
}
export default App;
