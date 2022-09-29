import { fetchUserProperties } from '@actions/properties/fetchUserProperties';
import { fetchUsersPropertyCount } from '@actions/propertyInformation/fetchUsersPropertyCount';
import { selectAccountDetails } from '@selectors/account';
import { selectProperties, selectPropertiesIsFetching } from '@selectors/properties';
import {
    selectPropertyInformationIsFetching,
    selectUsersPropertyCount,
    selectPropertyInformationError,
} from '@selectors/propertyInformation';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';

const useFetchEssentialData = () => {
    const dispatch = useDispatch();

    const isFetchingProperties = useSelector(selectPropertiesIsFetching);
    const isFetchingAccountDetails = useSelector(selectPropertyInformationIsFetching);

    const properties = Object.values(useSelector(selectProperties));
    const propertyCount = useSelector(selectUsersPropertyCount);
    const accountDetails = useSelector(selectAccountDetails);

    const error = useSelector(selectPropertyInformationError);

    const dataExist = useMemo(() => {
        if (propertyCount === null) {
            return false;
        } else if (propertyCount > 0 && properties.length === 0) {
            return false;
        }

        return true;
    }, [propertyCount, properties]);

    useEffect(() => {
        batch(() => {
            if (propertyCount === null && !isFetchingAccountDetails) {
                dispatch(fetchUsersPropertyCount());
            }
            if (!!propertyCount && !properties.length && !isFetchingProperties) {
                dispatch(fetchUserProperties());
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
        isFetching: isFetchingProperties || isFetchingAccountDetails,
        error,
        dataExist,
    };
};

export default useFetchEssentialData;
