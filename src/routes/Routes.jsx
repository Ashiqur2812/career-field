import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../layout/Login";
import Register from "../layout/Register";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

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
        path: '/service/:services_id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => {
            return fetch('/services.json')
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    const service = data.find(service => service.service_id === params.service_id);
                    return data || null;
                })
                .catch(error => {
                    console.log('ERROR', error.message);
                    return null;
                });
        },
    },
    {
        path: '*',
        element: <h1>Page is not found</h1>
    }
]);

export default Router;