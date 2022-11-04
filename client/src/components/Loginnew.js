import React,{useState ,useContext}  from "react";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';
import Lottie from 'react-lottie';
import animationData from './sign.json'
import { useHistory } from 'react-router-dom';
// import './login.css';
import { UserContext } from "../App";


const Login = () => {
    const defaultoption = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};


    const {state, dispatch} = useContext(UserContext);

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const loginUser = async (e) => {
     e.preventDefault();
     const res = await fetch('/signin',{
       method:"POST",
       headers:{
         "Content-Type" : "application/json"
       },
       body:JSON.stringify({
         email,
         password
       })
     });
     
     const data = res.json();
  
     if  (res.status === 400 || !data) {
       window.alert("Invalid Credentials")
     }else {
      dispatch({type:"USER", payload:true})
      window.alert("Login Successful");
  
     history.push("/preauth");
  
     }
    }

    return(

        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
            <div className="loginall">
                <div class="shadow p-3 mb-0 bg-white">
                    <div className="container">
                    
                        <div className="signup">
                            <span><strong>Don't you have an account?      </strong></span>
                            <a class="signupbutton" href="mailto:healcaptechnologies@gmail.com"><strong>Email Us</strong></a>
                        </div>
                        <div className="logintitle">
                            <h3>Healcap Technologies</h3>
                            <span>Login your account</span>
                        </div>
                        <div className="sigupform">
                            <form>
                                <div class="form-group">
                                    <br/><label for="exampleInputEmail1" style={{color:'black',fontWeight:'bold'}}>Username</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   id="name" placeholder="Enter email" style={{width:'350px',marginTop:'10px'}}  value={email} onChange={(e) => setEmail(e.target.value)} />
                                    
                                </div>
                                <div class="form-group">
                                    <br/><label for="exampleInputPassword1" style={{color:'black',fontWeight:'bold'}}>Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" style={{width:'350px',marginTop:'10px'}} placeholder="Password" name="password" value={password}
             onChange={(e) => setPassword(e.target.value)}/>
                                    <div className="eye">
                                        <i class="fas fa-eye" id="eyeicon"></i>    
                                    </div>
                                    <br/>
                                </div>
                                
                                <button type="submit" class="btn btn-primary" id="loginbutton" value="Login" onClick={loginUser}>Login</button> 
                            </form>
                        </div>
                        <div className="loginimg">
							<Lottie 
								options={defaultoption}
								height={400}
								width={400}
							/>
						</div>
                        <br></br><br></br>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login