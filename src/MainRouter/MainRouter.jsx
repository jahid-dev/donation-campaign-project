import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import DonationDescription from "../Pages/DonationDescription/DonationDescription";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../components/ErrorPage/Errorpage";


const createRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donation.json'),
            },
            {
                path: '/donations',
                element: <Donation></Donation>,
                loader: () => fetch('/donation.json'),
            },
            {
                path:'/donation/:id',
                element:<DonationDescription></DonationDescription>,
                loader: () => fetch('/donation.json'),
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/donation.json'),
              },
        ],
    },
]);

export default createRouter;