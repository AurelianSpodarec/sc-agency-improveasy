import { Container, Section } from '@components/ui';
import MainCard from '@pages/portal/_components/MainCard';
import MainPortal from '@pages/portal/_components/MainPortal';
import CreatePropertyModal from '../modals/CreatePropertyModal';
import useFetchProperties from '@pages/portal/properties/hooks/useFetchProperties';
import MEESRating from '@pages/portal/properties/properties/MEESRating';

import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';
import DataCheck from '@components/ui/DataCheck';
import PropertiesFilters from './PropertiesFilters';

import { IProperty, PropertyStatusTypeLabel } from '../../../../types/shared/Properties';
import MeesTooltip from '@components/MeesTooltip';

function Properties({ showCreateModal }: IProps) {
    const history = useHistory();

    const {
        properties,
        isFetching,
        error,
        searchTerm,
        setSearchTerm,
        handleClearFilters,
        form,
        handleChange,
    } = useFetchProperties();

    return (
        <>
            <MainPortal>
                <Section>
                    <Container>
                        <div className="lg:d-flex space-y-8 lg:space-y-0 lg:space-x-4">
                            <div className="lg:w-1/3">
                                <MainCard title="Filter">
                                    <PropertiesFilters
                                        searchTerm={searchTerm}
                                        setSearchTerm={setSearchTerm}
                                        handleClearFilters={handleClearFilters}
                                        form={form}
                                        handleChange={handleChange}
                                    />
                                </MainCard>
                            </div>

                            <div className="lg:w-2/3">
                                <MainCard
                                    title="Result"
                                    className="grey-background"
                                    contentClass="overflow-x-auto"
                                >
                                    <table className="properties-table">
                                        <thead>
                                            <tr>
                                                <th>Address</th>
                                                <th>City</th>
                                                <th>Postcode</th>
                                                <th>Current EPC Rating</th>
                                                <th>Potential EPC Rating</th>
                                                <th>MEES Compliant</th>
                                                <th>Status</th>
                                                <th>Last updated</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <DataCheck
                                                dataExists={!!properties.length}
                                                isFetching={isFetching}
                                                error={error}
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
                                                            <MeesTooltip name={`${section.hasEPC ? "EPC Active" : "No EPC"}`}>
                                                                <MEESRating mees={section.hasEPC} />
                                                            </MeesTooltip>
                                                        </td>
                                                        <td>
                                                            {PropertyStatusTypeLabel[section.status]}
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

export default Properties;
