const initialState = {
	userdata:{},
	questions: [],
	questionId:'',
	currentQuestion:{},
	fetching: false,
	fetched: false,
	goodstory:[],
	healsentence:[],
	currentFeelID :'',
	currentDiaryID: '',
	currentDate: '',


};

export default function reducers(state=initialState, action) {
	

	switch (action.type) {
		case 'FETCH_RANK': 
			return { ...state, fetching: true };
		case 'FETCH_SECOND_REJECTED': 
			return { ...state, fetching: false, error: action.payload };
		case 'FETCH_QUESTIONS': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_GOOD_STORY': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_BAD_STORY': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_WISH_STORY': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_HEAL_SENTENCE': 
					return { ...state, fetching: false, error: action.payload };
		case 'FETCH_LIST_ALARM': 
					return { ...state, fetching: false, error: action.payload };
		
			return {
				 ...state,   
				questions: action.payload
			}
		case 'SET_QUESTION_ID': 
			return {
				 ...state,   
				questionId: action.payload
			}
		case 'SET_CURRENT_FEEL_ID': 
			return {
				 ...state,   
				currentFeelID: action.payload
			}
		case 'SET_CURRENT_QUESTION': 
			return {
				...state,   
				currentQuestion: action.payload
			}
		case 'SET_CURRENT_DIARY_ID' :
			return {
				...state,
				currentDiaryID:action.payload
			}
		case 'SET_CURRENT_DATE' :
			return {
				...state,
				currentDate:action.payload
			}
		case 'SET_USER_DATA' :
			return {
				...state,
				userdata:action.payload
			}

	
		default:
			return state
	}
}