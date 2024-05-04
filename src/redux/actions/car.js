import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/car";

export const getCars = () => async (dispatch, getState) => {
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

        dispatch(setCars(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
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

        dispatch(setCar(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
        navigate("/");
    }
};

export const createCars =
    (navigate, name, rentPerDay, manufacture, type, transmission, description, setIsLoading) =>
    async (dispatch, getState) => {

        const { token } = getState().auth;

        // make loading
        setIsLoading(true);

        let data = JSON.stringify({
            "name": name,
            "rentPerDay": rentPerDay,
            "manufacture": manufacture,
            "type": type,
            "transmission": transmission,
            "description": description
          });

        // let data = new FormData();
        // data.append("email", email);
        // data.append("password", password);
        // data.append("name", name);
        // if (photo) {
        //     data.append("photo", photo);
        // }

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars/`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            dispatch(setCars(data));

            // redirect to home
            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            // navigate("/create-cars");
            // dispatch(logout());
        }

        setIsLoading(false);
    };

export const updateCars =
    (navigate, name, rentPerDay, manufacture, type, transmission, description, setIsLoading, id) =>
    async (dispatch, getState) => {

        const { token } = getState().auth;

        // make loading
        setIsLoading(true);

        let data = JSON.stringify({
            "name": name,
            "rentPerDay": rentPerDay,
            "manufacture": manufacture,
            "type": type,
            "transmission": transmission,
            "description": description
          });

        // let data = new FormData();
        // data.append("email", email);
        // data.append("password", password);
        // data.append("name", name);
        // if (photo) {
        //     data.append("photo", photo);
        // }

        let config = {
            method: "put",
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            dispatch(setCars(data));

            // redirect to home
            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            // navigate("/create-cars");
            // dispatch(logout());
        }

        setIsLoading(false);
    };

    export const deleteCar = (navigate, id) => async (dispatch, getState) => {
        const { token } = getState().auth;
    
        let config = {
            method: "delete",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    
        try {
            const response = await axios.request(config);
            const { data } = response.data;
    
            dispatch(setCar(data));
            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            navigate("/");
        }
    };

    export const undeletedCar = (navigate) => async (dispatch) => {
        try {
            // dispatch(setCar(data));
            navigate("/choice-cars");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            navigate("/choice-cars");
        }
    };