import { Container, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();
  return (
    <Container component={Paper}>
      {state && state.error ? (
        <>
          <Typography variant="h3" color="error" gutterBottom>
            {state.error.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {state.error.detail || "internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server Error
        </Typography>
      )}
    </Container>
  );
}
