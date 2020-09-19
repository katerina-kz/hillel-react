import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Textbox } from 'react-inputs-validation';
import "./AddProductForm.css"
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import PropTypes from 'prop-types';
import product from "../../prop-types/product";

class AddProductForm extends Component {

    constructor(props) {
        super(props);
        const { product } = props;
        this.state = {
            newProductName: '',
            newProductCategory: '',
            newProductPrice: '',
            newProductRest: '',
            hasNameError: false,
            hasCategoryError: false,
            hasPriceError: false,
            hasRestError: false,
            validate: false,
            ...product
        }
    }

    resetFields = () => {
        this.setState({
            newProductName: '',
            newProductCategory: '',
            newProductPrice: '',
            newProductRest: '',
        })
    }

    render () {
        const {requiredValidator} = this.state;
        return (
                <div className="form-block">
                    <Textbox
                        attributesWrapper={{}}
                        label="Name"
                        attributesInput={{
                            id: "Name",
                            name: "Name",
                            type: "text",
                            placeholder: "Place your name here ^-^"
                        }}
                        validate={requiredValidator}
                        value={this.state.newProductName}
                        onChange={e => { this.setState({ newProductName: e }) }}
                        onBlur={() => { ( this.state.newProductName === '') ? this.setState({ hasNameError: false }) : this.setState({ hasNameError: true }) }}
                    />
                    <Textbox
                        attributesWrapper={{}}
                        label="Category"
                        attributesInput={{
                            id: "Category",
                            name: "Category",
                            type: "text",
                            placeholder: "Place product category here ^-^"
                        }}
                        validate={requiredValidator}
                        value={this.state.newProductCategory}
                        onChange={e => {this.setState({ newProductCategory: e }) }}
                        onBlur={() => {( this.state.newProductCategory === '') ? this.setState({ hasCategoryError: false }) : this.setState({ hasCategoryError: true }) }}
                    />
                    <Textbox
                        attributesWrapper={{}}
                        label="Price"
                        attributesInput={{
                            id: "Price",
                            name: "Price",
                            type: "text",
                            placeholder: "Place product price here ^-^"
                        }}
                        validate={requiredValidator}
                        value={this.state.newProductPrice}
                        onChange={e => { this.setState({ newProductPrice: e }) }}
                        onBlur={() => {( this.state.newProductPrice === '') ? this.setState({ hasPriceError: false }) : this.setState({ hasPriceError: true }) }}
                    />
                    <Textbox
                        attributesWrapper={{}}
                        label="Rest"
                        attributesInput={{
                            id: "Rest",
                            name: "Rest",
                            type: "text",
                            placeholder: "Place amount of product here ^-^"
                        }}
                        validate={requiredValidator}
                        value={this.state.newProductRest}
                        onChange={e => {this.setState({ newProductRest: e }) }}
                        onBlur={() => {(this.state.newProductRest === '') ? this.setState({ hasRestError: false }) : this.setState({ hasRestError: true }) }}
                    />
                    <Button
                        positive
                        onClick={() => {
                            const {
                                newProductName,
                                newProductCategory,
                                newProductPrice,
                                newProductRest,
                                hasNameError,
                                hasCategoryError,
                                hasPriceError,
                                hasRestError } = this.state;
                            if (hasNameError && hasCategoryError && hasPriceError && hasRestError) {
                                    this.props.addNewProduct(newProductName, newProductCategory, newProductPrice, newProductRest);
                                    this.resetFields();
                                }
                            }
                        }
                        >Add new product
                    </Button>
                </div>
        );
    }    
}

export default AddProductForm;

AddProductForm.propTypes = {
    product,
    addNewProduct: PropTypes.func.isRequired,
};

AddProductForm.defaultProps = {
    product: {},
};