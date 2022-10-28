import "./price-card-small.css"
import {Card, Row} from "react-bootstrap";
import {SmallPriceCardDetails} from "../../definitions/single-box-details";
import Col from "react-bootstrap/Col";
import React, {useState} from 'react';

function PriceCardSmall({title, image, description, lastPrice, openPrice}: SmallPriceCardDetails) {
    const [priceColour, setPriceColour] = useState("black");

    return (
        <div>
            <Card className={"price-card-small"}>
                <Card.Body>
                    <Row>
                        <Col xs={4} className={"crypto-icon"}>
                            <img src={require(`../../images/crypto-icons/${image}.png`)} width={"50"} height={"50"}
                                 alt={""}/>
                        </Col>
                        <Col xs={8}>
                            <Card.Title style={{color: "white"}}>{title}</Card.Title>
                            <Card.Text style={{
                                color: lastPrice > openPrice ? "green" : "red",
                                fontWeight: "800"
                            }}>${lastPrice}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );

}

export default PriceCardSmall;