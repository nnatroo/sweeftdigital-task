import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import classes from "../Modules/User.module.css";

export default function Variants() {
  return (
    <div className={classes["user-card"]}>
      <Skeleton
        sx={{ borderRadius: "1rem 1rem 0 0" }}
        variant="rectangular"
        width={"100%"}
        height={"220px"}
        animation="wave"
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: "1.5rem",
          margin: "0.2rem 1rem 0 0.6rem",
          width: "60%",
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: "1.5rem",
          margin: "0 1rem 0.6rem 0.6rem",
          width: "70%",
        }}
      />
    </div>
  );
}
