import {Route,Routes} from 'react-router-dom';
import { Home,Login} from '../pages/index';
import { NavbarFront } from '../components/index';


export const MyRoutes = () => {
  return (
    <>
    
        <NavbarFront/>
            <Routes>    
                      <Route exact path='/' element={<Home/>}/>
                      <Route exact path='/login' element={<Login/>}/>            
            </Routes>
    
    </>
  )
}
