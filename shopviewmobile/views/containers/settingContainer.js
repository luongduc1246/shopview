import { connect } from 'react-redux';
import Setting from './../components/setting.js';
function mapStateToProps(state) {
		return {
			lang:state.language.lang
		}
  }
 mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const SettingContainer =connect(
  mapStateToProps,mapDispatchToProps
)(Setting)

export default SettingContainer;
