import { Container } from "semantic-ui-react";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchGists} from "./redux/actions/gists";
import GistsList from "./components/GistsList";

export default function Blog() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGists());
    }, []);

    return (
        <Container>
            <Router>
               <GistsList />
            </Router>
        </Container>
    )
}
