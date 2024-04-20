import { useState } from "react"
import { UserAuth } from "../context/UserProvider"



export const Login = () => {
  const {loginUser}=UserAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    //logueando usuario
    const handleSubmit =async (e) => { 
      e.preventDefault();
      try {
        await loginUser(email,password);
      } catch (error) {
        console.log(error.code);
      }
     }
  return (
    <>
    <h1>login</h1>
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
        <button type="submit" >iniciar session  </button>
      </form>
    </>
  )
}
