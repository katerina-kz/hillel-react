import React from 'react';
import GistsList from "../components/GistsList";

function GridLayout() {
    return (
        <>
            <div className='grid-main-container'>
                <div className="grid-th-row">
                    <div className="grid-author-col">Author</div>
                    <div className="grid-details-col">Scripts</div>
                </div>
                <div className="grid-tr-row">
                    <GistsList />
                </div>
            </div>
        </>
    );
}

export default GridLayout;