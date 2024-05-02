import axios from "axios";
import { toast } from "react-toastify";
import { setStudents, setStudent } from "../reducers/student";

export const getStudents = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setStudents(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const getStudent = (navigate, id) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setStudent(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
        navigate("/");
    }
};
