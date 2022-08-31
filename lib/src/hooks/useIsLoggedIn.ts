import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getJwtToken, validateJWT } from '../utils/jwt';

export default function useIsLoggedIn(): boolean {
    const [token, setToken] = useState(getJwtToken());
    const location = useLocation();

    useEffect(() => {
        setToken(getJwtToken());
    }, [location]);
    if (!token) return false;
    const isValidToken = validateJWT(token);
    return isValidToken;
}
