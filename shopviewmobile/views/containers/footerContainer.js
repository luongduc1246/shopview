import { connect } from 'react-redux';
import Footer from './../components/footer.js';
import { language } from './../actions/langAction.js';
import { displayScreen } from './../actions/screenAction.js';
import SearchContainer from './searchContainer.js';
import HomeContainer from './homeContainer.js';
import ShopContainer from './shopContainer.js';
import SettingContainer from './settingContainer.js';
function mapStateToProps(state) {
	console.log(state);
		return {
			lang:state.language.lang
		}
  }
 mapDispatchToProps = (dispatch, ownProps) => {
  return {
			changeLanguage:(lang)=>{
				dispatch(language(lang))
			},
			changeScreen:(screen)=>{
				switch(screen)
				{
					case 'home':
						dispatch(displayScreen(HomeContainer));
					break;
					case 'search':
						dispatch(displayScreen(SearchContainer));
					break;
					case 'user-circle':
						dispatch(displayScreen(ShopContainer));
					break;
					case 'cog':
						dispatch(displayScreen(SettingContainer));
					break;
					default:
        		dispatch(displayScreen(HomeContainer));
				}

			}
  }
}
const FooterContainer =connect(
  mapStateToProps,mapDispatchToProps
)(Footer)

export default FooterContainer;
