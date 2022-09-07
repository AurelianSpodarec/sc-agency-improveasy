import Container from "@components/ui/Container";
import Section from "@components/ui/Section";
import Text from "@components/ui/Text";

function Home() {
    return (
        <>

            <Section>

                <Container>
                <header>
                    <Text type="h2" size="2xl" weight="bold">Why use?</Text>
                </header>
                </Container>

                <Container>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    <p>Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Container>

            </Section>



            <Section>

                <Container>
                <header>
                    <h2>A simple 5 step process</h2>
                </header>
                </Container>

                <Container>
                    <div>
                        <div>
                            svg icon
                            <span>Input property Code</span>
                        </div>
                    </div>
                </Container>

            </Section>



            <Section>
            <Container>

                <div>

                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <div>
                            <h2>Why use?</h2>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Text>
                        </div>
                        <button>Read more</button>
                    </div>

                </div>

            </Container>
            </Section>

        </>
    )
}

export default Home;
