import { useState } from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import { IProperty } from 'src/types/shared/Properties';
import PropertyAccordionItem from './PropertyAccordionItem';

export enum AccordionValue {
    TENANT = '1',
    EPC = '2',
}

function PropertyAccordion({ data, type = 'single' }: IPropertyAccordionProps) {
    const [openValue, setOpenValue] = useState<AccordionValue | null>(null);

    function onValueChange(e: string | string[]) {
        if (!openValue) {
            if (e === AccordionValue.TENANT || e === AccordionValue.EPC) {
                setOpenValue(e);
            }
        } else {
            setOpenValue(null);
        }
    }

    return (
        <Accordion.Root
            onValueChange={(e: string | string[]) => onValueChange(e)}
            type={type}
            collapsible
        >
            <PropertyAccordionItem
                title="Tenant Details"
                value={AccordionValue.TENANT}
                isOpen={openValue === AccordionValue.TENANT}
            >
                {/*
                    Tennent and access details form
                */}
            </PropertyAccordionItem>
            <PropertyAccordionItem
                title="EPC Rating"
                value={AccordionValue.EPC}
                isOpen={openValue === AccordionValue.EPC}
            >
                {/*
                EPC Info
                */}
            </PropertyAccordionItem>
        </Accordion.Root>
    );
}

interface IPropertyAccordionProps {
    data: IProperty;
    type?: 'single' | 'multiple';
}

export default PropertyAccordion;
