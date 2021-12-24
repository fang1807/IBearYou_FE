export function setCurrentResult(currentResultID) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_RESULT_ID',payload:currentResultID})
		 
		
	};
} 

export function setDetailResult(detailResult) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_DETAIL_RESULT',payload:detailResult})
		 
		
	};
} 