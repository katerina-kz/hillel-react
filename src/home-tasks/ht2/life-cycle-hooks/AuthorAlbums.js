import React, { Component } from 'react';
import { Dimmer, Loader, Message } from 'semantic-ui-react';

class AuthorAlbums extends Component {

    state = {
        albums: null,
        authorAlbums: [],
        isFetching: false
    };

    componentDidMount() {
        this.fetchAlbumsData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.authorId !== this.props.authorId && this.props.authorId !== null) {
            this.fetchAlbumsData();
        }
    }

    fetchAlbumsData() {
        const { authorId } = this.props;
        console.log(authorId);
        if (!authorId) return;
        this.setState({ isFetching: true });
        fetch(`https://jsonplaceholder.typicode.com/users/${authorId}/albums`)
            .then(response => response.json())
            .then(albums => this.setState({
                albums,
                authorAlbums: albums.map(albums => albums.userId === authorId ? albums.title : null),
                isFetching: false
            }))
            .catch(err => this.setState({ isFetching: false }));
    }

    render() {
        const { albums, authorAlbums, isFetching } = this.state;
        if (albums === null) return null;
        return (
            <Message>
                <Dimmer active={isFetching}>
                    <Loader active={isFetching} />
                </Dimmer>
                <Message.Header>Albums</Message.Header>
                <Message.List>
                    {authorAlbums.map(item => (
                        <Message.Item>{item}</Message.Item>
                    ))}
                </Message.List>
            </Message>
        );
    }
}

export default AuthorAlbums;
