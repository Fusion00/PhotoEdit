import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const SettingPanel = ({ handlePage, handleSize }) => {
  const [colourSize, setColourSize] = useState(null);
  const [colourPage, setColourPage] = useState(null);

  const hoverSize = (size) => {
    setColourSize(size);
  };

  const hoverPage = (page) => {
    setColourPage(page);
  };

  return (
    <div>
      <div
        className="setting"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "420px",
          width: "220px",
          position: "fixed",
          bottom: "15px",
          right: "50px",
          background: "#D6F4FF",
        }}
      >
        <div className="size">
          <List
            sx={{
              width: "180px",
              height: "201px",
              bgcolor: "background.paper",
              position: "fixed",
              top: "280px",
              right: "70px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                style={{ background: "#D6F4FF" }}
              >
                Size
              </ListSubheader>
            }
          >
            {/* ---------------buttons are here----------------------- */}
            <ListItemButton
              style={{
                borderBottom: "1px solid #B1B0B0",
                height: "40px",
                background: colourSize === "Passport" ? "#E5E5E5" : "transparent",
              }}
              onClick={() => {
                handleSize("Passport");
                hoverSize("Passport");
              }}
            >
              <ListItemText>Passport Size</ListItemText>
            </ListItemButton>
            <ListItemButton
              style={{ borderBottom: "1px solid #B1B0B0", height: "40px", 
                background: colourSize === "Full" ? "#E5E5E5" : "transparent",}}
              onClick={() => {
                handleSize("Full");
                hoverSize("Full");
              }}
            >
              <ListItemText>Full Size</ListItemText>
            </ListItemButton>
            <ListItemButton
              style={{ borderBottom: "1px solid #B1B0B0", height: "40px", 
                background: colourSize === "Stamp" ? "#E5E5E5" : "transparent", }}
              onClick={() => {
                handleSize("Stamp");
                hoverSize("Stamp");
              }}
            >
              <ListItemText>Stamp Size</ListItemText>
            </ListItemButton>
            <ListItemButton
              style={{ height: "40px", 
                background: colourSize === "57" ? "#E5E5E5" : "transparent",}}
              onClick={() => {
                handleSize("57");
                hoverSize("57");
              }}
            >
              <ListItemText>5 x 7 size</ListItemText>
            </ListItemButton>
          </List>
        </div>

        <div className="pages">
          <List
            sx={{
              width: "180px",
              height: "120px",
              bgcolor: "background.paper",
              position: "fixed",
              top: "510px",
              right: "70px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                style={{ background: "#D6F4FF" }}
              >
                Pages
              </ListSubheader>
            }
          >
            {/* ---------------pages buttons are here-------------------- */}
            <ListItemButton
              style={{ borderBottom: "1px solid #B1B0B0", height: "40px", 
                background: colourPage === "A4" ? "#E5E5E5" : "transparent", }}
              onClick={() => {handlePage("A4"); hoverPage("A4")}}
            >
              <ListItemText>A4 Size</ListItemText>
            </ListItemButton>
            <ListItemButton
              style={{ height: "40px", 
                background: colourPage === "4x6" ? "#E5E5E5" : "transparent",  }}
              onClick={() => {handlePage("4x6"); hoverPage("4x6")}}
            >
              <ListItemText>4 x 6 size</ListItemText>
            </ListItemButton>
          </List>
        </div>
      </div>
    </div>
  );
};

export default SettingPanel;
