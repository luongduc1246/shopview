import { connect } from 'react-redux';
import Content from './../components/content.js';
function mapStateToProps(state) {
		return {
			lang:state.language.lang,
			screen:state.displayScreen.screen
		}
  }
 mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const ContentContainer =connect(
  mapStateToProps,mapDispatchToProps
)(Content)

export default ContentContainer;
