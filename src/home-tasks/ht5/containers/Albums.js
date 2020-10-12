import React from "react";
import {NavLink,} from 'react-router-dom'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import {Container, Grid, GridColumn, Image, List, Loader} from "semantic-ui-react";
import AlbumsPhotos from "./AlbumsPhotos";
import useData from '../hooks/useData';

function Albums() {
    const [albums ] = useData('/albums', []);

    const { path } = useRouteMatch();

    if (albums === null) return <Loader size='small' active />;


    return (
        <div className='albums-page'>
            <Container>
                <Grid columns={2}>
                    <GridColumn>
                        <List>
                            {
                                albums.map(album => (
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>
                                                <NavLink activeClassName='active' to={`/albums/${album.id}`} id={album.id}>{album.title}</NavLink>
                                            </List.Header>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List>
                    </GridColumn>
                    <GridColumn>
                        <Switch>
                            <Route path={`${path}/:albumId`} exact>
                                <AlbumsPhotos />
                            </Route>
                        </Switch>
                    </GridColumn>
                </Grid>
            </Container>
        </div>
    );
}

export default Albums;
