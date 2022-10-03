import MeesRating from 'lib/src/components/mees/MEESRating';

function RenderRating({ data }: any) {
    return data.map((element: boolean, index: number) => {
        return (
            <td key={index} className="numeric">
                <MeesRating mees={element} />
            </td>
        );
    });
}

export default RenderRating;
