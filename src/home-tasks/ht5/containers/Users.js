import React from 'react';
import { Route, Switch, useRouteMatch, NavLink } from 'react-router-dom';
import {Container, List, Image, Grid, GridColumn, Loader} from "semantic-ui-react";
import UserDetails from "./UserDetails";
import useData from '../hooks/useData';
import UserAlbums from './UserAlbums';

function Users() {

    const [users, isFetching] = useData('/users', []);
    const { path } = useRouteMatch();

    return (
        <Container>
            {isFetching ?
                <Loader active inline='centered'/>
                :
                <Grid columns={3}>
                    <GridColumn>
                        <List>
                            {users.map(user => (
                                <List.Item>
                                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png'/>
                                    <List.Content>
                                        <List.Header as='a'>
                                            <NavLink activeClassName='active' to={`/users/${user.id}`}>{user.name}</NavLink>
                                        </List.Header>
                                        <List.Description>
                                            {user.email}, {user.phone}
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            ))}
                        </List>
                    </GridColumn>
                    <GridColumn>
                        <Switch>
                            <Route path={`${path}/:userId`}>
                                <UserDetails />
                            </Route>
                        </Switch>
                    </GridColumn>
                    <GridColumn>
                        <Switch>
                            <Route path={`${path}/:userId/albums`} exact>
                                <UserAlbums/>
                            </Route>
                        </Switch>
                    </GridColumn>
                </Grid>
            }
        </Container>
    );
}

export default Users;