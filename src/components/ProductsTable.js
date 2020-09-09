
import React, { Component } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// // import './User.css';

// class ProductTable extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             editedName: props.goods,
//             // isEdit: false,
//         }
//     }

//     // onEdit = () => {
//     //     this.setState({ isEdit: true })
//     // }

//     // onCancel = () => {
//     //     this.setState({
//     //         isEdit: false,
//     //         editedName: this.props.name
//     //     })
//     // }

//     // onChangeName = (e) => {
//     //     this.setState({
//     //         editedName: e.target.value
//     //     })
//     // }

//     // updateUser = () => {
//     //     const { editedName } = this.state;
//     //     const { position } = this.props;
//     //     this.props.onUpdateUser(editedName, position);
//     //     this.setState({ isEdit: false })
//     // }

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

// export default ProductTable;


// export function User2({ name, position }) {
//     return <div>{name} #{position}</div>
// }