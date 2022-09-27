import { useSelector } from 'react-redux';

import { RootState } from '@reducers/index';
import {
    selectPropertyEPCRating,
    selectPropertyRatingRecommendations,
} from '@selectors/propertyInformation';

const PropertyPotentialImprovements = ({ propertyID }: IProps) => {
    const propertyRating = useSelector((state: RootState) =>
        selectPropertyEPCRating(state, propertyID),
    );
    const potentialImprovements = useSelector((state: RootState) =>
        selectPropertyRatingRecommendations(state, propertyRating?.id || 0),
    );

    if (!potentialImprovements) {
        return (
            <div>
                <p className="font-semibold">Rating improvements unavailable</p>
            </div>
        );
    }
    return (
        <div>
            <table className="improvement-table">
                <thead>
                    <tr>
                        <th>Step</th>
                        <th>Name</th>
                        <th>Complete</th>
                    </tr>
                </thead>

                <tbody>
                    {[...potentialImprovements]
                        .sort((a, b) => a.step - b.step)
                        .map(improvement => (
                            <tr key={improvement.id}>
                                <td>{improvement.step}</td>
                                <td>{improvement.improvementDescription}</td>
                                <td>
                                    <div className="form-checkbox flex-row justify-center">
                                        <input
                                            type="checkbox"
                                            name={'name'}
                                            checked={true}
                                            onChange={() => console.log('change')}
                                        />
                                        <label className="content" htmlFor={'name'}>
                                            <div className="outer-box">
                                                <i
                                                    className={`inner-box fa fa-check ${
                                                        true ? 'active' : ''
                                                    }`}
                                                ></i>
                                            </div>
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

interface IProps {
    propertyID: number;
}

export default PropertyPotentialImprovements;
