import Container from "./Container"
import Text from "./Text";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__outer">
            <div className="footer__inner">

                <Container>
                <div className="footer__links">

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
                <div className="footer__info">
                    <img src="" />
                    <Text size="sm">Improveasy Ltd is a company registered in England and Wales (Co. Reg. number 7807352). Registered Office: Station House, Stamford New Rd, Altrincham WA14 1EP. The firm is authorised and regulated by the Financial Conduct Authority (FRN 708623). The firm is authorised as a Broker, not a Lender, and offers credit facilities from a panel of lenders. A small fee is earned by Improveasy upon activation of a finance plan. The credit is subject to application and status.</Text>
                </div>
                </Container>


                <Container>
                <div className="footer__copy">
                    <Text size="sm">&copy; Copyright 2022 Improveasy Ltd | Company no. 7807352 | Terms & Conditions | Cookie Policy</Text>
                </div>
                </Container>

    
            </div>
            </div>
            </footer>
    )
}

export default Footer;