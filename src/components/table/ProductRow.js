
import React, { Component } from 'react';
import { Table, Button } from "semantic-ui-react";
import './ProductRow.css';
import product from '../../prop-types/product';
import PropTypes from 'prop-types';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { Textbox } from 'react-inputs-validation';

class ProductRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editedProductName: props.name,
            editedProductCategory: props.category,
            editedProductPrice: props.price,
            editedProductRest: props.rest,
            hasNameError: true,
            hasCategoryError: true,
            hasPriceError: true,
            hasRestError: true,
            validate: false,
            isEdit: false,
        }
    }

    componentDidMount() {
        const requiredValidator = value => !value ? 'Required!' : '';
    }

    onEdit = () => {
        this.setState({ isEdit: true })
    }

    onChangeName = (e) => {
      this.setState({
        editedProductName: e,
      })
    }

    onChangeCategory = (e) => {
      this.setState({
        editedProductCategory: e,
      })
    }

    onChangePrice = (e) => {
      this.setState({
        editedProductPrice : e,
      })
    }

    onChangeRest = (e) => {
      this.setState({
       editedProductRest: e,
      })
    }

    updateUser = () => {
      const { editedProductName, editedProductCategory, editedProductPrice, editedProductRest, hasNameError, hasCategoryError, hasPriceError, hasRestError} = this.state;
      const { product } = this.props;
        if (!hasNameError &&
            !hasCategoryError &&
            !hasPriceError &&
            !hasRestError) {
            console.log(this.state)
            this.props.onUpdateProduct(editedProductName, editedProductCategory, editedProductPrice, editedProductRest, product.id);
            this.setState({
                isEdit: false })
            }
        }

    onCancel = () => {
      this.setState({
          isEdit: false,
          editedProductName: this.props.name,
          editedProductCategory: this.props.category,
          editedProductPrice: this.props.price,
          editedProductRest: this.props.rest,
      })
  }

    render() {
        const { isEdit, requiredValidator } = this.state;
        const { product, onRemoveProduct } = this.props;
        return (
                <Table.Row>
                  {
                  isEdit
                    ? <Textbox
                          attributesInput={{
                              id: "Name",
                              name: "Name",
                              type: "text",
                              placeholder: "Place your name here ^-^"
                          }}
                          validate={requiredValidator}
                          value={this.editedProductName}
                          onChange={this.onChangeName}
                          onBlur={() => {( !this.state.editedProductName) ? this.setState({ hasNameError: true }) : this.setState({ hasNameError: false });}}
                          label="Product name"
                          type="text" />
                    : <Table.Cell>{product.name}</Table.Cell>
                  }
                   {
                  isEdit
                    ? <Textbox
                          attributesInput={{
                              id: "Category",
                              name: "Category",
                              type: "text",
                              placeholder: "Place product category here ^-^"
                          }}
                          validate={requiredValidator}
                          value={this.editedProductCategory}
                          onChange={this.onChangeCategory}
                          onBlur={() => { (!this.state.editedProductCategory) ? this.setState({ hasCategoryError: true }) : this.setState({ hasCategoryError: false }) }}
                          label="Category"
                          type="text" />
                    : <Table.Cell>{product.category}</Table.Cell>
                  }
                   {
                  isEdit
                    ? <Textbox
                          attributesInput={{
                              id: "Price",
                              name: "Price",
                              type: "text",
                              placeholder: "Place product price here ^-^"
                          }}
                          validate={requiredValidator}
                          value={this.editedProductPrice}
                          onChange={this.onChangePrice}
                          onBlur={() => { ( !this.state.editedProductPrice) ? this.setState({ hasPriceError: true }) : this.setState({ hasPriceError: false }) }}
                          label="Price"
                          type="text" />
                    : <Table.Cell>{product.price}</Table.Cell>
                  }
                   {
                  isEdit
                    ? <Textbox
                          attributesInput={{
                              id: "Rest",
                              name: "Rest",
                              type: "text",
                              placeholder: "Place amount of product here ^-^"
                          }}
                          validate={requiredValidator}
                          value={this.editedProductRest}
                          onChange={this.onChangeRest}
                          onBlur={() => {( !this.state.editedProductRest) ? this.setState({ hasRestError: true }) : this.setState({ hasRestError: false }) }}
                          label="Rest"
                          type="text" />
                    : <Table.Cell>{product.rest}</Table.Cell>
                  }

                  <Table.Cell>
                    {isEdit &&
                    <Button.Group>
                        <Button onClick={this.updateUser} color='green'>Save</Button>
                        <Button.Or />
                        <Button onClick={this.onCancel} color='red'>Cancel</Button>
                    </Button.Group>
                    }

                    {!isEdit && <Button color='blue' onClick={this.onEdit}>Edit</Button>}
                    {!isEdit && <Button onClick={() => onRemoveProduct(product.id)} color='red'>Remove</Button>}
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
