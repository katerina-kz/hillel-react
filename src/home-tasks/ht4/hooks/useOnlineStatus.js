import { useState, useEffect } from 'react';

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
       setIsOnline(window.navigator.onLine)
    }, []);

    return isOnline;
}