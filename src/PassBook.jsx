import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const PassBook = () => {
  const printRef = useRef();
  const [frontImage, setFrontImage] = useState(null);
  const frontInputRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFrontImage(imageUrl);
      event.target.value = ""; // ✅ Reset input value to allow re-uploading
    }
  };

  const triggerFileInput = () => {
    frontInputRef.current.click();
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-5">
        <button onClick={() => navigate("/")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Photo
        </button>
        <button onClick={() => navigate("/Pan")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Pan
        </button>
        <button onClick={() => navigate("/Document")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Aadhar
        </button>
      </div>

      <button onClick={handlePrint} className="px-4 py-2 bg-blue-500 text-white rounded">
        Print
      </button>

      <div ref={printRef} className="border-2 border-black h-[1123px] w-[794px] p-4">
        <div className="flex w-full justify-center gap-10 mt-20">
          {/* FRONT SIDE */}
          <div
            className="w-[750px] h-[580px] border-2 border-black flex items-center justify-center cursor-pointer"
            onClick={triggerFileInput}
            style={{
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: frontImage ? `url(${frontImage})` : "none",
            }}
          >
            {!frontImage && "Front"}
          </div>

          {/* Hidden File Input */}
          <input ref={frontInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default PassBook;
