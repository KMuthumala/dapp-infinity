import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from "./card";
import "./gridSystem.css";

function GridSystem() {
    return (
        <Container >
            <Row xs={1} sm={1} md={2} >
                <Col className="columns"><SingleCard/></Col>
                <Col className="columns"><SingleCard/></Col>
            </Row>
            <Row xs={1} sm={1} md={1} >
                <Col className="columns"><SingleCard/></Col>
            </Row>
            <Row xs={1} sm={1} md={2} >
                <Col className="columns"><SingleCard/></Col>
                <Col className="columns"><SingleCard/></Col>
            </Row>
        </Container>
    );
}

export default GridSystem;