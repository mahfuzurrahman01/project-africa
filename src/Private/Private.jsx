import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Private = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <h1 className='text-xl text-center text-lime-500'>Loading...</h1>
    }
    if(user){
        return children
    }
    
     return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default Private;