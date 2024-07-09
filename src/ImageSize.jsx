import React from "react";

const ImageSize = ({ currentSize, children, index }) => {
  const sizeStyle =
    currentSize === "Passport"
      ? { height: "144px", width: "115.2px", border: "0.01px solid" }
      : currentSize === "Full"
      ? {
          height: "-webkit-fill-available",
          width: "-webkit-fill-available",
          border: "none",
          objectFit: "fill",
        }
      : currentSize === "Stamp"
      ? { height: "96px", width: "83.52px", border: "1px solid" }
      : currentSize === "57"
      ? { height: "672px", width: "480px", border: "1px solid" }
      : {};

  const rotationStyle =
    index >= 6
      ? {
          transform: "rotate(90deg)",
          border: "0.2px solid",
          marginLeft:'18px',
          marginRight:'25px',
          marginTop:'-14px',
          marginBottom:'-14px',
        }
      : {};
  return <div style={{ ...sizeStyle, ...rotationStyle }}>{children}</div>;
};

export default ImageSize;

// height: 'auto', width: 'auto',

{
  /* {currentSize === "Passport" && (
        <div style={{
          height: '144px', width: '115.2px', border: '0.01px solid'
        }}>
          {children}
        </div>
      )}

      {currentSize === "Full" && (
        <div style={{
          height: '200px', width: '200px', border: '0.01px solid'
        }}>
          {children}
        </div>
      )}

      {currentSize === "Stamp" && (
        <div style={{
          height: '100px', width: '100px', border: '0.01px solid'
        }}>
          {children}
        </div>
      )}

      {currentSize === "57" && (
        <div style={{
          height: '190px', width: '190px', border: '0.01px solid'
        }}>
          {children}
        </div>
      )} */
}
