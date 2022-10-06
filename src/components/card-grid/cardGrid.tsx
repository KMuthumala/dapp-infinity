import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from "../single-card/singleCard";
import "./cardgrid.css";

function CardGrid() {
    return (
        <Container className="card_grid_container" >
            <Row xs={1} sm={1} md={2}  >
                <Col className="grid_columns"><SingleCard/></Col>
                <Col className="grid_columns"><SingleCard/></Col>
            </Row>
            <Row xs={1} sm={1} md={1} >
                <Col className="grid_columns"><SingleCard/></Col>
            </Row>
            <Row xs={1} sm={1} md={2} >
                <Col className="grid_columns"><SingleCard/></Col>
                <Col className="grid_columns"><SingleCard/></Col>
            </Row>
        </Container>
    );
}
export default CardGrid;