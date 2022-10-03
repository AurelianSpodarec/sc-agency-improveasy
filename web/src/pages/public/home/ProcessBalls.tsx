import { Container, PageHeading, Text } from '@components/ui';

const processBalls = [
    {
        title: 'Input property code',
        description: 'Existing energy performance established online.',
    },
    {
        title: 'House survey conducted',
        description: 'Funding options investigated. Improvement Plan delivered.',
    },
    {
        title: 'Measures installed',
        description: 'Check that required quality standards are met.',
    },
    {
        title: 'Increased EPC rating',
        description: 'Save energy',
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
                    {processBalls.map(({ title, description }, i) => (
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
                                <div className="processBalls__icon-wrap rounded--full">
                                    {description}
                                </div>
                                <div style={{ width: '90%' }}>
                                    <Text size="md" weight="bold" style={{ wordbreak: 'wrap' }}>
                                        {title}
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
