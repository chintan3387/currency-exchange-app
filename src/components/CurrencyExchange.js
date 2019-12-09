import React from "react";
import Loader from "./Loader";
import CurrencyExchangeTable from "./CurrencyExchangeTable";
import Button from "react-bootstrap/Button";
import _ from "lodash";
import {connect} from "react-redux";
import {fetchCurrencyExchangeList} from "../actions/index";
import {BASE_URL, getCurrencyArray} from "../utilities/helper";

export class CurrencyExchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            exchangeList: {}
        };
        this.fetchCurrencyExchangeList = this.fetchCurrencyExchangeList.bind(this);
    }
    fetchCurrencyExchangeList() {
        let url = `${BASE_URL}?base=USD`;
        this.props.fetchCurrencyExchangeList(url);
    }

    render() {
        const currencyArray = getCurrencyArray(this.props.currencyExchangeList);
        return (
            <div style={{margin: "20px"}}>
                <Button
                    variant="primary"
                    style={{margin: "30px auto", display: "block"}}
                    onClick={this.fetchCurrencyExchangeList}
                    className="currency-exchange-button"
                >
                    Get Exchange Rates
                </Button>
                {this.props.isLoading && <Loader />}
                {this.props.hasErrored && (
                    <div style={{color: "red"}}>
                        <strong>{this.props.errorText}</strong>
                    </div>
                )}
                {_.isEmpty(this.props.currencyExchangeList) && !this.props.isLoading && !this.props.hasErrored && (
                    <div>Click the button to get Exchange Rates.</div>
                )}
                {!_.isEmpty(this.props.currencyExchangeList) && (
                    <>
                        <div style={{margin: "10px"}}>
                            Rates as of: <strong>{this.props.currencyExchangeList.date}</strong>
                        </div>
                        <CurrencyExchangeTable rates={currencyArray} />
                    </>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currencyExchangeList: state.currencyExchangeList,
        isLoading: state.isLoading,
        hasErrored: state.error.hasErrored,
        errorText: state.error.errorText
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrencyExchangeList: url => dispatch(fetchCurrencyExchangeList(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchange);
