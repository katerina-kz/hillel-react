import React from 'react';
import { reduxForm, Field } from 'redux-form'
import {Container, Button} from "semantic-ui-react";
import TextField from "../TextField";
import axios from "axios";

function OrderForm({handleSubmit, valid, submitting}) {


    return (
        <Container>
            <form className='form-box' onSubmit={handleSubmit}>
                <div>Sing in</div>
                <Field name="email" label='Email' placeholder='john@mail.com' component={TextField}/>
                <Field name="password" label='Password' placeholder='*******' type='password' component={TextField}/>
                <hr />
                <div>Create order</div>
                <Field name="first_name" label='First name' placeholder='John' component={TextField}/>
                <Field name="last_name" label='Second' placeholder='Dou' component={TextField}/>
                <Field name="tel" label='Tel' placeholder='+1234567890' component={TextField}/>
                <Field name="bankId" label='Bank ID' placeholder='XXXX-XXXX-XXXX-XXXX' component={TextField}/>
                <Field name="address" label='Address' placeholder='137 Franklin Street - Tribeca, New York' component={TextField}/>
                <Button type="submit" disabled={!valid && !submitting} basic color='green'>Create order</Button>
            </form>
        </Container>
    );
}

const validate = values => {
    const errors = {};
    const telRegExp = /^(\+[0-9]{1,3}|0)[0-9]{3}( ){0,1}[0-9]{7,8}\b/; // exp +234434545354
    const bankIdRegExp = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/; // XXXX-XXXX-XXXX-XXXX
    const regExpEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regExpEmail.test(values.email)) {
        errors.email = 'Wrong email format!'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.first_name) {
        errors.first_name = 'Required'
    }
    if (!values.last_name) {
        errors.last_name = 'Required'
    }
    if (!values.tel) {
        errors.tel = 'Required'
    } else if (!telRegExp.test(values.tel)) {
        errors.tel = 'Wrong phone format'
    }
    if (!values.bankId) {
        errors.bankId = 'Required'
    } else if (!bankIdRegExp.test(values.bankId)) {
        errors.bankId = 'Wrong Bank ID format'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    return errors;
};

const asyncValidate = async values => {
    if (!values.email && !values.password) return;
    const responseEmail = await axios.get(`http://localhost:3002/api/login/is_exist?email=${values.email}`);
    if (!responseEmail.data.is_exist) {
        throw { email: 'Wrong email!' }
    }
};


const warn = values => {
    const warnings = {};
    if (values.first_name) {
        if (values.first_name.length <= 1) {
            warnings.first_name = 'Are you sure?!'
        }
    }
    if (values.last_name) {
        if (values.last_name.length <= 1) {
            warnings.last_name = 'Are you sure?!'
        }
    }
    return warnings;
};

export default reduxForm({
    form: 'order',
    validate,
    warn,
    asyncValidate,
    asyncBlurFields: ['email'],
})(OrderForm);