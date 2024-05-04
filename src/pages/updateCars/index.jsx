import UpdateCar from "../../components/updateCars";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PageCreateCars = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Update Cars</Card.Header>
                    <Card.Body>
                        <UpdateCar />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default PageCreateCars;
