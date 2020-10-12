import React from 'react';
import { List } from "semantic-ui-react";
import {useParams} from "react-router-dom";
import useData from "../hooks/useData";
import { HashLink } from 'react-router-hash-link';

function UserAlbums() {
    const { userId } = useParams();

    const [ albums ] = useData(`/users/${userId}/albums`, []);

    return (
        <div>
            <List>
                {albums.map(album => (
                    <List.Item key={album.id}>
                        <HashLink smooth to={`/albums/${album.id}#${album.id}`}>{album.title}</HashLink>
                    </List.Item>
                ))}
            </List>
        </div>
    );
}

export default UserAlbums;