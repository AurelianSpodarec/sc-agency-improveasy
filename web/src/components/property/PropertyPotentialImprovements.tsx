import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@reducers/index';
import {
    selectPropertyEPCRating,
    selectPropertyRatingRecommendations,
} from '@selectors/propertyInformation';
import { PageHeading } from '@components/ui';
import { toggleRecommendation } from '@actions/propertyInformation/toggleRecommendation';

const PropertyPotentialImprovements = ({ propertyID }: IProps) => {
    const dispatch = useDispatch();

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
        <>
            <PageHeading title="Recommendations from current EPC Certificate" size="lg" />
            <p className="font-semibold">
                If you have installed any of these recommendations this may have an impact on your
                current EPC rating
            </p>

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
                        {Object.values(potentialImprovements)
                            .sort((a, b) => a.step - b.step)
                            .map(improvement => (
                                <tr key={improvement.id}>
                                    <td>{improvement.step}</td>
                                    <td>{improvement.improvementDescription}</td>
                                    <td>
                                        <div className="form-checkbox flex-row justify-center">
                                            <input type="checkbox" name={'name'} />
                                            <label className="content" htmlFor={'name'}>
                                                <div
                                                    className="outer-box"
                                                    onClick={() =>
                                                        dispatch(
                                                            toggleRecommendation(improvement.id),
                                                        )
                                                    }
                                                >
                                                    <i
                                                        className={`inner-box fa fa-check ${
                                                            improvement.completed ? 'active' : ''
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
        </>
    );
};

interface IProps {
    propertyID: number;
}

export default PropertyPotentialImprovements;
