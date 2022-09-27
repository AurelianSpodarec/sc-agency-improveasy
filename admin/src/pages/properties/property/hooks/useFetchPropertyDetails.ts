import { useAppSelector } from '../../../../redux/store';
import { fetchImprovementTypes } from './../../../../redux/actions/improvementTypes/fetchImprovementTypes';
import { fetchUserByPropertyID } from './../../../../redux/actions/users/fetchUserByPropertyID';
import {
    getProperty,
    getPropertiesIsFetching,
    getPropertiesFetchError,
} from '../../../../redux/selectors/properties';

import { fetchProperty } from '@actions/properties';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser, getUsersIsFetching, getUsersFetchError } from '@selectors/users';
import { fetchPropertyRating } from '@actions/propertyRatings';
import { getPropertyRating } from '@selectors/propertyRatings';

const useFetchPropertyDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    const property = useAppSelector(state => getProperty(state, +id));
    const fetchingProperties = useSelector(getPropertiesIsFetching);
    const fetchPropertiesError = useSelector(getPropertiesFetchError);

    const user = useAppSelector(state => getUser(state, property?.userID));
    const fetchingUser = useSelector(getUsersIsFetching);
    const fetchUserError = useSelector(getUsersFetchError);
    const propertyRating = useAppSelector(state => getPropertyRating(state, +id));

    useEffect(() => {
        dispatch(fetchProperty(+id));
        dispatch(fetchUserByPropertyID(+id));
        dispatch(fetchPropertyRating(+id));
        dispatch(fetchImprovementTypes());
    }, [dispatch, id]);

    return {
        property,
        propertyRating,
        user,
        isFetching: fetchingProperties || fetchingUser,
        fetchError: fetchPropertiesError || fetchUserError,
    };
};

export default useFetchPropertyDetails;
