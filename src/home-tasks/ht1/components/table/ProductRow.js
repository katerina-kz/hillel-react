
import React, { Component } from 'react';
import { Table, Button } from "semantic-ui-react";
import ProductRowEditForm from "./ProductRowEditForm";
import './ProductRow.css';
import product from '../../prop-types/product';
import PropTypes from 'prop-types';

class ProductRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        }
    }

    onCancel = () => {
      this.setState({
          editMode: false,
      })
  }

    onEdit = updatedProduct => {
        this.props.onUpdateProduct(updatedProduct)
        this.setState({ editMode: false });
    }

    render() {
        const { editMode } = this.state;
        const { product, onRemoveProduct } = this.props;
        if (editMode) return <ProductRowEditForm onSubmit={this.onEdit} onCancel={this.onCancel} product={product} />
        return (
                <Table.Row>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>{product.category}</Table.Cell>
                    <Table.Cell>{product.price}</Table.Cell>
                    <Table.Cell>{product.rest}</Table.Cell>
                  <Table.Cell>
                    <Button color='blue' onClick={() => this.setState({ editMode: true })}>Edit</Button>
                    <Button onClick={() => onRemoveProduct(product.id)} color='red'>Remove</Button>
                  </Table.Cell>
              </Table.Row>
        )
    }
}

export default ProductRow;

ProductRow.propTypes = {
    product: product.isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
};
