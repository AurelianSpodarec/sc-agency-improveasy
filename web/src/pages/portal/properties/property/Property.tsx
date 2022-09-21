import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PropertyAccordion from '@components/property/accordion/PropertyAccordion';
import MainPortal from '@pages/portal/_components/MainPortal';
import MainCard from '@pages/portal/_components/MainCard';
import { Section } from '@components/ui';

import { RootState } from '@reducers/index';
import { useEffect } from 'react';
import { fetchPropertyByID } from '@actions/properties/fetchPropertyByID';

function Property() {
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const property = useSelector((state: RootState) => state.propertiesReducer.properties[+id]);

    useEffect(() => {
        dispatch(fetchPropertyByID(+id));
    }, [dispatch]);

    return (
        <MainPortal>
            <Section>
                <div className="d-flex space-x-40">
                    <div>
                        <div>
                            <span>Home</span>
                        </div>
                    </div>
                    <MainCard
                        title={`${property?.addressLine1}, ${property?.postcode}`}
                        className="w-2/3"
                    >
                        <PropertyAccordion />
                    </MainCard>
                </div>
            </Section>
        </MainPortal>
    );
}

export default Property;
