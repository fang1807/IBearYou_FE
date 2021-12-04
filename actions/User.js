

 

export function setUserData(userdata) {
   // console.log("fetchQuestions : ",questions)
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'SET_USER_DATA',payload:userdata})
		 
		
	};
} 

export function Signout(signout) {
   // console.log("fetchQuestions : ",questions)
	return (dispatch, getState) => {
		const state = getState();	 
	    dispatch({type:'',payload:signout})
		 
		
	};
} 
 
