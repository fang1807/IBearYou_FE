export function fetchHeal_Sentence(healsentence) { 
	return (dispatch, getState) => {
		const state = getState();	 
		
	    dispatch({type:'FETCH_HEAL_SENTENCE',payload:questions})
		 
		
	};
}