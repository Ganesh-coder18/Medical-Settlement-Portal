import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


const About = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});
    
    const callAboutPage = async () => {

        try{
            const res = await fetch('/about', {
                method:"GET",
                headers: {
                     Accept: "application/json",
                     "Content-Type": "application/json"
                     
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);

            if(!res.sataus === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
         console.log(err);
         history.push('/login');
        }
    }

        useEffect(() => {
           callAboutPage();
           // eslint-disable-next-line react-hooks/exhaustive-deps
         },[]);
    
    
    return (
        <div className="about" style={{width:"700px",marginTop:"50px",marginLeft:"300px"}}>

            <div class="shadow-sm p-3 mb-5 bg-body rounded" >
                <div   className="container" >
                <center>
                    <div class="card" style={{ width: "40rem",textAlign:"center" }} >
                         
                        <div class="card-header">
                        <h3>My Profile</h3>
                        </div>
                           
                        <ul className="list-group list-group-flush">
                                
                            <li className="list-group-item">Hospital Name: {userData.name}</li>
                            <li className="list-group-item"> Contact No.:   {userData.phone}</li>
                            <li className="list-group-item">E-mail: {userData.email}</li>
                            <li className="list-group-item">City: {userData.work}</li>
                        </ul>
               


                    </div>
                    </center>
              <br/>    <br/>    <br/>  
                </div>
            </div>

            {/* <form method="GET">
     
            <h1>My Profile</h1>
            <h2>name: {userData.name}</h2>
            <h2>phone: {userData.phone}</h2>
            <h2> email:{userData.email}</h2>
            <h2> city:{userData.work}</h2>
            </form> */}
        </div>
    )
}

export default About;
