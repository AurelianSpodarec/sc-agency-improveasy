import MainPublic from '../_components/MainPublic';

import { Container, PageHeading, Section, Text } from '@components/ui';
import LinkButton from 'lib/src/components/button/LinkButton';
import ActionButton from 'lib/src/components/button/ActionButton';
import ProcessBalls from './ProcessBalls';

function Home() {
    return (
        <MainPublic>
            <Section>
                <Container size="lg">
                    <div className="text-center">
                        <Text type="h1" size="3xl" weight="bold" style={{ marginBottom: 25 }}>
                            Build your EPC, start saving Energy
                        </Text>

                        <div className="flex flex-column align-center">
                            <iframe
                                src="https://player.vimeo.com/video/404b13db43"
                                width="640"
                                height="360"
                                allow="autoplay; fullscreen"
                                title="savings"
                            ></iframe>

                            <Text type="p" weight="semibold" size="lg" style={{ marginTop: 25 }}>
                                Household energy bills increased by 54% in April 2022, in October
                                2022 they will increase by a further 27%
                            </Text>

                            <ActionButton className="bg-green winged">
                                Get Started - it's free
                            </ActionButton>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container size="2xl">
                    <PageHeading title="What is EPC builder?" className="flex-row justify-center" />
                </Container>

                <Container size="2xl">
                    <Text
                        size="lg"
                        style={{ marginBottom: '32px', textAlign: 'center' }}
                        weight="semibold"
                    >
                        A one-stop shop providing current energy performance, recommendations,
                        funding and installation of home energy improvements all designed to build
                        your EPC rating and save energy.
                        <br />
                        <br />
                        An Energy Performance Certificate (EPC) tells you how energy efficient a
                        property is and gives it a rating from A (very efficient) to G
                        (inefficient).
                        <br />
                        <br />
                        In 2021 almost half (48%) of all EPCs lodged had an EPC rating of D or
                        below.
                        <br />
                        <br />
                        Private Rented Sector properties are among the least efficient. Around 3.2
                        million private rented properties in England and Wales have a rating of D or
                        below
                    </Text>
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
                            <LinkButton className="winged" href="/faq">
                                Read more
                            </LinkButton>
                        </div>
                    </div>
                </Container>
            </Section>
        </MainPublic>
    );
}

export default Home;
