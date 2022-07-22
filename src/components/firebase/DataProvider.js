import React, { useRef } from "react";
import Loading from "../loading/Index";
// create firebase hooks
import { firestore, useFirebase } from "./FirebaseProvider";
import {
  useCollectionData,
  useDocumentData
} from "react-firebase-hooks/firestore"
// create context
const DataContext = React.createContext();
export function useData() {
  return React.useContext(DataContext);
}

export const usersCollection = firestore.collection('users');
export const cleansCollection = firestore.collection('clean');

export default function DataProvider(props) {
  const {user} = useFirebase();

  const usersRef = firestore.doc(`users/${user?.uid}`);
  const [users, loadingUsers] = useDocumentData(usersRef, {idField: "id"});
  
  const cleansRef = firestore.collection(`clean`).where('id', "==", user?.uid)
  const [cleans, loadingCleans] = useCollectionData(cleansRef, {idField:"id"})

  if (loadingUsers || loadingCleans) {
    return <Loading/>
  }
  return (
    <DataContext.Provider
      value={{
        usersRef,
        users,
        cleansRef,
        cleans,
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props?.children}
    </DataContext.Provider>
  )
}