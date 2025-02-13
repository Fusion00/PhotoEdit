import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoEdit from "./PhotoEdit";
import Collage from "./manager/Collage";
import Document from "./Document";
import Pan from "./Pan";
import PassBook from "./PassBook";


const App = () => {
  return (
    <div>
      <BrowserRouter basename="PhotoEdit">
        <Routes>
          <Route path='/' element = {<PhotoEdit/>} />
          <Route path='/Collage' element = {<Collage/>} />
          <Route path='/Document' element = {<Document/>} />
          <Route path='/Pan' element = {<Pan/>} />
          <Route path='/PassBook' element = {<PassBook/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
