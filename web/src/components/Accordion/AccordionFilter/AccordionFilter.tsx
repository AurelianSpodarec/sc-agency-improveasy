import { Input } from '@components/ui';
import { IconMagnifyingGlass } from '@content/icons/IconMagnifyingGlass';
import * as Accordion from '@radix-ui/react-accordion';
import Checkbox from 'lib/src/components/form/Checkbox';
import TextInput from 'lib/src/components/form/TextInput';
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
            style={{ border: '2px solid #ededed', borderRadius: '10px' }}
            type={type}
            collapsible
        >
            <div className="d-flex justify-between">
                <Input
                    placeholder="Search"
                    className="input--search"
                    name="@"
                    icon={<IconMagnifyingGlass />}
                />
                <button>Clear filters</button>
            </div>
            <AccordionFilterItem title="EPC Current" value="sds">
                <div></div>
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
