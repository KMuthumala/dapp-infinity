import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from "../single-card/singleCard";
import "./cardgrid.css";
import {MdApps, MdGeneratingTokens, MdPayment} from "react-icons/md";
import {GiGamepad, GiMining} from "react-icons/gi";


function CardGrid() {
    return (
        <div className={"div_section"}>
        <Container className="card_grid_container">
            <Row xs={1} sm={1} md={2}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Dapps"}
                        image={<MdApps size={"5em"}/>}
                        description={"Explore all decentralized applications in one place...."}
                        to={"dapps"}/>
                </Col>
                <Col className="grid_columns">
                    <SingleCard
                        title={"NFTs"}
                        image={<MdGeneratingTokens size={"5em"}/>}
                        description={"Explore world's trending NFT collections....."}
                        to={""}/>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Crypto Games"}
                        image={<GiGamepad size={"5em"}/>}
                        description={"Earn crypto.....Play Games....."}
                        to={""}/>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={2}>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Mining World"}
                        image={<GiMining size={"5em"}/>}
                        description={"Passively earn crypto sharing with your resources...."}
                        to={""}/>
                </Col>
                <Col className="grid_columns">
                    <SingleCard
                        title={"Pay with Crypto"}
                        image={<MdPayment size={"5em"}/>}
                        description={"All cryptocurrency payments options in one place..."}
                        to={""}/>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default CardGrid;