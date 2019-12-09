import React from "react";
import Table from "react-bootstrap/Table";

class CurrencyExchangeTable extends React.PureComponent {
    renderTableRow() {
        return this.props.rates.map((rateObj, index) => {
            return (
                <tr key={index}>
                    <td>{rateObj.baseCurr}</td>
                    <td>{rateObj.toCurr}</td>
                    <td>{rateObj.exchangeRate}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Table striped bordered responsive style={{margin: "0 auto", overflow: "auto"}}>
                <thead style={{position: "sticky"}}>
                    <tr>
                        <th>From Currency</th>
                        <th>To Currency</th>
                        <th>Exchange Rate</th>
                    </tr>
                </thead>
                <tbody>{this.renderTableRow()}</tbody>
            </Table>
        );
    }
}

export default CurrencyExchangeTable;
