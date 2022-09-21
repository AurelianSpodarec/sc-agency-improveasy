import { Container, PageHeading, Section, Text } from '@components/ui';
import LinkButton from 'lib/src/components/button/LinkButton';
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
                    <PageHeading
                        title="A simple 5step process:"
                        border={false}
                        className="text-center"
                        style={{ color: '#E76F51' }}
                    />
                </Container>

                <Container>
                    <div className="processBalls md:space-x-4">
                        <div className="processBalls__item">
                            <div className="processBalls-chain">
                                <div className="processBalls-chain__inner space-x-2">
                                    <div className="processBalls-chain__item processBalls-chain__item--1"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--1"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--1"></div>
                                </div>
                            </div>

                            <div className="processBalls__icon-wrap rounded--full">
                                <svg
                                    className="processBalls__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M384 32H64.01C28.66 32 .0085 60.65 .0065 96L0 415.1C-.002 451.3 28.65 480 64 480h232.1c25.46 0 49.88-10.12 67.89-28.12l55.88-55.89C437.9 377.1 448 353.6 448 328.1V96C448 60.8 419.2 32 384 32zM52.69 427.3C50.94 425.6 48 421.8 48 416l.0195-319.1C48.02 87.18 55.2 80 64.02 80H384c8.674 0 16 7.328 16 16v192h-88C281.1 288 256 313.1 256 344v88H64C58.23 432 54.44 429.1 52.69 427.3zM330.1 417.9C322.9 425.1 313.8 429.6 304 431.2V344c0-4.406 3.594-8 8-8h87.23c-1.617 9.812-6.115 18.88-13.29 26.05L330.1 417.9z" />
                                </svg>
                            </div>
                            <Text size="lg" weight="bold">
                                Input property code
                            </Text>
                        </div>

                        <div className="processBalls__item">
                            <div className="processBalls-chain">
                                <div className="processBalls-chain__inner space-x-2">
                                    <div className="processBalls-chain__item processBalls-chain__item--2"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--2"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--2"></div>
                                </div>
                            </div>
                            <div className="processBalls__icon-wrap rounded--full">
                                <svg
                                    className="processBalls__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M384 32H64.01C28.66 32 .0085 60.65 .0065 96L0 415.1C-.002 451.3 28.65 480 64 480h232.1c25.46 0 49.88-10.12 67.89-28.12l55.88-55.89C437.9 377.1 448 353.6 448 328.1V96C448 60.8 419.2 32 384 32zM52.69 427.3C50.94 425.6 48 421.8 48 416l.0195-319.1C48.02 87.18 55.2 80 64.02 80H384c8.674 0 16 7.328 16 16v192h-88C281.1 288 256 313.1 256 344v88H64C58.23 432 54.44 429.1 52.69 427.3zM330.1 417.9C322.9 425.1 313.8 429.6 304 431.2V344c0-4.406 3.594-8 8-8h87.23c-1.617 9.812-6.115 18.88-13.29 26.05L330.1 417.9z" />
                                </svg>
                            </div>
                            <Text size="lg" weight="bold">
                                Input property code
                            </Text>
                        </div>

                        <div className="processBalls__item">
                            <div className="processBalls-chain">
                                <div className="processBalls-chain__inner space-x-2">
                                    <div className="processBalls-chain__item processBalls-chain__item--3"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--3"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--3"></div>
                                </div>
                            </div>
                            <div className="processBalls__icon-wrap rounded--full">
                                <svg
                                    className="processBalls__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M384 32H64.01C28.66 32 .0085 60.65 .0065 96L0 415.1C-.002 451.3 28.65 480 64 480h232.1c25.46 0 49.88-10.12 67.89-28.12l55.88-55.89C437.9 377.1 448 353.6 448 328.1V96C448 60.8 419.2 32 384 32zM52.69 427.3C50.94 425.6 48 421.8 48 416l.0195-319.1C48.02 87.18 55.2 80 64.02 80H384c8.674 0 16 7.328 16 16v192h-88C281.1 288 256 313.1 256 344v88H64C58.23 432 54.44 429.1 52.69 427.3zM330.1 417.9C322.9 425.1 313.8 429.6 304 431.2V344c0-4.406 3.594-8 8-8h87.23c-1.617 9.812-6.115 18.88-13.29 26.05L330.1 417.9z" />
                                </svg>
                            </div>
                            <Text size="lg" weight="bold">
                                Input property code
                            </Text>
                        </div>

                        <div className="processBalls__item">
                            <div className="processBalls-chain">
                                <div className="processBalls-chain__inner space-x-2">
                                    <div className="processBalls-chain__item processBalls-chain__item--1"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--1"></div>
                                    <div className="processBalls-chain__item processBalls-chain__item--1"></div>
                                </div>
                            </div>
                            <div className="processBalls__icon-wrap rounded--full">
                                <svg
                                    className="processBalls__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M384 32H64.01C28.66 32 .0085 60.65 .0065 96L0 415.1C-.002 451.3 28.65 480 64 480h232.1c25.46 0 49.88-10.12 67.89-28.12l55.88-55.89C437.9 377.1 448 353.6 448 328.1V96C448 60.8 419.2 32 384 32zM52.69 427.3C50.94 425.6 48 421.8 48 416l.0195-319.1C48.02 87.18 55.2 80 64.02 80H384c8.674 0 16 7.328 16 16v192h-88C281.1 288 256 313.1 256 344v88H64C58.23 432 54.44 429.1 52.69 427.3zM330.1 417.9C322.9 425.1 313.8 429.6 304 431.2V344c0-4.406 3.594-8 8-8h87.23c-1.617 9.812-6.115 18.88-13.29 26.05L330.1 417.9z" />
                                </svg>
                            </div>
                            <Text size="lg" weight="bold">
                                Input property code
                            </Text>
                        </div>

                        <div className="processBalls__item">
                            <div className="processBalls__icon-wrap rounded--full">
                                <svg
                                    className="processBalls__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M384 32H64.01C28.66 32 .0085 60.65 .0065 96L0 415.1C-.002 451.3 28.65 480 64 480h232.1c25.46 0 49.88-10.12 67.89-28.12l55.88-55.89C437.9 377.1 448 353.6 448 328.1V96C448 60.8 419.2 32 384 32zM52.69 427.3C50.94 425.6 48 421.8 48 416l.0195-319.1C48.02 87.18 55.2 80 64.02 80H384c8.674 0 16 7.328 16 16v192h-88C281.1 288 256 313.1 256 344v88H64C58.23 432 54.44 429.1 52.69 427.3zM330.1 417.9C322.9 425.1 313.8 429.6 304 431.2V344c0-4.406 3.594-8 8-8h87.23c-1.617 9.812-6.115 18.88-13.29 26.05L330.1 417.9z" />
                                </svg>
                            </div>
                            <Text size="lg" weight="bold">
                                Input property code
                            </Text>
                        </div>
                    </div>
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
