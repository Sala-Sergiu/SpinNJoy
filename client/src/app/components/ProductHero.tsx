import { Button, Typography } from "@mui/material";
import ProductHeroLayout from "../layout/ProductHeroLayout";
import { Link } from "react-router-dom";

const backgroundImage =
  "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719653758/w3tp4bkt1zikmm36fdsz.png";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        Upgrade your Ride
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Discover unbeatable deals on top-quality bicycles every weekend.
      </Typography>
      <Button
        component={Link}
        to="/catalog"
        color="secondary"
        variant="contained"
        size="large"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        To Catalog
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
