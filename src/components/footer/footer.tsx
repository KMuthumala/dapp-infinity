import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

function Footer() {
    return (
        <div className={"footer_container"}>
            <Row xs={2} sm={2} md={2} lg={4} className={"footer_row"}>
                <Col className={"footer_column"}>
                    <div className={"footer_title"}><h4>Company</h4></div>
                    <div className={"footer_content"}>
                            <div>About us</div>
                            <div>Press</div>
                            <div>Disclaimer</div>
                            <div>Privacy policy</div>
                            <div>Terms and conditions</div>
                            <div>Careers</div>
                    </div>
                </Col>
                <Col className={"footer_column"}>
                    <div className={"footer_title"}><h4>Products</h4></div>
                    <div className={"footer_content"}>
                            <div>Dapp Explorer</div>
                            <div>Trending NFT Explorer</div>
                            <div>AirDrops</div>
                            <div>Crypto Games</div>
                    </div>
                </Col>
                <Col className={"footer_column"}>
                    <div className={"footer_title"}><h4>Resources</h4></div>
                    <div className={"footer_content"}>
                            <div>Blog</div>
                            <div>Industry Overview</div>
                            <div>Reports</div>
                            <div>FAQ</div>
                            <div>Brand Assets</div>
                    </div>
                </Col>
                <Col className={"footer_column"}>
                    <div className={"footer_title"}><h4>Contact Us</h4></div>
                    <div className={"footer_content"}>
                        <div>Email</div>
                        <div>Telegram</div>
                        <div>Twitter</div>
                        <div>TikTok</div>
                    </div>
                </Col>

            </Row>
            <Row xs={2} sm={2} md={2} lg={4} className={"footer_row"}>
                <Col className={"footer_column"}>
                © 2022 Dapp Infinity
                </Col>
            </Row>
        </div>

    );
}
export default Footer;