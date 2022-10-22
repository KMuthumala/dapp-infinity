import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from "../single-card/singleCard";
import "./cardgrid.css";

function CardGrid() {
    return (
        <Container className="card_grid_container">
            <Row xs={1} sm={1} md={2}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Dapps"}
                        image={""}
                        description={"Explore all decentralized applications in one place...."}/>
                </Col>
                <Col className="grid_columns">
                    <SingleCard
                        title={"NFTs"}
                        image={""}
                        description={"Explore world's trending NFT collections....."}/>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Cryto Games"}
                        image={""}
                        description={"Earn crypto.....Play Games....."}/>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={2}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Mining World"}
                        image={""}
                        description={"Passively earn crypto sharing with your resources...."}/>
                </Col>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Pay with Crypto"}
                        image={""}
                        description={"All cryptocurrency payments options in one place..."}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CardGrid;