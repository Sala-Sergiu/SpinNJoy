import {
  Typography,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { formatCurrency } from "../../app/util/helperFunctions";
import useProducts from "../../app/hooks/useProducts";
import AppPagination from "../../app/components/AppPagination";
import { useAppDispatch } from "../../app/store/configureStore";
import { removeProduct, setPageNumber } from "../catalog/catalogSlice";
import ProductForm from "./ProductForm";
import { useState } from "react";
import { Product } from "../../app/model/product";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";

export default function Inventory() {
  const { products, metaData } = useProducts();
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState(0);

  function handeDeleteProduct(id: number) {
    setLoading(true);
    setTarget(id);
    agent.Admin.deleteProduct(id)
      .then(() => dispatch(removeProduct(id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    setEditMode(true);
  }

  function handleCancelEdit() {
    if (selectedProduct) setSelectedProduct(undefined);
    setEditMode(false);
  }

  if (editMode)
    return (
      <ProductForm product={selectedProduct} cancelEdit={handleCancelEdit} />
    );

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ p: 2 }} variant="h4">
          Inventory
        </Typography>
        <Button
          onClick={() => setEditMode(true)}
          sx={{ m: 2 }}
          size="large"
          variant="contained"
        >
          Create
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product: any) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    <img
                      src={product.imageUrl}
                      alt={product.model}
                      style={{ height: 50, marginRight: 20 }}
                    />
                    <span>{product.model}</span>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(product.price / 100)}
                </TableCell>
                <TableCell align="center">{product.type}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleSelectProduct(product)}
                    startIcon={<Edit />}
                  />
                  <LoadingButton
                    loading={loading && target === product.id}
                    onClick={() => handeDeleteProduct(product.id)}
                    startIcon={<Delete />}
                    color="error"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {metaData && (
        <Box sx={{ pt: 2 }}>
          <AppPagination
            metaData={metaData}
            onPageChange={(page: number) =>
              dispatch(setPageNumber({ pageNumber: page }))
            }
          />
        </Box>
      )}
    </>
  );
}
