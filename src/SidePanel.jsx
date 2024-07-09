import React from "react";
import Print from "./Print";
import SettingPanel from "./SettingPanel";


const SidePanel = ({handlePage, handleSize, handlePrint, RemoveAll}) => {
  return (
    <div>
      <div
        className="panel"
        style={{
            display:'flex',
            height: "586px",
            width: "268px",
            position: "fixed",
            right: "23px",
            top: "96px",
            justifyContent:'center'
          }}
      >
        <Print handlePrint={handlePrint} RemoveAll={RemoveAll}/>
        <SettingPanel handlePage={handlePage} handleSize={handleSize} />
      </div>
    </div>
  );
};

export default SidePanel;
