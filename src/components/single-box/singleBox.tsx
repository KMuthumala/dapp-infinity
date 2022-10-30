import Card from 'react-bootstrap/Card';
import "./singleBox.css";
import {SingleBoxDetails} from "../../definitions/single-box-details";

function SingleBox({title, image, link}: SingleBoxDetails) {

    function raiseInvoiceClicked() {
        window.open(link, "_blank") //to open new page
    }

    return (
        <Card className="single_box" onClick={() => {
            raiseInvoiceClicked();
        }}>
            <Card.Img variant="top" className="box_image" src={image}/>
            <Card.Body>
                <Card.Text className={"card_text"}>{title}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SingleBox;