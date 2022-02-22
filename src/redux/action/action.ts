import { WeatherTypes } from "../types/types";

export const WEATHER_LOADING = "WEATHER_LOADING";
export const WEATHER_FAIL = "WEATHER_FAIL";
export const WEATHER_SUCCESS = "WEATHER_SUCCESS";
export const REQUEST_WEATHER = "REQUEST_WEATHER";

export const weatherLoading = () => ({ type: WEATHER_LOADING });
export const weatherFail = () => ({ type: WEATHER_FAIL });
export const weatherSuccess = (payload: WeatherTypes) => ({
  type: WEATHER_SUCCESS,
  payload,
});
