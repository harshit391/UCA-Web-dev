import ProductList from "./components/home"
import SignUp from "./components/signup"
import SignIn from "./components/signin"
import Layout from "./components/layout";
import ManageProduct from "./components/manageProduct";
import { isUserLoggedIn } from "./utils/helper";
import { Navigate, redirect } from "react-router-dom";

const routes = [
    {
        path: '/',
        element: <Layout></Layout>,
        children:
        [
            {
                path: '/',
                element: <ProductList></ProductList>
            },
            {
                path: '/signup',
                element: !isUserLoggedIn() ? <SignUp></SignUp> : <Navigate to={'/'}></Navigate>
            },
            {
                path: '/signin',
                element: !isUserLoggedIn() ? <SignIn></SignIn> : <Navigate to={'/'}></Navigate>
            },
            {
                path: '/manageProduct',
                element: <ManageProduct></ManageProduct>
            }
        ]
    }
]

export default routes;