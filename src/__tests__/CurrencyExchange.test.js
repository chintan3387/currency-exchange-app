import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";
import CurrencyExchange from "../components/CurrencyExchange";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});

describe("Currency Exchange Component", () => {
    const initialState = {
        currencyExchangeList: {rates: {CAD: 1.314}},
        isLoading: false,
        error: {}
    };
    const mockStore = configureStore([thunk]);
    let store;
    let wrapper;
    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
        wrapper = mount(<CurrencyExchange store={store} />);
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("renders Button Component", () => {
        const button = wrapper.find("button");
        expect(button.length).toEqual(1);
    });

    it("renders Table Component", () => {
        expect(wrapper.find("table").length).toEqual(1);
    });

    it("calls click handler 1 time", () => {
        const button = wrapper.find("Button");
        button.simulate("click");
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
