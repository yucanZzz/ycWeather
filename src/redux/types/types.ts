import {
  WEATHER_FAIL,
  WEATHER_LOADING,
  WEATHER_SUCCESS,
} from "../action/action";

export interface Weather {
  description: string;
  main: string;
  icon: string;
  temp: number;
}
//Obtain data in weatherData format
export interface WeatherData {
  list:[
    {
      dt:number;
      clouds: {
        all: number;
      };
      main: {
        temp: number;
        humidity: number;
      };
      name: string;
      sys: {
        country: string;
      };
      
      weather: Weather[];
      temp:{
        day:number;
      };
      wind: {
        speed: number;
      };
    }
  ]
  
}

export type WeatherTypes = {
  main: {
    temp: number;
    humidity: number;
  };
  weather: weatherrTypes[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    country: string;
  };
  name: string;
};
export interface ResponseGenerator {
  config?: any,
  data?: any,
  headers?: any,
  request?: any,
  status?: number,
  error?: any,
  statusText?: string,
  records?: any,
  pageNum?: any,
  total?: any
}

export interface weatherrTypes {
  description: string;
  icon: string;
}

export interface initialStateT {
  loading: boolean;
  faile: boolean;
  weatherData: WeatherData | null;
}

export interface WeatherLoading {
  type: typeof WEATHER_LOADING;
}
export interface WeatherFail {
  type: typeof WEATHER_FAIL;
}
export interface WeatherSuccess {
  type: typeof WEATHER_SUCCESS;
  payload: WeatherData;
}
export type WeatherDispatchTypes =
  | WeatherLoading
  | WeatherFail
  | WeatherSuccess;
