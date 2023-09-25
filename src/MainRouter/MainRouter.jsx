import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";

const createRouter = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch('donation.json'),
              },
        ],
    },
]);

export default createRouter;