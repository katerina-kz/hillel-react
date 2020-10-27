import React from 'react';
import { Item } from 'semantic-ui-react'
import {Switch, Route, Link} from "react-router-dom";
import { useSelector } from "react-redux";
import {Container, Grid, GridColumn, Loader} from "semantic-ui-react";
import GistFiles from './GistFiles';
import {getGists, getLoader} from "../redux/selectors/gists";


function ReduxApp() {
    const loader = useSelector(getLoader);
    const gists = useSelector(getGists);

    return (
        <Container>
            {loader ?
                <Loader active inline='centered'/>
                :
                <Grid columns={2}>
                    <GridColumn>
                        <Item.Group link>
                            {gists.map(gist => (
                                <Item id={gist.id}>
                                    <Item.Image size='tiny' src={gist.owner.avatar_url}/>

                                    <Item.Content>
                                        <Item.Header className="header">{gist.owner.login}</Item.Header>
                                        {
                                            gist.description !== "" &&
                                            <Item.Description>
                                            <span className="gist-description">Description:</span> {gist.description}
                                            </Item.Description>
                                        }
                                        <Item.Description><span className="gist-description">File: </span>
                                            <Link to={`/gists/${gist.id}`}>
                                                {gist.files.map(file => file.filename).join(', ')}
                                            </Link>
                                        </Item.Description>
                                    </Item.Content>
                                </Item>
                            ))}
                        </Item.Group>
                    </GridColumn>
                    <GridColumn>
                        <Switch>
                            <Route path={`/gists/:gistId`} component={GistFiles} exact />
                        </Switch>
                    </GridColumn>
                </Grid>
            }
        </Container>
    );
}

export default ReduxApp;
