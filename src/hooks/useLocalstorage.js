import { useEffect, useState } from 'react';

export const useLocalstorage = (key, defaultValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || defaultValue);

    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);

    return [value, setValue];
}