import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import "bootstrap/dist/css/bootstrap.min.css"; // apply bootstrap for styling
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";
import Protected from "./components/Protected";
import NonProtected from "./components/NonProtected";
import CarDetail from "./pages/car/details";
import CreateCars from "./pages/createCars";
import ChoiceCarUpdate from "./pages/choiceCars";
import UpdateCars from "./pages/updateCars";
import DeleteCars from "./components/deleteCars";

import store from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Navbar />
                <Container className="mt-5">
                    <Home />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/login",
        element: (
            <NonProtected>
                <Navbar />
                <Container className="mt-5">
                    <Login />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/register",
        element: (
            <NonProtected>
                <Navbar />
                <Container className="mt-5">
                    <Register />
                </Container>
            </NonProtected>
        ),
    },
    {
        path: "/profile",
        element: (
            <Protected roles={["admin"]}>
                <Navbar />
                <Container className="mt-5">
                    <Profile />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/cars/:id",
        element: (
            <Protected>
                <Navbar />
                <Container className="mt-5">
                    <CarDetail />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/create-cars",
        element: (
            <Protected roles={["admin"]}>
                <Navbar />
                <Container className="mt-5">
                    <CreateCars />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/choice-cars",
        element: (
            <Protected roles={["admin"]}>
                <Navbar />
                <Container className="mt-5">
                    <ChoiceCarUpdate />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/update-cars/:id",
        element: (
            <Protected roles={["admin"]}>
                <Navbar />
                <Container className="mt-5">
                    <UpdateCars />
                </Container>
            </Protected>
        ),
    },
    {
        path: "/delete-cars/:id",
        element: (
            <Protected roles={["admin"]}>
                <Navbar />
                <Container className="mt-5">
                    <DeleteCars />
                </Container>
            </Protected>
        ),
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />

            <ToastContainer theme="colored" />
        </Provider>
    );
}

export default App;
