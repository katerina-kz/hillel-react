import React, { useState, useEffect } from 'react';

export function useDocumentTitle(initialTitle) {

    useEffect(() => {
        document.title = initialTitle;
    }, []);


    return [initialTitle];
}


