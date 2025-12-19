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
            <footer className="text-center py-4 mt-8 text-gray-600 text-md">© 2025 E-Commerce App.</footer>
          </Container>
        </div>
      </Box>
    </CartProvider>
  );
};
