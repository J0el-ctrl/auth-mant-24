import { NavLink } from "react-router-dom"

export const NavbarFront = () => {
  return (
    <div>
        <NavLink to="/" >Inicio</NavLink>
        <NavLink to="/login" >Login</NavLink>
    </div>
  )
}
