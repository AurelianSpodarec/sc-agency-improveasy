import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDarkMode } from '../redux/selectors/darkMode';
import { toggleTheme } from '../redux/actions/darkMode';

import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [initLoad, setInitLoad] = useState(true);
    const dispatch = useDispatch();
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const darkMode = useSelector(getDarkMode);

    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkMode', null);

    useEffect(() => {
        if (
            (initLoad && darkModeEnabled === null && systemPrefersDark.matches) ||
            (initLoad && darkModeEnabled)
        ) {
            dispatch(toggleTheme(true));
            setDarkModeEnabled(true);
            setInitLoad(false);
        }
    }, [
        dispatch,
        initLoad,
        setInitLoad,
        systemPrefersDark.matches,
        darkModeEnabled,
        setDarkModeEnabled,
    ]);

    const handleSetDarkMode = () => {
        setDarkModeEnabled(!darkModeEnabled);
        dispatch(toggleTheme(!darkModeEnabled));
    };

    return [darkMode, handleSetDarkMode];
};

export default useDarkMode;
