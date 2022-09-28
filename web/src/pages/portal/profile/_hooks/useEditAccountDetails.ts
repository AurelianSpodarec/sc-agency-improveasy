import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import usePrevious from 'lib/src/hooks/usePrevious';

import { updateAccountDetails } from '@actions/account/updateAccountDetails';
import {
    selectAccountDetails,
    selectAccountError,
    selectAccountIsFetching,
    selectAccountIsPosting,
} from '@selectors/account';
import { IUpdateAccountPostBody } from '../../../../types/shared/Account';
import { useEffect, useMemo } from 'react';
import { fetchAccountDetails } from '@actions/account/fetchAccountDetails';

const useEditAccountDetails = () => {
    const dispatch = useDispatch();

    const userDetails = useSelector(selectAccountDetails);
    const isFetching = useSelector(selectAccountIsFetching);
    const prevIsFetching = usePrevious(isFetching);

    const isPosting = useSelector(selectAccountIsPosting);
    const error = useSelector(selectAccountError);

    const initialForm = useMemo(
        () => ({
            firstName: userDetails?.firstName || '',
            lastName: userDetails?.lastName || '',
            email: userDetails?.email || '',
            phone: userDetails?.phone || '',
        }),
        [userDetails],
    );

    const [form, handleChange, resetData] = useForm<IUpdateAccountPostBody>(initialForm);

    useEffect(() => {
        dispatch(fetchAccountDetails());
    }, [dispatch]);

    useEffect(() => {
        if (!isFetching && prevIsFetching) {
            resetData(initialForm);
        }
    }, [isFetching, prevIsFetching, initialForm, resetData]);

    const handleSubmit = () => {
        dispatch(updateAccountDetails(form));
    };

    return { form, handleChange, handleSubmit, isPosting, error, isFetching };
};

export default useEditAccountDetails;
