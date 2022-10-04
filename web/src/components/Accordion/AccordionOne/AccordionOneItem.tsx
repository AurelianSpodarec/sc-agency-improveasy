import { PageHeading } from '@components/ui';
import IconCross from '@content/icons/IconCross';
import IconPlus from '@content/icons/IconPlus';
import * as Accordion from '@radix-ui/react-accordion';

function AccordionOneItem({ item, isOpen }: any) {
    const { title, description, id } = item;

    return (
        <Accordion.Item className="accordionOne-item" value={id}>
            <Accordion.Header className="accordionOne-item__header">
                <Accordion.Trigger className="accordionOne-item__trigger">
                    <div className="d-flex align-center justify-between">
                        <PageHeading title={title} size="lg" border={false} space={'none'} />

                        <div className="accordionOne-item__icon">
                            {isOpen === id ? <IconCross /> : <IconPlus />}
                        </div>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="accordionOne-item__content">
                <div>{description}</div>
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default AccordionOneItem;
