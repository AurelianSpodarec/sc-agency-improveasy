import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { Action, ActionCreator, Dispatch } from 'redux';
import { setFieldErrors } from '../redux/actions/fieldErrors';
import { addFormError } from '../redux/actions/fieldErrors';
import { setRedirectUrl } from '../redux/actions/redirects';
import { APIError } from '../types/APIError';
import { clearJwtAndRefreshToken } from './jwt';

let API_URL = '';
export const initApi = (apiUrl: string) => {
    API_URL = apiUrl;
};

const get = async <TResponseBody>(url: string, params?: any): Promise<AxiosResponse<TResponseBody>> =>
    axios.get<TResponseBody>(`${API_URL}/${url}`, await getConfig(params));

const post = async <TRequestBody, TResponseBody>(url: string, data: TRequestBody, params?: any) =>
    axios.post<TResponseBody>(`${API_URL}/${url}`, data, await getConfig(params));

const put = async <TRequestBody, TResponseBody>(url: string, data: TRequestBody, params?: any) =>
    axios.put<TResponseBody>(`${API_URL}/${url}`, data, await getConfig(params));

const patch = async <TRequestBody, TResponseBody>(url: string, data: TRequestBody, params?: any) =>
    axios.patch<TResponseBody>(`${API_URL}/${url}`, data, await getConfig(params));

const del = async <TResponseBody>(url: string, params?: any) =>
    axios.delete<TResponseBody>(`${API_URL}/${url}`, await getConfig(params));

const logError = async (body: ErrorLogRequest) => {
    // todo error request body
    return axios.post(`${API_URL}/error`, body, await getConfig());
};

export const api = {
    get,
    post,
    put,
    patch,
    delete: del,
    logError,
};

const getConfig = async (params: any = {}): Promise<AxiosRequestConfig> => {
    const jwt = await getToken();

    return {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
        params,
    };
};

export const handleApiErrors = <A extends Action>(
    dispatch: Dispatch,
    failureAction: ActionCreator<A>,
    err: APIError,
) => {
    const { response, message } = err;

    if (response && response.status === 400) {
        typeof response.data === 'string'
            ? dispatch(addFormError(response.data))
            : dispatch(setFieldErrors(response.data.errors));

        return dispatch(failureAction(null));
    }
    if (response && response.status === 401) {
        dispatch(failureAction('Unauthorized'));
        clearJwtAndRefreshToken();
        return dispatch(setRedirectUrl('/auth/login'));
    }

    return dispatch(failureAction(message));
};

const getToken = async () => {
    const jwt = localStorage.getItem('jwt');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!jwt || !refreshToken) {
        return jwt;
    }

    try {
        const now = new Date().getTime() / 1000;
        const { exp = 0 } = jwtDecode<JwtPayload>(jwt);
        const minutesUntilExpiration = (exp - now) / 60;

        if (minutesUntilExpiration > 2) {
            return jwt;
        }
    } catch (error) {
        return null;
    }

    const { data } = await axios.post<RefreshTokenRequest, AxiosResponse<LoginResponse>>(
        `${API_URL}/auth/refresh-token`,
        { refreshToken, expiredToken: jwt },
    );

    localStorage.setItem('jwt', data.token);
    localStorage.setItem('refreshToken', data.refreshToken);

    return data.token;
};

interface RefreshTokenRequest {
    refreshToken: string;
    expiredToken: string;
}

export interface LoginResponse {
    token: string;
    refreshToken: string;
    isConfirmed: boolean;
}

export interface ErrorLogRequest {
    message?: string;
    stackTrace?: string;
    appVersion: string;
    device: string;
    deviceOS: string;
    deviceRAM: number | null;
}
