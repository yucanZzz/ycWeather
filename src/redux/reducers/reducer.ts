import {
  WEATHER_LOADING,
  WEATHER_FAIL,
  WEATHER_SUCCESS,
} from "../action/action";
import { WeatherDispatchTypes, initialStateT } from "./../types/types";

const initialState: initialStateT = {
  loading: false,
  faile: false,
  weatherData: null,
};

const WeatherReducer = (
  state = initialState,
  action: WeatherDispatchTypes
): initialStateT => {
  switch (action.type) {
    case WEATHER_LOADING:
      return {
        ...state,
        faile: false,
        loading: true,
      };

    case WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        faile: true,
      };

    case WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
      };

    default:
      return state;
  }
};

export default WeatherReducer;