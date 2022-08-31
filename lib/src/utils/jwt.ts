import jwtDecode from 'jwt-decode';

interface JWT {
    nbf: number;
    exp: number;
}

export function validateJWT(token: string): boolean {
    try {
        if (!token) return false;
        return !!token;
    } catch {
        return false;
    }
}

export const getJwtToken = (): string | null => {
    const token = localStorage.getItem('jwt');
    return token;
};

export const clearJwtAndRefreshToken = (): void => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('refreshToken');
};

export const getDecodedJwtToken = (): JWT | null => {
    const jwtToken = getJwtToken();

    if (jwtToken === null) return null;

    const isValid = validateJWT(jwtToken);
    
    if (!isValid) {
        return null;
    }

    const decoded = jwtDecode<JWT>(jwtToken);
    return decoded;
};
