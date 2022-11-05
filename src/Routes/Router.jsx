import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Projects from "../Pages/Projects";
import Support from "../Pages/Support";
import Error from "../Shared/Error";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
               path:'/projects',
               element:<Projects></Projects>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/support',
                element:<Support></Support>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])