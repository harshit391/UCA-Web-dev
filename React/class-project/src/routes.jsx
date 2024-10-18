import ProductList from "./components/home"
import SignUp from "./components/signup"
import SignIn from "./components/signin"
import Layout from "./components/layout";
import ManageProduct from "./components/manageProduct";

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
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/manageProduct',
                element: <ManageProduct></ManageProduct>
            }
        ]
    }
]

export default routes;