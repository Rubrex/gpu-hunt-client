import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const auth = getAuth(app);

  //   Create User
  const createUser = (email, pass) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //   Login User
  const logIn = (email, pass) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   Logout User
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  // Update User
  const updateUser = (profileInfo) => {
    return updateProfile(auth.currentUser, profileInfo);
  };

  //   Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.email) {
        setUser(currentUser);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const providerValue = {
    user,
    role,
    isLoading,
    createUser,
    logIn,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
