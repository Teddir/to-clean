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

export const userCollection = firestore.collection('user');

export default function DataProvider(props) {
  const user = useFirebase();
  const profileRef = firestore.doc(`user/${user.uid}`);
  const [profil, loadingProfil] = useDocumentData(profileRef, {idField: "id"});
  
  if (loadingProfil) {
    return <Loading/>
  }

  return (
    <DataContext.Provider
      value={{
        loadingProfil,
        profil
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}