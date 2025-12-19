import { Box, Chip, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useProducts } from "../../api/hooks";

export const DashBoardPage = () => {
    const { products, loading } = useProducts();

    const getFormatedRows = () => {
        return products.map((product) => ({
            id: product.id,
            name: product.name,
            price: `$${product.price}`,
            category: product.type,

        }));
    }
  return (
    <Container>
      <Box sx={{ minHeight: 400, width: "100%", pt: 4 }}>
        <DataGrid
          columns={[
            {
              field: "id",
              headerName: "ID",
              width: 90,
            },
            {
              field: "name",
              headerName: "Product Name",
              flex: 1,
              minWidth: 150,
            },
            {
              field: "price",
              headerName: "Product Price",
              width: 130,
            },
             {
              field: "category",
              headerName: "Product Category",
              width: 150,
              renderCell: (category) => (
                <Chip label={category.value} />
              ),
            },
          ]}
          loading={loading}
          rows={getFormatedRows()}
          getRowId={(row) => row.id}

            initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6,12]}
        />
      </Box>
    </Container>
  );
};
