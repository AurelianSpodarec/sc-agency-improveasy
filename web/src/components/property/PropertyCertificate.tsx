import { RootState } from '@reducers/index';
import { selectPropertyEPCRating } from '@selectors/propertyInformation';
import dayjs from 'dayjs';
import ActionButton from 'lib/src/components/button/ActionButton';
import { useSelector } from 'react-redux';
import { PropertyStatusTypeLabel } from '../../types/shared/Properties';

const PropertyCertificate = ({ propertyID }: IProps) => {
    const propertyEPCInformation = useSelector((state: RootState) =>
        selectPropertyEPCRating(state, propertyID),
    );

    if (!propertyEPCInformation) return null;

    const { certificateNumber, certificateValidUntil, ratingCreatedOn, status } =
        propertyEPCInformation;

    return (
        <div className="flex-6">
            <p className="font-semibold">
                In order to accurately assess the current energy efficiency of your property and
                continue on your journey and book a survey
            </p>
            <ActionButton className="winged">Request Survey</ActionButton>

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
                        <th>Property status</th>
                        <td>{PropertyStatusTypeLabel[status]}</td>
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
