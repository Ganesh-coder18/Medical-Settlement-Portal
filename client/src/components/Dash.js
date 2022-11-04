import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Datatable from './Datatable'
import ExportCSV from './ExportCSV';
import PieC from './PieC';


function Dash() {
    const [data,setData] = useState([])
    const [q,setQ] = useState("")

    const history = useHistory();
    const [userData, setUserData] = useState({});
    
    const callDashPage = async () => {

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
            console.log(data.name);
            setUserData(data.name);

            fetch(`http://localhost:5000/read?name=${userData}`)
        .then(response => response.json())
        .then(json => setData(json))
        .then(json => console.log(json))

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
        callDashPage();

    })
    

    return (
        
        <div className="Container">
            <div className="row">
                {/* <div className="col-md-6">
                    <PieC data={userData}/>
                </div> */}
                <div className="Container">
                    <ExportCSV data={data}/>
                </div>
            </div>
            
            
            <Datatable data={data}/>
            
           

        </div>
    )

}

export default Dash
