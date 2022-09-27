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

import house from './../../../../_content/icons/house_outline_green.png';
import { selectPropertyEPCRating } from '@selectors/propertyInformation';
import { selectSingleProperty } from '@selectors/properties';
import { fetchPropertyRatingRecommendations } from '@actions/propertyInformation/fetchPropertyRatingRecommendations';
import { PropertyStatusTypeLabel } from '../../../../types/shared/Properties';

function Property() {
    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const property = useSelector((state: RootState) => selectSingleProperty(state, +id));
    const propertyRating = useSelector((state: RootState) => selectPropertyEPCRating(state, +id));

    useEffect(() => {
        batch(() => {
            dispatch(fetchPropertyByID(+id));
            dispatch(fetchAccountDetails());
            dispatch(fetchPropertyEPCRating(+id));
            if (propertyRating?.id) {
                dispatch(fetchPropertyRatingRecommendations(propertyRating.id));
            }
        });
    }, [dispatch, id, propertyRating?.id]);

    return (
        <MainPortal>
            <Section>
                <div className="d-flex space-x-12">
                    <div className="hidden xl:block">
                        <Link className="properties-back" to="/portal/properties">
                            <div className="properties-back__wrap d-flex items-center space-x-4">
                                <img className="properties-back__house" src={house} alt="house" />
                                <span className="properties-back__text">Home</span>
                                <svg
                                    className="properties-back__chevron"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <MainCard
                        title={`${property?.addressLine1}, ${property?.postcode} - ${
                            PropertyStatusTypeLabel[property?.status]
                        }`}
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
