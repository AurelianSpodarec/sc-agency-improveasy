import SurveyTooltip from '@components/ui/SurveyTooltip';

function TableHeadingCell({ name, toolpit }: any) {
    return (
        <th>
            <div className="d-flex justify-between align-center space-x-2">
                <span>{name}</span>
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
