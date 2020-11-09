import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import React, {useCallback, useState} from "react";
import axios from "axios";
import ModalSuccess from "./components/ModalSuccess";
import OrderForm from "./components/form/OrderForm";
import Login from "./components/login/Login";
import ModalError from "./components/ModalError";

export default function RouterOrder() {
    const [success, setSuccess] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [login, setLogin] = useState(false);


    const onSubmitOrder = useCallback(values => {
        axios
            .post('http://localhost:3002/api/order', values)
            .then(response => {
                console.log(response);
                setSuccess(true);
            })
            .catch(err => {
                console.log({"Error": err.message});
                setErrorPassword(true);
            });
    }, []);

    const onSubmitLogin = useCallback(async values => {
        let result = await axios.post('http://localhost:3002/api/login', values);
        try {
            setLogin(true);
            console.log(result);
        } catch (err) {
            console.log('Error:', err.message);
        }
    }, []);

    return (
        <Container>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Login login={login} onSubmit={onSubmitLogin}/>
                    </Route>
                    <Route path='/order'>
                        {
                            errorPassword ?
                                <ModalError setError={setErrorPassword}/>
                                :
                                success ?
                                    <ModalSuccess setSuccess={setSuccess}/>
                                    :
                                    <OrderForm onSubmit={onSubmitOrder}/>
                        }
                    </Route>

                </Switch>

            </Router>
        </Container>
    )
}
