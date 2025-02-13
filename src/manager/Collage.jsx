import React, { useState } from "react";

const Collage = () => {
  const [imageSize, setImageSize] = useState("Full");
  const [paperSize, setPaperSize] = useState("A4");
  const [images, setImages] = useState([]);
 
  return (
    <div>
      <div className="mt-24 flex">
        <Imports images={images} setImages={setImages} />
        <div className="overflow-auto max-h-[80vh] w-[60%]">
          <Page imageSize={imageSize} paperSize={paperSize} images={images} />
        </div>
        <Sidepanel setImageSize={setImageSize} setPaperSize={setPaperSize} />
      </div>
      
      {/* Print Button (Hidden During Print) */}
      <div className="flex justify-center mt-4 no-print">
        <button
          onClick={() => window.print()}
          className="h-12 px-6 rounded-2xl bg-blue-500 hover:bg-blue-700 text-white"
        >
          Print Page
        </button>
      </div>
    </div>
  );
};

export default Collage;

const Page = ({ imageSize, images }) => {
  const imagesPerPage = imageSize === "Full" ? 1 : Number(imageSize);
  const pages = [];

  for (let i = 0; i < images.length; i += imagesPerPage) {
    pages.push(images.slice(i, i + imagesPerPage));
  }

  return (
    <div id="print-area">
      {pages.map((pageImages, pageIndex) => (
        <div key={pageIndex} className="border-2 border-black p-4 bg-white mb-8 page-break">
          <div className="grid gap-2 p-2 border bg-gray-100 grid-cols-2 grid-rows-2">
            {pageImages.map((src, index) => (
              <div key={index} className="border bg-white flex items-center justify-center">
                <img src={src} alt={`Image ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Imports = ({ images, setImages }) => {
  const handleImageUpload = (event) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const newImages = filesArray.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveAll = () => {
    setImages([]); // Remove all images
  };

  return (
    <div className="px-7 no-print">
      <div>
        <label className="h-12 w-37 rounded-2xl bg-cyan-400 hover:bg-cyan-600 cursor-pointer flex items-center justify-center text-white">
          Upload
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      <div className="h-[32rem] w-40 border-2 border-black my-4 px-1.5 overflow-y-auto">
        {images.map((src, index) => (
          <ImportCard key={index} src={src} />
        ))}
      </div>

      <div>
        <button
          onClick={handleRemoveAll}
          className="h-12 w-37 rounded-2xl bg-emerald-400 hover:bg-emerald-600 text-white"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

const ImportCard = ({ src }) => {
  return (
    <div className="h-24 w-36 border-2 border-black my-2 flex items-center justify-center">
      <img src={src} alt="Uploaded" className="h-full w-full object-cover" />
    </div>
  );
};

const Sidepanel = ({ setImageSize, setPaperSize }) => {
  const imageOptions = ["Full", 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const paperOptions = ["A4", "4x6", "5x7", "8x10", "Letter", "Legal"];

  return (
    <div className="w-1/4 p-4 border-2 border-gray-400 no-print">
      <label className="font-bold">Select Paper Size:</label>
      <select className="ml-2 border p-1 w-full mb-2" onChange={(e) => setPaperSize(e.target.value)}>
        {paperOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <label className="font-bold">Select Image Size:</label>
      <select className="ml-2 border p-1 w-full" onChange={(e) => setImageSize(e.target.value)}>
        {imageOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
