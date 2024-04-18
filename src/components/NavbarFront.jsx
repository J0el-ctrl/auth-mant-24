import { NavLink } from "react-router-dom"
import { UserAuth } from "../context/UserProvider"
import styled from 'styled-components';


export const NavbarFront = () => {
  const {user,signOutUser}=UserAuth();
  const handleClickLogout=async()=>{
    try {
      await signOutUser() 
    } catch (error) {
      console.log(error.code);
    }
  }

  return (
    <>
     <nav className="navbar navbar-expand-lg  bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container" id="navbarSupportedContent">
         <ContainerActiveNavlink className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                </li>                               
                
        </ContainerActiveNavlink>  
        <ContainerrightNavHeader className=''>
          <div className='colorsnav'>
              <NavLink className="nav-link" to="/register">Registro</NavLink>
              <NavLink className="nav-link" to="/login">Login</NavLink>              
              {user?
              (
                <>
              <NavLink className="nav-link" to="/panelcontrol">PANEL</NavLink>
              <button  className='nav-link' onClick={handleClickLogout} >Cerrar session</button>
                </>
              ) 
              :(null)}
             
          </div>
         
        </ContainerrightNavHeader>
     
    </div>
    
  </div>
</nav>
       
        
    </>
  )
}

const ContainerActiveNavlink=styled.div`
  .nav-item {   
    .active{
      background-color: #aeaee6;
      border-radius: 20%;
        }   
  }
`;
const ContainerrightNavHeader=styled.div`
         .colorsnav{
              display:flex;
              direction:row;
              gap:10px;
              align-items:center;
              .active{
                 background-color: #12df4f;
                 border-radius: 20%;
                 padding:8px;
                }    
             }
`;

