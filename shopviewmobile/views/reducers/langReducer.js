import Lang from './../lang/lang.js';
function language(state={lang:new Lang().lang_vn},action){
	switch (action.type) {
    case 'LANG':
      let langs=new Lang();
      let lang=langs.lang_vn;
      if(action.lang=='lang_en')
      {
        lang=langs.lang_en
      }
      return {lang:lang}
    default:
      return state
  }
}
export default language
