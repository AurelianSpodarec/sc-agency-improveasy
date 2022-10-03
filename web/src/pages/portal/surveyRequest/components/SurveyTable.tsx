import MeesRating from 'lib/src/components/mees/MEESRating';
import TableHeadingList from './TableHeadingList';

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
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">£75</td>
                        </tr>
                        <tr>
                            <td className="surveyTable__title">Whole House Survey</td>
                            <td className="text">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">£120</td>
                        </tr>
                        <tr>
                            <td className="surveyTable__title">Energy Saving Plan</td>
                            <td className="text">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={false} />
                            </td>
                            <td className="numeric">
                                <MeesRating mees={true} />
                            </td>
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

export default SurveyTable;
