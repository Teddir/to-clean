import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Beranda from "./private/Beranda";
import Start from "./private/Start";
import Finish from "./private/user/Finish";
import StepOne from "./private/user/StepOne";
import StepTwo from "./private/user/StepTwo";
import Landing from "./private/landing";

function App() {
  return (
    <BrowserRouter>
      {/* <Beranda/>
      <App /> */}
      <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/" element={<Beranda />} /> */}
      <Route path="start" element={<Start />} />
      <Route path="stepone" element={<StepOne />} />
      <Route path="steptwo" element={<StepTwo />} />
      <Route path="finish" element={<Finish />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
