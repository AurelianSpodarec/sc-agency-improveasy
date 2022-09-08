import { Container, Section } from "@components/ui";
import MainCard from "@pages/portal/_components/MainCard";
import MainPortal from "@pages/portal/_components/MainPortal";

function PropertyList() {
    return (
        <MainPortal>

            <Section>
            <Container>

                <div className="d-flex space-x-4">

                    <div className="w-1/3">
                        <MainCard title="Filter">
                        
                        </MainCard>
                    </div>

                    <div className="w-2/3">
                        
                        <MainCard title="Result">
                            Table
                        </MainCard>
                        
                    </div>

                </div>

            </Container>    
            </Section>    
        

        </MainPortal>
    )
}

export default PropertyList;