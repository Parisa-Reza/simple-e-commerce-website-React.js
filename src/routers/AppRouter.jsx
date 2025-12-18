import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage, PageNotFound, RootLayout } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
        {
            index: true,
            element: <HomePage />,
            
        },
        {
            path: "admin",
            element: <div className="text-red-700 text-2xl">Admin Page</div>,
        },
        {
            path: "login",
            element: <div className="text-blue-700 text-2xl">Login Page</div>,
        }
    ]
  },
],
{ basename: "/simple-e-commerce-website-React.js",});

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
