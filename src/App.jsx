
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./Routes/MyRoutes"
import { UserProvider } from "./context/UserProvider"

function App() {

  return (
    <>
    <UserProvider>
        <BrowserRouter>
            <MyRoutes/>
    
        </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
