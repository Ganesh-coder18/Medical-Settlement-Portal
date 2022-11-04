import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Chart from "react-google-charts";



function PieC(userData) {
    console.log(userData)
    const [accepted,setAccepted] = useState(1)
    const [pending,setPending] = useState(1)
    const [nodata,setNoData] = useState(1)
    useEffect(() => {
        axios.get(`http://localhost:5000/stats?name=${userData}`)
        .then(res => {
            setAccepted(res.data.accepted)
            setPending(res.data.pending)
            setNoData(res.data.nodata)
        })
        .catch(err => {
            console.log(err)
        })
    })
    const data = [
	    ['Status','Values'],
        ['Accepted',accepted],
        ['Pending',pending],
        ['No Data',nodata],
    ]
    console.log("data",data)
    return (
        <div>
            <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={data}
  options={{
    title: 'Current Status',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
    )
}

export default PieC
