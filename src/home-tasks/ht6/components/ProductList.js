import React from 'react';
import { Redirect } from 'react-router-dom'
import {Card, Icon, Loader, Button, Dimmer } from 'semantic-ui-react'
import { addToBasket } from "../redux/actions/basket";
import {useDispatch, useSelector} from "react-redux";


function ProductList() {
    const products = useSelector(state => state.products.data);
    const isFetching = useSelector(state => state.products.loading);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(addToBasket(id));
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
                            meta={product.meta}
                            description={product.description}
                        />
                        <Button
                            color='blue'
                            onClick={() => handleClick(product.id)}
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


