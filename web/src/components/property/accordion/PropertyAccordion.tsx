import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import PropertyAccordionItem from './PropertyAccordionItem';

function PropertyAccordion({ data = [], type }: any) {
    const [isOpen, setIsOpen] = useState(undefined);

    function onValueChange(e: any) {
        if (!isOpen) {
            setIsOpen(e);
        } else {
            setIsOpen(undefined);
        }
    }

    return (
        <Accordion.Root onValueChange={(e: any) => onValueChange(e)} type={type} collapsible>
            <PropertyAccordionItem title="Tenant Details" value="sds">
                Hsdsdsdsi
            </PropertyAccordionItem>
            <PropertyAccordionItem title="EPC Rating" value="ksds">
                bosdso
            </PropertyAccordionItem>
        </Accordion.Root>
    );
}

export default PropertyAccordion;
