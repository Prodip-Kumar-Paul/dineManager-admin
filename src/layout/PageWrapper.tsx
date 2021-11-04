import { Box } from "@mui/system";
import React, { ReactNode } from "react";

interface Props {
  children: Array<ReactNode> | ReactNode;
}

const wrapperStyle = {
  width: "90%",
  margin: "1rem",
  borderRadius: "10px",
  marginLeft: "11vh",
  padding: "1rem",
  height: "95vh",
  backgroundColor: "#F5F5F5",
};

const PageWrapper = (props: Props) => {
  return <Box sx={wrapperStyle}>{props.children}</Box>;
};

export default PageWrapper;
