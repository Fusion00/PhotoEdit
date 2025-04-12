import React from "react";
import ImageSize from "./ImageSize";

const Pages = React.forwardRef(function ({ currentPage, Pics, currentSize}, ref) {
    return (
      <div>
        {currentPage === "A4" && (
          <div
            className="a4"
            
            style={{
              display: "flex",
              height: "1123px",
              width: "794px",
              border: "1px solid",
              transform: "scale(0.5)",
              transformOrigin: "top left",
              position: 'absolute',
              left: '62px',
              top: '-4px',
              overflow: 'auto',
              // flexWrap: 'wrap',
              // gap: "13px",
              // padding: "15px",
              margin: 'auto',
              // alignContent: 'flex-start',
              
            }}
          >
            <div ref={ref} 
            style={{
              display: "flex",
              height: "auto",
              width: "auto",
              border: "none",
              position: 'absolute',
              overflow: 'auto',
              flexWrap: 'wrap',
              gap: "15px",
              rowGap:'13px',
              columnGap:'13px',
              padding: "11px",
              margin: '1px',
              marginLeft:'1px',
              marginTop:'1px',
              alignContent: 'flex-start',
              
            }}>
              {Pics && Pics.map((url, index) => (
                <ImageSize key={index} currentSize={currentSize}>
                  <img src={url} alt="selected" 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </ImageSize>
              ))}
            </div>







            {/* {Pics && Pics.map((url, index) => (
              <ImageSize key={index} currentSize={currentSize}>
                <img src={url} alt="selected" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </ImageSize>
            ))} */}
          </div>
        )}
  
        {currentPage === "4x6" && (
          <div
            className="4x6"
            
            style={{
              display: "flex",
              height: "576px",
              width: "384px",
              border: "1px solid",
              position: 'absolute',
              left: '62px',
              top: '-4px',
              overflow: 'auto',
              // flexWrap: 'wrap',
              // gap: "10px",
              // padding: "5px",
              margin: 'auto',
              // alignContent: 'flex-start',
            }}
          >
            <div ref={ref} style={{
              display: "flex",
              height: "auto",
              width: "auto",
              // border: "1px solid",
              position: 'absolute',
              // left: '62px',
              // top: '-4px',
              overflow: 'auto',
              flexWrap: 'wrap',
              gap: "8px",
              padding: "5px",
              marginLeft: '1px',
              marginTop:'-1px',
              alignContent: 'flex-start',
            }}>
                  {Pics && Pics.map((url, index) => (
                  <ImageSize key={index} currentSize={currentSize} index={index}>
                    <img src={url} alt="selected" 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                  </ImageSize>
                  ))}
            </div>

          </div>
        )}
      </div>
    );
  })

export default Pages;



