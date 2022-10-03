import Card from 'react-bootstrap/Card';
import "./card.css";

function SingleCard() {
    return (
        <div>
           <Card border="dark"  className="card">
                <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>



        </div>
    );
}

export default SingleCard;