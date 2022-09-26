import CoolCard from '@components/CoolCard';
import { Section, Container, PageHeading, Text } from '@components/ui';
import SurveyTooltip from '@components/ui/SurveyTooltip';
import MeesRating from '../properties/properties/MEESRating';
import MainPortal from '../_components/MainPortal';

function TableHeadingCell({ name, toolpit }: any) {
    return (
        <th>
            <div className="d-flex">
                {name}
                {toolpit !== '' && (
                    <SurveyTooltip title={toolpit}>
                        <span className="surveyTable__info">?</span>
                    </SurveyTooltip>
                )}
            </div>
        </th>
    );
}

function TableHeadingList() {
    const data = [
        {
            name: 'Current Energy Performance Certificate (EPC)',
            toolpit: 'Lodged on EPC Register',
        },
        {
            name: 'Energy Performance Report (EPR)',
            toolpit: 'To identify current EPC band. Similar to an EPC but will not be lodged',
        },
        {
            name: 'Improvement Plan',
            toolpit:
                'Detailinghow to improve the current EPC rating in the most cost-effective way.',
        },
        {
            name: 'Funding finder (ECO4, Home, Upgrade Grant etc)',
            toolpit:
                'Identify any grants which may fully or part fund instalation of energy efficiency measures',
        },
        {
            name: 'Ventilation Report',
            toolpit: 'Identify ventilation improvements that are required',
        },
        {
            name: 'Property Condition Report',
            toolpit:
                'Identify property defects and potential repairs that are needed prior to the installation of any measures',
        },
        {
            name: 'Quotation',
            toolpit: 'Itemised quote fr works identified in the Action Plan',
        },
        {
            name: 'Final EPC Lodged',
            toolpit: 'Post installation EPC lodged on the central register',
        },
        {
            name: 'Property Database',
            toolpit: 'Use EPC Builder to store all yor ur property details in once place',
        },
        {
            name: '*Guaranteed MEES Compilant',
            toolpit: 'Guaraneed minimum EPC band C or an excemptoin registered',
        },
        {
            name: '*Tenant Management Service',
            toolpit: 'We will liaise with your tenant to organise access',
        },
        {
            name: '*MEES Excemption Guidance',
            toolpit: 'We will idenfiy and apply for any relevant excemptions',
        },
        {
            name: 'Cost Refunded on Installation',
            toolpit: 'Full cost of deducated from final invoice',
        },
        {
            name: 'Cost (inc VAT)',
            toolpit: '',
        },
    ];

    if (!data) return <></>;
    return (
        <thead>
            <tr>
                <th>-</th>
                {data &&
                    data.map((item, i) => {
                        return <TableHeadingCell key={i} name={item.name} toolpit={item.toolpit} />;
                    })}
            </tr>
        </thead>
    );
}

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
    return (
        <div>
            <MainPortal>
                <Section>
                    <Container>
                        <PageHeading title="Survey Request" />

                        <CoolCard>
                            <div>
                                <Text>
                                    Continue your journey with EPC Builder - improve the energy
                                    efficiency of your property, increase your EPC rating and lower
                                    energy costs.
                                </Text>
                                <div>
                                    Book survey type:
                                    <div>
                                        <input
                                            name="survey-type"
                                            id="standalone-epc"
                                            type="radio"
                                        />
                                        <label htmlFor="standalone-epc">Standalone EPC</label>
                                    </div>
                                    <div>
                                        <input name="survey-type" id="energy-survey" type="radio" />
                                        <label htmlFor="energy-survey">
                                            Whole House Energy Survey
                                        </label>
                                    </div>
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
                                        If you want an assessor to visi the property and conduct an
                                        EPC.
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
                                        If you want an accessor to visit the property to conduct a
                                        whole house survey in order to produce a plan to improve
                                        your EPC rating.
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
                                    Booking this survey will give you access to a range of services
                                    including:
                                </Text>

                                <ul>
                                    <li>FUNDING IDENTIFICATION</li>
                                </ul>
                            </div>

                            <div>
                                <h3>
                                    We will identify and apply for any available grant funding which
                                    could fully or partially fund the cost of installing energy
                                    efficiency measures in the property. Available grants include:
                                </h3>
                                <ul>
                                    <li>
                                        <span>ECO4 (Energy Company Obligation)</span>
                                        <ul>
                                            <li>LA Flex (Local Authority Flexible Eligibility)</li>
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
            </MainPortal>
        </div>
    );
}

export default SurveyRequest;
