import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

function List(props) {
    // const [storageData, setData] = useLocalStorage();
    // console.log(setData(storageData));
    return (
        <ul className='list-block'>
            {/*{storageData.map((item) => <li>{item}</li>)}*/}
        </ul>
    );
}

export default List;