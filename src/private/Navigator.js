import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./admin/Dashboard";
import LoginAdmin from "./admin";
import Start from "./user/Start";
import Finish from "./user/Finish";
import PrivateRoute from "../components/route/PrivateRoute";
import Landing from "./landing";
import { useData } from "../components/firebase/DataProvider";
import Longged from "./user/logged";

export default function Navigator() {
  const { users } = useData();
  // console.log("ini naviagtor", users?.role);
  return (
    <Routes>
      <>
        {users?.role === "admin" ? (
          <>
            <Route path="/" element={<Dashboard />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Longged />} />
            <Route path="user">
              <Route path="start" element={<Start />} />
              <Route path="finish" element={<Finish />} />
            </Route>
          </>
        )}
      </>
    </Routes>
  );
}
