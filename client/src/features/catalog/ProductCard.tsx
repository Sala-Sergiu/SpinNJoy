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
import agent from "../../app/api/agent";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../app/context/StoreContext";
import { formatCurrency } from "../../app/util/helperFunctions";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(false);

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .catch((error) => console.log(error))
      .then((basket) => setBasket(basket))
      .finally(() => setLoading(false));
  }

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
          loading={loading}
          onClick={() => handleAddItem(product.id)}
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
