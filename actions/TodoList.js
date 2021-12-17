export function setCurrentPriorityID(priorityID) { 
	return (dispatch, getState) => {
		const state = getState();	 
		
	    dispatch({type:'SET_CURRENT_PRIORITY_ID',payload:priorityID})
		 
		
	};
}

export function setFinishDate(finishdate) { 
	return (dispatch, getState) => {
		const state = getState();	 
		
	    dispatch({type:'SET_CURRENT_FINISH_DATE',payload:finishdate})
		 
		
	};
}

export function setTodoListID(todolistID) { 
	return (dispatch, getState) => {
		const state = getState();	 
		
	    dispatch({type:'SET_CURRENT_TODO_LIST_ID',payload:todolistID})
		 
		
	};
}