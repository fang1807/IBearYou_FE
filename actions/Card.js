export function setCurrentCardData(currentCardID) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_CARD_ID',payload:currentCardID})
		 
		
	};
} 

export function fetchCards(fetchcard) { 
	return (dispatch, getState) => {
		const state = getState();	 
		
	    dispatch({type:'FETCH_CARD',payload:fetchcard})
		 
		
	};
}
