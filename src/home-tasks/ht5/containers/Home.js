import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";


function Home(props) {
    return (
        <Card.Group className='home'>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Hello in our blog</Card.Header>
                    <Card.Description>
                       Here you can easy move to our blog or menu "about"
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                            <Link to={`/posts`}>
                                <Button basic color='green'>Blog</Button>
                            </Link>
                        <Link to={`/about`}>
                            <Button basic color='red'>About</Button>
                        </Link>

                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    );
}

export default Home;



