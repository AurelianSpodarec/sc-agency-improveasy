import useScrollToTop from '../../../utils/hooks/useScrollToTop';

import MainPublic from '../_components/MainPublic';

import { Container, PageHeading, Section, Text } from '@components/ui';
import LinkButton from 'lib/src/components/button/LinkButton';

import AccordionOne from '@components/Accordion/AccordionOne/AcordionOne';
import useIsLoggedIn from 'lib/src/hooks/useIsLoggedIn';

const accordion = [
    {
        id: 1,
        title: 'Who are Improveasy?',
        description: (
            <Text>
                Established in 2011 Improveasy are a market leader in the “green” home improvement
                sector with a primary focus on energy efficient measures, such as: insulation,
                glazing, heating and renewables. We provide several propositions to help customers,
                installers, lenders and utilities implement these measures – whether they are funded
                by finance (regulated by the FCA), grants or the Ofgem-backed ECO scheme.
            </Text>
        ),
    },
    {
        id: 2,
        title: 'How much does it cost to use EPC Builder?',
        description: (
            <Text>
                It is free to add property’s and view the property’s current energy performance, if
                you choose to have a Whole House Energy Survey undertaken the cost is £195 (inc VAT)
                per property which is refunded if you proceed with the installation.
            </Text>
        ),
    },
    {
        id: 3,
        title: 'What does a Whole House Energy Survey consist of?',
        description: (
            <>
                <Text>
                    A qualified Retrofit Assessor will visit the property to conduct an in-depth
                    assessment taking a whole of house approach, this takes around 2-3 hours. From
                    the survey we will provide you with a Improvement Plan which comprises of:
                </Text>
                <ul className="faq-ul">
                    <li>
                        <Text>
                            A detailed plan showing how to make your property as energy efficient as
                            possible. This will include an explanation of the measures we are
                            recommending along with reasons why certain measures are not suitable.
                        </Text>
                    </li>
                    <li>
                        <Text>
                            An itemised quotation for the recommended measures including any
                            funding/grants the property is eligible for.
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Energy Performance Report which models the current and potential energy
                            rating of the property.
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Property Condition Report highlighting any property defects and
                            potential repairs that are needed prior to the installation of measures.
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Ventilation Report showing any ventilation improvements that are
                            required.
                        </Text>
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 4,
        title: 'Is the work guaranteed?',
        description: (
            <>
                <Text>Yes, subject to installed measure type you will receive:</Text>

                <ul className="faq-ul">
                    <li>
                        <Text>Gas safety notification</Text>
                    </li>
                    <li>
                        <Text>Minor electrical report</Text>
                    </li>
                    <li>
                        <Text>Warranty/guarantee report</Text>
                    </li>
                    <li>
                        <Text>2-year workmanship Warranty</Text>
                    </li>
                    <li>
                        <Text>Guaranteed building regulation compliance</Text>
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 5,
        title: 'What funding can I get to install energy efficient and renewable technologies?',
        description: (
            <>
                <Text>
                    This will depend on your eligibility for funding. In some instances, the funding
                    may cover the total cost of the installation for just a part of it.
                </Text>
                <Text>We will search available funding and grants on your behalf, including:</Text>
                <ul className="faq-ul">
                    <li>
                        <Text>ECO4 (Energy Company Obligation)</Text>
                    </li>
                    <li>
                        <Text>LA Flex (Local Authority Flexible Eligibility)</Text>
                    </li>
                    <li>
                        <Text>BUS (Boiler Upgrade Scheme)</Text>
                    </li>
                    <li>
                        <Text>LAD Scheme (Local Authority Delivery Scheme)</Text>
                    </li>
                    <li>
                        <Text>HUG (Home Upgrade Grant)</Text>
                    </li>
                </ul>
            </>
        ),
    },
    {
        id: 6,
        title: 'If I’m not eligible for any grants what are my options to pay?',
        description: (
            <Text>
                We work with a panel of finance providers who offer a variety of finance products
                including unsecured and secured loans at varying APRs depending on individual
                circumstances.
            </Text>
        ),
    },
];

function FAQ() {
    useScrollToTop();

    const isLoggedIn = useIsLoggedIn();

    return (
        <MainPublic>
            <Section>
                <Container>
                    <PageHeading title="FAQs" className="text-center" />
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
                <Container size="2xl">
                    <AccordionOne data={accordion} type="single" collapsible />
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
                                <PageHeading title="We do all the hard work so you don't have to" />
                                <Text size="lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud.
                                </Text>
                            </div>

                            <LinkButton
                                source="primary"
                                href={isLoggedIn ? '/portal' : '/auth/login'}
                                className="winged"
                            >
                                {isLoggedIn ? 'Go to Portal' : "Get Started - it's free"}
                            </LinkButton>
                        </div>
                    </div>
                </Container>
            </Section>
        </MainPublic>
    );
}

export default FAQ;
