import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./boxgrid.css";
import SingleBox from "../single-box/singleBox";
import "./boxgrid.css"

function BoxGrid() {
    return (
            <Container className={"wrapper"}>
                <Row xs={3} sm={3} md={5} lg={6}>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                    <Col><SingleBox/></Col>
                </Row>
            </Container>

    );
}


export default BoxGrid;