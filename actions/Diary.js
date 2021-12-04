
export function fetchGoodStory(goodstory) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'FETCH_GOOD_STORY',payload:goodstory})		
	};
} 

export function setCurrentFeelID(feelID) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_FEEL_ID',payload:feelID})		
	};
} 

export function setCurrentDiaryID(diaryID) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_DIARY_ID',payload:diaryID})		
	};
} 

export function setCurrentDate(currentdate) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_CURRENT_DATE',payload:currentdate})		
	};
} 



