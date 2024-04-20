import {Route,Routes} from 'react-router-dom';
import { Home,Login,PanelControl,Register} from '../pages/index';
import { NavbarFront } from '../components/index';
import { RequiereAuth } from '../components/RequiereAuth';
import { UserAuth } from '../context/UserProvider';


export const MyRoutes = () => {

  const {user}=UserAuth();
  //hasta que el traiga el usuario y renderize la data
  if(user===false){
    return <p>cargando...</p>
  }

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
                  <Route exact path='/register' element={<Register/>}/>            
                  <Route exact path='/panelcontrol' element={<PanelControl/>}/>            
            </Routes>
    
    </>
  )
}
