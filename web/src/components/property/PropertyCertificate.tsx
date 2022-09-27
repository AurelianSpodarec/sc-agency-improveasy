import { useSelector } from 'react-redux';

import { RootState } from '@reducers/index';
import { selectPropertyEPCRating } from '@selectors/propertyInformation';
import dayjs from 'dayjs';
import LinkButton from 'lib/src/components/button/LinkButton';

const PropertyCertificate = ({ propertyID }: IProps) => {
    const propertyEPCInformation = useSelector((state: RootState) =>
        selectPropertyEPCRating(state, propertyID),
    );

    if (!propertyEPCInformation) return null;

    const {
        certificateNumber,
        certificateValidUntil,
        ratingCreatedOn,
        floorDescription,
        wallDescription,
        constructionAgeBand,
        builtForm,
        propertyType,
    } = propertyEPCInformation;

    return (
        <div className="flex-6">
            <p className="font-semibold">
                In order to accurately assess the current energy efficiency of your property and
                continue on your journey and book a survey
            </p>
            <LinkButton className="winged" href="/portal/survey-request">
                Request Survey
            </LinkButton>

            <table className="certificate-table">
                <tbody>
                    <tr>
                        <th>Certificate number</th>
                        <td>{certificateNumber}</td>
                    </tr>
                    <tr>
                        <th>Last updated</th>
                        <td>{dayjs(ratingCreatedOn).format('DD/MM/YYYY')}</td>
                    </tr>
                    <tr>
                        <th>Certificate valid until</th>
                        <td>{dayjs(certificateValidUntil).format('DD/MM/YYYY')}</td>
                    </tr>
                    <tr>
                        <th>Floor description</th>
                        <td>{floorDescription || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Wall description</th>
                        <td>{wallDescription || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Construction age band</th>
                        <td>{constructionAgeBand || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Built form</th>
                        <td>{builtForm || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th>Property type</th>
                        <td>{propertyType || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

interface IProps {
    propertyID: number;
}

export default PropertyCertificate;
