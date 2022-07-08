import React, { useRef } from "react";
import Loading from "../loading/Index";
// create firebase hooks
import { firestore, useFirebase } from "./FirebaseProvider";
import {
  useDocumentData
} from "react-firebase-hooks/firestore"
// create context
const DataContext = React.createContext();
export function useData() {
  return React.useContext(DataContext);
}

export const usersCollection = firestore.collection('users');

export default function DataProvider(props) {
  const {user} = useFirebase();

  const usersRef = firestore.doc(`users/${user?.uid}`);
  const [users, loadingUsers] = useDocumentData(usersRef, {idField: "id"});
  const kamu = true
  
  if (loadingUsers) {
    return <Loading/>
  }
  return (
    <DataContext.Provider
      value={{
        usersRef,
        users,
        kamu
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props?.children}
    </DataContext.Provider>
  )
}