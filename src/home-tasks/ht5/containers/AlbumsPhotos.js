import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Loader } from "semantic-ui-react";
import GlideJs from '../assets/GlideJs';
import { Container } from "semantic-ui-react";


function AlbumsPhotos(props) {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);
    const [type, setType] = useState( 'carousel');
    const [perView, setPerView] = useState(1);
    const [controls, setControls] = useState(true);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json())
            .then(photo => {
                setPhotos(photo.filter (id => id.albumId === parseInt(albumId) ? id : null)) // оставила тут фетч так как нестандартное поведение
            })
    }, [albumId]);

    if (photos.length === 0) return <Loader size='small' active />;

    return (
        <Container className='slider'>
            <GlideJs options={{type, perView, controls}}>
                <ul className="glide__slides">
                    {
                        photos.map(photo =>
                            <li className="glide__slide">
                                <img className="full-with-img" src={photo.url} alt=""/>
                            </li>
                        )
                    }
                </ul>
            </GlideJs>
        </Container>
    );
}

export default AlbumsPhotos;