import { updatePropertyStatus } from './../../../../redux/actions/properties/updatePropertyStatus';
import {
    getPropertiesIsUpdatingStatus,
    getPropertiesUpdateStatusError,
} from './../../../../redux/selectors/properties';
import { useDispatch, useSelector } from 'react-redux';
import { PropertyStatus } from '@actions/properties';
import { convertEnumToDropdownOption } from 'lib/src/shared/enums/dropdownEnums';
import { Property } from 'src/types/shared/Property';

const statusOptions = convertEnumToDropdownOption(PropertyStatus);

const useSetPropertyStatus = (property: Property) => {
    const dispatch = useDispatch();
    const updating = useSelector(getPropertiesIsUpdatingStatus);
    const error = useSelector(getPropertiesUpdateStatusError);

    const handleChange = (_: string, val: PropertyStatus) => {
        dispatch(updatePropertyStatus(property.id, val));
    };

    return {
        statusOptions,
        handleChange,
        updating,
        error,
    };
};

export default useSetPropertyStatus;
