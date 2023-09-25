import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

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
        ],
    },
]);

export default createRouter;