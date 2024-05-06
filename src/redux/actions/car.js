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
    (navigate, name, rentPerDay, manufacture, type, transmission, description, photo, setIsLoading) =>
    async (dispatch, getState) => {

        const { token } = getState().auth;

        // make loading
        setIsLoading(true);

        let data = new FormData();
        data.append('name', name);
        data.append('rentPerDay', rentPerDay);
        data.append('manufacture', manufacture);
        data.append('type', type);
        data.append('transmission', transmission);
        data.append('description', description);
        if (photo) {
            data.append("photo", photo);
        }

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars/`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            dispatch(setCars(data));
            toast.success("Data berhasil dibuat");
            
            // redirect to home
            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            navigate("/create-cars");
            // dispatch(logout());
        }

        setIsLoading(false);
    };

export const updateCars =
    (navigate, name, rentPerDay, manufacture, type, transmission, description, photo, setIsLoading, id) =>
    async (dispatch, getState) => {

        const { token } = getState().auth;

        // make loading
        setIsLoading(true);

        let data = new FormData();
        data.append('name', name);
        data.append('rentPerDay', rentPerDay);
        data.append('manufacture', manufacture);
        data.append('type', type);
        data.append('transmission', transmission);
        data.append('description', description);
        if (photo) {
            data.append("photo", photo);
        }

        let config = {
            method: "put",
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            dispatch(setCars(data));
            
            // redirect to home
            navigate("/");
            toast.success("Data berhasil diupdate");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            navigate("/create-cars");
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
            toast.success("Data berhasil dihapus");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            navigate("/");
        }
    };

    export const undeletedCar = (navigate) => async (dispatch) => {
        try {
            navigate("/choice-cars");
        } catch (error) {
            toast.error(error?.response?.data?.message);
            navigate("/choice-cars");
        }
    };