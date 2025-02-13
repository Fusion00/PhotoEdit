import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Pan = () => {
  const printRef = useRef();
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (type === "front") {
        setFrontImage(imageUrl);
      } else {
        setBackImage(imageUrl);
      }
      event.target.value = ""; // ✅ Reset input value to allow re-uploading
    }
  };

  const triggerFileInput = (type) => {
    if (type === "front") {
      frontInputRef.current.click();
    } else {
      backInputRef.current.click();
    }
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4">
        <div className="flex gap-5">
      <button 
        onClick={()=>navigate("/")}
        className="px-4 py-2 bg-blue-500 text-white rounded">
        Photo
      </button>
      <button 
      onClick={()=>navigate("/Document")}
        className="px-4 py-2 bg-blue-500 text-white rounded">
        AAdhar
      </button>
      <button
      onClick={()=>navigate("/PassBook")} 
        className="px-4 py-2 bg-blue-500 text-white rounded">
        Pass book
      </button>
     </div>
      <button 
        onClick={handlePrint} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Print
      </button>
      

      <div ref={printRef} className="border-2 border-black h-[1123px] w-[794px] p-4">
        <div className="flex w-full justify-center gap-10 mt-20">
          
          {/* FRONT SIDE */}
          <div 
            className="w-[320.64px] h-[207.36px] border-2 border-black flex items-center justify-center cursor-pointer"
            onClick={() => triggerFileInput("front")}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: frontImage ? `url(${frontImage})` : "none"
            }}
          >
            {!frontImage && "Front"}
          </div>

          

          {/* Hidden File Inputs */}
          <input 
            ref={frontInputRef}
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, "front")} 
            className="hidden"
          />
          <input 
            ref={backInputRef}
            type="file" 
            accept="image/*" 
            onChange={(e) => handleImageUpload(e, "back")} 
            className="hidden"
          />

        </div>
      </div>
    </div>
  );
};

export default Pan;
