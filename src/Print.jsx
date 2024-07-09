import React from "react";
import Button from "@mui/material/Button";

const Print = ({handlePrint, RemoveAll}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        onClick={handlePrint}
        style={{
          position: "absolute",
          top: "10px",
          width: "151px",
          height: "54px",
          borderRadius: "11px",
          fontSize: "x-large",
          background: "#4C63F7",
        }}
      >
        Print
      </Button>
      <Button 
      variant="contained" 
      style={{ 
        position: "absolute", 
        top: "115px",
        width: "130px",
        height: "32px",
        borderRadius: "5px",
        background: "#4C63F7",}}
       onClick={RemoveAll}>
        Remove all
      </Button>
    </div>
  );
};

export default Print;
