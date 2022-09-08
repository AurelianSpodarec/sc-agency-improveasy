import Container from '../../../components/ui/Container';
import Section from '../../../components/ui/Section';
import Text from '../../../components/ui/Text';

function Footer() {
    return (
        <footer className="footer">
            <Section style={{ paddingBottom: '26px' }}>
                <div className="footer__inner">
                    <Container>
                        <div className="footer__section-links md:d-flex justify-between">
                            <div className="md:d-flex md:space-x-20">
                                <div>
                                    <Text weight="bold" style={{ marginBottom: '20px' }}>
                                        For Business
                                    </Text>
                                    <ul>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Business Finance</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Consumer Finance</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>ECO</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Affiliate Partners</Text>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <Text weight="bold" style={{ marginBottom: '20px' }}>
                                        For Business
                                    </Text>
                                    <ul>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Business Finance</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Consumer Finance</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>ECO</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Affiliate Partners</Text>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <Text weight="bold" style={{ marginBottom: '20px' }}>
                                        For Business
                                    </Text>
                                    <ul>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Business Finance</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Consumer Finance</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>ECO</Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer__section-link">
                                                <Text>Affiliate Partners</Text>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <Text>Stay up to Date</Text>
                                <div>
                                    <a
                                        className="footer__section-link"
                                        href="mailto:enquiries@morson.com"
                                    >
                                        enquiries@morson.com
                                    </a>
                                    <a
                                        className="footer__section-link"
                                        href="tel:(+44) 0 161 707 1516"
                                    >
                                        (+44) 0 161 707 1516
                                    </a>
                                </div>

                                <div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            width="39px"
                                            height="38px"
                                            viewBox="0 0 39.0 38.0"
                                        >
                                            <defs>
                                                <clipPath id="i0">
                                                    <path d="M1920,0 L1920,2666 L0,2666 L0,0 L1920,0 Z" />
                                                </clipPath>
                                                <clipPath id="i1">
                                                    <path d="M19.0849597,0 C29.6252924,0 38.1699193,8.43561312 38.1699193,18.8414704 C38.1699193,29.2473277 29.6252924,37.6829408 19.0849597,37.6829408 C8.54462697,37.6829408 0,29.2473277 0,18.8414704 C0,8.43561312 8.54462697,0 19.0849597,0 Z M23.6638182,8.79268619 L20.797188,8.79268619 C17.3539041,8.79268619 16.1419575,10.5063126 16.1419575,13.3880935 L16.1419575,15.5089738 L13.9956371,15.5089738 L13.9956371,19.0414406 L16.1419575,19.0414406 L16.1419575,29.2917952 L20.4380476,29.2917952 L20.4380476,19.0410405 L23.304272,19.0410405 L23.6841086,15.5085737 L20.4380476,15.5085737 L20.4429173,13.7405401 C20.4429173,12.8192183 20.5315864,12.3255531 21.8719714,12.3255531 L23.6638182,12.3255531 L23.6638182,8.79268619 Z" />
                                                </clipPath>
                                            </defs>
                                            <g transform="translate(-1407.0 -2318.0)">
                                                <g clip-path="url(#i0)">
                                                    <g transform="translate(0.0 2102.0)">
                                                        <g transform="translate(1407.0 216.00039582921056)">
                                                            <g transform="">
                                                                <g clip-path="url(#i1)">
                                                                    <polygon
                                                                        points="0,0 38.1699193,0 38.1699193,37.6829408 0,37.6829408 0,0"
                                                                        stroke="none"
                                                                        fill="#E9C469"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer__section-links */}
                    </Container>

                    <Container>
                        <div className="footer__info">
                            <img src="https://i.imgur.com/ogO8PFD.png" width="140px" />
                            <Text size="sm">
                                Improveasy Ltd is a company registered in England and Wales (Co.
                                Reg. number 7807352). Registered Office: Station House, Stamford New
                                Rd, Altrincham WA14 1EP. The firm is authorised and regulated by the
                                Financial Conduct Authority (FRN 708623). The firm is authorised as
                                a Broker, not a Lender, and offers credit facilities from a panel of
                                lenders. A small fee is earned by Improveasy upon activation of a
                                finance plan. The credit is subject to application and status.
                            </Text>
                        </div>
                    </Container>

                    <Container>
                        <div className="footer__copy">
                            <Text size="sm">
                                &copy; Copyright 2022 Improveasy Ltd | Company no. 7807352 | Terms &
                                Conditions | Cookie Policy
                            </Text>
                        </div>
                    </Container>
                </div>
            </Section>
        </footer>
    );
}

export default Footer;
