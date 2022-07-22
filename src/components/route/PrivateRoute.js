import React from 'react';
import { Navigate } from 'react-router-dom';
import Navi from "../../private/routers"
import { useData } from '../firebase/DataProvider';
const PrivateRoute = () => {
    const {users} = useData(); // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return users ? <Navi /> : <Navigate to="/" />;
}

export default PrivateRoute