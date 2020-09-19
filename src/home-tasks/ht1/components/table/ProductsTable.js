
import React, { Component } from 'react';
import ProductRow from './ProductRow';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';


class ProductsTable extends Component {
    render() {
        const { products, onRemoveProduct, onUpdateProduct } = this.props;
        return (

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product name</Table.HeaderCell>
                          <Table.HeaderCell align="right">Category</Table.HeaderCell>
                          <Table.HeaderCell align="right">Price</Table.HeaderCell>
                          <Table.HeaderCell align="right">Rest</Table.HeaderCell>
                          <Table.HeaderCell align="right">Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {products.map((product) => (
                    <ProductRow
                      product={product}
                      key={product.id}
                      onRemoveProduct={onRemoveProduct}
                      onUpdateProduct={onUpdateProduct}
                    />
                  ))}
              </Table.Body>
            </Table>
        )
    }
}

export default ProductsTable;

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
    onUpdateProduct: PropTypes.func.isRequired,
};


