import { Outlet } from "react-router";
import { Navbar } from "../Components/navbar";
import { Box, Container } from "@mui/material";
import { CartProvider } from "../contexts";

export const RootLayout = () => {
  return (
    <CartProvider>
      <Box>
        <div className="bg-gray-200 min-h-screen w-full">
          <Navbar />
          <Container>
            <Outlet />
            <div>footer</div>
          </Container>
        </div>
      </Box>
    </CartProvider>
  );
};
