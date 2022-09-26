import SurveyTooltip from '@components/ui/SurveyTooltip';

function TableHeadingCell({ name, toolpit }: any) {
    return (
        <th>
            <div className="d-flex">
                {name}
                {toolpit !== '' && (
                    <SurveyTooltip title={toolpit}>
                        <span className="surveyTable__info">?</span>
                    </SurveyTooltip>
                )}
            </div>
        </th>
    );
}

export default TableHeadingCell;
