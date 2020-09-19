import React, {Component} from 'react';
import { Button, Table} from "semantic-ui-react";
import ValidatedInput from "./ValidatedInput";
import product from "../../prop-types/product";
import PropTypes from "prop-types";

const requiredValidator = value => !value ? 'Required!' : '';

class ProductRowEditForm extends Component {
    constructor(props) {
        super(props);
        const { product } = props;
        this.state = {
                name: '',
                category: '',
                price: '',
                rest: '',
                ...product
        }
    }

    editProduct = () => {
        this.props.onSubmit(this.state);
    }


    onChangeField = e => {
        const { name , value} = e.target;
        this.setState({ [name]: value })
    }

    isDisabled() {
        const { name, category, price, rest } = this.state;

        return !!(requiredValidator(name)
            && requiredValidator(category)
            && requiredValidator(price)
            && requiredValidator(rest))
    }

    render() {
        const { name, category, price, rest } = this.state;
        const { onCancel } = this.props;
        const disabled = this.isDisabled();
        return (
            <Table.Row>
                <Table.Cell>
                    <ValidatedInput placeholder='Name' validate={requiredValidator} type="text" name='name' value={name} onChange={this.onChangeField} />
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput placeholder='Category' validate={requiredValidator} type="text" name='category' value={category} onChange={this.onChangeField} />
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput placeholder='Price' validate={requiredValidator} type="text" name='price' value={price} onChange={this.onChangeField} />
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput placeholder='Rest' validate={requiredValidator} type="text" name='rest' value={rest} onChange={this.onChangeField} />
                </Table.Cell>
                <Button.Group>
                    <Button disabled={disabled} onClick={this.editProduct} color='green'>Save</Button>
                    <Button.Or />
                    <Button onClick={onCancel} color='red'>Cancel</Button>
                </Button.Group>
            </Table.Row>
        )
    }
}

export default ProductRowEditForm;

ProductRowEditForm.propTypes = {
    product: product.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};