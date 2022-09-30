import * as Accordion from '@radix-ui/react-accordion';

import ChevronDown from '@content/icons/ChevronDown';
import { PageHeading } from '@components/ui';

function AccordionTwoItem({
    title,
    children,
    value,
    isOpen,
    style,
    headerSize = 'lg',
    contentClass,
}: IAccordionItemProps) {
    return (
        <Accordion.Item className="accordionTwo-item" value={value}>
            <Accordion.Header className="accordionTwo-item__header">
                <Accordion.Trigger className="accordionTwo-item__trigger">
                    <div className="d-flex justify-between align-center">
                        <PageHeading title={title} size={headerSize} border space={'none'} />

                        <div className="accordionTwo-item__icon">
                            <ChevronDown
                                fill="#0D695C"
                                className={`chevron ${isOpen ? 'up' : 'down'}`}
                            />
                        </div>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content
                className={`accordionTwo-item__content ${contentClass}`}
                style={style}
            >
                {children}
            </Accordion.Content>
        </Accordion.Item>
    );
}

interface IAccordionItemProps {
    title: string;
    children: React.ReactNode;
    value: string;
    isOpen: boolean;
    style?: object;
    headerSize?: 'sm' | 'md' | 'lg' | 'xl';
    contentClass?: string;
}

export default AccordionTwoItem;
