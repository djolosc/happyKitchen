import './orderList.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {FunctionComponent} from 'react';
import type {order} from '../../Types';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#8dc1c3',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


type params = {
  orders: order[]
}

const OrderList: FunctionComponent<params> = ({orders}) => {

  const classes = useStyles();

  return !orders.length ? (
    <div data-testid="loadingPlaceHolder">
      <p className="loadingText">There are no orders, yet!!!</p>
    </div>
  ) : (
    <div data-testid="orderList" className="order-list-container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Comments</StyledTableCell>
              <StyledTableCell align="right">Dishes</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell component="th" scope="row">
                  {order.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {order.clientName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {order.clientAddress}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {order.clientPhone}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {order.comments}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {order.Dishes?.map((dish) => `| ${dish?.title} |`)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default OrderList;
