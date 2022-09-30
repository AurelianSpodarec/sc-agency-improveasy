import CoolCard from '@components/CoolCard';
import { Section, Container, PageHeading, Text, DataCheck } from '@components/ui';
import ActionButton from 'lib/src/components/button/ActionButton';
import MainPortal from '../_components/MainPortal';
import useSurveyRequest from './_hooks/useSurveyRequest';
import SuccessModal from 'lib/src/components/modal/SuccessModal';
import ErrorModal from 'lib/src/components/modal/ErrorModal';
import ConfirmModal from 'lib/src/components/modal/ConfirmModal';

import { PropertyStatusType, PropertyStatusTypeLabel } from '../../../types/shared/Properties';
import SurveyTable from './components/SurveyTable';

function SurveyRequest() {
    const {
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
        handleSubmit,
        surveyToPost,
        setSurveyToPost,
    } = useSurveyRequest();

    return (
        <>
            <MainPortal isFetching={isFetching}>
                <Container size="2xl" style={{ margin: '50px auto' }}>
                    <CoolCard>
                        <DataCheck
                            dataExists={!!property}
                            isFetching={isFetching}
                            error={propertyError}
                        >
                            <Section className="text-center">
                                <PageHeading
                                    title={`Survey Request - ${property?.addressLine1}, ${
                                        property?.postcode
                                    } (${PropertyStatusTypeLabel[property?.status]})`}
                                />

                                <div>
                                    <Text>
                                        Continue your journey with EPC Builder - improve the energy
                                        efficiency of your property, increase your EPC rating and
                                        lower energy costs.
                                    </Text>
                                    <div>
                                        <Text>Book survey type</Text>

                                        <div className="space-y-4 lg:space-y-0">
                                            <ActionButton
                                                className="winged"
                                                onClick={handleRequestEPC}
                                                isPosting={isPosting}
                                                disabled={
                                                    property?.status ===
                                                    PropertyStatusType.RequestedEPC
                                                }
                                            >
                                                Standalone EPC
                                            </ActionButton>
                                            <ActionButton
                                                className="winged"
                                                source="positive"
                                                disabled={isPosting}
                                                onClick={handleRequestSurvey}
                                                isPosting={isPosting}
                                            >
                                                Whole House Energy Survey
                                            </ActionButton>
                                        </div>
                                    </div>
                                </div>
                            </Section>

                            <Section size="sm">
                                <SurveyTable />
                            </Section>

                            <Section size="lg">
                                <PageHeading title="When to choose each option" />

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                    <div>
                                        <Text type="h3" size="lg" weight="semibold">
                                            EPC
                                        </Text>
                                        <Text type="p">
                                            If you want an assessor to visi the property and conduct
                                            an EPC.
                                        </Text>
                                    </div>

                                    <div>
                                        <Text type="h3" size="lg" weight="semibold">
                                            Whole House Survey
                                        </Text>
                                        <Text type="p">
                                            Only available if we have undertaken a recent EPC.
                                        </Text>
                                    </div>

                                    <div>
                                        <Text type="h3" size="lg" weight="semibold">
                                            Energy Saving Actions
                                        </Text>
                                        <Text>
                                            If you want an accessor to visit the property to conduct
                                            a whole house survey in order to produce a plan to
                                            improve your EPC rating.
                                        </Text>
                                    </div>
                                </div>
                            </Section>

                            <Section className="sm">
                                <div className="space-y-6">
                                    <div>
                                        <PageHeading title="Why book a Whole House Energy Survey?" />
                                        <Text size="base">
                                            Booking this survey will give you access to a range of
                                            services including:
                                        </Text>
                                        <ul className="deep-list">
                                            <li>FUNDING IDENTIFICATION</li>
                                        </ul>
                                    </div>

                                    <Text type="h3">
                                        We will identify and apply for any available grant funding
                                        which could fully or partially fund the cost of installing
                                        energy efficiency measures in the property. Available grants
                                        include:
                                    </Text>

                                    <div>
                                        <ul className="deep-list">
                                            <li>
                                                <span>ECO4 (Energy Company Obligation)</span>
                                                <ul>
                                                    <li>
                                                        LA Flex (Local Authority Flexible
                                                        Eligibility)
                                                    </li>
                                                    <li>HUG (Home Upgrade Grant)</li>
                                                </ul>
                                            </li>
                                            <li>BUS (Boiler Upgrade Scheme)</li>
                                        </ul>
                                    </div>
                                </div>
                            </Section>

                            <Section style={{ paddingTop: 0 }}>
                                <div className="space-y-4 lg:space-y-0">
                                    <ActionButton className="winged">Contact</ActionButton>
                                    <ActionButton className="winged" source="positive">
                                        Book
                                    </ActionButton>
                                </div>
                            </Section>
                        </DataCheck>
                    </CoolCard>
                </Container>
            </MainPortal>

            {showSuccessModal && (
                <SuccessModal
                    closeModal={() => setShowSuccessModal(false)}
                    buttonClassName="winged"
                    title="Successfully requested survey"
                    description="You have successfully requested a survey. We will be in touch shortly."
                />
            )}

            {showErrorModal && (
                <ErrorModal
                    closeModal={() => setShowErrorModal(false)}
                    description={error || 'There was an error with your response'}
                    buttonClassName="winged"
                />
            )}

            {surveyToPost && (
                <ConfirmModal
                    closeModal={() => setSurveyToPost(null)}
                    title="Are you sure?"
                    description="You are about to request a survey. Are you sure you want to continue?"
                    handleSubmit={handleSubmit}
                    buttonClassName="winged"
                />
            )}
        </>
    );
}

export default SurveyRequest;
