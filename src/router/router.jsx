import { createBrowserRouter } from "react-router-dom";
import Auth from "../layout/auth/auth";
import SecureRoute from "./secure-router";
import User from "../pages/user/user";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
    },
    {
        path: "/user",
        element: <SecureRoute><User /></SecureRoute>,
        children: [
            {
                path: "home",
                element: <h1>Home</h1>,
                // loader: ({ request }) =>
                //     fetch("/api/dashboard.json", {
                //         signal: request.signal,
                //     }),
            },
            {
                path: "about",
                element: <h1>About</h1>,
            },
            {
                path: "contact",
                element: <h1>Contact</h1>,
            },
        ],
    },
]);