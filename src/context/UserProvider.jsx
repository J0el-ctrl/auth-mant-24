/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"

export const UserContext=createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(false)   

  return (
    <UserContext.Provider value={{user,setUser}} >
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
