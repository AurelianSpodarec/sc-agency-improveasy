import { useState } from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import { IProperty } from 'src/types/shared/Properties';
import PropertyAccordionItem from './PropertyAccordionItem';
import PropertyAddressDetailsForm from '../PropertyAddressDetailsForm';
import PropertyAccessDetailsForm from '../PropertyAccessDetailsForm';

export enum PropertyAccordionValue {
    TENANT = '1',
    EPC = '2',
}

function PropertyAccordion({ data, type = 'single' }: IPropertyAccordionProps) {
    const [openValue, setOpenValue] = useState<PropertyAccordionValue | null>(null);

    function onValueChange(e: string | string[]) {
        if (!openValue) {
            if (e === PropertyAccordionValue.TENANT || e === PropertyAccordionValue.EPC) {
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
                title="Address/Access Details"
                value={PropertyAccordionValue.TENANT}
                isOpen={openValue === PropertyAccordionValue.TENANT}
            >
                <div className="flex-row justify-between">
                    <PropertyAddressDetailsForm property={data} />
                    <PropertyAccessDetailsForm property={data} />
                </div>
            </PropertyAccordionItem>
            <PropertyAccordionItem
                title="EPC Rating"
                value={PropertyAccordionValue.EPC}
                isOpen={openValue === PropertyAccordionValue.EPC}
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
