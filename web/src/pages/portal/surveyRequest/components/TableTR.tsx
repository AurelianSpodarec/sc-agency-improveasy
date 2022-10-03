import MeesRating from '@pages/portal/properties/properties/MEESRating';

{
    /* {data &&
                    data.map((item, i) => {
                        return <TableHeadingCell key={i} name={item.name} toolpit={item.toolpit} />;
                    })} */
}

const data = [
    {
        name: 'Current Energy Performance Certificate (EPC)',
        toolpit: 'Lodged on EPC Register',
    },
    {
        name: 'Energy Performance Report (EPR)',
        toolpit: 'To identify current EPC band. Similar to an EPC but will not be lodged',
    },
    {
        name: 'Improvement Plan',
        toolpit: 'Detailinghow to improve the current EPC rating in the most cost-effective way.',
    },
    {
        name: 'Funding finder (ECO4, Home, Upgrade Grant etc)',
        toolpit:
            'Identify any grants which may fully or part fund instalation of energy efficiency measures',
    },
    {
        name: 'Ventilation Report',
        toolpit: 'Identify ventilation improvements that are required',
    },
    {
        name: 'Property Condition Report',
        toolpit:
            'Identify property defects and potential repairs that are needed prior to the installation of any measures',
    },
    {
        name: 'Quotation',
        toolpit: 'Itemised quote fr works identified in the Action Plan',
    },
    {
        name: 'Final EPC Lodged',
        toolpit: 'Post installation EPC lodged on the central register',
    },
    {
        name: 'Property Database',
        toolpit: 'Use EPC Builder to store all yor ur property details in once place',
    },
    {
        name: '*Guaranteed MEES Compilant',
        toolpit: 'Guaraneed minimum EPC band C or an excemptoin registered',
    },
    {
        name: '*Tenant Management Service',
        toolpit: 'We will liaise with your tenant to organise access',
    },
    {
        name: '*MEES Excemption Guidance',
        toolpit: 'We will idenfiy and apply for any relevant excemptions',
    },
    {
        name: 'Cost Refunded on Installation',
        toolpit: 'Full cost of deducated from final invoice',
    },
    {
        name: 'Cost (inc VAT)',
        toolpit: '',
    },
];

function TableTR(): any {
    if (!data) return <></>;
    return data.map((item): object => (
        <>
            <tr key={item.name}>
                <td>{item.name}</td>
                <td className="text">
                    <MeesRating mees={true} />
                </td>
                <td className="numeric">
                    <MeesRating mees={true} />
                </td>
                <td className="numeric">
                    <MeesRating mees={true} />
                </td>
            </tr>
        </>
    ));
}

export default TableTR;
