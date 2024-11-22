import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../layout/Login";
import Register from "../layout/Register";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Home/MyProfile";
import About from "../Home/About";
import NotFound from "../NotFound/NotFound";
import CareerInsights from "../components/CareerInsights";
import toast from "react-hot-toast";

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
        element: (<PrivateRoute>
            <ServiceDetails></ServiceDetails>
        </PrivateRoute>),
        loader: async ({ params }) => {
            try {
                const res = await fetch('/services.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                data.find(service => service.service_id === params.service_id);
                return data || null;
            } catch (error) {
                toast.error(error);
                return null;
            }
        },
    },
    {
        path: '/myProfile',
        element: <MyProfile></MyProfile>
    },
    {
       path:'/about',
       element: <About></About>
    },
    {
        path:'/careerInsights',
        element: <CareerInsights></CareerInsights>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default Router;