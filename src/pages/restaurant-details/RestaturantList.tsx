import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ListItemText } from "@mui/material";

function ItemList(props: any) {
  return (
    <ListItem divider={true}>
      <ListItemButton>
        <ListItemText primary="Item one" secondary="test@test.com" />
        <ListItemIcon>
          <CheckCircleIcon color="success" />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        dinemanager.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export default function RestaurantList() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            alignItems: "center",
          }}
        >
          <h1>Restaurant Lists</h1>
          <List>
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
          </List>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
