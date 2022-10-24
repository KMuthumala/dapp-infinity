import "./price-card-small.css"
import {Card, Row} from "react-bootstrap";
import {SmallPriceCardDetails} from "../../definitions/single-box-details";
import Col from "react-bootstrap/Col";

function PriceCardSmall({title, image, description,price}: SmallPriceCardDetails) {

    return (
        <div>
            <Card className={"price-card-small"}>
                <Card.Body>
                    <Row>
                        <Col xs={4} className={"crypto-icon"}>
                            <img src={require(`../../images/crypto-icons/${image}.png`)} width={"40"} height={"40"}
                                 alt={""}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{price}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );

}

export default PriceCardSmall;