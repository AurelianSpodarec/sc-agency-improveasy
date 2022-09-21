import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import AccordionPageItem from './AccordionPageItem';

function AccordionPages({ data = [], type }: any) {
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
            <AccordionPageItem title="Access Details" value="sds">
                Hsdsdsdsi
            </AccordionPageItem>
            <AccordionPageItem title="EPC Rating" value="ksds">
                bosdso
            </AccordionPageItem>
            <AccordionPageItem title="Potential Rating Improvement" value="ksds">
                Rating Improvement Unavaiable
            </AccordionPageItem>
        </Accordion.Root>
    );
}

export default AccordionPages;
