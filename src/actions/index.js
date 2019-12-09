import axios from "axios";
import {keys} from "../utilities/helper";

export const listIsLoading = bool => ({
    type: keys.LIST_IS_LOADING,
    isLoading: bool
});

export const requestHasErrored = (bool, error) => ({
    type: keys.REQUEST_HAS_ERRORED,
    error: {hasErrored: bool, errorText: error}
});

export const fetchCurrecnyExchangeListSuccess = currencyExchangeList => ({
    type: keys.FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS,
    currencyExchangeList
});

export const fetchCurrencyExchangeList = url => {
    return dispatch => {
        dispatch(listIsLoading(true));
        return axios
            .get(url)
            .then(response => {
                dispatch(listIsLoading(false));
                return response;
            })
            .then(response => response.data)
            .then(list => dispatch(fetchCurrecnyExchangeListSuccess(list)))
            .catch(err => {
                dispatch(listIsLoading(false));
                dispatch(requestHasErrored(true, err.response.data.error));
            });
    };
};
