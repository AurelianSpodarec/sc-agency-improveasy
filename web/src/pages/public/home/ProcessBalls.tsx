import { Container, PageHeading, Text } from '@components/ui';

const processBalls = [
    {
        title: 'We Assess',
        subTitle: 'Your property’s existing energy performance',
        description: 'Input property code. Existing energy performance established online.',
    },
    {
        title: 'You Receive',
        subTitle: 'Your EPC Builder ‘Improvement Plan‘',
        description:
            'House survey conducted. Funding options investigated. Improvement Plan delivered.',
    },
    {
        title: 'You Choose',
        subTitle: 'Your preferred installer',
        description: 'Measures installed. Check that required quality standards are met.',
    },
    {
        title: 'Together We Build',
        subTitle: 'Your EPC rating and start saving energy',
        description: 'Increased EPC rating. Save energy',
    },
];

const ProcessBalls = () => {
    return (
        <>
            <Container>
                <PageHeading
                    title="A Simple 4 Step process:"
                    border={false}
                    className="text-center"
                    style={{ color: '#E76F51' }}
                />
            </Container>

            <Container size="fluid">
                <div className="flex-row justify-evenly process-balls">
                    {processBalls.map(({ title, subTitle, description }, i) => (
                        <div className="processBalls__item">
                            <div className="processBalls-chain">
                                <div className="processBalls-chain__inner space-x-2">
                                    <div
                                        className={`processBalls-chain__item processBalls-chain__item--${i}`}
                                    ></div>
                                    <div
                                        className={`processBalls-chain__item processBalls-chain__item--${i}`}
                                    ></div>
                                    <div
                                        className={`processBalls-chain__item processBalls-chain__item--${i}`}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex flex-column align-center">
                                <div className="processBalls__icon-wrap rounded--full flex-column justify-center align-center">
                                    <Text size="sm" weight="semibold">
                                        {description}
                                    </Text>
                                </div>
                                <div style={{ width: '90%' }}>
                                    <Text size="md" weight="bold">
                                        {title}
                                    </Text>
                                    <Text size="md" weight="semibold">
                                        {subTitle}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default ProcessBalls;
