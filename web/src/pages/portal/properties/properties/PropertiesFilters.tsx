import { useState } from 'react';

import { AccordionTwo } from '@components/Accordion/AccordionTwo/AccordionTwo';
import AccordionTwoItem from '@components/Accordion/AccordionTwo/AccordionTwoItem';
import { IconMagnifyingGlass } from '@content/icons/IconMagnifyingGlass';
import { Input } from '@components/ui';

enum FilterAccordionValue {
    EPC_CURRENT = '1',
    EPC_POTENTIAL = '2',
    MEES = '3',
}

const PropertiesFilters = () => {
    const [openValue, setOpenValue] = useState<FilterAccordionValue | null>(null);

    function onValueChange(e: string | string[]) {
        if (
            e === FilterAccordionValue.EPC_CURRENT ||
            e === FilterAccordionValue.EPC_POTENTIAL ||
            e === FilterAccordionValue.MEES
        ) {
            setOpenValue(e);
        } else {
            setOpenValue(null);
        }
    }

    return (
        <>
            <AccordionTwo onValueChange={onValueChange}>
                <div className="d-flex justify-between">
                    <Input
                        placeholder="Search"
                        className="input--search"
                        name="@"
                        icon={<IconMagnifyingGlass />}
                    />
                    <button>Clear filters</button>
                </div>
                <AccordionTwoItem
                    title="EPC Current"
                    value={FilterAccordionValue.EPC_CURRENT}
                    isOpen={openValue === FilterAccordionValue.EPC_CURRENT}
                >
                    <div></div>
                </AccordionTwoItem>
                <AccordionTwoItem
                    title="EPC Potential"
                    value={FilterAccordionValue.EPC_POTENTIAL}
                    isOpen={openValue === FilterAccordionValue.EPC_POTENTIAL}
                >
                    bosdso
                </AccordionTwoItem>
                <AccordionTwoItem
                    title="MEESE"
                    value={FilterAccordionValue.MEES}
                    isOpen={openValue === FilterAccordionValue.MEES}
                >
                    bosdso
                </AccordionTwoItem>
            </AccordionTwo>
        </>
    );
};

export default PropertiesFilters;
