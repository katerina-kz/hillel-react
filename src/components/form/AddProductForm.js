import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import "./AddProductForm.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

class AddProductForm extends Component {
    render () {
    // const classes = useStyles();

        return (
            <form noValidate autoComplete="off">
            <div className="form-wrapper">
                <div className="input">
                    <TextField
                        id="standard-productName-input"
                        label="Product"
                        type="text"
                        autoComplete="current-product"
                    />
                </div>
                <div className="input">  
                    <TextField
                        id="standard-productCategory-input"
                        label="Category"
                        type="text"
                        autoComplete="current-category"
                    />
                </div>
                <div className="input">
                    <TextField
                        id="standard-productPrice-input"
                        label="Price"
                        type="text"
                        autoComplete="current-price"
                    />
                </div>
                <div className="input">
                    <TextField
                        id="standard-productRest-input"
                        label="Rest amount"
                        type="text"
                        autoComplete="current-amount"
                    />
                </div>
                <div className="form-button">
                    <Button variant="outlined">Default</Button>
                </div> 
            </div>
            </form>
        );
    }    
}

export default AddProductForm; 