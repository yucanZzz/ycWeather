import { ResponseGenerator } from '../types/types';
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_WEATHER,
  weatherSuccess,
  weatherLoading,
  weatherFail,
} from "../action/action";

const takeEveryUp: any = takeEvery;
export function* sagaWatcher() {
  yield takeEveryUp(REQUEST_WEATHER, sagaWorker);
}

function* sagaWorker({ city }: { city: any }) {
  try {
    yield put(weatherLoading());
    const payload:ResponseGenerator = yield call(
      axios.get,
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=2d4afe2fb3ec685b7437e2ec9b6e95be&lang=en`
    );

    yield put(weatherSuccess(payload.data));
  } catch (e) {
    yield put(weatherFail());
  }
}