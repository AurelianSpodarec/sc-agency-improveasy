import * as Accordion from '@radix-ui/react-accordion';

export const AccordionTwoSingle = ({
    onValueChange,
    children,
    defaultValue,
    collapsible,
}: IAccordionTwoProps) => {
    return (
        <Accordion.Root
            onValueChange={(e: string) => onValueChange(e)}
            type="single"
            defaultValue={defaultValue}
            collapsible={collapsible}
        >
            {children}
        </Accordion.Root>
    );
};

interface IAccordionTwoProps {
    onValueChange: (e: string) => void;
    children: React.ReactNode;
    collapsible?: boolean;
    defaultValue?: string;
}
