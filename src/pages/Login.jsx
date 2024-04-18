import { UserAuth } from "../context/UserProvider"



export const Login = () => {
  const {user,setUser}=UserAuth();
  return (
    <div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <h2>{user?"verdadero":"falso"}</h2>
    </div>
  )
}
