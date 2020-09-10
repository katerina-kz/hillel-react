import React, { Component } from 'react';
import ProductsTable from './components/ProductsTable';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import './App.css';
import Button from '@material-ui/core/Button';
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
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  class App extends Component {
    render() {
      const createData = (product, category, price, rest, actions) => {
        return { product, category, price, rest, actions };
      }


      
     const row = [
        createData('Iphone', 'phones', '800$', 4, ['edit, remove']),
        createData('Macbook', 'laptop', '1400$', 2, ['edit, remove']),
        createData('Samsung Galaxy', 'phones', '400$', 9, ['edit, remove']),
     ];

      return (

        <ProductsTable 
              product={row.product}
              key={row.i}
              category={row.category}
              price={row.price}
              rest={row.rest}
              row={row}
          />
        
      //   <TableContainer component={Paper}>
      //   <Table aria-label="customized table">
      //     <TableHead>
      //       <TableRow>
      //         <StyledTableCell>Product name</StyledTableCell>
      //         <StyledTableCell align="right">Category</StyledTableCell>
      //         <StyledTableCell align="right">Price</StyledTableCell>
      //         <StyledTableCell align="right">Rest</StyledTableCell>
      //         <StyledTableCell align="right">Actions</StyledTableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //     {row.map((row, i) => (
      //       <ProductsTable 
      //         productName={row.product}
      //         productKey={i}
      //         productCategory={row.category}
      //         productPrice={row.price}
      //         productRest={row.rest}
      //       />
      //       ))}
      //     </TableBody>
      //   </Table>
      // </TableContainer>
      )
    }
  }

  export default App;
  // export default function CustomizedTables() {
   
  
  //   return (
  //     <TableContainer component={Paper}>
  //       <Table className={classes.table} aria-label="customized table">
  //         <TableHead>
  //           <TableRow>
  //             <StyledTableCell>Product name</StyledTableCell>
  //             <StyledTableCell align="right">Category</StyledTableCell>
  //             <StyledTableCell align="right">Price</StyledTableCell>
  //             <StyledTableCell align="right">Rest</StyledTableCell>
  //             <StyledTableCell align="right">Actions</StyledTableCell>
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
  //           {rows.map((row) => (
  //             <StyledTableRow key={row.product}>
  //               <StyledTableCell component="th" scope="row">
  //                 {row.product}
  //               </StyledTableCell>
  //               <StyledTableCell align="right">{row.category}</StyledTableCell>
  //               <StyledTableCell align="right">{row.price}</StyledTableCell>
  //               <StyledTableCell align="right">{row.rest}</StyledTableCell>
  //               <StyledTableCell align="right">{row.actions}</StyledTableCell>
  //             </StyledTableRow>
  //           ))}
  //         </TableBody>
  //       </Table>
  //     </TableContainer>
  //   );
  // }
  
  // import './User.css';
  
  // class ProductTable extends Component {
  
  //     constructor(props) {
  //         super(props);
  //         this.state = {
  //             editedName: props.goods,
  //             // isEdit: false,
  //         }
  //     }
  
      // onEdit = () => {
      //     this.setState({ isEdit: true })
      // }
  
      // onCancel = () => {
      //     this.setState({
      //         isEdit: false,
      //         editedName: this.props.name
      //     })
      // }
  
      // onChangeName = (e) => {
      //     this.setState({
      //         editedName: e.target.value
      //     })
      // }
  
      // updateUser = () => {
      //     const { editedName } = this.state;
      //     const { position } = this.props;
      //     this.props.onUpdateUser(editedName, position);
      //     this.setState({ isEdit: false })
      // }
  
  //     render() {
  //         const { isEdit, editedName } = this.state;
  //         const { name, position, onRemoveUser } = this.props;
  //         return (
  //             <li>
  //                 {
  //                 isEdit
  //                     ? <input onChange={this.onChangeName} value={editedName} type="text"/>
  //                     : <span>{name} #{position}</span>
  //                  }
  
  //                 {/* {!isEdit && <button onClick={this.onEdit}>Edit User</button> }
  //                 {!isEdit && <button onClick={() => onRemoveUser(position)}>Remove user</button> }
  
  //                 {isEdit && <button onClick={this.updateUser}>Save</button>}
  //                 {isEdit && <button onClick={this.onCancel}>Cancel</button>} */}
  //             </li>
  //         );
  //     }
  // }
  
  // export default CustomizedTables;
  // export default ProductTable;
  
  
  // export function User2({ name, position }) {
  //     return <div>{name} #{position}</div>
  // }