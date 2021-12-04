export function fetchListAlarm(goodstory) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'FETCH_GOOD_STORY',payload:goodstory})		
	};
} 

export function addAlarm(feelID) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_FEEL_ID',payload:feelID})		
	};
} 

export function deleteAlarm(diaryID) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_Diary_ID',payload:diaryID})		
	};
} 
