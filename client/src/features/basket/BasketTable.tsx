import { Remove, Add, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { formatCurrency } from "../../app/util/helperFunctions";
import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { BasketItem } from "../../app/model/basket";

interface Props {
  items: BasketItem[];
  isBasket?: boolean;
}

export default function BasketTable({ items, isBasket = true }: Props) {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.basket);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            {isBasket && <TableCell align="right"></TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.productId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display="flex" alignItems="center">
                  <img
                    src={item.imageUrl}
                    alt={item.model}
                    style={{ height: 50, marginRight: 20 }}
                  />
                  <span>{item.model}</span>
                </Box>
              </TableCell>
              <TableCell align="right">
                {formatCurrency(item.price / 100)}
              </TableCell>
              <TableCell align="center">
                {isBasket && (
                  <LoadingButton
                    loading={
                      status === "pendingRemoveItem" + item.productId + "remove"
                    }
                    onClick={() =>
                      dispatch(
                        removeBasketItemAsync({
                          productId: item.productId,
                          quantity: 1,
                          name: "remove",
                        })
                      )
                    }
                    color="error"
                  >
                    <Remove />
                  </LoadingButton>
                )}
                {item.quantity}
                {isBasket && (
                  <LoadingButton
                    loading={status === "pendingAddItem" + item.productId}
                    onClick={() =>
                      dispatch(
                        addBasketItemAsync({ productId: item.productId })
                      )
                    }
                  >
                    <Add />
                  </LoadingButton>
                )}
              </TableCell>
              <TableCell align="right">
                {formatCurrency((item.price / 100) * item.quantity)}
              </TableCell>
              {isBasket && (
                <TableCell align="right">
                  <LoadingButton
                    loading={
                      status === "pendingRemoveItem" + item.productId + "delete"
                    }
                    onClick={() =>
                      dispatch(
                        removeBasketItemAsync({
                          productId: item.productId,
                          quantity: item.quantity,
                          name: "delete",
                        })
                      )
                    }
                    color="error"
                  >
                    <Delete />
                  </LoadingButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
