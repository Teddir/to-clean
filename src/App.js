import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Beranda from "./private/Beranda";
import Routers from "./private/routers";
import FirebaseProvider from "./components/firebase/FirebaseProvider";
import LandingPage from "./private/LandingPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Beranda/>
      <App /> */}
      <FirebaseProvider>
        <Routes>
          <Route path="*" element={<Routers />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
