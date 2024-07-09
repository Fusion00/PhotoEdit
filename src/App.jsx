import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoEdit from "./PhotoEdit";


const App = () => {
  return (
    <div>
      <BrowserRouter basename="PhotoEdit">
        <Routes>
          <Route path='/' element = {<PhotoEdit/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
