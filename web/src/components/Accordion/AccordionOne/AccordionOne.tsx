import { PageHeading } from '@components/ui';
import * as Accordion from '@radix-ui/react-accordion';

function AccordionOne({ title, children, value }: any) {
    return (
        <Accordion.Item className="accordionOne-item" value={value}>
            <Accordion.Header className="accordionOne-item__header">
                <Accordion.Trigger className="accordionOne-item__trigger flex justify-between ">
                    <PageHeading title={title} size="lg" border={false} />
                    <div>Close</div>
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="accordionOne-item__content">{children}</Accordion.Content>
        </Accordion.Item>
    );
}

export default AccordionOne;
