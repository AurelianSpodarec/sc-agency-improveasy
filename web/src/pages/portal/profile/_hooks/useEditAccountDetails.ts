import useForm from 'lib/src/hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import usePrevious from 'lib/src/hooks/usePrevious';

import { updateAccountDetails } from '@actions/account/updateAccountDetails';
import {
    selectAccountDetails,
    selectAccountError,
    selectAccountIsFetching,
    selectAccountIsPosting,
    selectAccountPostSucccess,
} from '@selectors/account';
import { IUpdateAccountPostBody } from '../../../../types/shared/Account';
import { useEffect, useMemo, useState } from 'react';
import { fetchAccountDetails } from '@actions/account/fetchAccountDetails';

const useEditAccountDetails = () => {
    const dispatch = useDispatch();

    const userDetails = useSelector(selectAccountDetails);
    const isFetching = useSelector(selectAccountIsFetching);

    const isPosting = useSelector(selectAccountIsPosting);
    const postSuccess = useSelector(selectAccountPostSucccess);

    const prevProps = usePrevious({ isPosting, postSuccess, isFetching });

    const error = useSelector(selectAccountError);

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

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
        if (!isFetching && prevProps.isFetching) {
            resetData(initialForm);
        }
    }, [isFetching, prevProps.isFetching, initialForm, resetData]);

    useEffect(() => {
        if (postSuccess && !prevProps.postSuccess) {
            setShowSuccessModal(true);
        }

        if (!isPosting && prevProps.isPosting && !!error) {
            setShowErrorModal(true);
        }
    }, [prevProps.postSuccess, postSuccess]);

    const handleSubmit = () => {
        dispatch(updateAccountDetails(form));
    };

    return {
        form,
        handleChange,
        handleSubmit,
        isPosting,
        error,
        isFetching,
        showSuccessModal,
        setShowSuccessModal,
        showErrorModal,
        setShowErrorModal,
    };
};

export default useEditAccountDetails;
