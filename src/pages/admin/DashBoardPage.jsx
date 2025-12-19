import { Box, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useProducts } from "../../api/hooks";

export const DashBoardPage = () => {
    const { products, loading, error } = useProducts();

    const getFormatedRows = () => {
        return products.map((product) => ({
            id: product.id,
            name: product.name,
            price: `$${product.price}`,
        }));
    }
  return (
    <Container>
      <Box sx={{ height: 400, width: "100%", pt: 4 }}>
        <DataGrid
          columns={[
            {
              field: "id",
              headerName: "ID",
              width: 90,
            },
            {
              field: "name",
              headerName: "Product name",
              minWidth: 150,
              flex: 1,
            },
            {
              field: "price",
              headerName: "Product price",
              minwidth: 120,
            },
          ]}
          loading={loading}
          rows={getFormatedRows()}
          getRowId={(row) => row.id}
        />
      </Box>
    </Container>
  );
};
