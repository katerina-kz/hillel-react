import React, { Component } from 'react';
import ProductsTable from './table/ProductsTable';
import AddProductForm from './form/AddProductForm';

function createData(name, category, price, rest, id) {
    return { name, category, price, rest, id };
}

class TableWork extends Component {
    state = {
        products: [
            createData('Iphone', 'phones', '800$', "4", 0),
            createData('Macbook', 'laptop', '1400$', "2", 1),
            createData('Samsung Galaxy', 'phones', '400$', "9", 2)
        ],
    }

    addNewProduct = ( ...fields ) => {
        const { products } = this.state;
        const productId =  Math.random();
        this.setState({
            products: [...products, createData(...fields, productId)],
        });
    }

    removeProduct = id => {
        const { products } = this.state;
        this.setState({
            products: products.filter(product => product.id !== id)
        })
    }

    editProduct = updatedProduct => {
        const { products } = this.state;
        this.setState({
            products: products.map(product => product.id === updatedProduct.id ? updatedProduct : product)
        })
    };

    render() {

        const { products } = this.state;
        return (

            <div className="wrapper">
                <ProductsTable
                    products={products}
                    onRemoveProduct={this.removeProduct}
                    onUpdateProduct={this.editProduct}
                />
                <AddProductForm
                    addNewProduct={this.addNewProduct}
                />
            </div>
        )
    }
}

export default TableWork;