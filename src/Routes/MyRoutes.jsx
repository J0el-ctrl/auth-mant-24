import {Route,Routes} from 'react-router-dom';
import { Home,Login} from '../pages/index';
import { NavbarFront } from '../components/index';
import { RequiereAuth } from '../components/RequiereAuth';


export const MyRoutes = () => {
  return (
    <>
    
        <NavbarFront/>
            <Routes>    
                <Route exact path='/' element={
                        <RequiereAuth>
                          <Home/>
                        </RequiereAuth>
                      }/>
                  <Route exact path='/login' element={<Login/>}/>            
            </Routes>
    
    </>
  )
}
