import React, { useState } from "react";
import ButtonStack from "./ButtonStack";

const PhotoLoop = ({ imageSrc, OnFill, handleEdit, DeletePhotoloopimage}) => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={handleEdit}
        className="frames"
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          border: "5px solid blue",
          height: "200px",
          width: "190px",
          top: "30px",
          left: "25px",
          borderRadius: "10px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            position:'absolute',
            top:'20px'
          }}
        >{isHovered && <ButtonStack OnFill={OnFill} DeletePhotoloopimage={DeletePhotoloopimage}/>}</div>
        

        {imageSrc && (
          <img
            src={imageSrc}
            alt="selected"
            style={{ maxWidth: "100%", maxHeight: "100%", position: "static" }}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoLoop;
