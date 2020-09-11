
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ProductRow.css';
import Button from '@material-ui/core/Button';

// import './User.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

class ProductRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editedProductName: props.product,
            editedProductCategory: props.category,
            editedProductPrice: props.price,
            editedProductRest: props.rest,
            isEdit: false,
        }
    }

    onEdit = () => {
        this.setState({ isEdit: true })
    }


    render() {
        const { isEdit } = this.state;
        const { productName, productCategory, productPrice, productRest, productKey, onRemoveProduct } = this.props;
        return (
                <StyledTableRow key={productKey}>
                    <StyledTableCell component="th" scope="row">
                        {productName}
                    </StyledTableCell>
                    <StyledTableCell align="right">{productCategory}</StyledTableCell>
                    <StyledTableCell align="right">{productPrice}</StyledTableCell>
                    <StyledTableCell align="right">{productRest}</StyledTableCell>
                    <StyledTableCell align="right">
                    
                    <Button 
                        variant="contained"
                        color="primary"
                        size="small"
                        // className={classes.button}
                        // startIcon={<DeleteIcon />}
                        >
                    Edit</Button>
                    {!isEdit && 
                    <Button 
                        variant="contained"
                        color="secondary"
                        size="small"
                        // className={classes.button}
                        // startIcon={<DeleteIcon />}
                        onClick={() => onRemoveProduct(productKey)}
                    >
                    Remove</Button>}
                    </StyledTableCell>
                </StyledTableRow>
        )
    }
}

export default ProductRow;
