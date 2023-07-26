"use client"

import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '.firebase.init';




const Authprovider = ({children}) => {
    const [user, loading] = useAuthState(auth);


    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default Authprovider;