import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Upload from "./Upload";
import PhotoLoop from "./PhotoLoop";
import AppBar from "./AppBar";
import SidePanel from "./SidePanel";
import SwitchBox from "./SwitchBox";
import Edit from "./Edit";

const PhotoEdit = () => {
  const [Image, setImage] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [currentSize, setCurrentSize] = useState([]);
  const [Photo, setPhoto] = useState([]);
  const [showBox, setBox] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (index) => {
    setEditingIndex(index);
    setBox(true);
  };

  const handleEditDone = (editedImage) => {
    const updatedImages = [...Image];
    updatedImages[editingIndex] = editedImage;
    setImage(updatedImages);
    setBox(false);
  };

  const refContent = useRef();
  const handlePrint = useReactToPrint({
    content: () => refContent.current,
  });

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const handleImageupload = (Imagesrcs) => {
    setImage((prevImages) => [...prevImages, ...Imagesrcs]);
  };

  const OnFill = (event, src) => {
    event.stopPropagation();
    setPhoto([...Photo, src]);
  };

  const handleSize = (size) => {
    setCurrentSize(size);
  };

  const RemoveAll = () => {
    setPhoto([]);
  };

  const DeletePhotoloopimage = (event) => {
    event.stopPropagation();
    setPhoto(Photo.filter((_, i) => i !== event));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const files = Array.from(event.dataTransfer.files);
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
      setImage((prevImages) => [...prevImages, ...images]);
    });
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        minHeight: "100vh",
        backgroundColor: isDragging ? "lightblue" : "white",
        transition: "background-color 0.3s",
      }}
    >
      <div className="bar">
        <AppBar 
        Name={"PHOTOs EDIT"}/>
      </div>

      <div style={{
         paddingLeft: "483px",
         paddingTop: "15px"
      }}>
        <button
        onClick={()=>navigate("/Document")}
        style={{
          height: "31px",
          width: "97px",
          borderRadius: "13px",
          color: "white",
          background: "#0089ff",
          border: "none",}}
        >
          Documents
        </button>
        
      </div>

      <div className="upload">
        <Upload onImageUpload={handleImageupload} />
      </div>

      <div style={{ display: "flex" }}>
        <div
          className="picloop"
          style={{
            display: "flex",
            height: "489px",
            width: "587px",
            position: "absolute",
            top: "135px",
            left: "19px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {Image.map((src, index) => (
            <PhotoLoop
              key={index}
              imageSrc={src}
              OnFill={(event) => OnFill(event, src)}
              handleEdit={() => handleEdit(index)}
              DeletePhotoloopimage={(event) => DeletePhotoloopimage(event)}
            />
          ))}
        </div>

        <div className="container">
          <SwitchBox
            currentPage={currentPage}
            Pics={Photo}
            currentSize={currentSize}
            ref={refContent}
          />
        </div>

        <div className="sidePanel">
          <SidePanel
            handlePage={handlePage}
            handleSize={handleSize}
            handlePrint={handlePrint}
            RemoveAll={RemoveAll}
          />
        </div>
        {showBox && (
          <Edit image={Image[editingIndex]} onDone={handleEditDone} />
        )}
      </div>
    </div>
  );
};

export default PhotoEdit;
