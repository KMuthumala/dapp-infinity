import Card from 'react-bootstrap/Card';
import "./singleBox.css";
import {SingleBoxDetails} from "../../definitions/single-box-details";

function SingleBox({title,image}:SingleBoxDetails) {
    return (
        <Card className="single_box" >
            <Card.Img variant="top" className="box_image" src={require("../../images/boxImage.webp")} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}
export default SingleBox;