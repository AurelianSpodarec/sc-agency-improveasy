import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import AccordionOneItem from './AccordionOneItem';

function AccordionOne({ data = [], type }: any) {
    const [isOpen, setIsOpen] = useState(undefined);

    function onValueChange(e: any) {
        if (!isOpen) {
            setIsOpen(e);
        } else {
            setIsOpen(undefined);
        }
    }

    function AccordionList({ listData, isOpen }: any) {
        if (listData.length === 0) return <></>;
        return (
            listData &&
            listData.map((item: any, index: number) => {
                return <AccordionOneItem key={index} item={item} isOpen={isOpen} />;
            })
        );
    }

    return (
        <Accordion.Root
            onValueChange={(e: any) => onValueChange(e)}
            style={{ borderBottom: '7px solid #0D695C' }}
            type={type}
            collapsible={true}
        >
            <AccordionList listData={data} isOpen={isOpen} />
        </Accordion.Root>
    );
}

export default AccordionOne;
