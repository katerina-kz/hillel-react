import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom'
import { Card, Icon, Loader } from "semantic-ui-react";
import useData from "../hooks/useData";


function UserDetails() {
    const { userId } = useParams();

    const [user, isFetching] = useData(`/users/${userId}`, null)
    const [ albums ] = useData(`/users/${userId}/albums`, []);
    const extraData = (
        <Link to={`/users/${userId}/albums`}>
            <Icon name='photo' />
            {albums.length} Albums
        </Link>
    );

    if (user=== null) return <Loader size='small' active />;

    if (!user.id) {
        return <Redirect to='/users'/>
    }

    return (
        <div className='user-details-page'>
            {isFetching ?
                <Loader active inline='centered' />
                :
                <Card
                    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
                    header={user.name}
                    meta={user.company.name}
                    description={user.email}
                    extra={extraData}
                />
            }
        </div>
    );
}

export default UserDetails;