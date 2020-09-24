import React, { useState, useEffect } from 'react';

export function useLocalStorage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('storage')) {
            setData(JSON.parse(localStorage.getItem('storage')))
        }
    }, []);

    useEffect(() => {
        const obj = {};
        if (data !== null) {
            Object.assign(obj, {data});
        }
        localStorage.setItem('storage', JSON.stringify(obj));
        console.log(localStorage);
    }, [data])
    return [data, setData];
}


