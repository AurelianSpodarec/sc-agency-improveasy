import { Container, DataCheck, Section } from '@components/ui';
import MainCard from '@pages/portal/_components/MainCard';
import MainPortal from '@pages/portal/_components/MainPortal';
import CreatePropertyModal from '../modals/CreatePropertyModal';
import useFetchProperties from '@pages/portal/Property/hooks/useFetchProperties';
import MEESRating from '@pages/portal/Property/PropertyList/MEESRating';
import { IProperty } from '../../../../types/shared/Properties';
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';

function PropertyList({ showCreateModal }: IProps) {
    const history = useHistory();

    const { properties } = useFetchProperties();

    return (
        <>
            <MainPortal>
                <Section>
                    <Container>
                        <div className="d-flex space-x-4">
                            <div className="w-1/3">
                                <MainCard title="Filter">hi</MainCard>
                            </div>

                            <div className="w-2/3">
                                <MainCard title="Result" className="grey-background">
                                    <table className="properties-table">
                                        <thead>
                                            <tr>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>Postcode</th>
                                                <th>EPC (current)</th>
                                                <th>EPC (potential)</th>
                                                <th>MEES</th>
                                                <th>Last updated</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <DataCheck
                                                dataExists={!!properties.length}
                                                isFetching={true}
                                                error={null}
                                            >
                                                {properties.map((section: IProperty) => (
                                                    <tr
                                                        key={section.id}
                                                        className="bg-gray-50"
                                                        onClick={() =>
                                                            history.push(
                                                                `/portal/properties/${section.id}`,
                                                            )
                                                        }
                                                    >
                                                        <td>
                                                            {`${section.addressLine1}, ${section.addressLine2}`}
                                                        </td>
                                                        <td>{section.city}</td>
                                                        <td>{section.postcode}</td>
                                                        <td>{section.currentEPCRating}</td>
                                                        <td>{section.potentialEPCRating}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <MEESRating mees={'{{no}}'} />
                                                        </td>
                                                        <td>
                                                            {dayjs(section.statusUpdatedOn).format(
                                                                'DD/MM/YYYY',
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </DataCheck>
                                        </tbody>
                                    </table>
                                </MainCard>
                            </div>
                        </div>
                    </Container>
                </Section>
            </MainPortal>
            {showCreateModal && <CreatePropertyModal />}
        </>
    );
}

interface IProps {
    showCreateModal?: boolean;
}

export default PropertyList;
