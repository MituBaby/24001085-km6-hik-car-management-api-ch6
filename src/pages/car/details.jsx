import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../redux/actions/car";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { car } = useSelector((state) => state.car);

    useEffect(() => {
        // get cars details by params id
        dispatch(getCar(navigate, id));
    }, [dispatch, id, navigate]);

    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>{car?.name}</Card.Header>
                    <Card.Body>
                        <Form>
                            {!car ? (
                                <>
                                    <h2>Loading...</h2>
                                </>
                            ) : (
                                <>
                                    {car?.photoCars?.map(photos => (photos.photo)) && (
                                        <Image
                                            src={car?.photoCars.map(photos => (photos.photo))}
                                            className="img-fluid"
                                            rounded
                                        />
                                    )}

                                    <div className={car?.photoCars?.map(photos => (photos.photo)) && "mt-4"}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Rent Per Day</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.rentPerDay.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Manufacture</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.manufacture}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.type}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Transmission</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.transmission}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Description</Form.Label>
                                            <FloatingLabel controlId="floatingTextarea2">
                                                <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                value={car?.description}
                                                style={{ height: '100px' }}
                                                disabled
                                                />
                                            </FloatingLabel>
                                        </Form.Group>
                                    </div>
                                </>
                            )}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Profile;
