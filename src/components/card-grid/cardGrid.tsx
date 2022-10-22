import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from "../single-card/singleCard";
import "./cardgrid.css";
import {MdApps,MdGeneratingTokens,MdPayment} from "react-icons/md";
import {GiGamepad,GiMining} from "react-icons/gi";


function CardGrid() {
    return (
        <Container className="card_grid_container">
            <Row xs={1} sm={1} md={2}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Dapps"}
                        image={<MdApps size={"5em"}/>}
                        description={"Explore all decentralized applications in one place...."}/>
                </Col>
                <Col className="grid_columns">
                    <SingleCard
                        title={"NFTs"}
                        image={<MdGeneratingTokens size={"5em"}/>}
                        description={"Explore world's trending NFT collections....."}/>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Cryto Games"}
                        image={<GiGamepad size={"5em"}/>}
                        description={"Earn crypto.....Play Games....."}/>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={2}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Mining World"}
                        image={<GiMining size={"5em"}/>}
                        description={"Passively earn crypto sharing with your resources...."}/>
                </Col>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Pay with Crypto"}
                        image={<MdPayment size={"5em"}/>}
                        description={"All cryptocurrency payments options in one place..."}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CardGrid;