import Card from 'react-bootstrap/Card';
import "./singleCard.css";
import {SingleCardDetails} from "../../definitions/single-box-details";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SingleCard({title, image, description}: SingleCardDetails) {
    return (
        <div>
            <Card className="single_card">
                <Card.Body>
                    <Row >
                        <Col xs={3} className={"card_icon"}>{image}</Col>
                        <Col xs={9}>
                        <Card.Title className={"card_title"}>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SingleCard;