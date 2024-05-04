import { useEffect } from "react";import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCar } from "../../redux/actions/car";
import { undeletedCar } from "../../redux/actions/car";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();


    const hapus = confirm("Are you sure want to delete this car?");

    if (hapus) {
        useEffect(() => {
            // get cars details by params id
            dispatch(deleteCar(navigate, id));
        }, [dispatch, id, navigate]);
    } else {
        useEffect(() => {
            dispatch(undeletedCar(navigate));
        })
    };
};

export default Profile;


