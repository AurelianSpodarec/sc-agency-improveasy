import { useState } from 'react';

const useLocalStorage = (
    key: string,
    initialValue: string | boolean | null,
): [string, (value: string | boolean | null) => void] => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that persists the new value to localStorage.
    const setValue = (value: SetValue | SetValueFunction) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};

type SetValue = string | boolean | null;
type SetValueFunction = (value: string | boolean | null) => string | boolean | null;

export default useLocalStorage;
