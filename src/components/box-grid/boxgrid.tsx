import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./boxgrid.css";
import SingleBox from "../single-box/singleBox";
import {tempBoxData} from "../../data/temp-nft-box-data";

function BoxGrid() {
    return (
        <Container className={"wrapper"}>
            <Row xs={2} sm={2} md={4} lg={5}>
                {tempBoxData.map((details) => {
                        return <Col key={details.title}><SingleBox  image={details.image} title={details.title} link={details.link}/></Col>
                    }
                )}
            </Row>
        </Container>

    );
}


export default BoxGrid;