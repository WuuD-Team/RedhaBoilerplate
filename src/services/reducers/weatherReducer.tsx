import {
  WEATHER_FETCH_ERROR,
  WEATHER_FETCH_START,
  WEATHER_FETCH_SUCCESS,
  SEARCH_HISTORY,
} from '../constants';

const initialState = {
  searchHistory: [],
  weather: {
    isLoading: false,
    info: {},
    history: {},
    error: null,
    lastFetch: null,
  },
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: action.value,
      };
    case WEATHER_FETCH_START:
      return {
        ...state,
        weather: {
          isLoading: true,
          error: null,
        },
      };
    case WEATHER_FETCH_SUCCESS:
      return {
        ...state,
        weather: {
          isLoading: false,
          info: action.info,
          history: action.history,
          error: null,
          lastFetch: new Date(),
        },
      };
    case WEATHER_FETCH_ERROR:
      return {
        ...state,
        weather: {
          isLoading: false,
          error: action.value,
        },
      };
    default:
      return state;
  }
}

export default weatherReducer;
