import { PageHeading, Text } from '@components/ui';
import * as Accordion from '@radix-ui/react-accordion';
 
function AccordionOne({title, children, value}:any) {
    return (  
       
        <Accordion.Item className="accordionOne-item" value={value} style={{ borderTop: "7px solid #0D695C" }}>

            <Accordion.Header className="accordionOne-item__header">
                <Accordion.Trigger className="accordionOne-item__triggerflex justify-between">
                    <PageHeading title={title} size="lg" />
                {/* <AccordionChevron aria-hidden /> */}
                    <div>Open</div>
                </Accordion.Trigger>
            </Accordion.Header>
            
            <Accordion.Content className="accordionOne-item__content">
                {children}
            </Accordion.Content>
        
        </Accordion.Item>
   
    )
}

export default AccordionOne;