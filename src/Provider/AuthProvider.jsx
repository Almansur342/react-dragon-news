import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
  };

  // manage user

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      console.log('user on the on state change',currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      unsubscribe();
    }
  },[])


  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    setUser,
    signIn,
   
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;