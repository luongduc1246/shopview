import { connect } from 'react-redux';
import Search from './../components/search.js';
function mapStateToProps(state) {
		return {
			lang:state.language.lang
		}
  }
 mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const SearchContainer =connect(
  mapStateToProps,mapDispatchToProps
)(Search)

export default SearchContainer;
