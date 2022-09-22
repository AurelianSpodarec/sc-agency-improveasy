import { batch, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import PropertyAccordion from '@components/property/accordion/PropertyAccordion';
import MainPortal from '@pages/portal/_components/MainPortal';
import MainCard from '@pages/portal/_components/MainCard';
import { Section } from '@components/ui';

import { RootState } from '@reducers/index';
import { fetchPropertyByID } from '@actions/properties/fetchPropertyByID';
import { fetchAccountDetails } from '@actions/account/fetchAccountDetails';
import { fetchPropertyEPCRating } from '@actions/propertyInformation/fetchPropertyEPCRating';

function Property() {
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const property = useSelector((state: RootState) => state.propertiesReducer.properties[+id]);

    useEffect(() => {
        batch(() => {
            dispatch(fetchPropertyByID(+id));
            dispatch(fetchAccountDetails());
            dispatch(fetchPropertyEPCRating(+id));
        });
    }, [dispatch, id]);

    return (
        <MainPortal>
            <Section>
                <div className="d-flex space-x-40">
                    <div>
                        <div className="properties-back-button">
                            <Link to="/portal/properties">Back to listing</Link>
                        </div>
                    </div>
                    <MainCard
                        title={`${property?.addressLine1}, ${property?.postcode}`}
                        className="w-10/12"
                    >
                        <PropertyAccordion property={property} />
                    </MainCard>
                </div>
            </Section>
        </MainPortal>
    );
}

export default Property;
