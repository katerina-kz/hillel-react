import { useState, useEffect } from 'react';

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {

        setIsOnline(navigator.onLine ? "online" : "offline");

        function updateOnlineStatus() {
            const condition = navigator.onLine ? "online" : "offline";
            setIsOnline(condition);
        }

        window.addEventListener('online',  updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return (
            window.removeEventListener('online',  updateOnlineStatus),
            window.removeEventListener('offline', updateOnlineStatus)
        )
    }, []);

    return isOnline;
}