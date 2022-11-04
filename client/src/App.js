import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route,Switch} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
// import Login from './components/Login';
import Login2 from './components/Login2';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import Preauth from './components/Preauth';
import Logout from './components/Logout';
import { createContext ,useReducer} from 'react';
import { initialState, reducer } from './reduser/UseReducer';
import FileUpload from './components/FileUpload';
import Dashboard from './components/Dashboard';
import Dash from './components/Dash';
import Front from './components/Front';
import Loginnew from './components/Loginnew';
import SendMail from './components/SendMail'
import CheckMail from './components/CheckMail';
export const UserContext = createContext();



const Routing = () => {
  return(
  
    <Switch>
   
    <Route exact path="/home">
   <Home/>

    </Route>
 
 
    <Route path="/preauth">
    <Preauth />
    </Route>
 
    <Route path="/dashboard">
    <Dash/>
    </Route>

    <Route path="/about">
    <About />
    </Route>
 
    <Route path="/contact">
    <Contact />
    </Route>
 
    <Route path='/utils'>
    <SendMail/>
    <CheckMail/>
    </Route>

    <Route  path="/login" >
    {/* <Login /> */}
    {/* <Login2 /> */}
    <Loginnew/>
    </Route>
 
 
    <Route path="/logout">
    <Logout />
    </Route>

    <Route path="/pre">
    <Preauth />

    </Route>
 
 
    <Route path="/registration">
    <Signup />
    </Route>
    </Switch>

  )
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
   
   <>

 
<UserContext.Provider value={{state, dispatch}}>
<Switch> 
<Route  path="/front" component={Front} />

  <div> 
  {/* <Route path="/main"> */}
  <Navbar />
<Routing />
 {/* </Route> */}
 

 
</div> 
</Switch>  
</UserContext.Provider>
  
   </>
  );
}

export default App;

