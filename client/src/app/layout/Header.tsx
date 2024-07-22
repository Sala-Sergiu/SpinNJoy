import { Menu, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
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
import React from "react";

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

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ handleThemeChange, darkMode }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* <Box>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Box> */}
      <List>
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
      <Divider />
      <List>
        {rightlinks.map(({ title, path }) => (
          <ListItem component={NavLink} to={path} key={path} sx={styles}>
            {title.toUpperCase()}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" component={NavLink} to="/" sx={styles}>
            SpinNJoy
          </Typography>
          <Box>
            <Switch checked={darkMode} onChange={handleThemeChange} />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
