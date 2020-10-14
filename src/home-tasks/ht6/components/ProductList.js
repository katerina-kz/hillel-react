import React from 'react';
import { Redirect } from 'react-router-dom'
import useData from "../hooks/useData";
import {Card, Icon, Loader, Button, Dimmer } from 'semantic-ui-react'
import { addToBasket } from "../redux/actions/shopping";
import { increment } from "../redux/actions/counter";
import {useDispatch, useSelector} from "react-redux";


function ProductList() {
    const [products, isFetching] = useData('/products', []);
    const dispatch = useDispatch();

    const handleClick = (title, image, meta, description) => {
        dispatch(addToBasket(title, image, meta, description, 1));
        document.querySelector('.cart-counter').classList.add('block');
        dispatch(increment());
    }

    if (!products) return <Redirect to="/"/>;

    return (
        <>
            <Dimmer active={isFetching}>
                <Loader active={isFetching} size='medium'>Loading</Loader>
            </Dimmer>
            <div className='product-list'>
                {products.map(product =>
                    <div>
                        <Card
                            image={product.image}
                            header={product.title}
                            id={product.id}
                            meta={product.meta}
                            description={product.description}
                            // extra={extra}
                        />
                        <Button
                            color='blue'
                            onClick={() => handleClick(product.title, product.image, product.meta, product.description)}
                        >
                            <Icon name='in cart'/>
                            Add to cart
                        </Button>
                    </div>
                )}
            </div>
        </>

    );
}

export default ProductList;


