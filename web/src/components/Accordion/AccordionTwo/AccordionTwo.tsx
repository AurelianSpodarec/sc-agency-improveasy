import * as Accordion from '@radix-ui/react-accordion';

export const AccordionTwo = ({
    onValueChange,
    children,
    type = 'single',
    collapsible = true,
}: IAccordionTwoProps) => {
    return (
        <Accordion.Root
            onValueChange={(e: string | string[]) => onValueChange(e)}
            type={type}
            collapsible={collapsible}
        >
            {children}
        </Accordion.Root>
    );
};

interface IAccordionTwoProps {
    onValueChange: (e: string | string[]) => void;
    children: React.ReactNode;
    type?: 'single' | 'multiple';
    collapsible?: boolean;
}
