import { Container, PageHeading, Section, Text } from '@components/ui';
import LinkButton from 'lib/src/components/button/LinkButton';
import ProcessBalls from '../home/ProcessBalls';
import MainPublic from '../_components/MainPublic';

function MEES() {
    return (
        <MainPublic>
            <Section>
                <Container size="2xl">
                    <PageHeading title="So what is MEES?" className="text-center" />
                </Container>

                <Container size="2xl">
                    <div className="text-center">
                        <Text size="lg" style={{ marginBottom: '32px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                        </Text>
                        <Text size="lg">
                            Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                        </Text>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <ProcessBalls />
                </Container>
            </Section>

            <Section>
                <Container size="xl">
                    <div className="md:d-flex space-y-10 md:space-y-0 md:space-x-20">
                        <div className="w-full md:w-1/2">
                            <img
                                className="w-full rounded--secondary"
                                src="https://images.unsplash.com/photo-1613754537171-88192258d85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2871&q=80"
                                alt="Some"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <div>
                                <PageHeading title="FAQs" />
                                <Text size="lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud.
                                </Text>
                            </div>
                            <LinkButton className="winged">Read more</LinkButton>
                        </div>
                    </div>
                </Container>
            </Section>
        </MainPublic>
    );
}

export default MEES;
