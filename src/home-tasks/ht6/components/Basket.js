import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card } from "semantic-ui-react";
import {addToBasket, removeFromBasket} from "../redux/actions/basket";

function Basket() {
    const products = useSelector(state => state.products);
    const cart = useSelector(state => state.cart);
    const productsInCart = cart.map(({ id, count }) => {
        const obj = products.data.find(product => product.id === id);
        return {
            id, count, ...obj
        }
    });

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromBasket(id));
    };

    const handleAdd = (id) => {
        dispatch(addToBasket(id));
    };

    return (
        <div className="basket-block">
            {
                productsInCart.map(product => (
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
                                <Button onClick={() => handleAdd(product.id)} positive>Add one more +</Button>
                                <Button.Or />
                                <Button onClick={() => handleRemove(product.id)}>Remove one -</Button>
                            </Button.Group>
                            <div className='amount'>{product.count}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Basket;