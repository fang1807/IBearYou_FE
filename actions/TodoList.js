export function setCurrentPriorityID(priorityID) { 
	return (dispatch, getState) => {
		const state = getState();	 
		
	    dispatch({type:'SET_CURRENT_PRIORITY_ID',payload:priorityID})
		 
		
	};
}