import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import React, { createContext, useState } from 'react'
import { auth } from '../firebase/firebase.config'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const authInfo = {
        setUsers,
        users,
        createUser,
        loginUser,
    }
    return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvider
