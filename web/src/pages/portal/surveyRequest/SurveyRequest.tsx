import { Section, Container } from '@components/ui';
import MainPortal from '../_components/MainPortal';

function SurveyRequest() {
    return (
        <div>
            <MainPortal>
                <Section>
                    <Container>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Drink</th>
                                        <th>Emoji</th>
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
                                        <td className="text">milk</td>
                                        <td className="text">🥛</td>
                                        <td className="numeric">149.0</td>
                                        <td className="numeric">11.7</td>
                                        <td className="numeric">12.3</td>
                                        <td className="numeric">7.7</td>
                                        <td className="numeric">8.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">24.4</td>
                                    </tr>
                                    <tr>
                                        <td className="text">coffee</td>
                                        <td className="text">☕️</td>
                                        <td className="numeric">2.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.3</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">green tea</td>
                                        <td className="text">🍵</td>
                                        <td className="numeric">2.5</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.5</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">sake</td>
                                        <td className="text">🍶</td>
                                        <td className="numeric">39.0</td>
                                        <td className="numeric">1.5</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.1</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">champagne</td>
                                        <td className="text">🍾</td>
                                        <td className="numeric">89.0</td>
                                        <td className="numeric">1.6</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.4</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">red wine</td>
                                        <td className="text">🍷</td>
                                        <td className="numeric">125.0</td>
                                        <td className="numeric">3.8</td>
                                        <td className="numeric">0.9</td>
                                        <td className="numeric">0.1</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">martini</td>
                                        <td className="text">🍸</td>
                                        <td className="numeric">210.0</td>
                                        <td className="numeric">1.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">tropical drink</td>
                                        <td className="text">🍹</td>
                                        <td className="numeric">245.0</td>
                                        <td className="numeric">32.0</td>
                                        <td className="numeric">31.5</td>
                                        <td className="numeric">0.6</td>
                                        <td className="numeric">2.7</td>
                                        <td className="numeric">0.4</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">beer</td>
                                        <td className="text">🍺</td>
                                        <td className="numeric">153.0</td>
                                        <td className="numeric">12.6</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">1.6</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">whiskey</td>
                                        <td className="text">🥃</td>
                                        <td className="numeric">70.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                    </tr>
                                    <tr>
                                        <td className="text">soft drink</td>
                                        <td className="text">🥤</td>
                                        <td className="numeric">151.0</td>
                                        <td className="numeric">38.9</td>
                                        <td className="numeric">38.9</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
                                        <td className="numeric">0.0</td>
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
