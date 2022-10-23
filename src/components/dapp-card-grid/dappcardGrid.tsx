import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleDappCard from "../single-dapp-card/singleDappCard";
import "./dappCardGrid.css";
import dappList from "../../data/dapps.json" ;

function DappCardGrid() {


    return (
        <Container className={"dapp_card_wrapper"}>
            <Row xs={1} sm={1} md={2} lg={3}>
                {dappList.defiList.map((e)=>{
                    return  <Col key={e.label} className={"column"}><SingleDappCard  title={e.label} description={e.description} image={e.logo.url} link={e.url}/></Col>
                })}
            </Row>
        </Container>

    );
}


export default DappCardGrid;