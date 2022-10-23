import Card from 'react-bootstrap/Card';
import "./singleDappCard.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {SingleDappCardDetails} from "../../definitions/single-box-details";

function SingleDappCard({title,image,link,description}:SingleDappCardDetails) {
    function checkDescription(description:string):string{
        if(description.length>=50){
            return description.substring(0,40)+"...SEE MORE...";
        }return description;
    }
    return (
        <div>
            <Card className="dapp_single_card">
                <Card.Body>
                    <Row >
                        <Col xs={3} ><Card.Img   className="single_dapp_box_image" src={image}/></Col>
                        <Col xs={8} className={"single_dapp_card_content"}>
                            <Card.Title className={"dapp_card_title"}>{title}</Card.Title>
                            <Card.Text>{checkDescription(description)}</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SingleDappCard;