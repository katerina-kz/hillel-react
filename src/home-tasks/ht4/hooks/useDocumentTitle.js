import React, { useEffect } from 'react';

export function useDocumentTitle(initialTitle) {

    useEffect(() => {
        document.title = initialTitle;
    }, [initialTitle]);
}


