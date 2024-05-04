import CreateCar from "../../components/createCars";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PageCreateCars = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Create Cars</Card.Header>
                    <Card.Body>
                        <CreateCar />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default PageCreateCars;
