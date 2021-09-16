import axios from 'axios';

import {
  API_KEY,
  BASE_URL,
  CURRENT_WEATHER_API,
  HISTORICAL_WEATHER_API,
} from '../api/api.constant';
import {
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_START,
  WEATHER_FETCH_ERROR,
} from '../constants';

export const getCurrentWeather = (city) => async (dispatch) => {
  dispatch({type: WEATHER_FETCH_START, value: {}});
  try {
    const [{data: info}, {data: history}] = await Promise.all([
      getWeatherInfo(city),
      getWeatherHistory(city),
    ]);

    dispatch({type: WEATHER_FETCH_SUCCESS, info, history});
  } catch (e) {
    dispatch({type: WEATHER_FETCH_ERROR, value: e.data});
  }
};
const getWeatherInfo = (city) => {
  try {
    return axios.get(BASE_URL + CURRENT_WEATHER_API, {
      params: {
        key: API_KEY,
        city,
      },
    });
  } catch (err) {
    console.log('GET WEATHER ERROR: ', err);
  }
};

const getWeatherHistory = (city) => {
  try {
    return axios.get(BASE_URL + HISTORICAL_WEATHER_API, {
      params: {
        key: API_KEY,
        city,
        start_date: new Date(Date.now() - 86400000).toISOString().slice(0, 10),
        end_date: new Date().toISOString().slice(0, 10),
      },
    });
  } catch (err) {
    console.log('WEATHER HISTORY ERROR: ', err);
  }
};
