import React from 'react';

import { Property as PropertyResponse } from 'src/types/shared/Property';
import useSetPropertyStatus from './hooks/useSetPropertyStatus';
import MiniSelect from 'lib/src/components/form/MiniSelect';

interface Props {
    property: PropertyResponse;
}
const PropertyStatusSelect: React.FC<Props> = ({ property }) => {
    const { statusOptions, handleChange, updating, error } = useSetPropertyStatus(property);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <p className="form-label">Status</p>
            <div style={{ display: 'flex' }}>
                <MiniSelect
                    // isPosting
                    name="status"
                    value={property.status}
                    options={statusOptions}
                    onChange={handleChange}
                    isPosting={updating}
                />
            </div>
            {!!error && <p className="form-error">{error}</p>}
        </div>
    );
};

export default PropertyStatusSelect;
