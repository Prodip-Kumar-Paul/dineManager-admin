import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

import list from "../../services/api/list";
import errorService from "../../services/error-service";

const theme = createTheme();

function ItemList() {
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

const fetchList = async () => {
  try {
    const res = await list();
    console.log(res);
  } catch (err) {
    if (err instanceof Error) {
      errorService("err in fetching data");
    }
  }
};

export default function RestaurantList() {
  fetchList();
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
