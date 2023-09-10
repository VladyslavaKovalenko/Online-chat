import { createContext, useContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext()

// create provider
export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // signin with Google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider()
        signInWithRedirect(auth, provider)
    }

    // signout
    const logOut = () => signOut(auth)

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        logOut,
        signInWithFacebook,
    }

    // set currentUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : null}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}