import { Section } from '@components/ui';
import MainCard from '@pages/portal/_components/MainCard';
import MainPortal from '@pages/portal/_components/MainPortal';
import AccordionPages from './_components/AccordionPages/AccordionPages';

function Property() {
    return (
        <MainPortal>
            <Section>
                <div className="d-flex space-x-40">
                    <div>
                        <div>
                            <span>Home</span>
                        </div>
                    </div>
                    <MainCard title="Property Name" className="w-full">
                        <AccordionPages />
                    </MainCard>
                </div>
            </Section>
        </MainPortal>
    );
}

export default Property;
