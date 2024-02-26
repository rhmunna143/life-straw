import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import HomePage from "../pages/home/HomePage";
import Technology from "../pages/technology/Technology";
import Support from "../pages/Support/Support";
import Shop from "../pages/shop/Shop";
import CorporateSales from "../pages/corporateSales/CorporateSales";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },

            {
                path: "/technology",
                element: <Technology />
            },

            {
                path: "/support",
                element: <Support />
            },

            {
                path: "/shop",
                element: <Shop />
            },

            {
                path: "/corporate-sales",
                element: <CorporateSales />
            }
        ]
    }
])

export default router;