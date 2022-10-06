import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

function Footer() {
    return (
        <div className={"footer_container"}>
            <Row xs={2} sm={2} md={2} lg={4} className={"footer_row"}>
                <Col className={"footer_column"}>
                    <div className={"footer_title"}><h5>Title</h5></div>
                    <div className={"footer_content"}>
                            <div>content</div>
                            <div>content</div>
                            <div>content</div>
                            <div>content</div>
                    </div>
                </Col>
                <Col className={"footer_column"}>
                    <div className={"footer_title"}><h5>Title</h5></div>
                    <div className={"footer_content"}>
                            <div>content</div>
                            <div>content</div>
                            <div>content</div>
                            <div>content</div>
                    </div>
                </Col>
                <Col className={"footer_column"}>
                    <div className={"footer_title"}><h5>Title</h5></div>
                    <div className={"footer_content"}>
                            <div>content</div>
                            <div>content</div>
                            <div>content</div>
                            <div>content</div>
                    </div>
                </Col>

            </Row>
        </div>

    );
}
export default Footer;