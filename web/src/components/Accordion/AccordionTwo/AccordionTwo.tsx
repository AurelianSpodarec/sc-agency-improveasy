import * as Accordion from '@radix-ui/react-accordion';

export const AccordionTwo = ({ onValueChange, children }: IAccordionTwoProps) => {
    return (
        <Accordion.Root onValueChange={(e: string[]) => onValueChange(e)} type="multiple">
            {children}
        </Accordion.Root>
    );
};

interface IAccordionTwoProps {
    onValueChange: (e: string[]) => void;
    children: React.ReactNode;
}
