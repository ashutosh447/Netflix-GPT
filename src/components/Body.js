import Browse from "./Browse.js";
import Login from "./Login.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
    ]);
    return(
        <>
        <RouterProvider router={appRouter}/>
        </>
    )
};

export default Body;