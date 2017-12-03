function infoNews(state={info:'news.zing.vn'},action){
	switch (action.type) {
    case 'INFONEWS':
      return {info:`${state.info}/${action.info}`}
    default:
      return state
  }
}
export default infoNews
