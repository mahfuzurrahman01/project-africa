import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Donate from "../Pages/Donate";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Projects from "../Pages/Projects";
import Register from "../Pages/Register";
import Support from "../Pages/Support";
import Private from "../Private/Private";
import Error from "../Shared/Error";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/projects'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/projects'),
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                loader: () => fetch('http://localhost:5000/projects'),
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/support',
                element: <Support></Support>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/donate/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/donate/${params.id}`),
                element: <Private><Donate></Donate></Private>
            }
        ]
    }
])