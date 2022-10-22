import Card from 'react-bootstrap/Card';
import "./singleCard.css";
import {SingleCardDetails} from "../../definitions/single-box-details";

function SingleCard({title,image,description}:SingleCardDetails) {
    return (
        <div>
           <Card border="dark"   className="single_card">
                <Card.Body>
                    <Card.Title className={"title"}>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
export default SingleCard;