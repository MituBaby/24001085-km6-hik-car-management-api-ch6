import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCars } from "../../redux/actions/car";
import { getCar } from "../../redux/actions/car";

function updateCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { car } = useSelector((state) => state.car);

    const [name, setName] = useState("");
    const [rentPerday, setRentPerDay] = useState("");
    const [manufacture, setManufacture] = useState("");
    const [type, setType] = useState("");
    const [transmission, setTransmission] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        dispatch(getCar(navigate, id));
    }, [dispatch, id, navigate]);

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            updateCars(navigate, name, rentPerday, manufacture, type, transmission, description, photo, setIsLoading, id)
        );
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={car?.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Rent per day *</Form.Label>
                <Form.Control
                    type="number"
                    placeholder={car?.rentPerday}
                    value={rentPerday}
                    onChange={(e) => setRentPerDay(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Manufacture *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={car?.manufacture}
                    value={manufacture}
                    onChange={(e) => setManufacture(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Type *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={car?.type}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Transmission *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={car?.transmission}
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Description *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={car?.description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="photo" className="mb-3">
                <Form.Label>Photo cars</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    accept="image/*"
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Submit"}
            </Button>
            
        </Form>
    )
}

export default updateCar;