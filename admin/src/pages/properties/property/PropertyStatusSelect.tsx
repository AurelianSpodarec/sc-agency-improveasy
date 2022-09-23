import React from 'react';

import { Property as PropertyResponse } from 'src/types/shared/Property';
import Select from 'lib/src/components/form/Select';
import { convertEnumToDropdownOption } from 'lib/src/shared/enums/dropdownEnums';
import { PropertyStatus } from '@actions/properties';

interface Props {
    property: PropertyResponse;
}
const statusOptions = convertEnumToDropdownOption(PropertyStatus);

const PropertyStatusSelect: React.FC<Props> = ({ property }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div style={{ display: 'flex' }}>
                <Select
                    omitRemove
                    label="Status"
                    name="status"
                    value={property.status}
                    options={statusOptions}
                    onChange={() => {}}
                />
            </div>
            {/* <p className="form-error">hi</p> */}
        </div>
    );
};

export default PropertyStatusSelect;
