import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AuthLayout from "../layout/AuthLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,

    },
    {
        path: '/career',
        element: <h2>This the career Hub</h2>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <h2>Login</h2>
            },
            {
                path:'/auth/register',
                element: <h2>Register</h2>
            }
        ]
    },
    {
        path: '*',
        element: <h1>The page is not found </h1>
    }
]);

export default Router;