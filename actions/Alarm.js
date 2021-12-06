export function fetchListAlarm(listalarm) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'FETCH_GOOD_STORY',payload:listalarm})		
	};
} 

export function addAlarm(addalarm) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_ADD_ARARM',payload:addalarm})		
	};
} 

export function deleteAlarm(deletealarm) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_DELETE_ALARM',payload:deletealarm})		
	};
} 

export function setSound(soundID) {
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_SOUND_ID',payload:soundID})		
	};
} 

