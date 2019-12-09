import _ from "lodash";
export const keys = {
    FETCH_CURRENCY_EXCHANGE_LIST: "FETCH_CURRENCY_EXCHANGE_LIST",
    FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS: "FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS",
    LIST_IS_LOADING: "LIST_IS_LOADING",
    REQUEST_HAS_ERRORED: "REQUEST_HAS_ERRORED"
};

export const BASE_URL = "https://api.exchangeratesapi.io/latest";

export const getCurrencyArray = currencyExchangeList => {
    return !_.isEmpty(currencyExchangeList)
        ? Object.keys(currencyExchangeList.rates).map(key => {
              return {
                  baseCurr: "USD",
                  toCurr: key,
                  exchangeRate: currencyExchangeList.rates[key]
              };
          })
        : {};
};
