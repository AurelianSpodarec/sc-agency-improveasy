import { PageHeading } from '@components/ui';
import * as Accordion from '@radix-ui/react-accordion';

function AccordionOneItem({ item, isOpen }: any) {
    const { title, description, id } = item;

    return (
        <Accordion.Item className="accordionOne-item" value={id}>
            <Accordion.Header className="accordionOne-item__header">
                <Accordion.Trigger className="accordionOne-item__trigger">
                    <div className="d-flex align-center justify-between">
                        <PageHeading title={title} size="lg" border={false} space={false} />

                        <div>
                            {isOpen === id ? 'open' : 'close'}
                            {/* <div>Open</div> */}
                            {/* <div>Close</div> */}
                        </div>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="accordionOne-item__content">
                {description}
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default AccordionOneItem;
