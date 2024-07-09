import React, { useState } from "react";
import Button from "@mui/material/Button";

const ButtonStack = ({OnFill, DeletePhotoloopimage}) => {


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        onClick={(event) => OnFill(event)}
        style={{
          background: "#9CEBA4",
          color: "black",
          position: "absolute",
          top: "140px",
          width: "95px",
        }}
      >
        FILL
      </Button>
      <br />
      
      <button
        onClick={(event) => DeletePhotoloopimage(event)}
        style={{
          // background: '#FF0808',
          color: "black",
          position: "absolute",
          top: "-21px",
          left: '63px',
          width: "28px",
          height:'28px',
          borderRadius:'15px',
        }}
      >
        X
      </button>
      <br />
    </div>
  );
};

export default ButtonStack;
