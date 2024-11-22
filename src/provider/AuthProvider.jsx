import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase_init';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    console.log(user);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            // setUser(null);
            setLoading(false);
        } catch (error) {
            console.log('ERROR', error.message);
            setLoading(false);
        }
    };

    const googleAuth = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            console.log(res.user);
        } catch (error) {
            console.log('ERROR', error);
        }
    };

    const githubAuth = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const updateUser = (updateData) => {
        updateProfile(auth.currentUser, updateData);
        setUser({ ...auth.currentUser });
        return;
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
            setLoading(false);
        }));
        return () => {
            unSubscribe();
        };
    }, []);

    // useEffect(() => {
    //     setUser('user', user);
    // }, [user]);

    const info = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        loading,
        googleAuth,
        githubAuth,
        updateUser
    };



    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;