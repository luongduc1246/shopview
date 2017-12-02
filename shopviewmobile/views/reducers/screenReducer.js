import Lang from './../lang/lang.js';
import  Home from './../containers/homeContainer.js';
function displayScreen(state={screen:Home},action){
	switch (action.type) {
    case 'DISPLAY':
      return {screen:action.screen}
    default:
      return state
  }
}
export default displayScreen
