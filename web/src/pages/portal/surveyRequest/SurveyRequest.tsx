import CoolCard from '@components/CoolCard';
import { Section, Container, PageHeading, Text, DataCheck } from '@components/ui';
import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import MeesRating from '../properties/properties/MEESRating';
import MainPortal from '../_components/MainPortal';
import TableHeadingList from './components/TableHeadingList';
import useSurveyRequest from './_hooks/useSurveyRequest';
import SuccessModal from 'lib/src/components/modal/SuccessModal';
import ErrorModal from 'lib/src/components/modal/ErrorModal';

function SurveyTable() {
    return (
        <div>
            <div className="surveyTable">
                <table>
                    <TableHeadingList />

                    <tbody>
                        <tr>
                            <td className="surveyTable__title">EPC</td>
                            <td className="text">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">£75</td>
                        </tr>
                        <tr>
                            <td className="surveyTable__title">Whole House Survey</td>
                            <td className="text">Yes</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">£120</td>
                        </tr>
                        <tr>
                            <td className="surveyTable__title">Energy Saving Plan</td>
                            <td className="text">Yes</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">no</td>
                            <td className="numeric">£150</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p style={{ color: 'white', fontWeight: 'bold', marginTop: '20px' }}>
                Only applicable to landlords
            </p>
        </div>
    );
}

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
    } = useSurveyRequest();

    return (
        <>
            <MainPortal>
                <DataCheck dataExists={!!property} isFetching={isFetching} error={propertyError}>
                    <Section>
                        <Container>
                            <PageHeading
                                title={`Survey Request - ${property?.addressLine1}, ${property?.postcode}`}
                            />

                            <CoolCard>
                                <div>
                                    <Text>
                                        Continue your journey with EPC Builder - improve the energy
                                        efficiency of your property, increase your EPC rating and
                                        lower energy costs.
                                    </Text>
                                    <div>
                                        Book survey type:
                                        <ButtonRow alignment="left">
                                            <ActionButton
                                                className="winged"
                                                onClick={handleRequestEPC}
                                                isPosting={isPosting}
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
                                        </ButtonRow>
                                    </div>
                                </div>
                            </CoolCard>
                            <SurveyTable />
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <CoolCard>
                                <PageHeading title="When to choose each option" />

                                <div className="grid grid-cols-3 gap-4">
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
                            </CoolCard>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <CoolCard>
                                <div>
                                    <PageHeading title="Why book a Whole House Energy Survey?" />
                                    <Text size="base">
                                        Booking this survey will give you access to a range of
                                        services including:
                                    </Text>

                                    <ul>
                                        <li>FUNDING IDENTIFICATION</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3>
                                        We will identify and apply for any available grant funding
                                        which could fully or partially fund the cost of installing
                                        energy efficiency measures in the property. Available grants
                                        include:
                                    </h3>
                                    <ul>
                                        <li>
                                            <span>ECO4 (Energy Company Obligation)</span>
                                            <ul>
                                                <li>
                                                    LA Flex (Local Authority Flexible Eligibility)
                                                </li>
                                                <li>HUG (Home Upgrade Grant)</li>
                                            </ul>
                                        </li>
                                        <li>BUS (Boiler Upgrade Scheme)</li>
                                    </ul>
                                </div>

                                {/* <div>
                            <h3>Epc</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                ducimus quo exercitationem natus magni dolores blanditiis aspernatur
                                labore fugit reprehenderit sit, quaerat quod? Aperiam totam
                                reiciendis soluta quidem, delectus magnam.
                            </p>
                        </div> */}
                            </CoolCard>
                        </Container>
                    </Section>

                    <Section>
                        <Container>
                            <div>Contact us or 'Book'</div>
                        </Container>
                    </Section>
                </DataCheck>
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
        </>
    );
}

export default SurveyRequest;
