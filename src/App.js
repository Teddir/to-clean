import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Beranda from "./private/Beranda";
import Navi from "./private";
import FirebaseProvider from "./components/firebase/FirebaseProvider";
import Landing from "./private/landing";

function App() {
  return (
    <BrowserRouter>
      {/* <Beranda/>
      <App /> */}
      <FirebaseProvider>
        <Routes>
          <Route path="*" element={<Navi />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
