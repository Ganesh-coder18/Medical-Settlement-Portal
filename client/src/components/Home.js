import React,{useState,useEffect} from 'react';
import useDocumentTitle from './useDocumentTitle';


const Home = () => {
   

    const [userName, setUserName] = useState('');
    
    const userHome = async () => {

        try{
            const res = await fetch('/getdata', {
                method:"GET",
                headers: {
                    "Content-Type": "application/json"
                     
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setUserName(data.name);
          

          

        } catch (err) {
         console.log(err);
        
        }
    }
   


        useEffect(() => {
          userHome();
           // eslint-disable-next-line react-hooks/exhaustive-deps
           
         },[]);
         
         useDocumentTitle(userName)
       
        
    return (
        <>
        
        <div className="container">
        <h3 style={{color:"rgba(20, 97, 162, 1)"}}>Welcome to HealCap</h3>
        <h2>{userName}</h2>

      

        <div className="container">
        <div class="card" style={{width:"18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Pre-Auth form</h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text"> Fill a Pre-authorization form, attach documents and send to the Insurance Company.</p>
    <a href="/preauth" class="card-link">get starte</a>
  </div>
</div>
</div>

<br/>
            
<div className="container">
            <div class="card" style={{width:"18rem"}}>
  <div class="card-body">
    <h5 class="card-title"> Interactive Dashboard</h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text"> Track Status using the Dashboard Access your patients info on a single page</p>
    <a href="/dashboard" class="card-link">get starte</a>
  </div>
</div>
</div>
<br/>


<div className="container">
<div class="card" style={{width:"18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Interact with the data</h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text">  Export a CSV file </p>
    <a href="/dashboard" class="card-link">get starte</a>
  </div>
</div>
</div>
        </div>
        </>
    )
}

export default Home
