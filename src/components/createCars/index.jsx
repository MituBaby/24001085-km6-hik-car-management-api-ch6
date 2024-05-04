import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCars } from "../../redux/actions/car";

function createCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [rentPerday, setRentPerDay] = useState("");
    const [manufacture, setManufacture] = useState("");
    const [type, setType] = useState("");
    const [transmission, setTransmission] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            createCars(navigate, name, rentPerday, manufacture, type, transmission, description, setIsLoading)
        );
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Rent per day *</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter cost"
                    value={rentPerday}
                    onChange={(e) => setRentPerDay(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Manufacture *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter manufactur"
                    value={manufacture}
                    onChange={(e) => setManufacture(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Type *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Transmission *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter transmission type"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Description *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Submit"}
            </Button>
            
        </Form>
    )
}

export default createCar;