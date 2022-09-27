import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '@reducers/index';
import {
    selectPropertiesError,
    selectPropertiesIsFetching,
    selectSingleProperty,
} from '@selectors/properties';
import { patchRequestNewEPC } from '@actions/propertyInformation/patchRequestNewEPC';
import { patchRequestSurvey } from '@actions/propertyInformation/patchRequestSurvey';
import { useEffect, useState } from 'react';
import {
    selectPropertyInformationError,
    selectPropertyInformationIsPosting,
    selectPropertyInformationPostSuccess,
} from '@selectors/propertyInformation';
import usePrevious from 'lib/src/hooks/usePrevious';
import { fetchPropertyByID } from '@actions/properties/fetchPropertyByID';

const useSurveyRequest = () => {
    const dispatch = useDispatch();

    const { propertyID } = useParams<{ propertyID: string }>();

    const property = useSelector((state: RootState) => selectSingleProperty(state, +propertyID));
    const isFetching = useSelector(selectPropertiesIsFetching);
    const propertyError = useSelector(selectPropertiesError);

    const isPosting = useSelector(selectPropertyInformationIsPosting);
    const prevIsPosting = usePrevious(isPosting);
    const postSuccess = useSelector(selectPropertyInformationPostSuccess);

    const error = useSelector(selectPropertyInformationError);
    const prevPostSuccess = usePrevious(postSuccess);

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleRequestEPC = () => {
        dispatch(patchRequestNewEPC(+propertyID));
    };

    const handleRequestSurvey = () => {
        dispatch(patchRequestSurvey(+propertyID));
    };

    useEffect(() => {
        dispatch(fetchPropertyByID(+propertyID));
    }, [dispatch, propertyID]);

    useEffect(() => {
        if (postSuccess && !prevPostSuccess) {
            setShowSuccessModal(true);
        }

        if (prevIsPosting && !isPosting && error) {
            setShowErrorModal(true);
        }
    }, [postSuccess, prevPostSuccess, error, isPosting, prevIsPosting]);

    return {
        property,
        handleRequestEPC,
        handleRequestSurvey,
        isPosting,
        showSuccessModal,
        setShowSuccessModal,
        isFetching,
        propertyError,
        showErrorModal,
        setShowErrorModal,
        error,
    };
};

export default useSurveyRequest;
