import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleDappCard from "../single-dapp-card/singleDappCard";
import "./dappCardGrid.css";
import dappList from "../../data/dapps.json" ;
import {DappCategoryAndOperations} from "../../definitions/single-box-details";

function DappCardGrid({category}:DappCategoryAndOperations) {
    return (
        <div>
        <Container className={"dapp_card_wrapper"}>
            <Row xs={1} sm={1} md={2} lg={3}>
                {dappList.defiList.map((e)=>{
                    if(e.category===category || category==="All") {
                        return <Col key={e.label} className={"column"}><SingleDappCard title={e.label}
                                                                                       description={e.description}
                                                                                       image={e.logo.url} link={e.url}
                                                                                       category={e.category}/></Col>
                    }})}
            </Row>
        </Container>
        </div>
    );
}


export default DappCardGrid;