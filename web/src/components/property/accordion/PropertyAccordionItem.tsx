import * as Accordion from '@radix-ui/react-accordion';

import ChevronDown from '@content/icons/ChevronDown';
import { PageHeading } from '@components/ui';
import { PropertyAccordionValue } from './PropertyAccordion';

function PropertyAccordionItem({ title, children, value, isOpen }: IAccordionItemProps) {
    return (
        <Accordion.Item className="accordionOne-item" value={value}>
            <Accordion.Header className="accordionOne-item__header">
                <Accordion.Trigger className="accordionOne-item__trigger">
                    <div className="d-flex align-center">
                        <PageHeading title={title} size="lg" border space={'none'} />

                        <div className="accordionOne-item__icon">
                            <ChevronDown
                                fill="#0D695C"
                                className={`chevron ${isOpen ? 'up' : 'down'}`}
                            />
                        </div>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="accordionOne-item__content">{children}</Accordion.Content>
        </Accordion.Item>
    );
}

interface IAccordionItemProps {
    title: string;
    children: React.ReactNode;
    value: PropertyAccordionValue;
    isOpen: boolean;
}

export default PropertyAccordionItem;
