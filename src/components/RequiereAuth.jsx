// validar el acceso al sistema | ruta protegida
/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/UserProvider"


export const RequiereAuth = ({children}) => {

        // si no existe usuario activo navega a login
        const {user}=UserAuth();
        if(!user){
            return <Navigate to="/login" />
        }
        // si esta activo regresa todos los children dentro del requiereAuth en Myroutes
    return children;
}
