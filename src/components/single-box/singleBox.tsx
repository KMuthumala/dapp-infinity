import Card from 'react-bootstrap/Card';
import "./singleBox.css";

function SingleBox() {
    return (
        <Card className="single_box" >
            <Card.Img variant="top" className="box_image" src={require("../../images/boxImage.webp")} />
            <Card.Body>
                <Card.Title>Title</Card.Title>
            </Card.Body>
        </Card>
    );
}
export default SingleBox;