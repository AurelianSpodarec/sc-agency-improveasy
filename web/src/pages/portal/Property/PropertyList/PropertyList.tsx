import { Container, Section } from '@components/ui';
import MainCard from '@pages/portal/_components/MainCard';
import MainPortal from '@pages/portal/_components/MainPortal';
import { useParams } from 'react-router-dom';

const propertyListing = [
    {
        id: 1,
        address: '413 Clippers Quay, Waterman Walk',
        city: 'Mancester',
        postcode: 'M50 3AF',
        epcCurrent: 'B',
        epcPotential: 'A',
        mees: true,
        lastUpdated: '14/10/2022',
    },
    {
        id: 2,
        address: '708 Clippers Quay, Waterman Walk',
        city: 'London',
        postcode: 'M50 3AF',
        epcCurrent: 'D',
        epcPotential: 'C',
        mees: false,
        lastUpdated: '24/10/2022',
    },
    {
        id: 3,
        address: '41 Quay, Flower Street',
        city: 'Newcastle',
        postcode: 'M50 3AF',
        epcCurrent: 'C',
        epcPotential: 'A',
        mees: true,
        lastUpdated: '14/10/2022',
    },
    {
        id: 4,
        address: '13 Pavement Street, Fireman Cave',
        city: 'Mancester',
        postcode: 'M50 3AF',
        epcCurrent: 'C',
        epcPotential: 'A',
        mees: '',
        lastUpdated: '14/10/2022',
    },
];

function PropertyList({ showCreateModal }: IProps) {
    console.log(showCreateModal);
    return (
        <MainPortal>
            <Section>
                <Container>
                    <div className="d-flex space-x-4">
                        <div className="w-1/3">
                            <MainCard title="Filter">hi</MainCard>
                        </div>

                        <div className="w-2/3">
                            <MainCard title="Result">
                                <table>
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
                                        {propertyListing.map((section: any) => (
                                            <tr key={section.email} className="bg-gray-50">
                                                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                                                    {section.address}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                                                    {section.city}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                                                    {section.postcode}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                                                    {section.epcCurrent}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                                                    {section.epcPotential}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {section.mees === '' ? (
                                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-6 h-6"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                                                />
                                                            </svg>
                                                        </span>
                                                    ) : section.mees ? (
                                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-4 h-4"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M4.5 12.75l6 6 9-13.5"
                                                                />
                                                            </svg>
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-4 h-4"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M6 18L18 6M6 6l12 12"
                                                                />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500">
                                                    {section.lastUpdated}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </MainCard>
                        </div>
                    </div>
                </Container>
            </Section>
        </MainPortal>
    );
}

interface IProps {
    showCreateModal?: boolean;
}

export default PropertyList;
