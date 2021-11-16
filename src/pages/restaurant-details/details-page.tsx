import { Box, Button } from "@mui/material";
import classes from "./Detail.module.css";
import PageWrapper from "../../layout/PageWrapper";
import SideBar from "../../components/SideBar";
import { Edit } from "@mui/icons-material";

export default function DetailsPage() {
  // const [isUpdated, setIsUpdated] = useState<boolean>(false);

  return (
    <PageWrapper>
      <SideBar />
      <Box
        sx={{
          marginTop: 5,
          padding: "2rem 5rem",
          // bgcolor: "#ffcdd2",
          borderRadius: 5,
          maxWidth: "lg",
        }}
      >
        <h1>Restaurant Name</h1>
        <Box
          sx={{
            display: "grid",
            gap: 8,
            gridTemplateColumns: "repeat(2, 1fr)",
            textAlign: "left",
          }}
        >
          <div className={classes.info}>
            <h2>Restaurant Owner Name</h2>
            <p>test</p>
            <h2>Email Address</h2>
            <p>test@test.com</p>
            <h2>Password</h2>
            <p>test</p>
            <h2>Restaurant Contact</h2>
            <p>1234567890</p>
            <h2>Owner Contact</h2>
            <p>test</p>
          </div>
          <div className={classes.info}>
            <h2>PE ID</h2>
            <Button sx={{ color: "black", display: "flexbox", columnGap: 12 }}>
              <p>11111111111111111111111</p> <Edit />
            </Button>
            <h2>SMS Header</h2>
            <Button sx={{ color: "black", display: "flexbox", columnGap: 25 }}>
              <p>RESTOG</p> <Edit />
            </Button>
            <h2>Brand Name</h2>
            <Button sx={{ color: "black", display: "flexbox", columnGap: 25 }}>
              <p>Resto-G</p> <Edit />
            </Button>
            <h2>SMS Creadits</h2>
            <Button sx={{ color: "black", display: "flexbox", columnGap: 32 }}>
              <p>20</p> <Edit />
            </Button>{" "}
          </div>
        </Box>
      </Box>
    </PageWrapper>
  );
}
