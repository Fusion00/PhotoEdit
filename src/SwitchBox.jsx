import React, { forwardRef } from "react";
import Pages from "./Pages";


const SwitchBox = forwardRef(({ currentPage, Pics, currentSize}, ref) => {
  return (
    <div>
      <div
        className="container"
        
        style={{
          position: "fixed",
          height: "579px",
          width: "595px",
          top: "106px",
          left: "638px",
        }}
      >
        <Pages
          currentPage={currentPage}
          Pics={Pics}
          currentSize={currentSize}
          ref={ref}
          style={{ margin: "100px" }}
        />
      </div>
    </div>
  );
})

export default SwitchBox;
