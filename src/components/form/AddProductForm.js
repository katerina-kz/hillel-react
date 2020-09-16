import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Textbox } from 'react-inputs-validation';
import "./AddProductForm.css"
import "react-inputs-validation/lib/react-inputs-validation.min.css";



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

    componentDidMount() {
        const requiredValidator = value => !value ? 'Required!' : '';
    }

    render () {
        const {requiredValidator} = this.state;
        const { addNewProduct } = this.props;

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
                        value={this.newProductName}
                        onChange={e => { this.setState({ newProductName: e }) }}
                        onBlur={() => { ( this.state.newProductName === '') ? this.setState({ hasNameError: true }) : this.setState({ hasNameError: false }) }}
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
                        value={this.newProductCategory}
                        onChange={e => {this.setState({ newProductCategory: e }) }}
                        onBlur={() => {( this.state.newProductCategory === '') ? this.setState({ hasCategoryError: true }) : this.setState({ hasCategoryError: false }) }}
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
                        value={this.newProductPrice}
                        onChange={e => { this.setState({ newProductPrice: e }) }}
                        onBlur={() => {( this.state.newProductPrice === '') ? this.setState({ hasPriceError: true }) : this.setState({ hasPriceError: false }) }}
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
                        value={this.newProductRest}
                        onChange={e => {this.setState({ newProductRest: e }) }}
                        onBlur={() => {(this.state.newProductRest === '') ? this.setState({ hasRestError: true }) : this.setState({ hasRestError: false }) }}
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
                            if (!hasNameError && !hasCategoryError && !hasPriceError && !hasRestError) {
                                    addNewProduct(newProductName, newProductCategory, newProductPrice, newProductRest);
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