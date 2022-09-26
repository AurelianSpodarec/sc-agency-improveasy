import { Section, Container, PageHeading } from '@components/ui';
import MeesRating from '../properties/properties/MEESRating';
import MainPortal from '../_components/MainPortal';

function SurveyTable() {
    return (
        <div>
            <div className="surveyTable">
                <table>
                    <thead>
                        <tr>
                            <th>-</th>
                            <th className="d-flex">
                                Current Energy Performance Certificate (EPC)
                                <span className="surveyTable__info" title="Hi">
                                    ?
                                </span>
                            </th>
                            <th>Energy Performance Report (EPR)</th>
                            <th>Improvement Plan</th>
                            <th>Funding finder (ECO4, Home, Upgrade Grant etc)</th>
                            <th>Ventilation Report</th>
                            <th>Property Condition Report</th>
                            <th>Quotation</th>
                            <th>Final EPC Lodged</th>
                            <th>Property Database</th>
                            <th>*Guaranteed MEES Compilant</th>
                            <th>*Tenant Management Service</th>
                            <th>*MEES Excemption Guidance</th>
                            <th>Cost Refunded on Installation</th>
                            <th>Cost (inc VAT)</th>
                        </tr>
                    </thead>
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

                        <div>
                            <h2>
                                Continue your journey with EPC Builder - improve the energy
                                efficiency of your property, increase your EPC rating and lower
                                energy costs.
                            </h2>
                            <div>
                                Book survey type:
                                <div>
                                    <input name="survey-type" id="standalone-epc" type="radio" />
                                    <label htmlFor="standalone-epc">Standalone EPC</label>
                                </div>
                                <div>
                                    <input name="survey-type" id="energy-survey" type="radio" />
                                    <label htmlFor="energy-survey">Whole House Energy Survey</label>
                                </div>
                            </div>
                        </div>
                        <SurveyTable />
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <div>
                            <h2>Why book a Whole House Energy Survey?</h2>
                            <span>
                                Booking this survey will give you access to a range of services
                                including:
                            </span>

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
