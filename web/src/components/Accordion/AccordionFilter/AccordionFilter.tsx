import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import AccordionFilterItem from './AccordtionFilterItem';

function AccordionFilter({ data = [], type }: any) {
    const [isOpen, setIsOpen] = useState(undefined);

    function onValueChange(e: any) {
        if (!isOpen) {
            setIsOpen(e);
        } else {
            setIsOpen(undefined);
        }
    }

    return (
        <Accordion.Root
            onValueChange={(e: any) => onValueChange(e)}
            style={{ borderBottom: '7px solid #0D695C' }}
            type={type}
            collapsible
        >
            <AccordionFilterItem title="EPC Current" value="sds">
                Hsdsdsdsi
            </AccordionFilterItem>
            <AccordionFilterItem title="EPC Potential" value="ksds">
                bosdso
            </AccordionFilterItem>
            <AccordionFilterItem title="MEES?" value="ksds">
                Woo
            </AccordionFilterItem>
        </Accordion.Root>
    );
}

export default AccordionFilter;
