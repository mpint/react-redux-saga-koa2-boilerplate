import { commonModel as initial } from '~/config/initialState';

/*
  actions
 */
 export const APP_LOADED_SAGA = 'COMMON/APP_LOADED_SAGA'; // do this when app loads (or reloads)

 export const API_STATUS_REQUEST = 'COMMON/API_STATUS_REQUEST';
 export const API_STATUS_SUCCESS = 'COMMON/API_STATUS_SUCCESS';
 export const API_STATUS_ERROR = 'COMMON/API_STATUS_ERROR';
/*
  action creators
 */
export const actions = {
	appLoaded: () => {
		return { type: APP_LOADED_SAGA };
	},

	apiStatusRequest: () => {
	  return { type: API_STATUS_REQUEST };
	},

	apiStatusSuccess: () => {
	  return { type: API_STATUS_SUCCESS };
	},

	apiStatusError: (status) => {
	  return { type: API_STATUS_ERROR, status };
	}
};

export default function commonAppState(state = initial, action) {
	switch (action.type) {
		case API_STATUS_REQUEST:
		  return {
		    ...state,
		    isApiResponding: {
					...state.isApiResponding,
					isSending: true,
					value: true
				}
		  };

		case API_STATUS_SUCCESS:
		  return {
		    ...state,
		    isApiResponding: {
					...state.isApiResponding,
					isSending: false,
					value: true
				}
		  };

		case API_STATUS_ERROR:
		  return {
		    ...state,
					isApiResponding: {
						...state.isApiResponding,
						statusCode: action.status,
						isSending: false,
						status: 'error',
						value: false
				}
		  };
		default:
			return state;
	}
}
