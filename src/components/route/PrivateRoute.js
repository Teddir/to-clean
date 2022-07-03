import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import DataProvider from '../firebase/DataProvider';
import { useFirebase } from '../firebase/FirebaseProvider';
import Navi from "../../private/index"
const PrivateRoute = () => {
    const {user} = useFirebase(); // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? <Navi /> : <Navigate to="/" />;
}

export default PrivateRoute