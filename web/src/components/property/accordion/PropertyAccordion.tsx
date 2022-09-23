import { useState } from 'react';

import { IProperty } from 'src/types/shared/Properties';
import PropertyAddressDetailsForm from '../PropertyAddressDetailsForm';
import PropertyAccessDetailsForm from '../PropertyAccessDetailsForm';
import PropertyEPCChart from '../PropertyEPCChart';
import PropertyCertificate from '../PropertyCertificate';
import { PageHeading } from '@components/ui';
import { AccordionTwo } from '@components/Accordion/AccordionTwo/AccordionTwo';
import AccordionTwoItem from '@components/Accordion/AccordionTwo/AccordionTwoItem';

export enum PropertyAccordionValue {
    TENANT = '1',
    EPC = '2',
}

function PropertyAccordion({ property }: IPropertyAccordionProps) {
    const [openValue, setOpenValue] = useState<PropertyAccordionValue | null>(null);

    function onValueChange(e: string | string[]) {
        if (e === PropertyAccordionValue.TENANT || e === PropertyAccordionValue.EPC) {
            setOpenValue(e);
        } else {
            setOpenValue(null);
        }
    }

    return (
        <AccordionTwo onValueChange={onValueChange}>
            <AccordionTwoItem
                style={{ margin: '40px 0' }}
                title="Access Details"
                value={PropertyAccordionValue.TENANT}
                isOpen={openValue === PropertyAccordionValue.TENANT}
            >
                <div className="flex-row justify-between">
                    <PropertyAddressDetailsForm property={property} />
                    <PropertyAccessDetailsForm property={property} />
                </div>
            </AccordionTwoItem>
            <AccordionTwoItem
                style={{ margin: '40px 0' }}
                title="EPC Rating"
                value={PropertyAccordionValue.EPC}
                isOpen={openValue === PropertyAccordionValue.EPC}
            >
                <div className="flex-row justify-between">
                    <PropertyEPCChart />
                    <PropertyCertificate />
                </div>
                <br />

                <PageHeading title="Potential Rating Improvements" size="lg" />
                <p className="semi-bold">
                    If you have installed any of these recommendations this may have an impact on
                    your current EPC rating
                </p>
            </AccordionTwoItem>
        </AccordionTwo>
    );
}
interface IPropertyAccordionProps {
    property: IProperty;
}

export default PropertyAccordion;
