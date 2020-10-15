import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card } from "semantic-ui-react";
import {removeFromBasket} from "../redux/actions/shopping";
import {productIncrement, productDecrement} from "../redux/actions/productCounter";

function Basket() {
    const shopping = useSelector(state => state.shopping);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(removeFromBasket(id));
    };

    const handleIncrement = (id) => {
        dispatch(productIncrement(id));
    };

    const handleDecrement = (id) => {
        dispatch(productDecrement(id));
        shopping.map(product => {
            if (id === product.id) {
                if (product.amount === 0) dispatch(removeFromBasket(id));
            }
        })
    };

    return (
        <div className="basket-block">
            {
                shopping.map(product => (
                    <div>
                    <Card
                        header={product.title}
                        image={product.image}
                        meta={product.price}
                        description={product.description}
                        id={product.id}
                    />
                        <div className='amount-group'>
                            <Button.Group>
                                <Button onClick={() => handleIncrement(product.id)} positive>Increment +</Button>
                                <Button.Or />
                                <Button onClick={() => handleDecrement(product.id)}>Decrement -</Button>
                            </Button.Group>
                            <div className='amount'>{product.amount}</div>
                        </div>
                        <Button
                            color='blue'
                            onClick={() => handleClick(product.id)}
                        >
                            Remove from cart
                        </Button>
                    </div>
                ))
            }
        </div>
    );
}

export default Basket;