import Card from 'react-bootstrap/Card';
import "./singleCard.css";
import {SingleCardDetails} from "../../definitions/single-box-details";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

function SingleCard({title, image, description,to}: SingleCardDetails) {
    return (
        <div >
            <Card className="single_card" as = {Link} to={to}>
                <Card.Body>
                    <Row >
                        <Col xs={3} className={"card_icon"}>{image}</Col>
                        <Col xs={9} className={"card_content"}>
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