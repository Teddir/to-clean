import React from "react";
import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom";
import FirebaseProvider, { useFirebase } from "../components/firebase/FirebaseProvider";

import Beranda from "./admin/Dashboard/Beranda";
import LoginAdmin from "./admin";
import Landing from "./landing";
import ChooseRole from "./Role";
import LoginUser from "./user";
import Start from "./user/Start";
import Finish from "./user/Finish";

export default function Navigator() {
  const { user } = useFirebase()
  // console.log(user);
  return (
    <>
      <Routes>
        {user ? (<>
          <Route path="user">
            <Route path="start" element={<Start />} />
            <Route path="finish" element={<Finish />} />
          </Route>
          <Route path="admin">
            <Route path="login" element={<LoginAdmin />} />
            <Route path="beranda"  element={<Beranda />}/>
          </Route>
        </>) : (<>
          <Route path="tora-role" element={<ChooseRole />} />
          <Route path="user">
            <Route path="login" element={<LoginUser />} />
          </Route>
          <Route path="admin">
            <Route path="login" element={<LoginAdmin />} />
          </Route>
        </>)}
      </Routes>
    </>
  );
}