import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminDashboard from "../pages/admin/dashboard";
import UserDashboard from "../pages/user/dashboard";
import Start from "../pages/user/dashboard/fitur/Start";
import Finish from "../pages/user/dashboard/fitur/Finish";
import { useData } from "../../components/firebase/DataProvider";
import PrivateRoute from "../../components/route/PrivateRoute";

export default function Navigator() {
  const { users } = useData();
  // console.log("ini naviagtor", users?.role);
  return (
    <Routes>
      <>
        {users?.role === "admin" ? (
          <>
            <Route path="/" element={<AdminDashboard />} exact />
          </>
        ) : (
          <>
            <Route path="/" element={<UserDashboard />} exact />
            <Route path="user">
              <Route path="start" element={<Start />} />
              <Route path="finish/:id" element={<Finish />} />
            </Route>
          </>
        )}
        <Route path="*" element={<PrivateRoute />} />
      </>
    </Routes>
  );
}
