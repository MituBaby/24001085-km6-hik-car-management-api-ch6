import { Col, Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CarCard = ({ car }) => {
    return (
        <Col key={car.id} md={3}>
            <Card className="mt-3" style={{ margin: "0.1rem"}}>
            <Card.Img variant="top" src={car.photoCars.map(photos => (photos.photo))}/>
            <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                Rent per day : {car.rentPerDay.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/update-cars/${car?.id}`}>Edit</Button>
                <Button variant="primary" as={Link} to={`/delete-cars/${car?.id}`} className="ms-4">Delete</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

CarCard.propTypes = {
    student: PropTypes.object,
};

export default CarCard;
