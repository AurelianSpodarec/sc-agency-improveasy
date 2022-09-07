import Container from "@components/Container";

function Home() {
    return (
        <div id="home-page" className="page-padding">

            <section>

            <Container>
                <header>
                    <h2>Why use?</h2>
                </header>
                </Container>

                <Container>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    <p>Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Container>

            </section>

            <section>

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
            </section>


            <section>
                <Container>

                    <div>

                        <div>
                            <img src="" />
                        </div>
                        <div>
                            <div>
                                <h2>Why use?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>
                            <button>Read more</button>
                        </div>

                    </div>

                </Container>
            </section>


            <footer className="footer">
            <div className="footer__outer">
            <div className="footer__inner">

                <Container>
                <div className="">

                    <div>
                        <h4>For Business</h4>
                        <ul>
                            <li><a href="">Business Finance</a></li>
                            <li><a href="">Consumer Finance</a></li>
                            <li><a href="">ECO</a></li>
                            <li><a href="">Affiliate Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>For Business</h4>
                        <ul>
                            <li><a href="">Business Finance</a></li>
                            <li><a href="">Consumer Finance</a></li>
                            <li><a href="">ECO</a></li>
                            <li><a href="">Affiliate Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>For Business</h4>
                        <ul>
                            <li><a href="">Business Finance</a></li>
                            <li><a href="">Consumer Finance</a></li>
                            <li><a href="">ECO</a></li>
                            <li><a href="">Affiliate Partners</a></li>
                        </ul>
                    </div>



                    <div>
                        <h4>Stay up to Date</h4>
                        <div>
                            svg
                            <a href="mailto:enquiries@morson.com">enquiries@morson.com</a>
                            <a href="tel:(+44) 0 161 707 1516">(+44) 0 161 707 1516</a>
                        </div>

                        <div>
                            fb instagram
                        </div>
                    </div>
                
                </div>
                </Container>

                <Container>
                    <img src="" />
                    <p>Improveasy Ltd is a company registered in England and Wales (Co. Reg. number 7807352). Registered Office: Station House, Stamford New Rd, Altrincham WA14 1EP. The firm is authorised and regulated by the Financial Conduct Authority (FRN 708623). The firm is authorised as a Broker, not a Lender, and offers credit facilities from a panel of lenders. A small fee is earned by Improveasy upon activation of a finance plan. The credit is subject to application and status.</p>
                </Container>


                <Container>
                    <p>&copy; Copyright 2022 Improveasy Ltd | Company no. 7807352 | Terms & Conditions | Cookie Policy</p>
                </Container>

    
            </div>
            </div>
            </footer>

        </div>
    )
}

export default Home;
