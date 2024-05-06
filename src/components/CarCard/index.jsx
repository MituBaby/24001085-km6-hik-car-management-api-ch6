import { Col, Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CarCard = ({ car }) => {
    return (
        <Col key={car.id} md={3}>
            <Card className="mt-3" style={{ margin: "0.1rem"}}>
            <Card.Img variant="top" src={car.photo}/>
            <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                Rent per day : {car.rentPerDay.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                </Card.Text>
                <Button variant="primary" as={Link} to={`/cars/${car?.id}`}>See More</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

CarCard.propTypes = {
    student: PropTypes.object,
};

export default CarCard;
