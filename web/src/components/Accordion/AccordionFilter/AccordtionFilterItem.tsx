import { PageHeading, Text } from '@components/ui';
import ChevronDown from '@content/icons/ChevronDown';
import ChevronUp from '@content/icons/ChevronUp';
import * as Accordion from '@radix-ui/react-accordion';

function AccordionFilterItem({ title, id, children, item, value, isOpen }: any) {
    return (
        <Accordion.Item className="accordionFilter-item" value={value}>
            <Accordion.Header className="accordionFilter-item__header">
                <Accordion.Trigger className="accordionFilter-item__trigger">
                    <div className="d-flex align-center justify-between">
                        <PageHeading title={title} size="lg" border={true} space="none" />

                        <div className="accordionFilter-item__icon">
                            {isOpen === id ? <ChevronDown /> : <ChevronUp />}
                        </div>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="accordionFilter-item__content">
                {children}
            </Accordion.Content>
        </Accordion.Item>
    );
}

export default AccordionFilterItem;
