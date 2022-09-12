import MainPublic from './_components/MainPublic';

import * as Accordion from '@radix-ui/react-accordion';
import AccordionOne from '@components/Accordion/AccordionOne/AccordionOne';
import { Container, PageHeading, Section, Text } from '@components/ui';

function Home() {
    return (
        <MainPublic>
            <Section>
                <Container size="2xl">
                    <Accordion.Root type="single" collapsible>
                        <AccordionOne value="1we" title="What is MMES?">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.
                            </Text>
                            <Text>
                                Commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Text>
                        </AccordionOne>
                        <AccordionOne value="1dsd" title="What is MMES?">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.
                            </Text>
                            <Text>
                                Commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Text>
                        </AccordionOne>
                        <AccordionOne value="232321" title="What is MMES?">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.
                            </Text>
                            <Text>
                                Commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Text>
                        </AccordionOne>
                        <AccordionOne value="sdfw31" title="What is MMES?">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.
                            </Text>
                            <Text>
                                Commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Text>
                        </AccordionOne>
                        <AccordionOne value="3432421" title="What is MMES?">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.
                            </Text>
                            <Text>
                                Commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Text>
                        </AccordionOne>
                    </Accordion.Root>
                </Container>
            </Section>

            <Section>
                <Container>
                    <PageHeading title="Why Use?" className="text-center" />
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

            <Section size="2xl" className="bg-gradient-primary">
                <Container>
                    <div className="d-flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/4 text-center text-white">
                            <svg
                                width="120px"
                                style={{ marginBottom: '38px' }}
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="robot-astromech"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M256 0c70.7 0 128 57.3 128 128v32H128V128C128 57.3 185.3 0 256 0zm0 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm48 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM48 240c0-26.5 21.5-48 48-48H416c26.5 0 48 21.5 48 48V398.3c0 8.7 2.4 17.2 6.8 24.7l38.9 64.8c3 4.9 3 11.1 .2 16.1s-8.2 8.1-13.9 8.1H400c-8.8 0-16-7.2-16-16V384l-45.3 45.3c-12 12-28.3 18.7-45.3 18.7h-75c-17 0-33.3-6.7-45.3-18.7L128 384V496c0 8.8-7.2 16-16 16H16c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1L41.2 423c4.5-7.5 6.8-16 6.8-24.7V240zm160 16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H208z"
                                ></path>
                            </svg>
                            <div>
                                <Text
                                    type="h3"
                                    size="xl"
                                    weight="bold"
                                    style={{ marginBottom: '20px' }}
                                >
                                    Time Saving
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna..
                                </Text>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 text-center text-white">
                            <svg
                                width="120px"
                                style={{ marginBottom: '38px' }}
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="universal-access"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M256 176c22.09 0 40-17.91 40-40S278.1 96 256 96S216 113.9 216 136S233.9 176 256 176zM361.4 176.9l-59.25 16.94c-30.17 8.623-62.15 8.623-92.31 0L150.6 176.9C137.9 173.2 124.6 180.7 120.9 193.4s3.734 26.03 16.48 29.66l59.25 16.97C200.4 241.1 204.2 241.6 208 242.4v46.29l-30.64 87.34c-4.391 12.5 2.188 26.19 14.69 30.59C194.7 407.6 197.4 408 200 408c9.906 0 19.19-6.188 22.64-16.06l25.85-70.65c2.562-7.002 12.46-7.002 15.03 0l25.85 70.65C292.8 401.8 302.1 408 312 408c2.641 0 5.312-.4375 7.953-1.344c12.5-4.406 19.08-18.09 14.69-30.59L304 288.7V242.4C307.8 241.6 311.6 241.1 315.3 240l59.25-16.94c12.75-3.625 20.12-16.91 16.48-29.66C387.4 180.7 374.1 173.2 361.4 176.9zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                ></path>
                            </svg>
                            <div>
                                <Text
                                    type="h3"
                                    size="xl"
                                    weight="bold"
                                    style={{ marginBottom: '20px' }}
                                >
                                    Tost effective
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna..
                                </Text>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 text-center text-white">
                            <svg
                                width="120px"
                                style={{ marginBottom: '38px' }}
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="universal-access"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M256 176c22.09 0 40-17.91 40-40S278.1 96 256 96S216 113.9 216 136S233.9 176 256 176zM361.4 176.9l-59.25 16.94c-30.17 8.623-62.15 8.623-92.31 0L150.6 176.9C137.9 173.2 124.6 180.7 120.9 193.4s3.734 26.03 16.48 29.66l59.25 16.97C200.4 241.1 204.2 241.6 208 242.4v46.29l-30.64 87.34c-4.391 12.5 2.188 26.19 14.69 30.59C194.7 407.6 197.4 408 200 408c9.906 0 19.19-6.188 22.64-16.06l25.85-70.65c2.562-7.002 12.46-7.002 15.03 0l25.85 70.65C292.8 401.8 302.1 408 312 408c2.641 0 5.312-.4375 7.953-1.344c12.5-4.406 19.08-18.09 14.69-30.59L304 288.7V242.4C307.8 241.6 311.6 241.1 315.3 240l59.25-16.94c12.75-3.625 20.12-16.91 16.48-29.66C387.4 180.7 374.1 173.2 361.4 176.9zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                                ></path>
                            </svg>
                            <div>
                                <Text
                                    type="h3"
                                    size="xl"
                                    weight="bold"
                                    style={{ marginBottom: '20px' }}
                                >
                                    Peace of mind
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna..
                                </Text>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 text-center text-white">
                            <svg
                                width="120px"
                                style={{ marginBottom: '38px' }}
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="robot-astromech"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M256 0c70.7 0 128 57.3 128 128v32H128V128C128 57.3 185.3 0 256 0zm0 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm48 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM48 240c0-26.5 21.5-48 48-48H416c26.5 0 48 21.5 48 48V398.3c0 8.7 2.4 17.2 6.8 24.7l38.9 64.8c3 4.9 3 11.1 .2 16.1s-8.2 8.1-13.9 8.1H400c-8.8 0-16-7.2-16-16V384l-45.3 45.3c-12 12-28.3 18.7-45.3 18.7h-75c-17 0-33.3-6.7-45.3-18.7L128 384V496c0 8.8-7.2 16-16 16H16c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1L41.2 423c4.5-7.5 6.8-16 6.8-24.7V240zm160 16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H208z"
                                ></path>
                            </svg>
                            <div>
                                <Text
                                    type="h3"
                                    size="xl"
                                    weight="bold"
                                    style={{ marginBottom: '20px' }}
                                >
                                    Convenient
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna..
                                </Text>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container size="xl">
                    <div className="md:d-flex space-y-10 md:space-y-0 md:space-x-20">
                        <div className="w-full md:w-1/2">
                            <img
                                className="w-full rounded-primary"
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
                            <button>Read more</button>
                        </div>
                    </div>
                </Container>
            </Section>
        </MainPublic>
    );
}

export default Home;
