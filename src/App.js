import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Beranda from "./private/Beranda";
import Routers from "./private/routers";
import FirebaseProvider from "./components/firebase/FirebaseProvider";
import LandingPage from "./private/LandingPage";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <BrowserRouter>
      {/* <Beranda/>
      <App /> */}
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <FirebaseProvider>
          <Routes>
            <Route path="*" element={<Routers />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </FirebaseProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
