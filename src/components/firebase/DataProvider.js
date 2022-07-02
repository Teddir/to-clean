/* eslint-disable react/prop-types */
import React from "react";
import Loading from "../loading/Index";
// create firebase hooks
import { firestore, useFirebase } from "./FirebaseProvider";
import {
  useDocumentData
} from "react-firebase-hooks/firestore"
// create context
const DataContext = React.createContext();
export function useData() {
  return React.createContext(DataContext);
}

export const usersCollection = firestore.collection('users');

export default function DataProvider(props) {
  const user = useFirebase();

  const usersRef = firestore.doc(`users`);
  const [users, loadingUsers] = useDocumentData(usersRef, {idField: "id"});
  
  if (loadingUsers) {
    return <Loading/>
  }

  return (
    <DataContext.Provider
      value={{
        usersRef,
        users
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}