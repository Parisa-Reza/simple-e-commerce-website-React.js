import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage, PageNotFound, RootLayout } from "../pages";
import { DashBoardPage } from "../pages/admin";

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
            children: [
             
              {
                    path: "profile",
                    element: <div className="text-red-700 text-2xl">Admin Profile Page</div>,
                },
                {
                    path: "dashboard",
                    element: <DashBoardPage />,
                }
            ]
        },
        
    ]
  },
],
{ basename: "/simple-e-commerce-website-React.js",});

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
