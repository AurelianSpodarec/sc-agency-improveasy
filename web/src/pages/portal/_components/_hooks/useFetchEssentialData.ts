import { fetchUserProperties } from '@actions/properties/fetchUserProperties';
import { fetchUsersPropertyCount } from '@actions/propertyInformation/fetchUsersPropertyCount';
import { selectAccountDetails } from '@selectors/account';
import { selectProperties, selectPropertiesIsFetching } from '@selectors/properties';
import {
    selectPropertyInformationIsFetching,
    selectUsersPropertyCount,
    selectPropertyInformationError,
} from '@selectors/propertyInformation';
import { useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';

const useFetchEssentialData = () => {
    const dispatch = useDispatch();

    const isFetchingProperties = useSelector(selectPropertiesIsFetching);
    const isFetchingAccountDetails = useSelector(selectPropertyInformationIsFetching);

    const properties = useSelector(selectProperties);
    const propertyCount = useSelector(selectUsersPropertyCount);
    const accountDetails = useSelector(selectAccountDetails);

    const error = useSelector(selectPropertyInformationError);

    useEffect(() => {
        batch(() => {
            if (!properties && !isFetchingProperties) {
                dispatch(fetchUserProperties());
            }
            if (propertyCount === null && !isFetchingAccountDetails) {
                dispatch(fetchUsersPropertyCount());
            }
        });
    }, [
        dispatch,
        properties,
        propertyCount,
        accountDetails,
        isFetchingAccountDetails,
        isFetchingProperties,
    ]);

    return {
        properties,
        propertyCount,
        isFetching: isFetchingProperties && isFetchingAccountDetails,
        error,
    };
};

export default useFetchEssentialData;
