import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/layout/model/product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
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
          ${product.price / 100}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.model} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ADD TO CART</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
}
