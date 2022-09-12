import { PageHeading } from '@components/ui';
import * as Accordion from '@radix-ui/react-accordion';

function AccordionOneItem({ title, children, value }: any) {
    return (
        <Accordion.Item className="accordionOne-item" value={value}>
            <Accordion.Header className="accordionOne-item__header">
                <Accordion.Trigger className="accordionOne-item__trigger">
                    <div className="d-flex justify-between">
                        <PageHeading title={title} size="lg" border={false} space={false} />

                        <div>
                            <div>Open</div>
                            <div>Close</div>
                        </div>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="accordionOne-item__content">{children}</Accordion.Content>
        </Accordion.Item>
    );
}

export default AccordionOneItem;
