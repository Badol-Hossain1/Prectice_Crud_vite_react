import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {users} = useContext(AuthContext)
    console.log("🚀 ~ PrivateRoute ~ users:", users)
    if(users?.email){
        return children
    }
    return (
     <Navigate to='/signup'></Navigate>
    );
};

export default PrivateRoute;