import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo2 from  "../images/healcaplogo.png";
import { UserContext } from "../App";

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return(
        <>

<li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">My Profile</NavLink>
        </li>
     
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/preauth">Preauth</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/utils">Utils</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>

    
        </>
      )
    } else {
      return (
        <>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
       
     
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">login</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/registration">Registration</NavLink>
        </li>
        </>
      )
    }

  }
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">    
    <NavLink className="navbar-brand" to="/"> <img src={logo2} alt="nahi aaya" />   <h3 style={{marginLeft:"10px",fontWeight:"bold",marginTop:"8px" ,color:"rgba(20, 97, 162, 1)"}} >Healcap Technologies</h3>
    </NavLink>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">


      <RenderMenu />

       
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
