import React, { Component } from 'react';
import ProductsTable from './components/table/ProductsTable';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import AddProductForm from './components/form/AddProductForm'
import './App.css';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

// import Clock from './components/Clock';
// import TodoList from './components/TodoList';


// class App extends Component {

  
// * Css 
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const createData = (product, category, price, rest) => {
        return { product, category, price, rest };
      };
      
  const row = [
        createData('Iphone', 'phones', '800$', 4,),
        createData('Macbook', 'laptop', '1400$', 2),
        createData('Samsung Galaxy', 'phones', '400$', 9),
  ];
  
  // * Class

  class App extends Component {
    state = {
        product: [row],
    }

    removeProduct = (removedIndex) => {
      const { product } = this.state;
      console.log(product);
      this.setState({
        product: product.filter((product, i) => i !== removedIndex)
      })
    }

    render() {
      return (
        <div className="wrapper">
           <ProductsTable 
              product={row.product}
              category={row.category}
              price={row.price}
              rest={row.rest}
              row={row}
              onRemoveProduct={this.removeProduct}
          /> 
          <AddProductForm />
        </div>
      )
    }
  }

  export default App;