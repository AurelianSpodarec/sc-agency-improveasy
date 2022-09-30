import MainPublic from '../_components/MainPublic';

import AccordionOne from '@components/Accordion/AccordionOne/AcordionOne';
import { Container, PageHeading, Section, Text } from '@components/ui';
import LinkButton from 'lib/src/components/button/LinkButton';
import ActionButton from 'lib/src/components/button/ActionButton';

const accordion = [
    {
        id: 1,
        title: 'This is acc?',
        description:
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia',
    },
    {
        id: 2,
        title: 'MEES Why this?',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia',
    },
    {
        id: 3,
        title: 'Why Super this?',
        description:
            'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia',
    },
];

function Home() {
    return (
        <MainPublic>
            <Section>
                <Container size="lg">
                    <div className="text-center">
                        <Text type="h1" size="3xl" weight="bold">
                            Increase your rental properties EPC to a minimum band C in 5 easy steps.
                        </Text>
                        <img
                            className="page-home__banner-img"
                            style={{ borderRadius: '25px' }}
                            width="100%"
                            src="https://cdn-epabh.nitrocdn.com/FsnmazFPBRLJTCWWiBDcqyKZAxrlVTfk/assets/static/optimized/rev-921f197/wp-content/uploads/2022/01/home-hero-min.jpg"
                            alt="yes"
                        />

                        <ActionButton className="bg-green winged">Get Started</ActionButton>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container size="2xl">
                    <PageHeading title="So what is MEES?" />
                </Container>

                <Container size="2xl">
                    <div className="">
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
                    <div className="processBalls">
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
                <Container>
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="cardTestimonial">
                            <div className="cardTestimonial__svg-wrap">
                                <svg
                                    className="cardTestimonial__svg cardTestimonial__svg--1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                </svg>
                            </div>
                            <div className="cardTestimonial__text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
                                rem! Facilis dicta excepturi velit qui in, cum animi, cupiditate
                                voluptate tempore culpa debitis deserunt dolorum iste esse. Rerum,
                                autem iusto.
                            </div>
                            <div className="cardTestimonial__avatar-wrap">
                                <Text className="cardTestimonial__avatar-name">Jack Smith</Text>
                                <img
                                    className="cardTestimonial__avatar-image"
                                    src="https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8-4-4.jpg"
                                    alt="Testimonial face"
                                />
                            </div>
                        </div>

                        <div className="cardTestimonial">
                            <div className="cardTestimonial__svg-wrap">
                                <svg
                                    className="cardTestimonial__svg cardTestimonial__svg--2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                </svg>
                            </div>
                            <div className="cardTestimonial__text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
                                rem! Facilis dicta excepturi velit qui in, cum animi, cupiditate
                                voluptate tempore culpa debitis deserunt dolorum iste esse. Rerum,
                                autem iusto.
                            </div>
                            <div className="cardTestimonial__avatar-wrap">
                                <Text className="cardTestimonial__avatar-name">Debra Donoven</Text>
                                <img
                                    className="cardTestimonial__avatar-image"
                                    src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
                                    alt="Testimonial face"
                                />
                            </div>
                        </div>

                        <div className="cardTestimonial">
                            <div className="cardTestimonial__svg-wrap">
                                <svg
                                    className="cardTestimonial__svg cardTestimonial__svg--3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                </svg>
                            </div>
                            <div className="cardTestimonial__text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
                                rem! Facilis dicta excepturi velit qui in, cum animi, cupiditate
                                voluptate tempore culpa debitis deserunt dolorum iste esse. Rerum,
                                autem iusto.
                            </div>
                            <div className="cardTestimonial__avatar-wrap">
                                <Text className="cardTestimonial__avatar-name">Ria Carlon</Text>
                                <img
                                    className="cardTestimonial__avatar-image"
                                    src="https://www.headshotlondon.co.uk/wp-content/uploads/2015/05/headshotlondonblog_examples-of-headshots.jpg"
                                    alt="Testimonial face"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <PageHeading title="So why use XXXX" />
                </Container>
            </Section>

            <Section size="2xl" className="bg-gradient--primary">
                <Container>
                    <div className="d-flex justify-between">
                        <div className="d-flex flex-wrap lg:flex-no-wrap space-y-20 lg:space-y-0 space-x-0 lg:space-x-20 lg:space-y-0">
                            <div className="lg:d-flex space-y-20 lg:space-y-0 space-x-0 lg:space-x-20">
                                <div className="w-full lg:w-1/2 text-center text-white">
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna..
                                        </Text>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 text-center text-white">
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna..
                                        </Text>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:d-flex space-y-20 lg:space-y-0 space-x-0 lg:space-x-20">
                                <div className="w-full lg:w-1/2 text-center text-white">
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna..
                                        </Text>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 text-center text-white">
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna..
                                        </Text>
                                    </div>
                                </div>
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

            <Section>
                <Container size="2xl">
                    <AccordionOne data={accordion} type="single" />
                </Container>
            </Section>
        </MainPublic>
    );
}

export default Home;
