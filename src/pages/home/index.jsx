import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../../redux/actions/student";
import StudentCard from "../../components/StudentCard";

const Home = () => {
    const dispatch = useDispatch();

    const { students } = useSelector((state) => state.student);

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    return (
        <Row>
            {students.length > 0 &&
                students.map((car) => (
                    <StudentCard key={car?.id} car={car} />
                ))}
        </Row>
    );
};

export default Home;
