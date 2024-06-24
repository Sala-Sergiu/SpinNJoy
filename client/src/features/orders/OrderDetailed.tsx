import { Box, Typography, Button, Grid } from "@mui/material";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";
import { Order, OrderItem } from "../../app/model/order";
import { BasketItem } from "../../app/model/basket";

interface Props {
  order: Order;
  setSelectedOrder: (id: number) => void;
}

function mapOrderItemToBasketItem(orderItem: OrderItem): BasketItem {
  return {
    productId: orderItem.productId,
    brand: orderItem.brand,
    model: "",
    type: "",
    color: "",
    price: orderItem.price,
    weight: 0,
    stock: 0,
    imageUrl: orderItem.pictureUrl,
    quantity: orderItem.quantity,
  };
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
  const subtotal =
    order?.orderItems.reduce(
      (sum, item) => sum + item.quantity * (item.price / 100),
      0
    ) ?? 0;

  // Map order items to basket items
  const basketItems = order.orderItems.map(mapOrderItemToBasketItem);

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ p: 2 }} gutterBottom variant="h4">
          Order# {order.id} - {order.orderStatus}
        </Typography>
        <Button
          onClick={() => setSelectedOrder(0)}
          sx={{ m: 2 }}
          size="large"
          variant="contained"
        >
          Back to orders
        </Button>
      </Box>
      <BasketTable items={basketItems} isBasket={false} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary subtotal={subtotal} />
        </Grid>
      </Grid>
    </>
  );
}
