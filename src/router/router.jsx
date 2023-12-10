import { Link, Outlet, createBrowserRouter } from "react-router-dom";
import Auth from "../layout/auth/auth";
import SecureRoute from "./secure-router";
import User from "../pages/user/user";
import ContentLayout from "../layout/layout/layout";
import About from "../pages/about/about";
import Contact from "../pages/contact/contact";
import Home from "../pages/home/home";
import ContentWrapper from "../components/content-wrapper";

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
                element: (
                    <ContentWrapper
                        breadcrumb={[
                            {
                                title: <Link to='/user'>Home</Link>,
                            },
                            {
                                title: <Link to='/user'>Application Center</Link>,
                            },
                            {
                                title: <Link to='/user'>Application List</Link>,
                            },
                            {
                                title: 'An Application',
                            },
                        ]}
                        title="Users"
                    >
                        <User />
                    </ContentWrapper>
                )
            },
            {
                path: "home",
                element: (
                    <ContentWrapper
                        breadcrumb={[
                            {
                                title: <Link to='/user'>Home</Link>,
                            },
                            {
                                title: <Link to='/user'>Application Center</Link>,
                            },
                            {
                                title: <Link to='/user'>Application List</Link>,
                            },
                            {
                                title: 'An Application',
                            },
                        ]}
                        title="Home"
                    >
                        <Home />
                    </ContentWrapper>
                )
            },
            {
                path: "about",
                element: (
                    <ContentWrapper
                        breadcrumb={[
                            {
                                title: <Link to='/user'>Home</Link>,
                            },
                            {
                                title: <Link to='/user'>Application Center</Link>,
                            },
                            {
                                title: <Link to='/user'>Application List</Link>,
                            },
                            {
                                title: 'An Application',
                            },
                        ]}
                        title="About"
                    >
                        <About />
                    </ContentWrapper>
                )
            },
            {
                path: "contact",
                element: (
                    <ContentWrapper
                        breadcrumb={[
                            {
                                title: <Link to='/user'>Home</Link>,
                            },
                            {
                                title: <Link to='/user'>Application Center</Link>,
                            },
                            {
                                title: <Link to='/user'>Application List</Link>,
                            },
                            {
                                title: 'An Application',
                            },
                        ]}
                        title="Contact"
                    >
                        <Contact />
                    </ContentWrapper>
                ),
            },
        ],
    },
]);