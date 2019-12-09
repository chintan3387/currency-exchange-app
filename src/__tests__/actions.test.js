import configureStore from "redux-mock-store";
import * as actions from "../actions/index";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {keys, BASE_URL} from "../utilities/helper";

const mockStore = configureStore([thunk]);
const store = mockStore();
const mock = new MockAdapter(axios);

describe("CurrencyExchange Actions", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it("Dispatches the correct action and payload", () => {
        const expectedActions = [
            {
                isLoading: true,
                type: keys.LIST_IS_LOADING
            }
        ];

        store.dispatch(actions.listIsLoading(true));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should FETCH_CURRENCY_EXCHANGE_LIST", () => {
        mock.onGet(`${BASE_URL}?base=USD`).reply(200, {
            type: keys.FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS,
            currencyExchangeList: {
                rates: {CAD: 1.314}
            }
        });
        store.dispatch(actions.fetchCurrencyExchangeList(`${BASE_URL}?base=USD`)).then(() => {
            let expectedActions = [
                keys.LIST_IS_LOADING,
                keys.LIST_IS_LOADING,
                keys.FETCH_CURRENCY_EXCHANGE_LIST_SUCCESS
            ];

            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
    });
});
