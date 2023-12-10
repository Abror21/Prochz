import { Outlet, createBrowserRouter } from "react-router-dom";
import Auth from "../layout/auth/auth";
import SecureRoute from "./secure-router";
import User from "../pages/user/user";
import ContentLayout from "../layout/layout/layout";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
    },
    {
        path: "/user",
        element: <SecureRoute>
                    <ContentLayout>
                        <Outlet />
                    </ContentLayout>
                </SecureRoute>,
        children: [
            {
                path: "",
                element: <User />,
            },
            {
                path: "home",
                element: <h1>Home</h1>,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);