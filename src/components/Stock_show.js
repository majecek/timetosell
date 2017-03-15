import React, { PropTypes } from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";
import FlatButton from 'material-ui/FlatButton';
import googleStocks from 'google-stocks';


const Stock = ({stocks, deleteStock}) => {
  return (
    <Table >
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Symbol</TableHeaderColumn>
          <TableHeaderColumn>Last Traded Price</TableHeaderColumn>
          <TableHeaderColumn>Purchased Price</TableHeaderColumn>
          <TableHeaderColumn>Action</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {renderStocks(stocks, deleteStock)}
      </TableBody>
    </Table>
  );
};

function renderStocks(stocks, deleteStock) {
  return stocks && stocks.map(stock => {
      return (
        <TableRow key={stock.symbol} selectable={false}>
          <TableRowColumn>{stock.symbol}</TableRowColumn>
          <TableRowColumn>{stock.lastPrice}</TableRowColumn>
          <TableRowColumn>{stock.purchasePrice}</TableRowColumn>
          <TableRowColumn>
            <FlatButton label="Delete"
                        secondary={true}
                        onClick={() => deleteStock(stock.id)} /></TableRowColumn>
        </TableRow>
      )
    });
}


Stock.propTypes = {};
Stock.defaultProps = {};

export default Stock;