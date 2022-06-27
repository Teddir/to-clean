import React from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/functions";

// import AppLoading from "./AppLoading";

import firebaseConfig from "../../config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
// import Constants from 'expo-constants';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue;
export const analytics = firebase.analytics();
export const GeoPoint = firebase.firestore.GeoPoint;
export const storage = firebase.storage();
const region =
  process.env.REACT_APP_FIREBASE_PROD === "YES"
    ? "asia-southeast2"
    : "asia-southeast2";
export const firefunctions = firebase.app().functions(region);

const FirebaseContext = React.createContext();

export function useFirebase() {
  return React.useContext(FirebaseContext);
}

export default function FirebaseProvider(props) {
  const [user, loading] = useAuthState(auth);

  return (
    <FirebaseContext.Provider
      value={{
        user,
        loading
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </FirebaseContext.Provider>
  );
}
