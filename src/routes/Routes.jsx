import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../layout/Login";
import Register from "../layout/Register";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/career',
        element: <h2>This the career Hub</h2>
    },
    {
        path: '*',
        element: <h1>Page is not found</h1>
    }
]);

export default Router;