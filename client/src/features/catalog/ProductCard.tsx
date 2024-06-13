import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/model/product";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { formatCurrency } from "../../app/util/helperFunctions";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.brand.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.brand}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
          backgroundImage: `url("${product.imageUrl}")`,
          bgcolor: "primary.light",
        }}
        image={product.imageUrl}
        title={product.model}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
          {formatCurrency(product.price / 100)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.model} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
          loading={status === "pendingAddItem" + product.id}
          onClick={() =>
            dispatch(addBasketItemAsync({ productId: product.id }))
          }
          size="small"
        >
          ADD TO CART
        </LoadingButton>
        <LoadingButton
          component={Link}
          to={`/catalog/${product.id}`}
          size="small"
        >
          VIEW
        </LoadingButton>
      </CardActions>
    </Card>
  );
}
