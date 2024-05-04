import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/car";
import ChoiceCarCard from "../../components/choiceCars";

const Home = () => {
    const dispatch = useDispatch();

    const { cars } = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    return (
        <Row>
            {cars.length > 0 &&
                cars.map((car) => (
                    <ChoiceCarCard key={car?.id} car={car} />
                ))}
        </Row>
    );
};

export default Home;
