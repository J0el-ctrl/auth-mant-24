import { useState } from "react"
import { UserAuth } from "../context/UserProvider"

export const Register = () => {

    const {registerUser}=UserAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //registrando usuario
    const handleSubmit =async (e) => { 
      e.preventDefault();
      try {
        await registerUser(email,password);
      } catch (error) {
        console.log(error.code);
      }
     }

  return (
    <>
    <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="email" 
        placeholder="Ingrese email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type="password" 
        placeholder="Ingrese password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit" >Register  </button>
      </form>
    </>
  )
}
