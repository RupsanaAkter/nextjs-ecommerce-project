"use client"

import { useAuthState } from 'react-firebase-hooks/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '.firebase.init';
// import app from './firebase.init';



const Authprovider = ({children}) => {
    const [user, loading] = useAuthState(auth);
    // const location = useLocation();

    // if(loading){
    //     return <Loading></Loading>
    // }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default Authprovider;