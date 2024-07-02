import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719653758/w3tp4bkt1zikmm36fdsz.png",
    title: "Adventure",
    width: "40%",
  },
  {
    url: "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719594083/samples/people/bicycle.jpg",
    title: "Joy",
    width: "20%",
  },
  {
    url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400",
    title: "Relaxation",
    width: "40%",
  },
  {
    url: "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719594088/samples/landscapes/nature-mountains.jpg",
    title: "Nature",
    width: "38%",
  },
  {
    url: "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719594083/samples/landscapes/architecture-signs.jpg",
    title: "City",
    width: "38%",
  },
  {
    url: "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719594112/cld-sample-2.jpg",
    title: "Earth",
    width: "24%",
  },
  {
    url: "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719594113/cld-sample-3.jpg",
    title: "Community",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400",
    title: "Fitness",
    width: "20%",
  },
  {
    url: "https://res.cloudinary.com/dapjp8rtg/image/upload/v1719594081/samples/bike.jpg",
    title: "Strength",
    width: "40%",
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
