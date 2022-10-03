import MeesRating from 'lib/src/components/mees/MEESRating';

const data = [
    {
        name: 'Current Energy Performance Certificate (EPC)',
        tooltip: 'Lodged on EPC Register',
        rating: [true, false, true],
    },
    {
        name: 'Energy Performance Report (EPR)',
        tooltip: 'To identify current EPC band. Similar to an EPC but will not be lodged',
        rating: [true, true, true],
    },
    {
        name: 'Improvement Plan',
        tooltip: 'Detailinghow to improve the current EPC rating in the most cost-effective way.',
        rating: [false, false, true],
    },
    {
        name: 'Funding finder (ECO4, Home, Upgrade Grant etc)',
        tooltip:
            'Identify any grants which may fully or part fund instalation of energy efficiency measures',
        rating: [true, false, false],
    },
    {
        name: 'Ventilation Report',
        tooltip: 'Identify ventilation improvements that are required',
        rating: [true, false, true],
    },
    {
        name: 'Property Condition Report',
        tooltip:
            'Identify property defects and potential repairs that are needed prior to the installation of any measures',
        rating: [true, true, true],
    },
    {
        name: 'Quotation',
        tooltip: 'Itemised quote fr works identified in the Action Plan',
        rating: [true, false, true],
    },
    {
        name: 'Final EPC Lodged',
        tooltip: 'Post installation EPC lodged on the central register',
        rating: [true, true, true],
    },
    {
        name: 'Property Database',
        tooltip: 'Use EPC Builder to store all yor ur property details in once place',
        rating: [false, false, true],
    },
    {
        name: '*Guaranteed MEES Compilant',
        tooltip: 'Guaraneed minimum EPC band C or an excemptoin registered',
        rating: [true, false, true],
    },
    {
        name: '*Tenant Management Service',
        tooltip: 'We will liaise with your tenant to organise access',
        rating: [true, false, false],
    },
    {
        name: '*MEES Excemption Guidance',
        tooltip: 'We will idenfiy and apply for any relevant excemptions',
        rating: [true, false, false],
    },
    {
        name: 'Cost Refunded on Installation',
        tooltip: 'Full cost of deducated from final invoice',
        rating: [false, false, true],
    },
];

function RenderRating({ data }: any) {
    return data.map((element: boolean, index: number) => {
        return (
            <td key={index} className="numeric">
                <MeesRating mees={element} />
            </td>
        );
    });
}

function TableTR(): any {
    if (!data) return <></>;
    return data.map((item): object => (
        <tr key={item.name}>
            <td style={{ maxWidth: '300px', whiteSpace: 'normal' }}>
                <div className="font-bold">{item.name}</div>
                <div>{item.tooltip}</div>
            </td>
            <RenderRating data={item.rating} />
        </tr>
    ));
}

export default TableTR;
