import { Container, PageHeading, Section, Text } from "@components/ui";
import MainPublic from "./_components/MainPublic";

function FAQ() {
    return (
        <MainPublic>

            <Section>
                <Container>
                    <PageHeading title="FAQs" className="text-center" />
                </Container>

                <Container size="2xl">
                <div className="text-center">

                    <Text size="lg" style={{ marginBottom: "32px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</Text>
                    <Text size="lg">Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

                </div>
                </Container>
            </Section>


            <Section>
                <Container>

                </Container>
            </Section>

        </MainPublic>
    )
}

export default FAQ;