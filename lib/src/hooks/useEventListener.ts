import { useEffect } from 'react';

export const useEventListener = (event: keyof DocumentEventMap, listener: EventListener) => {
    useEffect(() => {
        document.addEventListener(event, listener);
        return () => document.removeEventListener(event, listener);
    }, []);
};
