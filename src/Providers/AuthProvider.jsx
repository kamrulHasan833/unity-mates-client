import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

import app from "../firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  // signup
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profle
  const profileUpdate = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  //   signin with google provider
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      if (currentUser) {
        const { displayName, email, photoURL } = currentUser;
        axiosPublic
          .post("/unity-mates/v1/auth", {
            name: displayName,
            email,
            avatar: photoURL,
          })
          .then(({ data }) => {
            const { token } = data;
            const tokenToLocalStorage = `Bearer ${token}`;
            localStorage.setItem("token", tokenToLocalStorage);
          })
          .catch(() => {});
      } else {
        localStorage.removeItem("token");
      }
    });

    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);
  const authInfo = {
    signup,
    signin,
    signinWithGoogle,
    logout,
    profileUpdate,
    user,
    loading,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthProvider;
