import * as reducers from "../reducers/index";
import {keys} from "../utilities/helper";

describe("CurrencyExchange Reducers", () => {
    it("should return initial state", () => {
        expect(reducers.currencyExchangeList(undefined, {})).toEqual({});
    });
    it("should handle FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS", () => {
        expect(
            reducers.currencyExchangeList(undefined, {
                currencyExchangeList: {
                    rates: {CAD: 1.314}
                },
                type: keys.FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS
            })
        ).toEqual({
            rates: {CAD: 1.314}
        });
    });
    it("should handle LIST_IS_LOADING", () => {
        expect(
            reducers.listIsLoading(undefined, {
                isLoading: true,
                type: keys.LIST_IS_LOADING
            })
        ).toEqual(true);
    });
    it("should handle REQUEST_HAS_ERRORED ", () => {
        expect(
            reducers.requestHasErrored(undefined, {
                error: {
                    hasErrored: true,
                    errorText: "Request Has Errored!"
                },
                type: keys.REQUEST_HAS_ERRORED
            })
        ).toEqual({
            hasErrored: true,
            errorText: "Request Has Errored!"
        });
    });
});
