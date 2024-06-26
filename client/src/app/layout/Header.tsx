import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";

const midlinks = [
  {
    title: "catalog",
    path: "/catalog",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const rightlinks = [
  {
    title: "login",
    path: "/login",
  },
  {
    title: "register",
    path: "/register",
  },
];

interface Props {
  handleThemeChange: () => void;
}

const styles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header({ handleThemeChange }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h5" component={NavLink} to="/" sx={styles}>
            SpinNJoy
          </Typography>
          <Switch onChange={handleThemeChange} />
        </Box>
        <Box>
          <List sx={{ display: "flex" }}>
            {midlinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={styles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
            {user && user.roles?.includes("Admin") && (
              <ListItem component={NavLink} to={"/inventory"} sx={styles}>
                INVENTORY
              </ListItem>
            )}
          </List>
        </Box>
        <Box sx={{ display: "flex" }}>
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {user ? (
            <SignedInMenu />
          ) : (
            <List sx={{ display: "flex" }}>
              {rightlinks.map(({ title, path }) => (
                <ListItem component={NavLink} to={path} key={path} sx={styles}>
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
