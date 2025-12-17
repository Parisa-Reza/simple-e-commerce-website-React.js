import { Outlet } from "react-router";
import { Navbar } from "../Components/navbar";

export const RootLayout = () => {
  return (
    <div className="bg-gray-200 min-h-screen w-full">
      <div className="container m-auto">
        <Navbar />

        <Outlet />

        <div>footer</div>
      </div>
    </div>
  );
};
