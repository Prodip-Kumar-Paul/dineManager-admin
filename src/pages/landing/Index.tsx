import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Button } from "@mui/material";
import { Typography } from "@mui/material";

import PageWrapper from "../../layout/PageWrapper";
import menu from "../../data/landingMenu";


const Landing = () => {
  return (
    <PageWrapper>
      <Grid container spacing={10}>
        {menu.map((item) => (
          <Grid item xs={6}>
            <Card
              sx={{ backgroundColor: "#FFFFFF", width: "50%", margin: "auto" }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Link to={item.route} style={{ textDecoration: "none" }}>
                  <Button variant="contained">Continue</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Landing;
