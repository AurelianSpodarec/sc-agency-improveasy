import TableHeadingList from './TableHeadingList';
import TableTR from './TableTR';

function SurveyTable() {
    return (
        <div>
            <div className="surveyTable">
                <table>
                    <TableHeadingList />

                    <tbody>
                        <TableTR />
                        <tr>
                            <td className="font-bold">Cost (inc VAT)</td>
                            <td className="font-semibold">£75</td>
                            <td className="font-semibold">£128</td>
                            <td className="font-semibold">£134</td>
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
