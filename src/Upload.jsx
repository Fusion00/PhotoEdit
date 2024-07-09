import React, { useRef } from "react";
import Button from "@mui/material/Button";

const Upload = ({ onImageUpload }) => {
  const fileInputRef = useRef();

  const handleInput = (event) => {
    const files = Array.from(event.target.files);
    const readers = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((images) => {
      onImageUpload(images);
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleInput}
        style={{ display: "none" }}
      />
      <Button
        variant="contained"
        onClick={handleUploadClick}
        style={{
          position: "fixed",
          top: "58px",
          width: "151px",
          height: "54px",
          left: "118px",
          borderRadius: "11px",
          fontSize: "x-large",
          background: "#4C63F7",
        }}
      >
        Import
      </Button>
    </div>
  );
};

export default Upload;
