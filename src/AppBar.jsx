import React from 'react'

const AppBar = () => {
  return (
    <div>
        <div
          style={{
            position: "fixed",
            height: "52px",
            width: "1031px",
            background: "#4C63F7",
            color: "white",
            justifycontent: "right",
            right: "21px",
            top: "12px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-2px",
              fontSize: "43px",
              left: "51px",
              fontFamily: "Calibri",
            }}
          >
            PHOTO EDIT
          </div>
        </div>
    
    </div>
  )
}

export default AppBar;