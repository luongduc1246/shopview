import { connect } from 'react-redux';
import Home from './../components/home.js';
function mapStateToProps(state) {
		return {
			lang:state.language.lang
		}
  }
 mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const HomeContainer =connect(
  mapStateToProps,mapDispatchToProps
)(Home)

export default HomeContainer;
