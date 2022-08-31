import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRedirectUrl } from '../redux/selectors/redirects';
import { useCallback, useEffect } from 'react';
import { setRedirectUrl } from '../redux/actions/redirects';

export default function useGlobalRedirect(): void {
    const dispatch = useDispatch();
    const history = useHistory();
    const redirectUrl = useSelector(getRedirectUrl);

    const resetRedirect = useCallback(() => {
        const url = redirectUrl;
        if (url) {
            dispatch(setRedirectUrl(null));
            history.push(url);
        }
    }, [dispatch, history, redirectUrl]);

    useEffect(resetRedirect, [resetRedirect]);
}
