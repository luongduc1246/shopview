import { connect } from 'react-redux';
import InfoNews from './../components/infoNews.js';
function mapStateToProps(state) {
		return {
      info:state.infoNews.info,
			lang:state.language.lang
		}
  }
mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const InfoNewsContainer =connect(
  mapStateToProps,mapDispatchToProps
)(InfoNews)

export default InfoNewsContainer;
