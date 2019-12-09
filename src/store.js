import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {listIsLoading, requestHasErrored, currencyExchangeList} from "./reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    currencyExchangeList,
    isLoading: listIsLoading,
    error: requestHasErrored
});

const logMiddleware = createLogger();

const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunkMiddleware, logMiddleware)));

export default store;
