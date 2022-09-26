import { Section, Container } from '@components/ui';
import MainPortal from '../_components/MainPortal';

function SurveyRequest() {
    return (
        <div>
            <MainPortal>
                <Section>
                    <Container>
                        <div className="surveyTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>-</th>
                                        <th className="d-flex">
                                            Emoji{' '}
                                            <span className="surveyTable__info" title="Hi">
                                                ?
                                            </span>
                                        </th>
                                        <th>Calories</th>
                                        <th>Carbohydrates (g)</th>
                                        <th>Total Sugar (g)</th>
                                        <th>Protein (g)</th>
                                        <th>Total Fat (g)</th>
                                        <th>Total Fiber (g)</th>
                                        <th>Cholesterol (mg)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="surveyTable__title">EPC</td>
                                        <td className="text">Yes</td>
                                        <td className="numeric">no</td>
                                        <td className="numeric">no</td>
                                        <td className="numeric">no</td>
                                        <td className="numeric">no</td>
                                        <td className="numeric">no</td>
                                        <td className="numeric">no</td>
                                        <td className="numeric">no</td>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Data from <a href="https://www.eatthismuch.com/">eat this much</a> food
                            browser
                        </p>
                    </Container>
                </Section>
            </MainPortal>
        </div>
    );
}

export default SurveyRequest;
