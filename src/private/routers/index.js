import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import {
  useFirebase,
} from "../../components/firebase/FirebaseProvider";
import Loading from "../../components/loading/Index";

import LoginAdmin from "../auth/signin/Admin";
import LoginUser from "../auth/signin/User";
import ChooseRole from "../auth/Role";
import Navigator from "./Navigator";
import DataProvider from "../../components/firebase/DataProvider";

export default function Index() {
  const { user } = useFirebase();
  // const { users } = useData();
  // console.log(user);
  return (
    <Routes>
      {/* validasi user longged */}
      {!user ? (
        <>
          {/* <Route path="/tora" element={<Loading />} />  handle wwarning outlet or component empty when login */}
          <Route path="tora">
            <Route path="role" element={<ChooseRole />} />
            <Route path="user-login" element={<LoginUser />} />
            <Route path="admin-login" element={<LoginAdmin />} />
          </Route>
        </>
      ) : (
        <>
        <Route path="tora/*" element={
        <DataProvider>
          <Navigator/>
        </DataProvider>
        } />
        </>
      )}
    </Routes>
  );
}
