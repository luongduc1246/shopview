import { connect } from 'react-redux';
import Home from './../components/home.js';
import Frisbee from 'frisbee';
import {AsyncStorage} from 'react-native';
import cheerio from 'react-native-cheerio';
import _ from 'lodash';
async function getListMenu() {
	try {
		const api = new Frisbee({
			baseURI: 'https://news.zing.vn',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
		res = await api.get('',{

	});
	$=cheerio.load(res.body);
	 let listMenu = new Set();
	 $('li.parent a').each(function(i, elem){
				listMenu.add($(this).text());
	 });
	return listMenu;
	} catch(error) {
		console.error(error);
	}
}
function mapStateToProps(state) {
		return {
			menu:getListMenu(),
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
