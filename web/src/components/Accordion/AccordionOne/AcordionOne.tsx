import * as Accordion from '@radix-ui/react-accordion';

function AccordionOne({ type, children }: any) {
    return (
        <Accordion.Root style={{ borderBottom: '7px solid #0D695C' }} type={type} collapsible>
            {children}
        </Accordion.Root>
    );
}

export default AccordionOne;
