/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../firebase/firebase';

export const UserContext=createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(false)   


  //observador  de usuario trae data y detecta cambio
  useEffect(() => {
    const unsuscribe=onAuthStateChanged(auth,(user)=>{
      console.log(user);
      if(user){
        const {email,displayName,uid,photoURL}=user;
        setUser({email,displayName,uid,photoURL});
      }else{
        setUser(null);
      }
    });  
    return () =>unsuscribe();
  }, [])
  


  //registro nuevo usuario por email&password autenticación
   const registerUser=(email,password)=>
   createUserWithEmailAndPassword(auth,email,password);
  //login de user
  const loginUser = (email,password) => { 
    signInWithEmailAndPassword(auth,email,password);
   }
  // cerrar session
  const signOutUser=()=>signOut(auth);

  return (
    <UserContext.Provider value={{user,setUser,signOutUser,registerUser,loginUser}}>
        {children}
    </UserContext.Provider>

  )
}

//hook perzonalizado de
export const UserAuth=()=>{
    return useContext(UserContext);
}

// como usarlo en los components hook
// import { UserAuth } from "../context/AuthContext";
// export function Login() {
//   const { user,setUser } = UserAuth();
// return( todo el tratamiento de uso de la page *****)
// }
