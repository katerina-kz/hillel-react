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
        newProductName: '',
        newProductCategory: '',
        newProductPrice: '',
        newProductRest: '',
    }

    addNewProduct = (newProductName, newProductCategory, newProductPrice, newProductRest) => {
        const {products } = this.state;
        const productId =  Math.random();
        this.setState({
            products: [...products, createData(newProductName, newProductCategory, newProductPrice, newProductRest, productId)],

        });
    }

    removeProduct = id => {
        const { products } = this.state;
        this.setState({
            products: products.filter(product => product.id !== id)

        })
    }

    updateProduct = (updateProductName, updateProductCategory, updateProductPrice, updateProductRest, productId) => {
        const { products } = this.state;

        const updateProducts = products.map((function(product, i) {
            if (product.id === productId) {
                return (
                    product = {
                        name: updateProductName,
                        category: updateProductCategory,
                        price: updateProductPrice,
                        rest: updateProductRest,
                        id: Math.random()
                    }
                )
            } else {
                return (
                    product = {
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        rest: product.rest,
                        id: i
                    }
                )
            }
        }))
        this.setState({
            products: updateProducts
        })
    }


    render() {

        const { newProductName, newProductCategory, newProductPrice, newProductRest, products } = this.state;
        return (

            <div className="wrapper">
                <ProductsTable
                    products={products}
                    onRemoveProduct={this.removeProduct}
                    onUpdateProduct={this.updateProduct}
                />
                <AddProductForm
                    addNewProduct={this.addNewProduct}
                    newProductName={newProductName}
                    newProductCategory={newProductCategory}
                    newProductPrice={newProductPrice}
                    newProductRest={newProductRest}
                    onChangeName={this.onChangeName}
                    onChangeCategory={this.onChangeCategory}
                    onChangePrice={this.onChangePrice}
                    onChangeRest={this.onChangeRest}
                />
            </div>
        )
    }
}

export default TableWork;