import { connect } from 'react-redux';
import Shop from './../components/shop.js';
function mapStateToProps(state) {
		return {
			lang:state.language.lang
		}
  }
 mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const ShopContainer =connect(
  mapStateToProps,mapDispatchToProps
)(Shop)

export default ShopContainer;
