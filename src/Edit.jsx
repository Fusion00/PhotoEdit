import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

const Edit = ({image, onDone}) => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [warmth, setWarmth] = useState(0); // warmth range will be -180 to 180 for hue-rotate
  const [tint, setTint] = useState(0); // tint range will be -100 to 100
  const [sharpness, setSharpness] = useState(0); // sharpness range will be 0 to 10
  const [editedImage, setEditedImage] = useState(image);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.createElement('img');
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.filter = `
        brightness(${brightness}%)
        contrast(${contrast}%)
        saturate(${saturation}%)
        hue-rotate(${warmth}deg)
        sepia(${tint / 100})
      `;
      ctx.drawImage(img, 0, 0);
      setEditedImage(canvas.toDataURL());
    };
  }, [image, brightness, contrast, saturation, warmth, tint]);

  const handleBrightnessChange = (event) => setBrightness(event.target.value);
  const handleContrastChange = (event) => setContrast(event.target.value);
  const handleSaturationChange = (event) => setSaturation(event.target.value);
  const handleWarmthChange = (event) => setWarmth(event.target.value);
  const handleTintChange = (event) => setTint(event.target.value);
  const handleSharpnessChange = (event) => setSharpness(event.target.value);

  const handleDoneClick = () => {
    onDone(editedImage);
  };


  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "602px",
          width: "1351px",
          background: "rgba(53, 53, 53, 0.9)",
          position: "absolute",
          top: "45px",
          left: "100px",
          color: "white",
        }}
      >
        {/* ------------------------------------------Adjust-------------------------------------------- */}
        <div
          className="Adjust"
          style={{
            height: "595px",
            width: "377px",
            // border:'2px solid white',
            position: "fixed",
            top: "48px",
            left: "103px",
          }}
        >
          <div
            style={{
              height: "475px",
              width: "315px",
              position: "fixed",
              top: "74px",
              left: "126px",
            }}
          >
            <label>
              <h3>Brightness</h3>
            </label>
            <Slider
              
              aria-label="Brightness"
              valueLabelDisplay="auto"
              min={0} max={200}
              style={{ color: "white" }}
              value={brightness} 
              onChange={handleBrightnessChange}
            />
            <label>
              <h3>Contrast</h3>
            </label>
            <Slider
              aria-label="Contrast"
              valueLabelDisplay="auto"
              min={0} max={200}
              style={{ color: "white" }}
              value={contrast} 
              onChange={handleContrastChange}
            />
            <label>
              <h3>Saturation</h3>
            </label>
            <Slider
              aria-label="Saturation"
              valueLabelDisplay="auto"
              min={0} max={200}
              style={{ color: "white" }}
              value={saturation} 
              onChange={handleSaturationChange}
            />
            <label>
              <h3>Warmth</h3>
            </label>
            <Slider
              aria-label="Warmth"
              valueLabelDisplay="auto"
              min={-180} max={180}
              style={{ color: "#278CFF" }}
              value={warmth} 
              onChange={handleWarmthChange}
            />
            <label>
              <h3>Tint</h3>
            </label>
            <Slider
              aria-label="Tint"
              valueLabelDisplay="auto"
              min={-100} max={100}
              style={{ color: "#BEFF27" }}
              value={tint} 
              onChange={handleTintChange}
            />
            <label>
              <h3>Sharpness</h3>
            </label>
            <Slider
              aria-label="Sharpness"
              valueLabelDisplay="auto"
              min={0} max={10}
              style={{ color: "white" }}
              value={sharpness} 
              onChange={handleSharpnessChange}
            />
          </div>
        </div>



        {/* ----------------------------container----------------------------- */}
        <div
          className="container"
          style={{
            height: "595px",
            width: "528px",
            position: "fixed",
            top: "48px",
            left: "483px",
          }}
        >
          
            {image && <div
            style={{
              height: "448px",
              width: "355px",
              border: "2px solid",
              position: "fixed",
              top: "100px",
              left: "565px",
            }}
          >
            <img 
            src={editedImage}
            alt="img" 
            style={{ 
              width: "100%", 
              height: "100p%", 
              objectFit: "cover", 
              filter: `
              brightness(${brightness}%)
              contrast(${contrast}%)
              saturate(${saturation}%)
              hue-rotate(${warmth}deg)
              sepia(${tint / 100})
            `,}}>

            </img>
          </div>}
            
          
        </div>

        {/* -----------------------------------edit-------------------------------- */}


        <div
          className="edit"
          style={{
            height: "595px",
            width: "434px",
            position: "fixed",
            top: "48px",
            right: "85px",
          }}
        >
          <Button
            variant="contained"
            color="success"
            style={{
              background: "#00FF33",
              color: "black",
              position: "absolute",
              top: "31px",
              left: "290px",
              width: "100px",
            }}
            onClick={handleDoneClick}
          >
            DONE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
