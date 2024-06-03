import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  handleThemeChange: () => void;
}

export default function Header({ handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Typography variant="h6">SpinNJoy</Typography>
        <Switch onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
