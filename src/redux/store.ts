import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import WeatherReducer from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaWatcher } from "./sagas/saga";

const saga = createSagaMiddleware();
const reducers = combineReducers({
  weather: WeatherReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));

export type RootStore = ReturnType<typeof reducers>;
saga.run(sagaWatcher);
export default store;
