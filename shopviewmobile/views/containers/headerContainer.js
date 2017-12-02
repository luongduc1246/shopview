import { connect } from 'react-redux';
import Header from './../components/header.js';
function mapStateToProps(state) {
		return {
			lang:state.language.lang
		}
  }
 mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const HeaderContainer =connect(
  mapStateToProps,mapDispatchToProps
)(Header)

export default HeaderContainer;
