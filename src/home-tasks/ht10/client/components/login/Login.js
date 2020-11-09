import React from 'react';
import { reduxForm, Field } from 'redux-form'
import {Container, Button} from "semantic-ui-react";
import axios from "axios";
import TextField from "../TextField";
import {Redirect} from "react-router-dom";


function Login({handleSubmit, valid, submitting, login}) {

    if (login) {
        return <Redirect to='/order' />;
    }

    return (
        <Container>
            <form className='form-box' onSubmit={handleSubmit}>
                <Field name="email" label='Email' placeholder='jahn@mail.com' component={TextField}/>
                <Field name="password" label='Password' placeholder='*******' type='password' component={TextField}/>
                <Button type="submit" disabled={!valid && !submitting} basic color='green'>
                    Log In
                </Button>
            </form>
        </Container>
    );
}

const validate = values => {
    const errors = {};
    const regExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regExp.test(values.email)) {
        errors.email = 'Wrong email format!'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors;
};

const asyncValidate = async values => {
    if (!values.email) return;
    const response = await axios.get(`http://localhost:3002/api/login/is_exist?email=${values.email}`);
    if (response.data.is_exist) {
        throw { email: 'This email is already taken' }
    }
};

export default reduxForm({
    form: 'login',
    validate,
    asyncValidate,
    asyncBlurFields: ['email'],
})(Login);
