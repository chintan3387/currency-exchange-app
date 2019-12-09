import {keys} from "../utilities/helper";

export const requestHasErrored = (state = false, action) => {
    switch (action.type) {
        case keys.REQUEST_HAS_ERRORED:
            return action.error;
        default:
            return state;
    }
};

export const listIsLoading = (state = false, action) => {
    switch (action.type) {
        case keys.LIST_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const currencyExchangeList = (state = {}, action) => {
    switch (action.type) {
        case keys.FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS:
            return action.currencyExchangeList;
        default:
            return state;
    }
};
